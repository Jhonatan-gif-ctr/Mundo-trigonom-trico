import { CT } from "./config.js";

const activity = (id, level, scene, title, instruction, extra = {}) => ({
  id,
  level,
  scene,
  title,
  instruction,
  xp: level === "Inicio" ? 12 : level === "Intermedio" ? 16 : 20,
  capacity: extra.capacity || "comunica",
  ct: extra.ct || CT.patrones,
  ...extra
});

export const ratioMap = {
  sen: ["opuesto", "hipotenusa"],
  cos: ["adyacente", "hipotenusa"],
  tan: ["opuesto", "adyacente"],
  csc: ["hipotenusa", "opuesto"],
  sec: ["hipotenusa", "adyacente"],
  cot: ["adyacente", "opuesto"]
};

export const ratioLabels = {
  sen: "sen(α)",
  cos: "cos(α)",
  tan: "tan(α)",
  csc: "csc(α)",
  sec: "sec(α)",
  cot: "cot(α)"
};

export const zones = [
  {
    id: "razones",
    short: "Razones",
    title: "Zona 1: Razones trigonométricas",
    tag: "Saberes previos",
    type: "triangle",
    build:
      "Recuerda cómo se construye cada razón desde un triángulo rectángulo. Esta zona activa saberes previos antes de estudiar identidades.",
    instructions:
      "Construye el triángulo, observa α y forma la razón solicitada con numerador y denominador.",
    activities: [
      activity("raz-01", "Inicio", "triangle-ratio", "Construye sen(α)", "Forma sen(α) con el cateto opuesto sobre la hipotenusa.", { ratio: "sen", capacity: "modela", ct: CT.descomposicion }),
      activity("raz-02", "Inicio", "triangle-ratio", "Construye cos(α)", "Forma cos(α) con el cateto adyacente sobre la hipotenusa.", { ratio: "cos", capacity: "modela", ct: CT.descomposicion }),
      activity("raz-03", "Inicio", "triangle-ratio", "Construye tan(α)", "Forma tan(α) comparando los dos catetos.", { ratio: "tan", capacity: "estrategias", ct: CT.patrones }),
      activity("raz-04", "Intermedio", "triangle-ratio", "Construye csc(α)", "Invierte sen(α) para construir csc(α).", { ratio: "csc", capacity: "modela", ct: CT.abstraccion }),
      activity("raz-05", "Intermedio", "triangle-ratio", "Construye sec(α)", "Invierte cos(α) para construir sec(α).", { ratio: "sec", capacity: "modela", ct: CT.abstraccion }),
      activity("raz-06", "Intermedio", "triangle-ratio", "Construye cot(α)", "Invierte tan(α) para construir cot(α).", { ratio: "cot", capacity: "modela", ct: CT.abstraccion }),
      activity("raz-07", "Avanzado", "written", "Comunica la construcción", "Explica cómo decides qué lado es opuesto y cuál es adyacente respecto de α.", { answerKeywords: ["ángulo", "opuesto", "adyacente"], capacity: "comunica", ct: CT.algoritmo }),
      activity("raz-08", "Avanzado", "written", "Argumenta la razón", "Justifica por qué tan(α) no usa la hipotenusa.", { answerKeywords: ["catetos", "opuesto", "adyacente"], capacity: "argumenta", ct: CT.abstraccion }),
      activity("raz-09", "Avanzado", "written", "Generaliza", "Describe qué cambia y qué se conserva cuando modificas los catetos.", { answerKeywords: ["razón", "ángulo", "lados"], capacity: "argumenta", ct: CT.patrones })
    ]
  },
  {
    id: "reciprocas",
    short: "Recíprocas",
    title: "Zona 2: Identidades recíprocas",
    tag: "Inverso multiplicativo",
    type: "phaser",
    build:
      "Construye identidades recíprocas manipulando fracciones, tarjetas, balanzas, circuitos, máquinas y argumentos.",
    instructions:
      "Cada reto tiene su propio ambiente. Arrastra, empareja, ensambla, clasifica o argumenta según la actividad.",
    activities: [
      activity("rec-01", "Inicio", "reciprocal-balance", "Balanza geométrica del elemento neutro", "Primero asocia cada razón con su fracción. Luego arrastra dos razones recíprocas a la balanza y justifica por qué el producto es 1.", { capacity: "modela", ct: CT.descomposicion }),
      activity("rec-02", "Inicio", "reciprocal-rule", "Construyendo la regla de correspondencia", "Completa n · m = 1 → n = 1 sobre m colocando las esferas correctas en los espacios vacíos.", { capacity: "modela", ct: CT.abstraccion }),
      activity("rec-03", "Inicio", "reciprocal-memory", "Memoria de recíprocos con fusión", "Voltea cartas y encuentra parejas recíprocas. Si son correctas, se fusionan y revelan el número 1.", { capacity: "comunica", ct: CT.patrones }),
      activity("rec-04", "Inicio", "reciprocal-intruder", "Expulsando al intruso", "Retira la tarjeta que no pertenece a la pareja recíproca. Las dos correctas deben atraerse entre sí.", { capacity: "comunica", ct: CT.descomposicion }),
      activity("rec-05", "Inicio", "reciprocal-puzzle", "Rompecabezas lógico de fórmulas", "Ensambla las seis identidades recíprocas con piezas móviles.", { capacity: "estrategias", ct: CT.algoritmo }),
      activity("rec-06", "Inicio", "reciprocal-wheel", "Rueda y balancín de despejes", "Desliza el factor hacia el otro lado del igual para convertirlo en denominador.", { capacity: "estrategias", ct: CT.algoritmo }),
      activity("rec-07", "Intermedio", "elastic-triangle", "Triángulos elásticos", "Arrastra los vértices del triángulo y observa cómo tan(θ) y cot(θ) cambian, mientras su producto se mantiene en 1.", { capacity: "modela", ct: CT.patrones }),
      activity("rec-08", "Intermedio", "circuit-match", "Conexiones de cableado complejo", "Conecta cada expresión compuesta con su forma reducida para encender el circuito.", { capacity: "modela", ct: CT.abstraccion }),
      activity("rec-09", "Intermedio", "truth-belt", "Banda transportadora de afirmaciones", "Desliza cada afirmación hacia Comprobado o Refutado.", { capacity: "comunica", ct: CT.patrones }),
      activity("rec-10", "Intermedio", "confused-avatar", "El avatar confundido", "Corrige el error del personaje borrando el signo incorrecto y arrastrando la fracción invertida.", { capacity: "comunica", ct: CT.abstraccion }),
      activity("rec-11", "Intermedio", "expression-crusher", "Máquina trituradora de expresiones", "Encierra la pareja recíproca, tritúrala para obtener 1 y reduce la expresión.", { capacity: "estrategias", ct: CT.algoritmo }),
      activity("rec-12", "Intermedio", "bridge-builder", "Construcción de puentes con despejes", "Forja la pieza faltante con 1 y la razón recíproca para completar el puente.", { capacity: "estrategias", ct: CT.algoritmo }),
      activity("rec-13", "Avanzado", "flow-verifier", "Algoritmo verificador de identidades", "Ordena bloques de flujo para que la máquina determine si dos razones son recíprocas.", { capacity: "argumenta", ct: CT.algoritmo, answerKeywords: ["multiplicar", "1", "recíprocas"] }),
      activity("rec-14", "Avanzado", "vault-cryptogram", "Criptograma de la bóveda", "Marca patrones recíprocos, descompón la expresión y ordena el argumento que abre la bóveda.", { capacity: "argumenta", ct: CT.patrones, answerKeywords: ["producto", "1", "recíprocas"] })
    ]
  },
  {
    id: "cociente",
    short: "Cociente",
    title: "Zona 3: Identidades de cociente",
    tag: "En construcción",
    type: "locked",
    construction: true,
    build: "Esta zona se diseñará después de consolidar la zona de recíprocas.",
    instructions: "Zona temporalmente bloqueada.",
    activities: []
  },
  {
    id: "negativos",
    short: "Negativos",
    title: "Zona 4: Identidades para negativos",
    tag: "Simetrías",
    type: "placeholder",
    build: "Pendiente de construcción interactiva.",
    instructions: "Se activará en una versión posterior.",
    activities: []
  },
  {
    id: "pitagoricas",
    short: "Pitagóricas",
    title: "Zona 5: Identidades pitagóricas",
    tag: "Desde Pitágoras",
    type: "placeholder",
    build: "Pendiente de construcción interactiva.",
    instructions: "Se activará en una versión posterior.",
    activities: []
  },
  {
    id: "suma",
    short: "Suma",
    title: "Zona 6: Identidades de suma",
    tag: "Composición",
    type: "placeholder",
    build: "Pendiente de construcción interactiva.",
    instructions: "Se activará en una versión posterior.",
    activities: []
  },
  {
    id: "final",
    short: "Reto final",
    title: "Zona 7: Reto final adaptativo",
    tag: "Síntesis",
    type: "placeholder",
    final: true,
    build: "Pendiente de construcción interactiva.",
    instructions: "Se activará cuando las zonas previas estén completas.",
    activities: []
  }
];

export function levelGroups(zone) {
  const order = ["Inicio", "Intermedio", "Avanzado"];
  return order
    .map((level) => ({
      level,
      activities: zone.activities.filter((activityItem) => activityItem.level === level)
    }))
    .filter((group) => group.activities.length > 0);
}
