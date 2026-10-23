#!/usr/bin/env python3
"""Preview public pages while denying private directories, Git data and local tools."""
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import argparse

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_ROOT_FILES = {'index.html', 'styles.css', 'script.js', '.nojekyll'}

class PublicHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def send_head(self):
        candidate = Path(self.translate_path(self.path)).resolve()
        try:
            relative = candidate.relative_to(ROOT)
        except ValueError:
            self.send_error(403)
            return None
        parts = relative.parts
        root_page = not parts or (len(parts) == 1 and parts[0] in PUBLIC_ROOT_FILES)
        asset_page = bool(parts) and parts[0] in {'assets', 'projects'} and not any(p.startswith(('.', '_')) for p in parts)
        if not (root_page or asset_page):
            self.send_error(403, 'Private local content is not served')
            return None
        if candidate.is_dir() and not (candidate / 'index.html').is_file():
            self.send_error(403, 'Directory listing disabled')
            return None
        return super().send_head()

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=8080)
    args = parser.parse_args()
    server = ThreadingHTTPServer(('127.0.0.1', args.port), PublicHandler)
    print(f'Public-only preview: http://127.0.0.1:{args.port}', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
