// Declaración global para Tone.js
declare global {
  interface Window {
    Tone: any;
  }
}

// Variable para rastrear si el contexto de audio ha sido inicializado
let audioContextInitialized = false;

// Función para verificar si Tone.js está disponible y cargado
function isToneAvailable(): boolean {
  return typeof window !== 'undefined' && 
         window.Tone && 
         typeof window.Tone.Synth === 'function' &&
         typeof window.Tone.start === 'function';
}

// Función mejorada para inicializar el contexto de audio
export async function initializeAudioContext(): Promise<boolean> {
  if (!isToneAvailable()) {
    console.warn('Tone.js no está disponible');
    return false;
  }

  try {
    // Verificar el estado del contexto de audio
    if (window.Tone.context.state === 'suspended') {
      await window.Tone.start();
      console.log('Contexto de audio iniciado exitosamente');
    }
    
    // Verificar que el contexto esté realmente funcionando
    if (window.Tone.context.state === 'running') {
      audioContextInitialized = true;
      return true;
    } else {
      console.warn('El contexto de audio no pudo iniciarse:', window.Tone.context.state);
      return false;
    }
  } catch (error) {
    console.warn('Error al inicializar contexto de audio:', error);
    return false;
  }
}

// Función mejorada para reproducir sonido de inicio
export async function playStartSound(): Promise<boolean> {
  if (!isToneAvailable()) {
    console.warn('Tone.js no está disponible para reproducir sonido de inicio');
    return false;
  }

  try {
    // Asegurar que el contexto de audio esté inicializado
    if (!audioContextInitialized) {
      const initialized = await initializeAudioContext();
      if (!initialized) {
        return false;
      }
    }

    // Crear y reproducir el sonido de inicio
    const synth = new window.Tone.Synth({
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 0.1,
        decay: 0.2,
        sustain: 0.3,
        release: 0.4
      }
    }).toDestination();

    // Tono ascendente para indicar el inicio
    synth.triggerAttackRelease("C4", "8n", window.Tone.now());
    synth.triggerAttackRelease("G4", "8n", window.Tone.now() + 0.2);
    
    // Limpiar el sintetizador después de un tiempo
    setTimeout(() => {
      synth.dispose();
    }, 1000);

    return true;
  } catch (error) {
    console.warn('Error al reproducir sonido de inicio:', error);
    return false;
  }
}

// Función mejorada para reproducir sonido de finalización
export async function playEndSound(): Promise<boolean> {
  if (!isToneAvailable()) {
    console.warn('Tone.js no está disponible para reproducir sonido de finalización');
    return false;
  }

  try {
    // Asegurar que el contexto de audio esté inicializado
    if (!audioContextInitialized) {
      const initialized = await initializeAudioContext();
      if (!initialized) {
        return false;
      }
    }

    // Crear y reproducir el sonido de finalización
    const synth = new window.Tone.Synth({
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 0.1,
        decay: 0.2,
        sustain: 0.3,
        release: 0.4
      }
    }).toDestination();

    // Tono descendente para indicar el final
    synth.triggerAttackRelease("G4", "8n", window.Tone.now());
    synth.triggerAttackRelease("C4", "8n", window.Tone.now() + 0.2);
    
    // Limpiar el sintetizador después de un tiempo
    setTimeout(() => {
      synth.dispose();
    }, 1000);

    return true;
  } catch (error) {
    console.warn('Error al reproducir sonido de finalización:', error);
    return false;
  }
}

// Función para verificar si el audio está disponible
export function isAudioAvailable(): boolean {
  return isToneAvailable() && audioContextInitialized;
}

// Función para resetear el estado del audio (útil para debugging)
export function resetAudioContext(): void {
  audioContextInitialized = false;
}
