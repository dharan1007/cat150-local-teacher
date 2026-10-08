# CAT 150 Local Teacher

A static CAT preparation site with 40 topic lessons, an annotated question bank, local progress, a resizable explanation board, a 24-question CAT-style diagnostic, and on-device speech recognition and OCR. The site has no API keys or server-side inference.

## Run and test

```bash
npm test
python -m http.server 4173
```

Open `http://localhost:4173/`. Microphone access requires a secure context (localhost or HTTPS). `index.html`, `src/`, `styles.css`, the manifest, and the service worker are deployable static files.

## What is local

- Lessons, question explanations, scoring, mock timing, and analytics run on the device; progress is saved in localStorage.
- Whisper tiny multilingual speech recognition loads only when chosen. Audio inference runs in a browser worker through Transformers.js and ONNX Runtime WASM. The model panel shows progress, storage estimate, unload, and selective delete controls.
- Tesseract.js OCR runs locally after an image, screenshot, or drawing is submitted. Users should verify the recognized text before solving.
- The teacher board advances with browser speech synthesis. Available spoken languages and voice quality depend on installed voices. Lessons are currently written in English; selecting Hindi or Telugu does not translate them.
- The offline shell, lessons, practice, and saved progress are available after a successful first visit. First-time voice and OCR downloads require network access.

## Current boundaries

The typed solver verifies supported percentage-of and average calculations. It refuses unsupported arbitrary questions rather than inventing answers. OCR is not a dedicated handwritten-math-to-LaTeX engine. The 24-question diagnostic is not a full-length official CAT paper, and the original questions are practice content rather than licensed previous-year CAT questions. Live microphone transcription requires permission and a compatible browser/device.

## Dependency audit

| Component | Version | License | Browser use | Download/maintenance |
| --- | --- | --- | --- | --- |
| Transformers.js | 4.3.0 | Apache-2.0 | ES module worker | Active Hugging Face project; loaded on demand from jsDelivr |
| Whisper tiny (`onnx-community/whisper-tiny`) | current model revision | Apache-2.0 | ONNX Runtime WASM | Quantized weights are roughly 45 MB plus runtime/configuration files; downloaded on demand |
| Tesseract.js | 7.0.0 | Apache-2.0 | Browser worker | Active project; loaded on demand with selected language packs |

Runtime package versions are pinned but the Whisper model repository is not revision-pinned. A permanent offline guarantee for optional AI features would require vendoring the exact runtime, model, and language assets into the static deployment.
