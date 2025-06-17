
import { BachData, AdditionalBeliefs, AppConfig } from './types';

export const bachData: BachData = {
    "Grupo del Miedo": {
        flowers: [ { name: "Rock Rose", rate: 2841 }, { name: "Mimulus", rate: 5733 }, { name: "Cherry Plum", rate: 1573 }, { name: "Aspen", rate: 4178 }, { name: "Red Chestnut", rate: 5719 } ],
        beliefs: ["El mundo es un lugar intrínsecamente peligroso.", "Algo malo e inminente va a pasar.", "No estoy a salvo si no tengo el control.", "Voy a perder el control de mí mismo y será catastrófico.", "No poseo los recursos internos/externos para manejar lo que viene.", "La supervivencia es una lucha constante y agotadora.", "El bienestar de mis seres queridos depende enteramente de mi vigilancia."]
    },
    "Grupo de la Incertidumbre": {
        flowers: [ { name: "Cerato", rate: 5413 }, { name: "Scleranthus", rate: 2622 }, { name: "Gentian", rate: 4156 }, { name: "Gorse", rate: 2627 }, { name: "Hornbeam", rate: 6113 }, { name: "Wild Oat", rate: 5449 } ],
        beliefs: ["Mi juicio interno no es fiable; otros saben más que yo.", "Equivocarme de decisión tendrá consecuencias irreparables.", "No tengo la fuerza o la energía para seguir adelante.", "Mi situación es una excepción; no hay esperanza para mí.", "Estoy demasiado agotado para iniciar cualquier cambio.", "Mi propósito en la vida me es ajeno y no puedo encontrarlo.", "Estoy perdido y sin dirección."]
    },
    "Grupo de la Falta de Interés en el Presente": {
        flowers: [ { name: "Clematis", rate: 3639 }, { name: "Honeysuckle", rate: 3972 }, { name: "Wild Rose", rate: 1594 }, { name: "Olive", rate: 4122 }, { name: "White Chestnut", rate: 2614 }, { name: "Mustard", rate: 2122 }, { name: "Chestnut Bud", rate: 6372 } ],
        beliefs: ["La realidad presente es insoportable/aburrida, por eso prefiero escapar.", "El pasado fue mejor y nunca volverá.", "Nada tiene el poder de motivarme o inspirarme.", "Mi energía vital está agotada y no se puede recargar.", "Estoy atrapado en un bucle mental del que no puedo salir.", "Mi tristeza es parte de quien soy, no tiene causa ni solución.", "Estoy condenado a repetir los mismos errores una y otra vez."]
    },
    "Grupo de la Soledad": {
        flowers: [ { name: "Water Violet", rate: 1579 }, { name: "Impatiens", rate: 2653 }, { name: "Heather", rate: 6338 } ],
        beliefs: ["Soy fundamentalmente diferente y nadie puede entenderme.", "Si no recibo atención constante de los demás, desaparezco.", "Las interacciones sociales son irritantes y me drenan.", "El aislamiento es la única forma de evitar el dolor del rechazo.", "El amor verdadero requiere que me sacrifique."]
    },
    "Grupo de la Hipersensibilidad": {
        flowers: [ { name: "Agrimony", rate: 2247 }, { name: "Centaury", rate: 2135 }, { name: "Walnut", rate: 2803 }, { name: "Holly", rate: 2809 } ],
        beliefs: ["Si muestro mis verdaderos sentimientos, seré rechazado o atacado.", "Mi valor como persona se mide por mi utilidad para los demás.", "Decir 'no' me convierte en una mala persona.", "Las energías y emociones de los demás me invaden y no puedo protegerme.", "Cualquier cambio es una amenaza a mi estabilidad.", "Debo ganarme el amor y la aprobación.", "La gente es malintencionada por naturaleza."]
    },
    "Grupo del Abatimiento y la Desesperación": {
        flowers: [ { name: "Larch", rate: 3363 }, { name: "Pine", rate: 1257 }, { name: "Elm", rate: 7884 }, { name: "Sweet Chestnut", rate: 2805 }, { name: "Star Of Bethlehem", rate: 3672 }, { name: "Willow", rate: 1629 }, { name: "Oak", rate: 5847 }, { name: "Crab Apple", rate: 1214 } ],
        beliefs: ["Hay un defecto fundamental en mí que me hace inferior/incapaz.", "Soy responsable de todo lo malo que pasa y merezco ser castigado.", "La carga que llevo es demasiado pesada para mí.", "He llegado a mi límite; estoy en un pozo sin fondo.", "El dolor de este trauma es permanente y definirá mi vida.", "Soy una víctima de las circunstancias y no tengo poder.", "Mostrar vulnerabilidad es un signo de debilidad inaceptable.", "Hay una parte de mí que es impura/sucia y debe ser ocultada."]
    },
     "Grupo de la Preocupación Excesiva por los Demás": {
        flowers: [ { name: "Chicory", rate: 1622 }, { name: "Vervain", rate: 5637 }, { name: "Vine", rate: 3317 }, { name: "Beech", rate: 1436 }, { name: "Rock Water", rate: 4634 } ],
        beliefs: ["Sin mi intervención y amor, mis seres queridos no sobrevivirán.", "Mi forma de ver el mundo es la correcta y debo imponerla para ayudar.", "Sé lo que es mejor para los demás, incluso mejor que ellos mismos.", "Las imperfecciones de los demás son un reflejo de mis propios fallos.", "Las reglas y la disciplina son el único camino hacia la perfección.", "Si no lo controlo todo, sobrevendrá el caos."]
    }
};

export const additionalBeliefs: AdditionalBeliefs = {
    "Relaciones y Vínculos": ["El amor es peligroso/doloroso.", "Si me muestro tal como soy, me abandonarán.", "Estoy destinado/a a estar solo/a.", "Debo cuidar de los demás para ser digno de amor.", "El conflicto destruye las relaciones."],
    "Prosperidad y Merecimiento": ["No merezco tener éxito/abundancia.", "El dinero es la raíz de todos los males.", "Tengo que luchar y sacrificarme para conseguir lo que quiero.", "No hay suficiente para todos (mentalidad de escasez).", "Si tengo éxito, otros sentirán envidia o me rechazarán."],
    "Salud y Cuerpo": ["Mi cuerpo es frágil y propenso a enfermar.", "El dolor es una señal de que algo está irreparablemente dañado.", "No puedo confiar en la capacidad de mi cuerpo para sanar.", "Mi cuerpo es mi enemigo.", "La enfermedad es un castigo."],
    "Espiritualidad y Propósito": ["Estoy desconectado/a de mi guía espiritual/Yo Superior.", "No tengo un propósito o misión especial en la vida.", "Debo alcanzar la perfección espiritual para ser válido.", "Dios/El Universo me ha abandonado.", "Mi intuición no es fiable."]
};

export const appConfig: AppConfig = {
    mainTitle: "Protocolo Noético Nivel 2",
    subtitle: "Reprogramación de la Percepción Basada en Conflictos Emocionales",
    author: "Dr. Miguel Ojeda Rios",
    logoUrl: "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/a5ec48ba-61f8-47d8-b46e-38f475b6837a/MFT+logo.png?format=500w",
    colors: {
        bgColorStart: "from-gray-900", // #111827
        bgColorEnd: "to-violet-900", // #3b0764 is approx violet-900 / indigo-900. Using violet.
        accent: "violet-400", // #a78bfa
        secondaryAccent: "cyan-400", // #22d3ee
        text: "text-gray-300", // #d1d5db
        textSecondary: "text-gray-400", // #9ca3af
        
        accentGradientFrom: "from-violet-400", // #a78bfa
        accentGradientTo: "to-violet-600", // #7c3aed (Used in glowButton)

        wizardSelectedBgGradientFrom: "from-violet-700", // #4f46e5
        wizardSelectedBgGradientTo: "to-violet-500", // #7c3aed
        wizardSelectedBorder: "border-l-violet-400", // #a78bfa
        wizardHoverBg: "hover:bg-violet-600/10", // rgba(79, 70, 229, 0.1)

        emitterRing1: "border-cyan-400", // secondaryAccentColor
        emitterRing2: "border-violet-400", // accentColor
        emitterRing3: "border-violet-500", // #8b5cf6

        broadcastButtonBgFrom: "from-green-500", 
        broadcastButtonBgTo: "to-cyan-400", // secondaryAccent (slightly adjusted)
        stopButtonBgFrom: "from-red-600",
        stopButtonBgTo: "to-orange-500",
        clearButtonBgFrom: "from-gray-500",
        clearButtonBgTo: "to-gray-600",
    }
};
