# Jiayi Xu — Academic Homepage

Live: https://jiayi-xu-hci.github.io/

Static site, no build step. Preview with `python3 -m http.server 8080`.

## Structure
```
index.html        Content (news, research map, trajectory, publications, CV, contact)
styles.css        Styles
script.js         Thermal background, publication filters, counters, reveal
assets/
  photo.jpg       Portrait
  moheat-evo.jpg  MoHeat Evo project image
_private/         Source materials (CV PDF, original photo) — git-ignored, never published
```

## Updating
```bash
git add -A && git commit -m "Describe the change" && git push
```
After changing `styles.css` or `script.js`, bump the `?v=` number on their tags in `index.html` so browsers load the new files.

Publications carry `data-type` (journal / conference / demo / article), `data-theme` (A thermal · B embodiment · C sensing) and optional `data-selected="1"` for the ★ Selected view.
