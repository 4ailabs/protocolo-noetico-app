// Declaración global para Tone.js
declare global {
  interface Window {
    Tone: any;
  }
}

// --- Sound Functions ---
export function playStartSound(): void {
  if (typeof window !== 'undefined' && window.Tone) {
    try {
      // Un tono ascendente para indicar el inicio.
      const synth = new window.Tone.Synth().toDestination();
      synth.triggerAttackRelease("C4", "8n", window.Tone.now());
      synth.triggerAttackRelease("G4", "8n", window.Tone.now() + 0.2);
    } catch (error) {
      console.warn('Error al reproducir sonido de inicio:', error);
    }
  }
}

export function playEndSound(): void {
  if (typeof window !== 'undefined' && window.Tone) {
    try {
      // Un tono descendente para indicar el final.
      const synth = new window.Tone.Synth().toDestination();
      synth.triggerAttackRelease("G4", "8n", window.Tone.now());
      synth.triggerAttackRelease("C4", "8n", window.Tone.now() + 0.2);
    } catch (error) {
      console.warn('Error al reproducir sonido de finalización:', error);
    }
  }
}

// Función para inicializar el contexto de audio (necesario para algunos navegadores)
export async function initializeAudioContext(): Promise<void> {
  if (typeof window !== 'undefined' && window.Tone) {
    try {
      if (window.Tone.context.state !== 'running') {
        await window.Tone.start();
      }
    } catch (error) {
      console.warn('Error al inicializar contexto de audio:', error);
    }
  }
}
