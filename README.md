# CAT 150 Local Teacher

CAT 150 is a static, local-first CAT preparation app. It runs from plain files, stores progress in the browser, and avoids paid APIs, server functions, background workers, cron jobs and hosted AI compute.

## Sections

- Home
- Learn
- Practice
- Mock Test
- Ask Teacher
- Syllabus
- Progress

## Local-first features

- Deterministic scoring and progress tracking.
- Teacher board rendered with inline SVG primitives.
- Browser speech synthesis and browser speech recognition where available.
- Typed question solver for deterministic CAT patterns.
- Image and handwriting workspace with explicit model-pack controls.
- Offline-ready service worker and PWA manifest.
- No Vercel Functions, no GitHub Actions, no API keys.

## Dependency posture

The current app ships with no npm package dependency and no external runtime dependency. Model packs are represented as user-visible local/offline controls and are not silently downloaded.

## Run locally

```bash
python -m http.server 4173
```

Open `http://localhost:4173`.
