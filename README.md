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
    NAME-preview.mp4      6 s silent clip played on hover (~0.7 MB)
tools/
  transcode.swift       Compress a video
  frames.swift          Grab poster frames
  clip.swift            Cut a short silent hover-preview clip
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
Keep the original in `_private/videos/`, then compress it, grab a poster frame and cut a short hover-preview clip (GitHub rejects files over 100 MB):
```bash
swiftc -O tools/transcode.swift -o /tmp/transcode && swiftc -O tools/frames.swift -o /tmp/frames && swiftc -O tools/clip.swift -o /tmp/clip
/tmp/transcode _private/videos/ORIGINAL.mp4 assets/projects/NAME.mp4 1280 1800000
/tmp/frames assets/projects/NAME.mp4 /tmp/NAME 960 0.5   # 0.5 = halfway; writes /tmp/NAME-0.jpg
mv /tmp/NAME-0.jpg assets/projects/NAME.jpg
/tmp/clip assets/projects/NAME.mp4 assets/projects/NAME-preview.mp4 0.6 6 854 900000   # 6 s from 60 %, silent, ~0.7 MB
```
Pick a clip start that shows the device in use rather than a title card (check with `/tmp/frames … 0.1 0.2 … 0.9`).
Both pages play `NAME-preview.mp4` on hover and load the full `NAME.mp4` only when opened.
Then copy an `<article class="project">` block in the Projects section of `index.html`: `src` is the preview clip, `data-full` the full video.
For the archive, add a record to `projects/projects.js` with `"video": "../assets/projects/NAME.mp4"`; the preview is found by name.

## Project archive data
`projects/projects.js` holds one record per card. A project with several studies lists them in `versions` (one tab each).
A version whose `id` equals the project's own `id` inherits every project field and only states what its tab shows differently
(e.g. a shorter `title`); other versions are full records. Locked 2027 versions hold only `id`, `year`, `title`, `locked`.

## Japanese font
`index.html` loads Noto Sans JP only for the CJK characters it uses (`&text=` on the font link): ~0.45 MB instead of ~4.6 MB.
After adding Japanese text, run the release check; if characters are missing it prints the new `&text=` value to paste in.

## Paper PDF links
Add a `<a class="pdf" href="…">PDF</a>` after the DOI link in a publication's `.meta` line.
Only link versions you may share publicly: open-access publisher PDFs, arXiv preprints, the conference's own public
proceedings (e.g. VRSJ), or files under a CC licence copied into `assets/papers/`. Do not host IEEE/ACM/Springer
publisher PDFs; for those, an author-accepted manuscript is fine if the publisher's policy allows it.
