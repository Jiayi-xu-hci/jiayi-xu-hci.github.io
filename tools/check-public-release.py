#!/usr/bin/env python3
"""Audit the public project catalogue and static assets before publishing."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import quote, unquote
import hashlib
import json
import re

ROOT = Path(__file__).resolve().parents[1]
errors = []
source = (ROOT / 'projects/projects.js').read_text()
records = json.loads(source[source.index('['):].strip().rstrip(';'))
LOCKED_FIELDS = {'id', 'year', 'title', 'locked', 'selected', 'rank'}

def public_file(path, base):
    resolved = (base / path.split('?')[0].split('#')[0]).resolve()
    try:
        rel = resolved.relative_to(ROOT)
    except ValueError:
        errors.append(f'Path outside site: {path}')
        return
    if rel.parts[0] not in {'assets', 'projects'} or any(p.startswith(('.', '_')) for p in rel.parts):
        errors.append(f'Non-public path referenced: {path}')
    if not resolved.is_file():
        errors.append(f'Missing public file: {path}')

for project in records:
    versions = [{**project, **v} if v['id'] == project['id'] else v for v in project.get('versions', [])]
    for record in [project] + versions:
        if record.get('locked'):
            if set(record) - LOCKED_FIELDS:
                errors.append('Locked record contains content, links or media')
            if record['year'] != 2027 or record['title'] not in {'ThermalBreath', 'PanoSomaFly', 'PredictiveFly'}:
                errors.append('Locked record must contain only an allowed 2027 project name')
            continue
        if record['year'] == 2027:
            errors.append('Unpublished 2027 record is accessible')
        for key in ['image', 'detailImage', 'video']:
            if record.get(key):
                public_file(record[key], ROOT / 'projects')
        if record.get('video'):
            public_file(record['video'].replace('.mp4', '-preview.mp4'), ROOT / 'projects')
        for link in record.get('links', []):
            if '_private' in link['href']:
                errors.append('Private link in public catalogue')
            if not link['href'].startswith('https://'):
                public_file(link['href'], ROOT / 'projects')

class MediaCheck(HTMLParser):
    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key in {'src', 'poster', 'data-full'} and value and not value.startswith(('https:', 'data:')):
                if value.split('?')[0] in {'script.js', 'styles.css'}:
                    continue
                public_file(value, ROOT)
home = (ROOT / 'index.html').read_text()
MediaCheck().feed(home)

# The Japanese web font is subset to the page's CJK characters; new characters must be added to its URL.
font = re.search(r'family=Noto\+Sans\+JP[^"]*&text=([^"]*)"', home)
cjk = ''.join(sorted({c for c in home if ord(c) > 0x2E80}))
if not font:
    errors.append('Noto Sans JP link with &text= not found in index.html')
elif set(cjk) - set(unquote(font.group(1))):
    errors.append(f'Japanese font subset is missing characters; replace its &text= value with:\n{quote(cjk)}')

# The user restricts only the unpublished 2027 studies; 2026 accepted work stays visible.
for directory in [ROOT / 'assets/projects']:
    for path in directory.glob('*'):
        if any(name in path.name.lower() for name in ['2027', 'thermalbreath', 'panosomafly', 'predictivefly']):
            errors.append('Unpublished 2027 media found in public assets')

# If the private migration manifest is available, detect renamed copies by content hash.
manifest = ROOT / '_private/unreleased-2027/manifest-2027.json'
if manifest.exists():
    restricted_hashes = {x['sha256'] for x in json.loads(manifest.read_text())}
    for directory in [ROOT / 'assets', ROOT / 'projects']:
        for path in directory.rglob('*'):
            if path.is_file() and hashlib.sha256(path.read_bytes()).hexdigest() in restricted_hashes:
                errors.append(f'Unpublished file content found at {path.relative_to(ROOT)}')

if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: {len(records)} project cards; 2027 studies expose names only; public assets are clean.')
