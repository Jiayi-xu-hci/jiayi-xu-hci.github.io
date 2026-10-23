# Jiayi Xu — Academic Homepage

Live: https://jiayi-xu-hci.github.io/

Static site, no build step. Preview with `python3 tools/preview.py` (public files only).

## Structure
```
index.html              Content (intro, news, projects, research, publications, CV, contact)
styles.css              Soft blue palette + frosted surfaces
script.js               Projects video player · Publications tabs · nav highlight
projects/               Standalone research archive; ?view=all opens all projects
  projects.js           Project catalogue (cards, details, versions)
  module.js/.css        Archive page logic and styles
assets/
  images/profile.jpg    Portrait
  papers/               Hosted paper PDFs (only open-licence ones, e.g. CC BY)
  projects/             All project media for both pages, named by project
    NAME.mp4/.jpg         Video + poster (web-compressed: 720p H.264, ~1.8 Mbps)
    NAME-detail.jpg       Larger figure shown in the archive's detail view
tools/
  transcode.swift       Compress a video
  frames.swift          Grab poster frames
  preview.py            Local preview server (public files only)
  check-public-release.py  Pre-publish audit (paths exist, 2027 work stays locked)
_private/               Git-ignored, never published
  cv/ photos/ videos/   CV PDF, original portraits, original videos (incl. unreleased 2027 ones)
  papers/ thesis/ presentations/ previews/ restricted-media/
```

## Updating
Run `python3 tools/check-public-release.py` before publishing. Only the unpublished 2027 studies are locked: their project names remain visible, while descriptions, links and media stay private. All other years, including accepted 2026 work, retain their full presentation. Locked entries do not load a hidden image or abstract.

```bash
git add -A && git commit -m "Describe the change" && git push
```
After changing `styles.css` or `script.js`, bump the `?v=` number on their tags in `index.html`; likewise for `projects/*.js|css` in `projects/index.html`. Browsers then load the new files.

## Publications
Each publication is one `<li class="pub">` inside `#pubList` with `data-year` and `data-type` (journal / conference / demo / domestic / article); the type sets the badge colour and the badge (`.venue`) is the short venue name. Add new entries anywhere in the list — `script.js` builds the tabs and counts:
- *By year*: one tab per year, newest selected; types ordered journal → conference → demo → domestic → article, with demos, domestic talks and articles behind a “Show more” button.
- *By type*: one tab per type, newest first.

## Adding a project video
Keep the original in `_private/videos/`, then compress it and grab a poster frame (GitHub rejects files over 100 MB):
```bash
swiftc -O tools/transcode.swift -o /tmp/transcode && swiftc -O tools/frames.swift -o /tmp/frames
/tmp/transcode _private/videos/ORIGINAL.mp4 assets/projects/NAME.mp4 1280 1800000
/tmp/frames assets/projects/NAME.mp4 /tmp/NAME 960 0.5   # 0.5 = halfway; writes /tmp/NAME-0.jpg
mv /tmp/NAME-0.jpg assets/projects/NAME.jpg
```
Then copy an `<article class="project">` block in the Projects section of `index.html` and point it at `assets/projects/NAME.mp4` / `.jpg`.

## Paper PDF links
Add a `<a class="pdf" href="…">PDF</a>` after the DOI link in a publication's `.meta` line.
Only link versions you may share publicly: open-access publisher PDFs, arXiv preprints, the conference's own public
proceedings (e.g. VRSJ), or files under a CC licence copied into `assets/papers/`. Do not host IEEE/ACM/Springer
publisher PDFs; for those, an author-accepted manuscript is fine if the publisher's policy allows it.
