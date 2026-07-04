const TEACHER_CODE = "PROFE-TRIGO-2026";
const PUBLIC_URL = "https://jhonatan-gif-ctr.github.io/Mundo-trigonom-trico/";
const SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxU3uWIJTI9SP2ArxDlG5mT3iPqr1SIchDI_aB-TGtxFXgThpIaeuQCTp3VeEHcGeq5vQ/exec";

const capacities = {
  modela: "Modela objetos con formas geométricas y sus transformaciones",
  comunica: "Comunica su comprensión sobre las formas y relaciones geométricas",
  estrategias: "Usa estrategias y procedimientos para orientarse en el espacio",
  argumenta: "Argumenta afirmaciones sobre relaciones geométricas"
};

const ratioMap = {
  sen: ["opuesto", "hipotenusa"],
  cos: ["adyacente", "hipotenusa"],
  tan: ["opuesto", "adyacente"],
  csc: ["hipotenusa", "opuesto"],
  sec: ["hipotenusa", "adyacente"],
  cot: ["adyacente", "opuesto"]
};

const labels = {
  sen: "sen(α)",
  cos: "cos(α)",
  tan: "tan(α)",
  csc: "csc(α)",
  sec: "sec(α)",
  cot: "cot(α)"
};

const zones = [
  {
    id: "razones",
    short: "Razones",
    title: "Zona 1: Razones trigonométricas",
    tag: "Saberes previos",
    instructions: "Recuerda las seis razones trigonométricas sin recibir la fórmula escrita. Usa el triángulo para formar la razón solicitada.",
    build: "Observa el triángulo, ubica α y recuerda qué lado se convierte en opuesto, adyacente o hipotenusa.",
    theory: "Saberes previos: identifica α, reconoce cateto opuesto, cateto adyacente e hipotenusa, y forma razones con una fracción vertical.",
    type: "triangle",
    activities: []
  },
  {
    id: "reciprocas",
    short: "Recíprocas",
    title: "Zona 2: Identidades recíprocas",
    tag: "Invertir razones",
    instructions: "Empareja cada razón con su recíproca y verifica que el producto sea 1.",
    build: "Construye una razón y luego invierte numerador y denominador.",
    theory: "Identidades recíprocas: una razón se transforma al intercambiar numerador y denominador.",
    type: "cards",
    activities: []
  },
  {
    id: "cociente",
    short: "Cociente",
    title: "Zona 3: Identidades de cociente",
    tag: "Razones entre razones",
    instructions: "Forma cocientes con la plantilla, empareja expresiones equivalentes y simplifica valores cuando el reto lo pida.",
    build: "Compara dos razones ya construidas para obtener tangente o cotangente.",
    theory: "Identidades de cociente: una nueva razón se construye comparando dos razones trigonométricas.",
    type: "cards",
    activities: []
  },
  {
    id: "negativos",
    short: "Negativos",
    title: "Zona 4: Identidades para negativos",
    tag: "Simetrías",
    instructions: "Elige, completa o justifica qué sucede cuando el ángulo cambia de α a -α.",
    build: "Observa la simetría: algunas funciones conservan signo y otras lo cambian.",
    theory: "Identidades para negativos: se construyen desde la simetría del círculo unitario.",
    type: "unit",
    activities: []
  },
  {
    id: "pitagoricas",
    short: "Pitagóricas",
    title: "Zona 5: Identidades pitagóricas",
    tag: "Construcción desde Pitágoras",
    instructions: "Completa igualdades, elige la transformación adecuada y despeja valores usando fracciones verticales o palabras.",
    build: "Parte del teorema de Pitágoras y divide toda la igualdad por el cuadrado de un lado.",
    theory: "Identidades pitagóricas: se construyen transformando una misma igualdad con divisiones equivalentes.",
    type: "cards",
    activities: []
  },
  {
    id: "suma",
    short: "Suma",
    title: "Zona 6: Identidades de suma",
    tag: "Composición de ángulos",
    instructions: "Empareja estructuras, completa productos y reconoce signos. Usa α y β con precisión.",
    build: "Combina dos ángulos y reconoce cómo se mezclan seno, coseno y tangente.",
    theory: "Identidades de suma: una función de α+β se construye con funciones de α y de β.",
    type: "cards",
    activities: []
  },
  {
    id: "final",
    short: "Reto final",
    title: "Zona 7: Reto final adaptativo",
    tag: "Síntesis",
    instructions: "Resuelve retos integrados. Usa tus vidas acumuladas y revisa cada paso antes de validar.",
    build: "Integra lo construido en todas las zonas.",
    theory: "Reto final: una identidad se comprende cuando puedes construirla, aplicarla y justificar su equivalencia.",
    type: "cards",
    final: true,
    activities: []
  }
];

function withBank() {
  const byId = Object.fromEntries(zones.map(zone => [zone.id, zone]));
  const act = (id, level, kind, title, text, extra = {}) => ({
    id, level, kind, title, text, xp: ["Inicio", "Básico"].includes(level) ? 12 : level === "Intermedio" ? 16 : 20,
    capacity: extra.capacity || "comunica",
    ct: extra.ct || "Patrones",
    ...extra
  });

  byId.razones.build = "Observa el triángulo, ubica α y recuerda qué lado se convierte en opuesto, adyacente o hipotenusa. Aquí activas saberes previos antes de entrar a identidades.";
  byId.razones.theory = "Saberes previos: identifica α, reconoce cateto opuesto, cateto adyacente e hipotenusa, y forma razones con una fracción vertical.";
  byId.razones.instructions = "Recuerda las seis razones trigonométricas sin recibir la fórmula escrita. Usa el triángulo para formar la razón solicitada.";
  byId.razones.activities = [
    act("raz-b1", "Básico", "fraction", "Construye sen(α)", "Forma sen(α) usando la plantilla de fracción.", { ratio: "sen" }),
    act("raz-b2", "Básico", "fraction", "Construye cos(α)", "Forma cos(α) usando la plantilla de fracción.", { ratio: "cos" }),
    act("raz-b3", "Básico", "fraction", "Construye tan(α)", "Forma tan(α) sin usar la hipotenusa.", { ratio: "tan", capacity: "estrategias", ct: "Descomposición" }),
    act("raz-i1", "Intermedio", "fraction", "Construye csc(α)", "Invierte la razón del seno para construir csc(α).", { ratio: "csc", capacity: "modela" }),
    act("raz-i2", "Intermedio", "fraction", "Construye sec(α)", "Invierte la razón del coseno para formar sec(α).", { ratio: "sec", capacity: "modela" }),
    act("raz-i3", "Intermedio", "fraction", "Construye cot(α)", "Construye cot(α) comparando los catetos.", { ratio: "cot", capacity: "modela" }),
    act("raz-a1", "Avanzado", "choice", "Comunica", "Elige la razón formada con adyacente como numerador y opuesto como denominador.", { answers: ["cot"], options: ["tan(α)", "sec(α)", "cot(α)"], capacity: "comunica" }),
    act("raz-a2", "Avanzado", "text", "Comunica", "Si una razón compara hipotenusa sobre opuesto, escribe su nombre.", { answers: ["csc", "csc(α)", "cosecante"], capacity: "comunica", ct: "Generalización" }),
    act("raz-a3", "Avanzado", "choice", "Argumenta", "Elige por qué tan(α) no usa hipotenusa.", { answers: ["catetos"], options: ["porque compara los dos catetos", "porque compara hipotenusa y opuesto", "porque siempre vale 1"], capacity: "argumenta", ct: "Abstracción" })
  ];

  byId.reciprocas.build = "Construye una razón y luego invierte numerador y denominador. Si el producto de dos razones recíprocas es 1, encontraste la pareja.";
  byId.reciprocas.theory = "Identidades recíprocas: una razón se transforma al intercambiar numerador y denominador.";
  byId.reciprocas.type = "cards";
  byId.reciprocas.instructions = "Construye el triángulo con los deslizadores. Primero forma una razón con lados; luego invierte la fracción para descubrir su recíproca.";
  byId.reciprocas.activities = [
    act("rec-01", "Inicio", "choice", "Balanza del elemento neutro", "Elige la pareja de bloques que al multiplicarse equilibra la balanza con valor 1.", { answers: ["y sobre r  y  r sobre y"], options: ["y sobre r  y  r sobre y", "x sobre r  y  y sobre r", "x sobre y  y  x sobre r"], capacity: "modela", ct: "Patrones" }),
    act("rec-02", "Inicio", "fractionText", "Construyendo la definición", "Completa la regla del inverso: si n · m = 1, entonces n es una fracción con 1 arriba y m abajo.", { num: ["1"], den: ["m"], capacity: "modela", ct: "Abstracción" }),
    act("rec-03", "Inicio", "choice", "Memoria de recíprocos", "Empareja la tarjeta sen(α) con su recíproca.", { answers: ["csc"], options: ["csc(α)", "sec(α)", "cot(α)"], capacity: "comunica", ct: "Patrones" }),
    act("rec-04", "Inicio", "choice", "El intruso", "En el grupo cos(α), sec(α), tan(α), elimina la tarjeta que no pertenece a la pareja recíproca.", { answers: ["tan"], options: ["cos(α)", "sec(α)", "tan(α)"], capacity: "comunica", ct: "Descomposición" }),
    act("rec-05", "Inicio", "choice", "Ensamblaje de fórmulas", "Arma la igualdad recíproca correcta para sec(α).", { answers: ["sec(α) = 1 sobre cos(α)"], options: ["sec(α) = 1 sobre cos(α)", "sec(α) = 1 sobre sen(α)", "sec(α) = 1 sobre tan(α)"], capacity: "estrategias", ct: "Pensamiento algorítmico" }),
    act("rec-06", "Inicio", "fractionText", "Rueda de despejes", "Si tan(α) · cot(α) = 1, despeja cot(α) como fracción.", { num: ["1"], den: ["tan", "tanα", "tan(α)"], capacity: "estrategias", ct: "Pensamiento algorítmico" }),
    act("rec-07", "Intermedio", "fraction", "Laboratorio de triángulos", "Desliza los catetos y construye cot(α), la recíproca de tan(α), con lados del triángulo.", { ratio: "cot", capacity: "modela", ct: "Patrones" }),
    act("rec-08", "Intermedio", "choice", "Equivalencias complejas", "Empareja la expresión 3 · sen(α) · csc(α) con su forma reducida.", { answers: ["3"], options: ["3", "3sen(α)", "csc(α)"], capacity: "modela", ct: "Abstracción" }),
    act("rec-09", "Intermedio", "choice", "Clasificador de verdades", "Clasifica: cos(α) es el recíproco de csc(α).", { answers: ["falso"], options: ["Verdadero", "Falso"], capacity: "comunica", ct: "Patrones" }),
    act("rec-10", "Intermedio", "text", "Corrige al personaje", "El personaje dice: si sen(α) vale un medio, entonces csc(α) vale menos un medio. Escribe el valor correcto de csc(α).", { answers: ["2"], capacity: "comunica", ct: "Abstracción" }),
    act("rec-11", "Intermedio", "text", "Trituradora de expresiones", "Reduce E = 4 · cos(α) · sec(α) + 2. Escribe el valor final.", { answers: ["6"], capacity: "estrategias", ct: "Pensamiento algorítmico" }),
    act("rec-12", "Intermedio", "fractionText", "Construcción de puentes", "Si solo tienes 1 y csc(α), construye sen(α) como fracción para completar el puente.", { num: ["1"], den: ["csc", "cscα", "csc(α)"], capacity: "estrategias", ct: "Pensamiento algorítmico" }),
    act("rec-13", "Avanzado", "choice", "Algoritmo verificador", "Elige la secuencia que permite decidir si dos razones son recíprocas.", { answers: ["multiplicar"], options: ["Leer A y B → multiplicar A · B → comparar con 1", "Leer A y B → sumar A + B → comparar con 1", "Leer A y B → restar A - B → comparar con 0"], capacity: "argumenta", ct: "Pensamiento algorítmico" }),
    act("rec-14", "Avanzado", "text", "Argumenta la regla", "Justifica en una frase breve por qué dos razones recíprocas producen 1 al multiplicarse.", { answers: ["inverso", "multiplicativo", "producto", "1", "unidad"], capacity: "argumenta", ct: "Generalización" })
  ];

  byId.cociente.build = "Compara dos razones ya construidas. Al dividir seno entre coseno aparece tangente; al invertir ese cociente aparece cotangente.";
  byId.cociente.theory = "Identidades de cociente: una nueva razón se construye comparando dos razones trigonométricas.";
  byId.cociente.instructions = "Forma cocientes con la plantilla, empareja expresiones equivalentes y simplifica valores cuando el reto lo pida.";
  byId.cociente.activities = [
    act("coc-b1", "Básico", "fractionText", "Construye tan(α)", "Usa sen(α) como numerador y cos(α) como denominador.", { num: ["sen", "senα", "sen(α)"], den: ["cos", "cosα", "cos(α)"] }),
    act("coc-b2", "Básico", "fractionText", "Construye cot(α)", "Usa cos(α) como numerador y sen(α) como denominador.", { num: ["cos", "cosα", "cos(α)"], den: ["sen", "senα", "sen(α)"] }),
    act("coc-b3", "Básico", "choice", "Empareja cociente", "Elige la identidad construida con sen(α) sobre cos(α).", { answers: ["tan"], options: ["tan(α)", "cot(α)", "sec(α)"] }),
    act("coc-i1", "Intermedio", "text", "Simplifica", "Si sen(α) vale tres quintos y cos(α) vale cuatro quintos, escribe tan(α).", { answers: ["3/4", "3sobre4"], capacity: "estrategias" }),
    act("coc-i2", "Intermedio", "choice", "Elige el resultado", "Si tan(α) se invierte, se obtiene...", { answers: ["cot"], options: ["cot(α)", "sec(α)", "csc(α)"], capacity: "argumenta" }),
    act("coc-i3", "Intermedio", "text", "Reconstruye", "Si cot(α) vale cuatro tercios, escribe tan(α).", { answers: ["3/4", "3sobre4"], capacity: "modela" }),
    act("coc-a1", "Avanzado", "choice", "Detecta patrón", "Elige la expresión que no necesita hipotenusa.", { answers: ["tan"], options: ["tan(α)", "sen(α)", "cos(α)"], capacity: "argumenta" }),
    act("coc-a2", "Avanzado", "text", "Argumenta con una palabra", "¿Qué proceso convierte sen(α) y cos(α) en tan(α)?", { answers: ["cociente", "division", "división"], capacity: "argumenta" }),
    act("coc-a3", "Avanzado", "choice", "Generaliza", "Si cos(α) es cero, el cociente sen(α) sobre cos(α) queda...", { answers: ["no definido"], options: ["no definido", "igual a 1", "igual a 0"], capacity: "argumenta", ct: "Abstracción" })
  ];

  byId.negativos.build = "Mueve mentalmente α hacia -α y observa la simetría: algunas funciones conservan signo y otras lo cambian.";
  byId.negativos.theory = "Identidades para negativos: se construyen desde la simetría del círculo unitario.";
  byId.negativos.instructions = "Elige, completa o justifica qué sucede cuando el ángulo cambia de α a -α. Atiende al signo.";
  byId.negativos.activities = [
    act("neg-b1", "Básico", "choice", "Simetría de seno", "Elige la identidad correcta.", { answers: ["-sen"], options: ["sen(-α) = -sen(α)", "sen(-α) = sen(α)", "sen(-α) = cos(α)"] }),
    act("neg-b2", "Básico", "choice", "Simetría de coseno", "Elige la identidad correcta.", { answers: ["cos"], options: ["cos(-α) = cos(α)", "cos(-α) = -cos(α)", "cos(-α) = sen(α)"] }),
    act("neg-b3", "Básico", "choice", "Simetría de tangente", "Elige la identidad correcta.", { answers: ["-tan"], options: ["tan(-α) = -tan(α)", "tan(-α) = tan(α)", "tan(-α) = sec(α)"] }),
    act("neg-i1", "Intermedio", "text", "Completa signo", "Escribe el signo que aparece en sen(-α).", { answers: ["-", "negativo"], capacity: "comunica" }),
    act("neg-i2", "Intermedio", "choice", "Empareja paridad", "Elige la función par.", { answers: ["cos"], options: ["sen(α)", "cos(α)", "tan(α)"], capacity: "argumenta" }),
    act("neg-i3", "Intermedio", "choice", "Empareja paridad", "Elige una función impar.", { answers: ["sen"], options: ["sen(α)", "cos(α)", "sec(α)"], capacity: "argumenta" }),
    act("neg-a1", "Avanzado", "text", "Aplica identidad", "Si sen(α) vale un medio, escribe sen(-α).", { answers: ["-1/2", "-1sobre2"], capacity: "modela" }),
    act("neg-a2", "Avanzado", "text", "Aplica identidad", "Si cos(α) vale raíz de tres sobre dos, escribe cos(-α).", { answers: ["√3/2", "√3sobre2"], capacity: "modela" }),
    act("neg-a3", "Avanzado", "choice", "Razona", "Al reflejar respecto del eje horizontal, cambia el signo de...", { answers: ["sen"], options: ["sen(α)", "cos(α)", "1"], capacity: "argumenta" })
  ];

  byId.pitagoricas.build = "Parte del teorema de Pitágoras y divide toda la igualdad por el cuadrado de un lado. Así aparecen las tres identidades pitagóricas.";
  byId.pitagoricas.theory = "Identidades pitagóricas: se construyen transformando una misma igualdad con divisiones equivalentes.";
  byId.pitagoricas.instructions = "Completa igualdades, elige la transformación adecuada y despeja valores usando fracciones verticales o palabras.";
  byId.pitagoricas.activities = [
    act("pit-b1", "Básico", "text", "Primera identidad", "Completa: sen²(α) + cos²(α) =", { answers: ["1"] }),
    act("pit-b2", "Básico", "choice", "Empareja identidad", "Elige la identidad que relaciona tangente y secante.", { answers: ["sec"], options: ["tan²(α) + 1 = sec²(α)", "1 + cot²(α) = csc²(α)", "sen²(α) + cos²(α) = 1"] }),
    act("pit-b3", "Básico", "choice", "Empareja identidad", "Elige la identidad que relaciona cotangente y cosecante.", { answers: ["csc"], options: ["1 + cot²(α) = csc²(α)", "tan²(α) + 1 = sec²(α)", "sen²(α) + cos²(α) = 1"] }),
    act("pit-i1", "Intermedio", "text", "Construye sec²(α)", "Completa: tan²(α) + 1 =", { answers: ["sec²α", "sec²(α)", "sec2α", "sec^2α"], capacity: "estrategias" }),
    act("pit-i2", "Intermedio", "text", "Construye csc²(α)", "Completa: 1 + cot²(α) =", { answers: ["csc²α", "csc²(α)", "csc2α", "csc^2α"], capacity: "estrategias" }),
    act("pit-i3", "Intermedio", "choice", "Elige transformación", "Para obtener sen²(α)+cos²(α)=1 desde Pitágoras, se divide entre...", { answers: ["c²"], options: ["c²", "a²", "b²"], capacity: "argumenta" }),
    act("pit-a1", "Avanzado", "text", "Despeja", "Si sen²(α) vale un cuarto, escribe cos²(α).", { answers: ["3/4", "3sobre4"], capacity: "modela" }),
    act("pit-a2", "Avanzado", "text", "Despeja", "Si tan²(α) vale 8, escribe sec²(α).", { answers: ["9"], capacity: "modela" }),
    act("pit-a3", "Avanzado", "choice", "Justifica", "La identidad sen²(α)+cos²(α)=1 se construye desde...", { answers: ["pitagoras"], options: ["Pitágoras", "proporcionalidad directa", "suma de ángulos"], capacity: "argumenta" })
  ];

  byId.suma.build = "Combina dos ángulos y reconoce cómo se mezclan seno, coseno y tangente en una nueva expresión.";
  byId.suma.theory = "Identidades de suma: una función de α+β se construye con funciones de α y de β.";
  byId.suma.instructions = "Empareja estructuras, completa productos y reconoce signos. Usa α y β con precisión.";
  byId.suma.activities = [
    act("sum-b1", "Básico", "choice", "Estructura de sen(α+β)", "Elige la forma correcta.", { answers: ["sen(α)cos(β)+cos(α)sen(β)"], options: ["sen(α)cos(β)+cos(α)sen(β)", "cos(α)cos(β)-sen(α)sen(β)", "tan(α)+tan(β)"] }),
    act("sum-b2", "Básico", "choice", "Estructura de cos(α+β)", "Elige la forma correcta.", { answers: ["cos(α)cos(β)-sen(α)sen(β)"], options: ["cos(α)cos(β)-sen(α)sen(β)", "sen(α)cos(β)+cos(α)sen(β)", "tan(α)tan(β)"] }),
    act("sum-b3", "Básico", "choice", "Signo en cos(α+β)", "En cos(α+β), el signo entre productos es...", { answers: ["-"], options: ["-", "+", "±"] }),
    act("sum-i1", "Intermedio", "text", "Completa seno", "Escribe el segundo producto de sen(α+β): sen(α)cos(β) + ...", { answers: ["cosαsenβ", "cos(α)sen(β)", "senβcosα"], capacity: "comunica" }),
    act("sum-i2", "Intermedio", "text", "Completa coseno", "Escribe el segundo producto que se resta en cos(α+β).", { answers: ["senαsenβ", "sen(α)sen(β)"], capacity: "comunica" }),
    act("sum-i3", "Intermedio", "choice", "Tangente de suma", "En tan(α+β), el denominador contiene...", { answers: ["1-tan"], options: ["1 - tan(α)tan(β)", "1 + sen(α)sen(β)", "cos(α)+cos(β)"], capacity: "estrategias" }),
    act("sum-a1", "Avanzado", "text", "Caso notable", "Si β = 0, escribe sen(α+0).", { answers: ["senα", "sen(α)"], capacity: "argumenta" }),
    act("sum-a2", "Avanzado", "choice", "Detecta patrón", "La identidad de seno mezcla...", { answers: ["seno y coseno"], options: ["seno y coseno", "solo seno", "solo tangente"], capacity: "argumenta" }),
    act("sum-a3", "Avanzado", "text", "Síntesis", "Escribe el denominador de tan(α+β).", { answers: ["1-tanαtanβ", "1-tan(α)tan(β)"], capacity: "argumenta" })
  ];

  byId.final.build = "Integra lo construido en todas las zonas: razones, recíprocas, cocientes, signos, Pitágoras y suma de ángulos.";
  byId.final.theory = "Reto final: una identidad se comprende cuando puedes construirla, aplicarla y justificar su equivalencia.";
  byId.final.instructions = "Resuelve retos integrados. Usa tus vidas acumuladas y revisa cada paso antes de validar.";
  byId.final.activities = [
    act("fin-b1", "Básico", "choice", "Ruta 1", "Elige la identidad que nace de dividir Pitágoras entre c².", { answers: ["sen²(α)+cos²(α)=1"], options: ["sen²(α)+cos²(α)=1", "tan²(α)+1=sec²(α)", "1+cot²(α)=csc²(α)"] }),
    act("fin-b2", "Básico", "choice", "Ruta 2", "Elige una identidad recíproca.", { answers: ["sec"], options: ["sec(α) como recíproca de cos(α)", "tan(α) como recíproca de sen(α)", "cos(α) como recíproca de csc(α)"] }),
    act("fin-b3", "Básico", "choice", "Ruta 3", "Elige una identidad de cociente.", { answers: ["tan"], options: ["tan(α) se construye con sen(α) sobre cos(α)", "cos(-α)=cos(α)", "sen²(α)+cos²(α)=1"] }),
    act("fin-i1", "Intermedio", "text", "Integra", "Si cos(α) vale cuatro quintos, escribe sec(α).", { answers: ["5/4", "5sobre4"], capacity: "modela" }),
    act("fin-i2", "Intermedio", "text", "Integra", "Si tan²(α) vale 3, escribe sec²(α).", { answers: ["4"], capacity: "modela" }),
    act("fin-i3", "Intermedio", "choice", "Integra", "Si α cambia a -α, la función que no cambia de signo es...", { answers: ["cos"], options: ["cos(α)", "sen(α)", "tan(α)"], capacity: "argumenta" }),
    act("fin-a1", "Avanzado", "text", "Reto síntesis", "Si sen²(α) vale 9 sobre 25, escribe cos²(α).", { answers: ["16/25", "16sobre25"], capacity: "argumenta" }),
    act("fin-a2", "Avanzado", "choice", "Reto síntesis", "Elige la ruta que construye csc²(α).", { answers: ["cot"], options: ["1 + cot²(α)", "tan²(α) + 1", "sen²(α)+cos²(α)"], capacity: "argumenta" }),
    act("fin-a3", "Avanzado", "text", "Reto final", "Escribe una palabra clave que explique por qué una identidad transforma una expresión en otra equivalente.", { answers: ["equivalencia", "identidad", "patron", "patrón"], capacity: "argumenta" })
  ];
}

withBank();

const rubric = [
  ["Modela formas y relaciones", "Representa triángulos, ángulos, razones e identidades como relaciones geométricas", "Construye modelos coherentes y transforma la representación sin perder significado matemático"],
  ["Comunica comprensión geométrica", "Explica el significado de lados, ángulos, signos, razones e identidades", "Usa vocabulario y simbología matemática precisa: sen(α), cos(α), fracciones verticales y equivalencias"],
  ["Usa estrategias de orientación y cálculo", "Selecciona procedimientos para construir y verificar identidades", "Organiza pasos, ajusta decisiones y comprueba relaciones en retos graduados"],
  ["Argumenta relaciones geométricas", "Justifica por qué una identidad o transformación es válida", "Sustenta con patrones, simetrías, equivalencias o el teorema de Pitágoras"],
  ["PC: descomposición", "Divide el reto en partes manejables", "Separa datos, condiciones, variables y objetivo antes de responder"],
  ["PC: abstracción", "Reconoce lo esencial y descarta datos innecesarios", "Generaliza desde el triángulo o círculo hacia fórmulas simbólicas"],
  ["PC: patrones y generalización", "Detecta regularidades entre razones e identidades", "Formula reglas transferibles a casos nuevos"],
  ["PC: pensamiento algorítmico", "Sigue o diseña una secuencia lógica de pasos", "Construye procedimientos verificables para llegar a la respuesta"]
];

const $ = (id) => document.getElementById(id);

function showModal(kind, title, message, actions = [{ label: "Continuar" }]) {
  $("modalKind").textContent = kind;
  $("modalTitle").textContent = title;
  $("modalMessage").textContent = message;
  $("modalActions").innerHTML = "";
  actions.forEach(action => {
    const button = document.createElement("button");
    button.textContent = action.label;
    if (action.primary) button.className = "primary";
    button.addEventListener("click", () => {
      $("modalLayer").classList.add("hidden");
      if (action.onClick) action.onClick();
    });
    $("modalActions").appendChild(button);
  });
  $("modalLayer").classList.remove("hidden");
}

const state = {
  student: "",
  grade: "",
  avatar: "varon",
  xp: 0,
  reserveLives: 0,
  currentZone: 0,
  currentActivity: 0,
  musicOn: false,
  audioCtx: null,
  musicTimer: null,
  activeInput: null,
  selectedOption: "",
  pasted: false,
  activityStart: Date.now(),
  startTime: Date.now(),
  completed: new Set(),
  attempts: {},
  records: [],
  zoneLives: {},
  controls: { aInt: 0, aR2: 1, aR3: 0, bInt: 0, bR2: 1, bR3: 0 }
};

for (const zone of zones) state.zoneLives[zone.id] = 5;

function show(id) {
  document.querySelectorAll(".screen").forEach(screen => screen.classList.add("hidden"));
  $(id).classList.remove("hidden");
}

function normalize(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");
}

function normalizeMathText(text) {
  return normalize(text)
    .replace(/cosecante/g, "csc")
    .replace(/secante/g, "sec")
    .replace(/cotangente/g, "cot")
    .replace(/coseno/g, "cos")
    .replace(/seno/g, "sen")
    .replace(/tangente/g, "tan")
    .replace(/\*/g, "")
    .replace(/sqrt\((\d+)\)/g, "√$1")
    .replace(/sqrt(\d+)/g, "√$1")
    .replace(/raizcuadradade/g, "√")
    .replace(/raizcuadrada/g, "√")
    .replace(/raizde/g, "√")
    .replace(/raiz/g, "√")
    .replace(/\^2/g, "²");
}

function exactSide(prefix) {
  const intValue = state.controls[`${prefix}Int`];
  const r2 = state.controls[`${prefix}R2`];
  const r3 = state.controls[`${prefix}R3`];
  const parts = [];
  if (intValue) parts.push(String(intValue));
  if (r2) parts.push(r2 === 1 ? "√2" : `${r2}√2`);
  if (r3) parts.push(r3 === 1 ? "√3" : `${r3}√3`);
  return parts.length ? parts.join(" + ") : "1";
}

function sideValue(prefix) {
  return Math.max(
    1,
    state.controls[`${prefix}Int`] +
    state.controls[`${prefix}R2`] * Math.sqrt(2) +
    state.controls[`${prefix}R3`] * Math.sqrt(3)
  );
}

function hypValue() {
  const a = sideValue("a");
  const b = sideValue("b");
  return Math.sqrt(a * a + b * b);
}

function exactHyp() {
  const c = hypValue();
  const c2 = sideValue("a") ** 2 + sideValue("b") ** 2;
  if (Math.abs(c - Math.round(c)) < 1e-9) return String(Math.round(c));
  if (Math.abs(c2 - Math.round(c2)) < 1e-9) return `√${Math.round(c2)}`;
  return `√((${exactSide("a")})² + (${exactSide("b")})²)`;
}

function sideCandidates(text) {
  const t = normalizeMathText(text);
  const candidates = new Set();
  const exactA = normalizeMathText(exactSide("a"));
  const exactB = normalizeMathText(exactSide("b"));
  const exactC = normalizeMathText(exactHyp());
  if (["a", "opuesto", "catetoopuesto"].includes(t) || t === exactA) candidates.add("opuesto");
  if (["b", "adyacente", "catetoadyacente"].includes(t) || t === exactB) candidates.add("adyacente");
  if (["c", "hipotenusa"].includes(t) || t === exactC) candidates.add("hipotenusa");
  return candidates;
}

function currentZone() {
  return zones[state.currentZone];
}

function currentActivity() {
  return currentZone().activities[state.currentActivity];
}

function isZoneDone(zone) {
  return zone.activities.every(activity => state.completed.has(activity.id));
}

function finalUnlocked() {
  return zones.filter(zone => !zone.final).every(isZoneDone);
}

function isConstructionZone(zone) {
  return zone.id === "cociente";
}

function zoneUnlocked(index) {
  if (isConstructionZone(zones[index])) return false;
  if (index === 0) return true;
  if (zones[index].final) return finalUnlocked();
  return isZoneDone(zones[index - 1]);
}

function resetZone(zoneIndex) {
  const zone = zones[zoneIndex];
  zone.activities.forEach(activity => {
    state.completed.delete(activity.id);
    delete state.attempts[activity.id];
  });
  state.currentZone = zoneIndex;
  state.currentActivity = 0;
  state.zoneLives[zone.id] = 5;
}

function totalActivities() {
  return zones.reduce((sum, zone) => sum + zone.activities.length, 0);
}

function maxXp() {
  return zones.reduce((sum, zone) => sum + zone.activities.reduce((zoneSum, activity) => zoneSum + activity.xp, 0), 0);
}

function score100() {
  const progressPart = (state.completed.size / totalActivities()) * 70;
  const xpPart = (state.xp / maxXp()) * 30;
  return Math.min(100, Math.round(progressPart + xpPart));
}

function totalElapsedSeconds() {
  return Math.max(0, Math.floor((Date.now() - state.startTime) / 1000));
}

function formatDuration(seconds) {
  const value = Math.max(0, Number(seconds) || 0);
  if (value < 60) return `${value} s`;
  const minutes = Math.floor(value / 60);
  const rest = value % 60;
  return rest ? `${minutes} min ${rest} s` : `${minutes} min`;
}

function avatarHtml() {
  const label = state.avatar === "mujer" ? "Exploradora" : "Explorador";
  const className = state.avatar === "mujer" ? "avatar-female" : "avatar-male";
  return `
    <span class="map-player ${className}" aria-label="${label} en esta posición">
      <span class="avatar-head"></span>
      <span class="avatar-body"></span>
      <small>${label}</small>
    </span>
  `;
}

function ensureAudio() {
  if (!state.audioCtx) {
    state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return state.audioCtx;
}

function playTone(freq, duration = .14, type = "sine", gainValue = .05) {
  try {
    const audio = ensureAudio();
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = gainValue;
    osc.connect(gain);
    gain.connect(audio.destination);
    osc.start();
    osc.stop(audio.currentTime + duration);
  } catch {
    return;
  }
}

function playEffect(kind) {
  if (kind === "correct") {
    playTone(660, .1, "triangle", .06);
    setTimeout(() => playTone(880, .12, "triangle", .05), 100);
  } else if (kind === "error") {
    playTone(180, .18, "sawtooth", .04);
  } else if (kind === "reward") {
    [523, 659, 784, 1046].forEach((freq, index) => setTimeout(() => playTone(freq, .12, "triangle", .05), index * 90));
  }
}

function toggleMusic() {
  state.musicOn = !state.musicOn;
  const label = `Música quiz: ${state.musicOn ? "encendida" : "apagada"}`;
  if ($("musicBtn")) $("musicBtn").textContent = label;
  if ($("musicBtnMap")) $("musicBtnMap").textContent = label;
  if (!state.musicOn) {
    clearInterval(state.musicTimer);
    state.musicTimer = null;
    return;
  }
  const pattern = [392, 440, 523, 440, 587, 523];
  let index = 0;
  state.musicTimer = setInterval(() => {
    playTone(pattern[index % pattern.length], .08, "square", .025);
    index += 1;
  }, 280);
}

function formulaHtml() {
  return `
    <div class="formula-grid">
      <div class="formula"><span>sen(α) =</span><span class="frac"><b>opuesto</b><i>hipotenusa</i></span></div>
      <div class="formula"><span>cos(α) =</span><span class="frac"><b>adyacente</b><i>hipotenusa</i></span></div>
      <div class="formula"><span>tan(α) =</span><span class="frac"><b>opuesto</b><i>adyacente</i></span></div>
      <div class="formula"><span>csc(α) =</span><span class="frac"><b>hipotenusa</b><i>opuesto</i></span></div>
      <div class="formula"><span>sec(α) =</span><span class="frac"><b>hipotenusa</b><i>adyacente</i></span></div>
      <div class="formula"><span>cot(α) =</span><span class="frac"><b>adyacente</b><i>opuesto</i></span></div>
    </div>
  `;
}

function renderZoneNav() {
  $("zoneNav").innerHTML = "";
  zones.forEach((zone, index) => {
    const button = document.createElement("button");
    const locked = !zoneUnlocked(index);
    button.textContent = locked ? `${zone.short} bloqueado` : zone.short;
    button.className = [
      index === state.currentZone ? "active" : "",
      isZoneDone(zone) ? "done" : "",
      locked ? "locked" : ""
    ].join(" ");
    button.disabled = locked;
    button.addEventListener("click", () => {
      state.currentZone = index;
      const firstPending = zone.activities.findIndex(activity => !state.completed.has(activity.id));
      state.currentActivity = firstPending >= 0 ? firstPending : 0;
      renderAll();
    });
    $("zoneNav").appendChild(button);
  });
}

function renderMap() {
  const mapPoints = [
    [12, 62], [26, 38], [42, 48], [58, 30], [76, 42], [84, 66], [64, 78]
  ];
  $("mapScoreLabel").textContent = `Puntaje ${score100()}/100`;
  $("adventureMap").innerHTML = zones.map((zone, index) => {
    const locked = !zoneUnlocked(index);
    const construction = isConstructionZone(zone);
    const done = isZoneDone(zone);
    const current = index === state.currentZone;
    const [x, y] = mapPoints[index] || [50, 50];
    return `
      <button class="map-node ${done ? "done" : ""} ${current ? "current" : ""} ${locked ? "locked" : ""} ${construction ? "construction" : ""}" style="--x:${x}%;--y:${y}%;" data-map-zone="${index}" ${locked && !construction ? "disabled" : ""}>
        <span class="map-number">${index + 1}</span>
        <strong>${zone.short}</strong>
        <p>${zone.tag}</p>
        <small>${construction ? "En construcción" : done ? "Completada" : locked ? "Bloqueada" : "Disponible"}</small>
        ${current ? avatarHtml() : ""}
      </button>
    `;
  }).join("");
  document.querySelectorAll("[data-map-zone]").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.mapZone);
      if (isConstructionZone(zones[index])) {
        showModal("Zona en construcción", "Cociente estará disponible pronto", "Por ahora nos concentraremos en completar y revisar la Zona 2: Identidades recíprocas.", [{ label: "Entendido", primary: true }]);
        return;
      }
      if (!zoneUnlocked(index)) return;
      state.currentZone = index;
      const firstPending = zones[index].activities.findIndex(activity => !state.completed.has(activity.id));
      state.currentActivity = firstPending >= 0 ? firstPending : 0;
      renderMap();
      renderLevelMap();
      show("levelMapScreen");
    });
  });
}

function levelGroups(zone) {
  const names = [];
  zone.activities.forEach(activity => {
    if (!names.includes(activity.level)) names.push(activity.level);
  });
  return names.map(name => ({
    name,
    activities: zone.activities
      .map((activity, index) => ({ activity, index }))
      .filter(item => item.activity.level === name)
  }));
}

function isLevelDone(group) {
  return group.activities.every(item => state.completed.has(item.activity.id));
}

function isLevelUnlocked(groups, groupIndex) {
  return groupIndex === 0 || isLevelDone(groups[groupIndex - 1]);
}

function renderLevelMap() {
  const zone = currentZone();
  const groups = levelGroups(zone);
  const levelPoints = [[18, 66], [50, 38], [82, 66]];
  const currentGroupIndex = Math.max(0, groups.findIndex(group =>
    group.activities.some(item => item.index === state.currentActivity)
  ));
  $("levelMapTitle").textContent = `Mapa de niveles: ${zone.short}`;
  $("levelMapZoneName").textContent = zone.title;
  $("levelMapZoneText").textContent = `${zone.instructions} Completa todos los retos de un nivel para avanzar al siguiente.`;
  $("levelAdventureMap").innerHTML = groups.map((group, groupIndex) => {
    const locked = !isLevelUnlocked(groups, groupIndex);
    const done = isLevelDone(group);
    const current = groupIndex === currentGroupIndex;
    const [x, y] = levelPoints[groupIndex] || [50, 50];
    return `
      <button class="level-map-node ${done ? "done" : ""} ${current ? "current" : ""} ${locked ? "locked" : ""}" style="--x:${x}%;--y:${y}%;" data-level-group-index="${groupIndex}" ${locked ? "disabled" : ""}>
        <span class="map-number">${groupIndex + 1}</span>
        <strong>${group.name}</strong>
        <small>${group.activities.filter(item => state.completed.has(item.activity.id)).length} de ${group.activities.length} retos</small>
        ${current ? avatarHtml() : ""}
      </button>
    `;
  }).join("");
  document.querySelectorAll("[data-level-group-index]").forEach(button => {
    button.addEventListener("click", () => {
      const groupIndex = Number(button.dataset.levelGroupIndex);
      if (!isLevelUnlocked(groups, groupIndex)) return;
      const target = groups[groupIndex].activities.find(item => !state.completed.has(item.activity.id)) || groups[groupIndex].activities[0];
      state.currentActivity = target.index;
      renderAll();
      show("simScreen");
    });
  });
}

function renderLevelTrack() {
  const zone = currentZone();
  $("levelTrack").innerHTML = zone.activities.map((activity, index) => {
    const previousDone = index === 0 || state.completed.has(zone.activities[index - 1].id);
    const locked = !previousDone;
    const done = state.completed.has(activity.id);
    const current = index === state.currentActivity;
    return `
      <button class="level-card ${done ? "done" : ""} ${current ? "current" : ""} ${locked ? "locked" : ""}" data-level-index="${index}" ${locked ? "disabled" : ""}>
        ${activity.level}<br><small>${activity.title}</small>
      </button>
    `;
  }).join("");
  document.querySelectorAll("[data-level-index]").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.levelIndex);
      const previousDone = index === 0 || state.completed.has(currentZone().activities[index - 1].id);
      if (!previousDone) return;
      state.currentActivity = index;
      renderAll();
    });
  });
}

function renderAll() {
  renderZoneNav();
  renderLevelTrack();
  renderZone();
  renderChallenge();
  renderSliders();
  drawTriangle();
  updateStatus();
}

function activityEnvironmentHtml(zone, activity) {
  if (zone.id !== "reciprocas") {
    return `<div class="construct-card"><strong>Construcción:</strong> ${zone.build}</div>`;
  }
  return reciprocalEnvironmentHtml(activity);
}

function reciprocalEnvironmentHtml(activity) {
  const frac = (top, bottom) => `<span class="mini-frac"><b>${top}</b><i>${bottom}</i></span>`;
  const card = (text) => `<span class="math-chip">${text}</span>`;
  const environments = {
    "rec-01": `<div class="rec-env balance-env"><h3>Balanza del elemento neutro</h3><div class="balance"><div class="pan target">1</div><div class="beam"></div><div class="pan empty">Pareja de bloques</div></div><div class="chip-bank">${card(frac("y", "r"))}${card(frac("r", "y"))}${card(frac("x", "r"))}${card(frac("x", "y"))}</div></div>`,
    "rec-02": `<div class="rec-env blanks-env"><h3>Construyendo la definición</h3><div class="formula-stage">n · m = <span class="blank-slot">?</span> → n = ${frac("?", "?")}</div><div class="chip-bank">${card("1")}${card("m")}${card("n")}</div></div>`,
    "rec-03": `<div class="rec-env memory-env"><h3>Memoria de recíprocos</h3><div class="memory-grid">${card("sen(α)")}${card("csc(α)")}${card("cos(α)")}${card("sec(α)")}${card("tan(α)")}${card("cot(α)")}</div><p>Busca la pareja que se fusiona para formar 1.</p></div>`,
    "rec-04": `<div class="rec-env intruder-env"><h3>El intruso</h3><div class="chip-bank">${card("cos(α)")}${card("sec(α)")}${card("tan(α)")}</div><p>Dos tarjetas forman pareja recíproca. Una no pertenece.</p></div>`,
    "rec-05": `<div class="rec-env puzzle-env"><h3>Ensamblaje de fórmulas</h3><div class="puzzle-row">${card("sec(α)")}${card("=")}${card("1")}${card("sobre")}${card("cos(α)")}</div><div class="puzzle-slot">Ranura: sec(α) = ${frac("1", "cos(α)")}</div></div>`,
    "rec-06": `<div class="rec-env wheel-env"><h3>Rueda de despejes</h3><div class="wheel">tan(α) · cot(α) = 1</div><p>Despeja cot(α): tan(α) pasa como denominador.</p></div>`,
    "rec-07": `<div class="rec-env lab-env"><h3>Laboratorio de triángulos</h3><div class="triangle-mini"><span>x</span><span>y</span><span>r</span></div><div class="meters">${card(`tan(α) = ${frac("y", "x")}`)}${card(`cot(α) = ${frac("x", "y")}`)}${card("producto = 1")}</div></div>`,
    "rec-08": `<div class="rec-env columns-env"><h3>Equivalencias complejas</h3><div class="two-columns"><div>${card("3 · sen(α) · csc(α)")}${card("5 · sec(α)")}</div><div>${card("3")}${card("5 sobre cos(α)")}</div></div></div>`,
    "rec-09": `<div class="rec-env conveyor-env"><h3>Clasificador de verdades</h3><div class="conveyor">“cos(α) es recíproco de csc(α)”</div><div class="truth-boxes"><span>Verdadero</span><span>Falso</span></div></div>`,
    "rec-10": `<div class="rec-env character-env"><h3>Corrige al personaje</h3><div class="speech">Si sen(α) vale un medio, entonces csc(α) vale menos un medio.</div><p>Usa el inverso multiplicativo, no el inverso aditivo.</p></div>`,
    "rec-11": `<div class="rec-env crusher-env"><h3>Trituradora de expresiones</h3><div class="crusher">E = 4 · <mark>cos(α) · sec(α)</mark> + 2 → 4 · 1 + 2</div></div>`,
    "rec-12": `<div class="rec-env bridge-env"><h3>Construcción de puentes</h3><div class="bridge"><span>1</span><span>csc(α)</span><span class="gap">puente</span><span>sen(α)</span></div><p>Construye la pieza faltante como ${frac("1", "csc(α)")}.</p></div>`,
    "rec-13": `<div class="rec-env algorithm-env"><h3>Algoritmo verificador</h3><div class="flow">${card("Inicio")}→${card("Leer A y B")}→${card("Multiplicar")}→${card("¿Resultado = 1?")}</div></div>`,
    "rec-14": `<div class="rec-env vault-env"><h3>Criptograma trigonométrico</h3><div class="vault">Bóveda: detecta pares recíprocos ocultos y justifica por qué se reducen a 1.</div></div>`
  };
  return environments[activity.id] || `<div class="construct-card"><strong>Construcción:</strong> ${activity.text}</div>`;
}

function renderZone() {
  const zone = currentZone();
  $("zoneSubtitle").textContent = zone.title;
  $("zoneTag").textContent = zone.tag;
  $("zoneTitle").textContent = zone.title;
  $("zoneTheory").innerHTML = zone.id === "razones" ? `<p>${zone.theory}</p>` : `<p>${zone.theory}</p>`;
  $("zoneInstructions").textContent = zone.instructions;
  $("buildPrompt").textContent = zone.build;
  $("interactiveArea").innerHTML = activityEnvironmentHtml(zone, currentActivity());
  $("triangleCanvas").style.display = zone.type === "triangle" ? "block" : "none";
  updateValues();
}

function renderChallenge() {
  const activity = currentActivity();
  state.activityStart = Date.now();
  state.pasted = false;
  state.selectedOption = "";
  $("challengeLevel").textContent = `Nivel ${activity.level}`;
  $("challengeTitle").textContent = activity.title;
  $("challengeText").textContent = activity.text;
  $("fractionBox").classList.toggle("hidden", !["fraction", "fractionText"].includes(activity.kind));
  $("quickButtons").classList.toggle("hidden", activity.kind !== "fraction");
  $("answerBox").classList.toggle("hidden", activity.kind !== "text");
  $("optionBox").classList.toggle("hidden", activity.kind !== "choice");
  $("optionBox").innerHTML = "";
  if (activity.kind === "choice") {
    activity.options.forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = option;
      button.addEventListener("click", () => {
        state.selectedOption = option;
        document.querySelectorAll("#optionBox button").forEach(item => item.classList.remove("selected"));
        button.classList.add("selected");
      });
      $("optionBox").appendChild(button);
    });
  }
  $("numInput").value = "";
  $("denInput").value = "";
  $("answerInput").value = "";
  ["numInput", "denInput", "answerInput"].forEach(id => $(id).className = "");
  $("mathRecord").textContent = zoneRecordText();
}

function zoneRecordText() {
  const zone = currentZone();
  if (zone.type === "triangle") {
    return `c² = a² + b²  →  c² = (${exactSide("a")})² + (${exactSide("b")})²  →  c = ${exactHyp()}`;
  }
  return zone.theory;
}

function drawTriangle() {
  const canvas = $("triangleCanvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  if (currentZone().type !== "triangle") return;

  const a = sideValue("a");
  const b = sideValue("b");
  const scale = Math.min(290 / b, 230 / a);
  const triW = b * scale;
  const triH = a * scale;
  const cx = (w - triW) / 2;
  const cy = h - 64;
  const ax = cx + triW;
  const ay = cy;
  const bx = cx;
  const by = cy - triH;

  ctx.strokeStyle = "rgba(19,159,82,.18)";
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 42) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += 42) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  ctx.fillStyle = "#dbeafe";
  ctx.strokeStyle = "#10213f";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(ax, ay);
  ctx.lineTo(bx, by);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.strokeRect(cx, cy - 26, 26, 26);

  const angle = Math.atan(a / b);
  ctx.strokeStyle = "#dc2626";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(ax, ay, 48, Math.PI, Math.PI + angle, false);
  ctx.stroke();
  label(ctx, ax - 30, ay - 20, "α", "#fee2e2", "#dc2626");

  label(ctx, cx - 78, (cy + by) / 2, `opuesto\na = ${exactSide("a")}`, "#dcfce7", "#139f52");
  label(ctx, (cx + ax) / 2, cy + 48, `adyacente\nb = ${exactSide("b")}`, "#ede9fe", "#7c3aed");
  label(ctx, (ax + bx) / 2 + 90, (ay + by) / 2, `hipotenusa\nc = ${exactHyp()}`, "#fee2e2", "#dc2626");
}

function label(ctx, x, y, text, fill, stroke) {
  const lines = text.split("\n");
  const width = Math.max(...lines.map(line => line.length)) * 8 + 22;
  const height = lines.length * 18 + 14;
  ctx.fillStyle = "rgba(16,33,63,.18)";
  ctx.fillRect(x - width / 2 + 4, y - height / 2 + 4, width, height);
  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 2;
  ctx.fillRect(x - width / 2, y - height / 2, width, height);
  ctx.strokeRect(x - width / 2, y - height / 2, width, height);
  ctx.fillStyle = stroke;
  ctx.font = "700 14px Segoe UI";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  lines.forEach((line, index) => ctx.fillText(line, x, y + (index - (lines.length - 1) / 2) * 18));
}

function renderSliders() {
  const zone = currentZone();
  $("sliders").innerHTML = "";
  if (zone.id !== "razones") {
    $("sliders").innerHTML = `<p>Esta zona usa un ambiente propio para cada reto. El mapa de niveles separa Inicio, Intermedio y Avanzado.</p>`;
    return;
  }
  const defs = [
    ["aInt", "a entero", "opuesto"],
    ["aR2", "a coef √2", "opuesto"],
    ["aR3", "a coef √3", "opuesto"],
    ["bInt", "b entero", "adyacente"],
    ["bR2", "b coef √2", "adyacente"],
    ["bR3", "b coef √3", "adyacente"]
  ];
  defs.forEach(([key, text, type]) => {
    const row = document.createElement("div");
    row.className = `slider-row ${type}`;
    row.innerHTML = `
      <label><span>${text}</span><output>${state.controls[key]}</output></label>
      <input type="range" min="0" max="10" step="1" value="${state.controls[key]}">
    `;
    const input = row.querySelector("input");
    const output = row.querySelector("output");
    input.addEventListener("input", () => {
      state.controls[key] = Number(input.value);
      output.textContent = input.value;
      drawTriangle();
      updateValues();
      $("mathRecord").textContent = zoneRecordText();
    });
    $("sliders").appendChild(row);
  });
}

function updateValues() {
  const zone = currentZone();
  const activity = currentActivity();
  const a = sideValue("a");
  const b = sideValue("b");
  const angle = Math.atan(a / b) * 180 / Math.PI;
  $("valuesText").innerHTML = `
    Zona: ${zone.short}<br>
    Actividad: ${activity.level}<br>
    Vidas de zona: ${state.zoneLives[zone.id]}<br>
    a = ${exactSide("a")}<br>
    b = ${exactSide("b")}<br>
    c = ${exactHyp()}<br>
    α ≈ ${Math.round(angle)} grados<br>
    Completadas: ${state.completed.size} de ${zones.reduce((sum, z) => sum + z.activities.length, 0)}
  `;
}

function updateStatus() {
  const sec = Math.floor((Date.now() - state.startTime) / 1000);
  $("studentLabel").textContent = state.student || "Estudiante";
  $("xpLabel").textContent = `Puntaje ${score100()}/100 | XP ${state.xp}`;
  $("livesLabel").textContent = `Vidas ${state.zoneLives[currentZone().id]}`;
  $("reserveLabel").textContent = `Reserva ${state.reserveLives}`;
  $("timeLabel").textContent = `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
}

function validateActivity() {
  const activity = currentActivity();
  const zone = currentZone();
  state.attempts[activity.id] = (state.attempts[activity.id] || 0) + 1;

  let correct = false;
  if (activity.kind === "fraction") {
    const expected = ratioMap[activity.ratio];
    correct = sideCandidates($("numInput").value).has(expected[0]) &&
      sideCandidates($("denInput").value).has(expected[1]);
  }
  if (activity.kind === "fractionText") {
    const num = normalizeMathText($("numInput").value);
    const den = normalizeMathText($("denInput").value);
    correct = activity.num.map(normalizeMathText).includes(num) &&
      activity.den.map(normalizeMathText).includes(den);
  }
  if (activity.kind === "text") {
    const answer = normalizeMathText($("answerInput").value);
    correct = answer.length > 0 &&
      activity.answers.map(normalizeMathText).some(expected => answer.includes(expected) || expected.includes(answer));
  }
  if (activity.kind === "choice") {
    const answer = normalizeMathText(state.selectedOption);
    correct = answer.length > 0 &&
      activity.answers.map(normalizeMathText).some(expected => answer.includes(expected) || expected.includes(answer));
  }

  if (correct) {
    state.completed.add(activity.id);
    state.xp += activity.xp;
    recordAttempt(activity, true, activity.xp);
    playEffect("correct");
    showModal(
      "¡Muy bien!",
      "Construcción lograda",
      `Formaste una relación correcta y ganaste ${activity.xp} XP. Sigue construyendo con calma: cada paso deja evidencia de tu razonamiento.`,
      [{ label: "Seguir", primary: true, onClick: () => {
        const previousZone = state.currentZone;
        const previousActivity = state.currentActivity;
        advanceActivity();
        saveProgress(false);
        if (state.currentZone === previousZone && state.currentActivity !== previousActivity) {
          renderLevelMap();
          show("levelMapScreen");
        } else {
          renderAll();
        }
      }}]
    );
  } else {
    const zoneId = zone.id;
    if (state.zoneLives[zoneId] > 0) state.zoneLives[zoneId] -= 1;
    if (zone.final && state.zoneLives[zoneId] === 0 && state.reserveLives > 0) {
      state.reserveLives -= 1;
      state.zoneLives[zoneId] = 1;
    }
    recordAttempt(activity, false, 0);
    playEffect("error");
    if (state.zoneLives[zoneId] === 0) {
      const lostZoneIndex = state.currentZone;
      showModal(
        "Reinicio de zona",
        "Respira: esta zona vuelve a empezar",
        `Perdiste las vidas de ${zone.short}. Solo se reinicia esta zona; las zonas anteriores permanecen guardadas.`,
        [{ label: "Reintentar zona", primary: true, onClick: () => {
          resetZone(lostZoneIndex);
          saveProgress(false);
          renderAll();
        }}]
      );
    } else {
      const livesText = `${state.zoneLives[zoneId]} vida${state.zoneLives[zoneId] === 1 ? "" : "s"}`;
      showModal(
        "Pista formativa",
        "Ajusta tu razonamiento",
        `Revisa la construcción, identifica las partes y vuelve a intentar. Te queda${state.zoneLives[zoneId] === 1 ? "" : "n"} ${livesText} en esta zona.`,
        [{ label: "Volver al reto", primary: true, onClick: () => renderAll() }]
      );
    }
  }
  saveProgress(false);
}

function advanceActivity() {
  const zone = currentZone();
  const next = zone.activities.findIndex(activity => !state.completed.has(activity.id));
  if (next >= 0) {
    state.currentActivity = next;
    return;
  }
  const remainingLives = state.zoneLives[zone.id];
  const perfect = remainingLives === 5;
  if (perfect) state.reserveLives += 5;
  state.zoneLives[zone.id] = 5;
  const nextZone = zones.findIndex((candidate, index) => index > state.currentZone && zoneUnlocked(index));
  if (nextZone >= 0) {
    playEffect("reward");
    showModal(
      "Zona superada",
      perfect ? "¡Zona perfecta!" : "Zona completada",
      perfect
        ? "Completaste la zona conservando tus 5 vidas. Ganaste 5 vidas extra para el reto final."
        : `Completaste la zona con ${remainingLives} vida${remainingLives === 1 ? "" : "s"}. La siguiente zona inicia nuevamente con 5 vidas.`,
      [
        { label: "Seguir explorando" },
        { label: "Avanzar", primary: true, onClick: () => {
          state.currentZone = nextZone;
          const target = currentZone();
          state.currentActivity = target.activities.findIndex(activity => !state.completed.has(activity.id));
          if (state.currentActivity < 0) state.currentActivity = 0;
          renderLevelMap();
          show("levelMapScreen");
        }}
      ]
    );
  } else if (zones.some((candidate, index) => index > state.currentZone && isConstructionZone(candidate))) {
    playEffect("reward");
    showModal(
      "Avance guardado",
      "Llegaste al límite del avance disponible",
      "La siguiente zona es Cociente y está en construcción. Por ahora, revisaremos con más detalle las identidades recíprocas.",
      [{ label: "Volver al mapa", primary: true, onClick: () => {
        renderMap();
        show("mapScreen");
      }}]
    );
  } else {
    playEffect("reward");
    showModal(
      "Aventura completada",
      "Has terminado todas las zonas",
      "Guarda o envía tu progreso. El docente podrá revisar tus intentos, tiempos, XP, vidas y evidencias de construcción.",
      [{ label: "Guardar progreso", primary: true, onClick: () => saveProgress(true) }]
    );
  }
}

function recordAttempt(activity, correct, xpEarned) {
  const zone = currentZone();
  const seconds = Math.max(1, Math.round((Date.now() - state.activityStart) / 1000));
  state.records.push({
    fecha: new Date().toLocaleString(),
    estudiante: state.student,
    grado: state.grade,
    zona: zone.title,
    actividad: zone.build,
    reto: activity.title,
    nivel: activity.level,
    actividadEspecifica: activity.text,
    intentos: state.attempts[activity.id],
    tiempoSegundos: seconds,
    tiempo: formatDuration(seconds),
    tiempoTotalSegundos: totalElapsedSeconds(),
    tiempoTotal: formatDuration(totalElapsedSeconds()),
    xp: xpEarned,
    puntaje100: score100(),
    vidasZona: state.zoneLives[zone.id],
    reserva: state.reserveLives,
    pegoTexto: state.pasted ? "Sí" : "No",
    capacidad: capacities[activity.capacity],
    pensamientoComputacional: activity.ct,
    estado: correct ? "Logrado" : "En proceso"
  });
}

function progressPayload() {
  return {
    id: `${state.student}|${state.grade}`,
    estudiante: state.student,
    grado: state.grade,
    avatar: state.avatar,
    xp: state.xp,
    puntaje100: score100(),
    reserva: state.reserveLives,
    completadas: state.completed.size,
    total: totalActivities(),
    tiempoTotalSegundos: totalElapsedSeconds(),
    tiempoTotal: formatDuration(totalElapsedSeconds()),
    registros: state.records,
    actualizado: new Date().toLocaleString()
  };
}

function saveProgress(showMessage = true) {
  if (!state.student) return;
  const sessions = JSON.parse(localStorage.getItem("mt_sessions") || "[]");
  const payload = progressPayload();
  const index = sessions.findIndex(item => item.id === payload.id);
  if (index >= 0) sessions[index] = payload;
  else sessions.push(payload);
  localStorage.setItem("mt_sessions", JSON.stringify(sessions));
  if (showMessage) {
    showModal("Progreso", "Avance guardado", "Tu progreso quedó guardado en este navegador. Puedes seguir trabajando o enviarlo al docente.", [{ label: "Continuar", primary: true }]);
  }
}

function downloadProgressBackup() {
  saveProgress(false);
  const blob = new Blob([JSON.stringify(progressPayload(), null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `progreso-${state.student || "estudiante"}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

async function exportProgress() {
  saveProgress(false);
  if (!state.student || !state.grade) {
    showModal("Progreso", "Datos incompletos", "Completa nombre y Grado/Sección antes de enviar el progreso.", [{ label: "Continuar", primary: true }]);
    return;
  }
  if (!state.records.length) {
    showModal("Progreso", "Aún no hay actividad", "Realiza al menos un reto para generar registros antes de enviar.", [{ label: "Continuar", primary: true }]);
    return;
  }

  const body = new URLSearchParams();
  body.append("payload", JSON.stringify(progressPayload()));

  try {
    await fetch(SHEETS_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body
    });
    showModal(
      "Progreso enviado",
      "Tu avance fue enviado",
      "El reporte se envió a Google Sheets. Si el docente no lo ve, usa la descarga de respaldo.",
      [
        { label: "Descargar respaldo", onClick: downloadProgressBackup },
        { label: "Continuar", primary: true }
      ]
    );
  } catch {
    showModal(
      "Envío no completado",
      "Usa el respaldo",
      "No se pudo enviar automáticamente. Descarga el reporte y envíaselo al docente.",
      [{ label: "Descargar respaldo", primary: true, onClick: downloadProgressBackup }]
    );
  }
}

function viewGrade() {
  const grades = JSON.parse(localStorage.getItem("mt_grades") || "{}");
  const grade = grades[`${state.student}|${state.grade}`];
  if (!grade) {
    showModal("Nota docente", "Aún no hay nota", "Todavía no hay una nota registrada por el docente en este navegador.", [{ label: "Continuar", primary: true }]);
    return;
  }
  showModal("Nota docente", `Nota: ${grade.score}`, `Comentario: ${grade.feedback || "Sin comentario"}`, [{ label: "Continuar", primary: true }]);
}

function renderTeacher() {
  renderRecordsTable();
  renderRubricTable();
  renderGradeTable();
}

function allRecords() {
  const sessions = JSON.parse(localStorage.getItem("mt_sessions") || "[]");
  return sessions.flatMap(session => session.registros || []);
}

function renderRecordsTable() {
  const rows = allRecords();
  const sessions = JSON.parse(localStorage.getItem("mt_sessions") || "[]");
  renderTeacherSummary(rows);
  $("recordsTable").innerHTML = `
    <thead><tr><th>Estudiante</th><th>Grado/Sección</th><th>Avance</th><th>Puntaje</th><th>Tiempo total</th><th>Progreso individual</th></tr></thead>
    <tbody>
      ${sessions.map(session => `
        <tr>
          <td>${session.estudiante}</td>
          <td>${session.grado}</td>
          <td>${session.completadas}/${session.total}</td>
          <td>${session.puntaje100 || 0}/100</td>
          <td>${session.tiempoTotal || ""}</td>
          <td><button data-progress-key="${encodeURIComponent(session.id)}">Ver progreso</button></td>
        </tr>
      `).join("") || `<tr><td colspan="6">Aún no hay estudiantes registrados.</td></tr>`}
    </tbody>
  `;
  document.querySelectorAll("[data-progress-key]").forEach(button => {
    button.addEventListener("click", () => renderIndividualProgress(decodeURIComponent(button.dataset.progressKey)));
  });
}

function renderIndividualProgress(sessionId) {
  const sessions = JSON.parse(localStorage.getItem("mt_sessions") || "[]");
  const session = sessions.find(item => item.id === sessionId);
  const rows = session?.registros || [];
  const headers = ["Estudiante", "Grado", "Zona", "Actividad", "Reto", "Nivel", "Actividad específica", "Intentos", "Tiempo reto", "Tiempo total", "XP", "Puntaje 100", "Vidas", "Reserva", "Pegó", "Capacidad", "Pensamiento computacional", "Estado"];
  $("recordsTable").innerHTML = `
    <caption style="caption-side: top; text-align: left; padding: .55rem; font-weight: 900;">
      Progreso individual: ${session?.estudiante || ""} ${session?.grado ? `(${session.grado})` : ""}
      <button type="button" id="backStudentListBtn" style="margin-left:.8rem;">Volver a la lista</button>
    </caption>
    <thead><tr>${headers.map(header => `<th>${header}</th>`).join("")}</tr></thead>
    <tbody>
      ${rows.map(row => `
        <tr>
          <td>${row.estudiante}</td><td>${row.grado}</td><td>${row.zona}</td><td>${row.actividad}</td>
          <td>${row.reto}</td><td>${row.nivel}</td><td>${row.actividadEspecifica}</td><td>${row.intentos}</td>
          <td>${row.tiempo || formatDuration(row.tiempoSegundos)}</td><td>${row.tiempoTotal || ""}</td><td>${row.xp}</td><td>${row.puntaje100 || ""}</td><td>${row.vidasZona}</td><td>${row.reserva}</td><td>${row.pegoTexto}</td>
          <td>${row.capacidad}</td><td>${row.pensamientoComputacional}</td><td>${row.estado}</td>
        </tr>
      `).join("") || `<tr><td colspan="${headers.length}">Aún no hay registros guardados.</td></tr>`}
    </tbody>
  `;
  $("backStudentListBtn").addEventListener("click", renderRecordsTable);
}

function renderTeacherSummary(rows) {
  const students = new Set(rows.map(row => `${row.estudiante}|${row.grado}`));
  const totalSeconds = rows.reduce((max, row) => Math.max(max, Number(row.tiempoTotalSegundos) || 0), 0);
  const maxScore = rows.reduce((max, row) => Math.max(max, Number(row.puntaje100) || 0), 0);
  const totalXp = rows.reduce((sum, row) => sum + (Number(row.xp) || 0), 0);
  $("teacherSummary").innerHTML = `
    <div class="summary-card">Estudiantes<br>${students.size}</div>
    <div class="summary-card">Registros<br>${rows.length}</div>
    <div class="summary-card">Tiempo total mayor<br>${formatDuration(totalSeconds)}</div>
    <div class="summary-card">Mejor puntaje<br>${maxScore}/100</div>
    <div class="summary-card">XP acumulada<br>${totalXp}</div>
  `;
}

function renderRubricTable() {
  $("rubricTable").innerHTML = `
    <thead><tr><th>Dimensión</th><th>Criterio</th><th>Destacado (4)</th></tr></thead>
    <tbody>${rubric.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}</tbody>
  `;
}

function renderGradeTable() {
  const sessions = JSON.parse(localStorage.getItem("mt_sessions") || "[]");
  const grades = JSON.parse(localStorage.getItem("mt_grades") || "{}");
  $("gradeTable").innerHTML = `
    <thead><tr><th>Estudiante</th><th>Grado</th><th>XP</th><th>Avance</th><th>Nota</th><th>Comentario</th><th>Enviar nota</th></tr></thead>
    <tbody>
      ${sessions.map((session, index) => {
        const key = `${session.estudiante}|${session.grado}`;
        const saved = grades[key] || {};
        const scoreId = `score-${index}`;
        const feedbackId = `feedback-${index}`;
        return `
          <tr>
            <td>${session.estudiante}</td><td>${session.grado}</td><td>${session.xp}</td><td>${session.completadas}/${session.total}</td>
            <td><input id="${scoreId}" value="${saved.score || ""}"></td>
            <td><input id="${feedbackId}" value="${saved.feedback || ""}"></td>
            <td><button data-grade-key="${encodeURIComponent(key)}" data-score-id="${scoreId}" data-feedback-id="${feedbackId}">Enviar</button></td>
          </tr>
        `;
      }).join("") || `<tr><td colspan="7">Aún no hay estudiantes registrados.</td></tr>`}
    </tbody>
  `;
  document.querySelectorAll("[data-grade-key]").forEach(button => {
    button.addEventListener("click", () => {
      const key = decodeURIComponent(button.dataset.gradeKey);
      const gradesData = JSON.parse(localStorage.getItem("mt_grades") || "{}");
      gradesData[key] = {
        score: $(button.dataset.scoreId).value,
        feedback: $(button.dataset.feedbackId).value,
        date: new Date().toLocaleString()
      };
      localStorage.setItem("mt_grades", JSON.stringify(gradesData));
      showModal("Docente", "Nota enviada", "La nota quedó disponible para el estudiante en este navegador.", [{ label: "Continuar", primary: true }]);
    });
  });
}

function downloadRecordsCsv() {
  const rows = allRecords();
  if (!rows.length) {
    showModal("Docente", "Sin registros", "Todavía no hay registros para descargar.", [{ label: "Continuar", primary: true }]);
    return;
  }
  const columns = [
    ["fecha", "Fecha"],
    ["estudiante", "Estudiante"],
    ["grado", "Grado/Sección"],
    ["zona", "Zona"],
    ["actividad", "Actividad"],
    ["reto", "Reto"],
    ["nivel", "Nivel"],
    ["actividadEspecifica", "Actividad específica"],
    ["intentos", "Intentos"],
    ["tiempo", "Tiempo del reto"],
    ["tiempoTotal", "Tiempo total en simulador"],
    ["xp", "XP ganada"],
    ["puntaje100", "Puntaje sobre 100"],
    ["vidasZona", "Vidas de zona"],
    ["reserva", "Vidas extra"],
    ["pegoTexto", "Pegó texto"],
    ["capacidad", "Capacidad matemática"],
    ["pensamientoComputacional", "Pensamiento computacional"],
    ["estado", "Estado"]
  ];
  const clean = (value) => String(value ?? "").replace(/"/g, '""').replace(/\r?\n/g, " ");
  const csv = [
    "sep=;",
    columns.map(([, header]) => `"${clean(header)}"`).join(";"),
    ...rows.map(row => columns.map(([key]) => `"${clean(row[key])}"`).join(";"))
  ].join("\n");
  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "reporte-mundo-trigonometrico.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      if (!payload.id || !Array.isArray(payload.registros)) {
        showModal("Docente", "Formato no válido", "El archivo no tiene el formato de progreso esperado.", [{ label: "Continuar", primary: true }]);
        return;
      }
      const sessions = JSON.parse(localStorage.getItem("mt_sessions") || "[]");
      const index = sessions.findIndex(item => item.id === payload.id);
      if (index >= 0) sessions[index] = payload;
      else sessions.push(payload);
      localStorage.setItem("mt_sessions", JSON.stringify(sessions));
      renderTeacher();
      showModal("Docente", "Progreso importado", "El avance del estudiante ya aparece en la base de datos del panel docente.", [{ label: "Continuar", primary: true }]);
    } catch {
      showModal("Docente", "No se pudo leer", "Revisa que el archivo sea el reporte JSON descargado desde el simulador.", [{ label: "Continuar", primary: true }]);
    }
  };
  reader.readAsText(file);
}

function markInput(input) {
  input.addEventListener("focus", () => state.activeInput = input.id);
  input.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "v") return;
    input.className = "typed";
  });
  input.addEventListener("paste", () => {
    state.pasted = true;
    setTimeout(() => input.className = "pasted", 0);
  });
}

function bindEvents() {
  document.querySelectorAll("[data-screen]").forEach(button => {
    button.addEventListener("click", () => show(button.dataset.screen));
  });

  $("enterBtn").addEventListener("click", () => {
    const name = $("studentName").value.trim();
    const grade = $("studentGrade").value.trim();
    if (!name || !grade) {
      showModal("Inicio", "Datos incompletos", "Completa tu nombre y Grado/Sección para iniciar la aventura.", [{ label: "Completar", primary: true }]);
      return;
    }
    state.student = name;
    state.grade = grade;
    state.avatar = document.querySelector('input[name="avatar"]:checked')?.value || "varon";
    $("welcomeTitle").textContent = `Bienvenido, ${name}`;
    show("welcomeScreen");
  });

  $("shareBtn").addEventListener("click", async () => {
    const url = location.protocol.startsWith("http") ? location.href : PUBLIC_URL;
    try {
      await navigator.clipboard.writeText(url);
      showModal("Compartir", "Enlace copiado", `Comparte este enlace con tus estudiantes: ${url}`, [{ label: "Listo", primary: true }]);
    } catch {
      showModal("Compartir", "Enlace del simulador", `Comparte este enlace con tus estudiantes: ${url}`, [{ label: "Listo", primary: true }]);
    }
  });

  $("teacherBtn").addEventListener("click", () => show("teacherLoginScreen"));
  $("teacherAccessBtn").addEventListener("click", () => {
    if ($("teacherCodeInput").value !== TEACHER_CODE) {
      showModal("Acceso docente", "Clave incorrecta", "Revisa la clave docente e inténtalo nuevamente.", [{ label: "Intentar otra vez", primary: true }]);
      return;
    }
    renderTeacher();
    show("teacherScreen");
  });

  $("startBtn").addEventListener("click", () => {
    state.startTime = Date.now();
    renderMap();
    show("mapScreen");
  });

  $("continueZoneBtn").addEventListener("click", () => {
    renderLevelMap();
    show("levelMapScreen");
  });
  $("backToWorldMapBtn").addEventListener("click", () => {
    renderMap();
    show("mapScreen");
  });
  $("openCurrentActivityBtn").addEventListener("click", () => {
    renderAll();
    show("simScreen");
  });
  $("mapBtn").addEventListener("click", () => {
    renderLevelMap();
    show("levelMapScreen");
  });
  $("musicBtn").addEventListener("click", toggleMusic);
  $("musicBtnMap").addEventListener("click", toggleMusic);
  $("exportProgressMapBtn").addEventListener("click", exportProgress);
  $("viewGradeMapBtn").addEventListener("click", viewGrade);
  $("viewGradeLevelBtn").addEventListener("click", viewGrade);

  $("validateBtn").addEventListener("click", validateActivity);
  $("exportProgressBtn").addEventListener("click", exportProgress);
  $("viewGradeBtn").addEventListener("click", viewGrade);
  $("databaseTab").addEventListener("click", () => {
    $("databasePanel").classList.remove("hidden");
    $("rubricPanel").classList.add("hidden");
  });
  $("rubricTab").addEventListener("click", () => {
    $("rubricPanel").classList.remove("hidden");
    $("databasePanel").classList.add("hidden");
    renderRubricTable();
    renderGradeTable();
  });
  $("downloadRecordsBtn").addEventListener("click", downloadRecordsCsv);
  $("importProgressInput").addEventListener("change", importProgress);

  document.querySelectorAll("[data-fill]").forEach(button => {
    button.addEventListener("click", () => {
      const input = button.dataset.fill === "num" ? $("numInput") : $("denInput");
      input.value = button.dataset.side;
      input.className = "typed";
      state.activeInput = input.id;
    });
  });

  document.querySelectorAll("[data-symbol]").forEach(button => {
    button.addEventListener("click", () => {
      const input = $(state.activeInput || "answerInput");
      input.value += button.dataset.symbol;
      input.className = "typed";
      input.focus();
    });
  });

  ["numInput", "denInput", "answerInput"].forEach(id => markInput($(id)));
}

bindEvents();
setInterval(updateStatus, 1000);
