# Jiayi Xu — Academic Homepage

Live: https://jiayi-xu-hci.github.io/

Static site, no build step. Preview with `python3 -m http.server 8080`.

## Structure
```
index.html              Content (intro, news, projects, research, publications, CV, contact)
styles.css              Styles (light + dark)
script.js               Projects video player · Publications tabs · nav highlight
assets/
  images/profile.jpg    Portrait
  papers/               Hosted paper PDFs (only open-licence ones, e.g. CC BY)
  projects/             One video + poster per project, named by project
    moheat-evo.mp4/.jpg   (web-compressed: 720p H.264, ~1.8 Mbps)
    …
tools/                  Swift helpers: transcode.swift (compress video), frames.swift (grab poster frames)
_private/               Git-ignored, never published
  cv/                   CV PDF
  photos/               Original portrait photos
  videos/               Original project videos (incl. unreleased 2027 ones)
```

## Updating
```bash
git add -A && git commit -m "Describe the change" && git push
```
After changing `styles.css` or `script.js`, bump the `?v=` number on their tags in `index.html` so browsers load the new files.

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
