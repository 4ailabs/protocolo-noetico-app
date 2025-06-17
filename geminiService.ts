import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { NoeticFormulaData } from "./types";

// Ensure process.env.API_KEY is available in the execution context.
const apiKey = typeof process !== 'undefined' && process.env && process.env.API_KEY
  ? process.env.API_KEY
  : undefined;

if (!apiKey) {
  console.error("API_KEY for Gemini is not defined. Please ensure process.env.API_KEY is set.");
  // Fallback to prevent immediate crash if key is missing, API calls will fail.
}

const ai = new GoogleGenAI({ apiKey: apiKey || "MISSING_API_KEY_FALLBACK" });
const modelName = "gemini-2.5-flash-preview-04-17";

const parseJsonFromText = (text: string): any => {
  let jsonStr = text.trim();
  const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
  const match = jsonStr.match(fenceRegex);
  if (match && match[2]) {
    jsonStr = match[2].trim();
  }
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error("Failed to parse JSON response:", e, "Original text:", text);
    throw new Error("La respuesta de la IA no pudo ser interpretada como JSON.");
  }
};

export const suggestAntidotes = async (beliefToNeutralize: string): Promise<string[]> => {
  if (!apiKey) {
    console.error("Gemini API key is not configured. Cannot suggest antidotes.");
    throw new Error("API Key para IA no configurada.");
  }
  try {
    const prompt = `Dada la siguiente creencia limitante: "${beliefToNeutralize}", sugiere tres (3) percepciones alternativas que sean positivas, funcionales y empoderadoras. Devuelve las sugerencias como un array JSON de strings. Por ejemplo: ["Soy capaz y merecedor.", "Confío en mi proceso de crecimiento.", "Elijo ver oportunidades en los desafíos."]. Asegúrate que el resultado sea únicamente el array JSON.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.7,
      },
    });

    const suggestions = parseJsonFromText(response.text);
    if (Array.isArray(suggestions) && suggestions.every(s => typeof s === 'string')) {
      return suggestions.slice(0, 3); 
    }
    console.error("Respuesta inesperada de la IA para sugerencias:", suggestions);
    throw new Error("La IA devolvió sugerencias en un formato inesperado.");
  } catch (error) {
    console.error("Error al sugerir antídotos con IA:", error);
    throw new Error(`Error al contactar la IA para sugerir antídotos: ${error instanceof Error ? error.message : String(error)}`);
  }
};

export const generateAffirmation = async (formulaData: NoeticFormulaData): Promise<string[]> => {
  if (!apiKey) {
    console.error("Gemini API key is not configured. Cannot generate affirmation.");
    throw new Error("API Key para IA no configurada.");
  }
  try {
    const flowerInfo = formulaData.flower 
      ? `Flor: "${formulaData.flower.name}" (Energía asociada: ${formulaData.flower.rate})`
      : "Sin flor específica asociada (trabajo directo sobre creencia).";

    const prompt = `Dada la siguiente fórmula noética/información de reprogramación:
${flowerInfo}
Creencia a neutralizar: "${formulaData.neutralize}"
Comando de activación (antídoto): "${formulaData.activate}"

Crea tres (3) afirmaciones distintas, cortas (1-2 frases concisas cada una, máximo 20 palabras por afirmación) y poderosas para que el sujeto la utilice.
IMPORTANTE: Cada afirmación DEBE estar formulada en LENGUAJE POSITIVO. Evita estrictamente el uso de negaciones como "no", "nunca", "jamás", etc.
Por ejemplo, en lugar de "Nunca estoy solo/a", prefiere "Me siento acompañado/a y conectado/a". En lugar de "No tengo miedo", prefiere "Siento calma y confianza".
Cada afirmación debe reflejar la transformación de la creencia limitante hacia la percepción activadora, integrando la energía de la flor si está presente.
Devuelve las tres afirmaciones como un array JSON de strings. Por ejemplo: ["Afirmación 1.", "Afirmación 2.", "Afirmación 3."]. Asegúrate que el resultado sea únicamente el array JSON.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.7, // Slightly higher temp for more variety in suggestions
      },
    });

    const affirmationSuggestions = parseJsonFromText(response.text);
     if (Array.isArray(affirmationSuggestions) && affirmationSuggestions.every(s => typeof s === 'string') && affirmationSuggestions.length > 0) {
        const negativeWords = ['nunca', 'no', 'jamás', 'tampoco'];
        affirmationSuggestions.forEach(aff => {
            if (negativeWords.some(word => aff.toLowerCase().includes(word))) {
                 console.warn(`Affirmation might contain negative phrasing despite prompt: "${aff}"`);
            }
        });
      return affirmationSuggestions.slice(0, 3); // Ensure only up to 3 are returned
    }
    console.error("Respuesta inesperada de la IA para afirmaciones:", affirmationSuggestions);
    throw new Error("La IA devolvió afirmaciones en un formato inesperado o vacío.");
  } catch (error) {
    console.error("Error al generar afirmaciones con IA:", error);
    throw new Error(`Error al contactar la IA para generar afirmaciones: ${error instanceof Error ? error.message : String(error)}`);
  }
};