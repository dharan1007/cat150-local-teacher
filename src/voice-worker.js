let transcriber;

self.onmessage = async event => {
  const { type, audio } = event.data;
  try {
    if (type === 'load') {
      if (!transcriber) {
        self.postMessage({ type: 'status', message: 'Loading local speech engine' });
        const { pipeline, env } = await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.0');
        env.allowLocalModels = false;
        env.useBrowserCache = true;
        env.useWasmCache = true;
        transcriber = await pipeline('automatic-speech-recognition', 'onnx-community/whisper-tiny', {
          device: 'wasm',
          dtype: 'q8',
          progress_callback: info => {
            if (info.status === 'progress') {
              self.postMessage({ type: 'progress', file: info.file, progress: Math.round(info.progress || 0) });
            }
          }
        });
      }
      self.postMessage({ type: 'ready' });
    } else if (type === 'transcribe') {
      if (!transcriber) throw new Error('Load the speech model before recording.');
      const result = await transcriber(new Float32Array(audio), { task: 'transcribe' });
      self.postMessage({ type: 'transcript', text: result.text?.trim() || '' });
    } else if (type === 'unload') {
      if (transcriber?.dispose) await transcriber.dispose();
      transcriber = null;
      self.postMessage({ type: 'unloaded' });
    }
  } catch (error) {
    self.postMessage({ type: 'error', message: error?.message || String(error) });
  }
};
