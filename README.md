# FullDiT Demo Page

Static audio demo for **Beyond Reconstruction: Full-Context Generative DiT for Music Generation**.

The folder is self-contained and can be published directly with GitHub Pages. It has no external JavaScript, font, analytics, or CDN dependency.

Repository: <https://github.com/SelinaCloudL/fulldit-demo>

Demo URL: <https://SelinaCloudL.github.io/fulldit-demo/>

## Preview locally

Run this command inside the folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

Using a local HTTP server is recommended because browser behavior for audio loaded from `file://` URLs varies.

## Contents

- `index.html`: page content
- `styles.css`: responsive styling
- `script.js`: exclusive playback and active-player highlighting
- `audio/`: twelve stereo MP3 demos
- `assets/`: architecture and evaluation figures
- `paper/`: named preprint PDF
- `SHA256SUMS`: checksums of all MP3 files
- `PUBLISHING.md`: GitHub and GitHub Pages instructions

## Audio behavior

Only one audio player is active at a time. Audio uses `preload="none"` so the full 54 MB collection is not downloaded when the page first opens.

## Before publishing

Confirm that all audio, figures, names, and third-party comparison material may be shared publicly. No open-source or Creative Commons license is included by default.
