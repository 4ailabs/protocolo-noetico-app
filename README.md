
# Protocolo Noético Nivel 2 App

Esta aplicación web implementa el "Protocolo Noético Nivel 2", una herramienta para la reprogramación de la percepción basada en conflictos emocionales, inspirada en el trabajo del Dr. Miguel Ojeda Rios. Permite a los usuarios identificar grupos de conflicto, seleccionar Flores de Bach (u optar por un enfoque directo en creencias), definir creencias a neutralizar, formular antídotos (con sugerencias de IA), y gestionar un panel de emisión para protocolos de sanación energética.

## Características Principales

*   **Asistente de Protocolo Noético:** Guía paso a paso para:
    *   Seleccionar Grupos de Conflicto Emocional (incluyendo Flores de Bach o un grupo "Otros" para creencias generales).
    *   Seleccionar Flores de Bach específicas con sus tasas radiónicas.
    *   Identificar Creencias Limitantes (de listas predefinidas o personalizadas).
    *   Formular Antídotos (percepciones activadoras), con sugerencias opcionales generadas por IA (Google Gemini).
*   **Panel de Emisión:** Añade y gestiona "Fórmulas Noéticas" o "Tasas Simples" para su emisión.
*   **Generación de Afirmaciones con IA:** Crea afirmaciones personalizadas para el sujeto basadas en las fórmulas noéticas.
*   **Control de Emisión:** Inicia y detiene la emisión, con un temporizador configurable.
*   **Registro de Sesión:** Mantiene un historial de todas las acciones realizadas durante la sesión.
*   **Biblioteca de Referencia:** Pestañas para consultar rápidamente las Flores de Bach y las Creencias Nucleares.

## Tech Stack

*   React 19 (sin JSX, usando `React.createElement` implícitamente a través de la sintaxis de componentes funcionales)
*   TypeScript
*   Tailwind CSS (vía CDN)
*   Framer Motion (para animaciones)
*   Google Gemini API (para sugerencias de antídotos y afirmaciones)

## Configuración y Variables de Entorno

Para que las funcionalidades de Inteligencia Artificial (sugerencias de antídotos y generación de afirmaciones) funcionen, necesitas una Clave API de Google Gemini.

*   `API_KEY`: Tu clave API de Google Gemini.
    *   Obtén tu clave desde [Google AI Studio](https://aistudio.google.com/app/apikey).
    *   Esta clave **debe** configurarse como una variable de entorno en el servicio de hosting (por ejemplo, Vercel) donde despliegues la aplicación. **No la incrustes directamente en el código fuente público.**

## Despliegue

Esta aplicación está diseñada para ser desplegada como un sitio estático.

### Despliegue en Vercel (Recomendado)

1.  Sube tu código a un repositorio de GitHub.
2.  Conecta tu repositorio de GitHub a Vercel.
3.  Vercel debería detectar que es un proyecto estático. No se necesita un comando de compilación específico si sirves los archivos tal cual.
    *   Framework Preset: `Other`
    *   Build Command: Puedes dejarlo vacío o usar `echo "No build step required"`.
    *   Output Directory: Deja el valor por defecto (normalmente la raíz del proyecto, donde está `index.html`).
4.  **Importante:** En la configuración de tu proyecto en Vercel, ve a "Settings" -> "Environment Variables" y añade una variable llamada `API_KEY` con el valor de tu clave API de Google Gemini.
5.  Despliega.

## Estructura de Archivos

```
/
├── public/                  (No existe actualmente, pero es común para assets estáticos)
├── components/
│   ├── EmissionItem.tsx
│   ├── icons.tsx
│   └── ListItem.tsx
├── App.tsx                  (Componente principal de la aplicación)
├── constants.ts             (Datos constantes como Flores de Bach, creencias, configuración de la app)
├── geminiService.ts         (Lógica para interactuar con la API de Google Gemini)
├── index.html               (Punto de entrada HTML)
├── index.tsx                (Punto de entrada de React, renderiza App)
├── metadata.json            (Metadatos de la aplicación)
├── types.ts                 (Definiciones de TypeScript)
├── README.md                (Este archivo)
└── .gitignore               (Archivos a ignorar por Git)
```

## Uso

1.  Abre la URL de la aplicación desplegada.
2.  Ingresa la información del sujeto (opcional).
3.  Usa el "Asistente de Protocolo Noético" para crear fórmulas.
4.  Alternativamente, usa la pestaña "Añadir Flores/Tasas" para añadir tasas simples al panel.
5.  Configura el temporizador (opcional).
6.  Inicia la transmisión desde el Panel de Emisión.
7.  El Registro de Sesión mostrará todas las acciones.
