const TEACHER_CODE = "PROFE-TRIGO-2026";
const PUBLIC_URL = "https://jhonatan-gif-ctr.github.io/Mundo-trigonom-trico/";
const SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx3JVYQ_ldDd7rv1-LuSrdYlkOhKUzMjlBfk5Y5Pf7DxjScYp8e8vYo8PJ_oWL9BQWoKw/exec";

const capacities = {
  traduce: "Traduce datos y condiciones a expresiones algebraicas y gráficas",
  comunica: "Comunica su comprensión sobre relaciones algebraicas",
  estrategias: "Usa estrategias y procedimientos para encontrar reglas generales",
  argumenta: "Argumenta afirmaciones sobre relaciones de cambio y equivalencia"
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
  sen: "sen α",
  cos: "cos α",
  tan: "tan α",
  csc: "csc α",
  sec: "sec α",
  cot: "cot α"
};

const zones = [
  {
    id: "razones",
    short: "Razones",
    title: "Zona 1: Razones trigonométricas",
    tag: "Triángulo rectángulo",
    instructions: "Construye los catetos con los deslizadores. Identifica opuesto, adyacente e hipotenusa respecto a α. Luego arma la fracción pedida.",
    build: "Descompón el triángulo: primero ubica α, luego decide qué lado cambia de nombre según ese ángulo y finalmente construye la razón.",
    theory: "Las seis razones nacen de comparar dos lados del triángulo rectángulo respecto a α.",
    type: "triangle",
    activities: [
      { id: "raz-sen", level: "Básico", kind: "fraction", ratio: "sen", title: "Construye sen α", text: "Forma sen α con los lados del triángulo.", xp: 20, capacity: "comunica", ct: "Descomposición" },
      { id: "raz-cos", level: "Básico", kind: "fraction", ratio: "cos", title: "Construye cos α", text: "Forma cos α. Recuerda: el valor escrito puede representar un lado si coincide exactamente.", xp: 20, capacity: "comunica", ct: "Abstracción" },
      { id: "raz-tan", level: "Intermedio", kind: "fraction", ratio: "tan", title: "Construye tan α", text: "Forma tan α sin usar la hipotenusa.", xp: 25, capacity: "estrategias", ct: "Pensamiento algorítmico" },
      { id: "raz-problema", level: "Avanzado", kind: "text", answers: ["5/4", "c/b", "hipotenusa/adyacente"], title: "Problema: secante", text: "Si a = 3, b = 4 y c = 5, escribe sec α.", xp: 30, capacity: "traduce", ct: "Reconocimiento de patrones" }
    ]
  },
  {
    id: "reciprocas",
    short: "Recíprocas",
    title: "Zona 2: Identidades recíprocas",
    tag: "Invertir razones",
    instructions: "Construye una razón y observa cuál aparece al invertir numerador y denominador.",
    build: "Si una razón compara A/B, su recíproca compara B/A. Busca pares que se invierten.",
    theory: "csc α = 1/sen α, sec α = 1/cos α, cot α = 1/tan α.",
    type: "cards",
    activities: [
      { id: "rec-csc", level: "Básico", kind: "fractionText", num: ["1"], den: ["sen", "senα", "senx"], title: "Construye csc α", text: "Completa la identidad: csc α = 1 / ?", xp: 20, capacity: "comunica", ct: "Patrones" },
      { id: "rec-sec", level: "Intermedio", kind: "text", answers: ["1/cos", "1/cosα", "1/cosx"], title: "Juego de parejas", text: "Escribe la pareja recíproca de cos α.", xp: 25, capacity: "estrategias", ct: "Reconocimiento de patrones" },
      { id: "rec-problema", level: "Avanzado", kind: "text", answers: ["5/3"], title: "Problema numérico", text: "Si sen α = 3/5, ¿cuánto vale csc α?", xp: 30, capacity: "traduce", ct: "Abstracción" }
    ]
  },
  {
    id: "cociente",
    short: "Cociente",
    title: "Zona 3: Identidades de cociente",
    tag: "Razones entre razones",
    instructions: "Relaciona sen, cos, tan y cot. No memorices: divide y simplifica.",
    build: "Compara sen α y cos α como fracciones; al dividirlas aparece tan α.",
    theory: "tan α = sen α/cos α y cot α = cos α/sen α.",
    type: "cards",
    activities: [
      { id: "coc-tan", level: "Básico", kind: "fractionText", num: ["sen", "senα", "senx"], den: ["cos", "cosα", "cosx"], title: "Construye tan α", text: "Completa tan α como cociente de dos razones.", xp: 20, capacity: "comunica", ct: "Descomposición" },
      { id: "coc-num", level: "Intermedio", kind: "text", answers: ["3/4"], title: "Simplifica", text: "Si sen α = 3/5 y cos α = 4/5, calcula tan α.", xp: 25, capacity: "estrategias", ct: "Pensamiento algorítmico" },
      { id: "coc-cot", level: "Avanzado", kind: "fractionText", num: ["cos", "cosα", "cosx"], den: ["sen", "senα", "senx"], title: "Generaliza cot α", text: "Construye cot α usando sen α y cos α.", xp: 30, capacity: "argumenta", ct: "Generalización" }
    ]
  },
  {
    id: "negativos",
    short: "Negativos",
    title: "Zona 4: Identidades para negativos",
    tag: "Simetrías",
    instructions: "Observa qué cambia cuando el ángulo pasa de α a -α. Decide si la función conserva o cambia de signo.",
    build: "En el círculo unitario, x se conserva y y cambia de signo. Por eso cos es par, sen y tan son impares.",
    theory: "sen(-x) = -sen x, cos(-x) = cos x, tan(-x) = -tan x.",
    type: "unit",
    activities: [
      { id: "neg-sen", level: "Básico", kind: "text", answers: ["-senx", "-senα", "-sen"], title: "Simetría del seno", text: "Completa: sen(-x) = ?", xp: 20, capacity: "comunica", ct: "Patrones" },
      { id: "neg-cos", level: "Intermedio", kind: "text", answers: ["cosx", "cosα", "cos"], title: "Simetría del coseno", text: "Completa: cos(-x) = ?", xp: 25, capacity: "argumenta", ct: "Abstracción" },
      { id: "neg-reto", level: "Avanzado", kind: "text", answers: ["-tanx", "-tanα", "-tan"], title: "Reto de signo", text: "Si tan x es positiva, ¿cómo se expresa tan(-x)?", xp: 30, capacity: "estrategias", ct: "Pensamiento algorítmico" }
    ]
  },
  {
    id: "pitagoricas",
    short: "Pitagóricas",
    title: "Zona 5: Identidades pitagóricas",
    tag: "Construcción desde Pitágoras",
    instructions: "Parte de c² = a² + b². Divide toda la igualdad por c², b² o a² para construir identidades.",
    build: "La primera identidad se obtiene al dividir a² + b² = c² entre c²: sen² α + cos² α = 1.",
    theory: "sen²x + cos²x = 1, tan²x + 1 = sec²x, 1 + cot²x = csc²x.",
    type: "cards",
    activities: [
      { id: "pit-uno", level: "Básico", kind: "text", answers: ["1"], title: "Construye la primera", text: "Completa: sen²x + cos²x = ?", xp: 25, capacity: "argumenta", ct: "Abstracción" },
      { id: "pit-sec", level: "Intermedio", kind: "text", answers: ["sec²x", "sec2x", "sec^2x"], title: "Divide por cos²x", text: "Completa: tan²x + 1 = ?", xp: 30, capacity: "estrategias", ct: "Pensamiento algorítmico" },
      { id: "pit-csc", level: "Avanzado", kind: "text", answers: ["csc²x", "csc2x", "csc^2x"], title: "Divide por sen²x", text: "Completa: 1 + cot²x = ?", xp: 35, capacity: "argumenta", ct: "Generalización" }
    ]
  },
  {
    id: "suma",
    short: "Suma",
    title: "Zona 6: Identidades de suma",
    tag: "Composición de ángulos",
    instructions: "Analiza cómo una función de x + y se construye con funciones de x y de y.",
    build: "Reconoce el patrón: seno mezcla seno-coseno; coseno conserva productos iguales y cambia signo; tangente usa un cociente.",
    theory: "sen(x+y)=senx cos y + seny cosx; cos(x+y)=cosx cos y - senx seny; tan(x+y)=(tanx+tany)/(1-tanx tany).",
    type: "cards",
    activities: [
      { id: "sum-sen", level: "Básico", kind: "text", answers: ["senxcosy+senycosx", "senxcosy+cosxseny"], title: "Arma sen(x+y)", text: "Escribe sen(x+y) sin espacios.", xp: 30, capacity: "comunica", ct: "Patrones" },
      { id: "sum-cos", level: "Intermedio", kind: "text", answers: ["cosxcosy-senxseny"], title: "Arma cos(x+y)", text: "Escribe cos(x+y) sin espacios.", xp: 35, capacity: "estrategias", ct: "Pensamiento algorítmico" },
      { id: "sum-tan", level: "Avanzado", kind: "text", answers: ["(tanx+tany)/(1-tanxtany)", "tanx+tany/1-tanxtany"], title: "Reto abstracto", text: "Escribe tan(x+y). Puedes usar / para la fracción.", xp: 40, capacity: "argumenta", ct: "Abstracción" }
    ]
  },
  {
    id: "final",
    short: "Reto final",
    title: "Zona 7: Reto final adaptativo",
    tag: "Síntesis",
    instructions: "Usa tus vidas acumuladas para resolver problemas que mezclan construcción, patrones, algoritmos y argumentación.",
    build: "El reto final se desbloquea cuando completas las zonas anteriores. Usa tus reservas para sostener intentos difíciles.",
    theory: "Una identidad se comprende cuando puedes construirla, probarla, usarla y explicar por qué funciona.",
    type: "cards",
    final: true,
    activities: [
      { id: "fin-juego", level: "Difícil", kind: "text", answers: ["sec²x", "sec2x", "sec^2x"], title: "Juego de rutas", text: "Ruta: tan²x + 1 conduce a...", xp: 45, capacity: "estrategias", ct: "Pensamiento algorítmico" },
      { id: "fin-problema", level: "Difícil", kind: "text", answers: ["-senx", "-senα"], title: "Problema de simetría", text: "Un punto del círculo cambia de (x,y) a (x,-y). ¿Qué ocurre con sen?", xp: 45, capacity: "traduce", ct: "Abstracción" },
      { id: "fin-argumenta", level: "Experto", kind: "text", answers: ["patron", "identidad", "equivalencia", "pitagoras"], title: "Argumenta", text: "Explica en una palabra clave por qué sen²x + cos²x = 1.", xp: 50, capacity: "argumenta", ct: "Generalización" }
    ]
  }
];

const rubric = [
  ["Fundamentación matemática y curricular", "Coherencia con estándares/currículo", "Contenido alineado con precisión al nivel y competencias curriculares, con progresión lógica"],
  ["Descomposición y abstracción", "Fragmenta problemas complejos en partes manejables", "El usuario descompone problemas en subproblemas claros e identifica variables relevantes"],
  ["Reconocimiento de patrones y generalización", "Identifica regularidades y las generaliza", "El simulador exige detectar patrones y formular reglas generales"],
  ["Pensamiento algorítmico", "Diseña/sigue secuencias lógicas de pasos", "El usuario construye o ajusta reglas, fórmulas o procedimientos"],
  ["Retroalimentación formativa", "Calidad y oportunidad del feedback", "Retroalimentación inmediata, específica y orientada a corregir razonamiento"],
  ["Nivel de desafío y adaptabilidad", "Ajuste a diferentes niveles", "Niveles progresivos y reto final con vidas acumuladas"],
  ["Usabilidad e interfaz", "Claridad visual y facilidad de uso", "Interfaz intuitiva, accesible y con scroll por zonas"],
  ["Funcionalidad técnica", "Estabilidad y correcto funcionamiento", "Cálculos y simulaciones matemáticamente correctos"]
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
  xp: 0,
  reserveLives: 0,
  currentZone: 0,
  currentActivity: 0,
  activeInput: null,
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

function zoneUnlocked(index) {
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

function formulaHtml() {
  return `
    <div class="formula-grid">
      <div class="formula"><span>sen α =</span><span class="frac"><b>opuesto</b><i>hipotenusa</i></span></div>
      <div class="formula"><span>cos α =</span><span class="frac"><b>adyacente</b><i>hipotenusa</i></span></div>
      <div class="formula"><span>tan α =</span><span class="frac"><b>opuesto</b><i>adyacente</i></span></div>
      <div class="formula"><span>csc α =</span><span class="frac"><b>hipotenusa</b><i>opuesto</i></span></div>
      <div class="formula"><span>sec α =</span><span class="frac"><b>hipotenusa</b><i>adyacente</i></span></div>
      <div class="formula"><span>cot α =</span><span class="frac"><b>adyacente</b><i>opuesto</i></span></div>
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

function renderAll() {
  renderZoneNav();
  renderZone();
  renderChallenge();
  renderSliders();
  drawTriangle();
  updateStatus();
}

function renderZone() {
  const zone = currentZone();
  $("zoneSubtitle").textContent = zone.title;
  $("zoneTag").textContent = zone.tag;
  $("zoneTitle").textContent = zone.title;
  $("zoneTheory").innerHTML = `<p>${zone.theory}</p>${zone.id === "razones" ? formulaHtml() : ""}`;
  $("zoneInstructions").textContent = zone.instructions;
  $("buildPrompt").textContent = zone.build;
  $("competencyStrip").innerHTML = Object.values(capacities)
    .map(capacity => `<span class="tag">${capacity}</span>`)
    .join("");
  $("interactiveArea").innerHTML = `<div class="construct-card"><strong>Construcción:</strong> ${zone.build}</div>`;
  $("triangleCanvas").style.display = zone.type === "triangle" ? "block" : "none";
  updateValues();
}

function renderChallenge() {
  const activity = currentActivity();
  state.activityStart = Date.now();
  state.pasted = false;
  $("challengeLevel").textContent = `Nivel ${activity.level}`;
  $("challengeTitle").textContent = activity.title;
  $("challengeText").textContent = activity.text;
  $("fractionBox").classList.toggle("hidden", !["fraction", "fractionText"].includes(activity.kind));
  $("quickButtons").classList.toggle("hidden", activity.kind !== "fraction");
  $("answerBox").classList.toggle("hidden", activity.kind !== "text");
  $("numInput").value = "";
  $("denInput").value = "";
  $("answerInput").value = "";
  ["numInput", "denInput", "answerInput"].forEach(id => $(id).className = "");
  $("mathRecord").textContent = zoneRecordText();
}

function zoneRecordText() {
  const zone = currentZone();
  if (zone.id === "razones") {
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
    $("sliders").innerHTML = `<p>Esta zona usa retos de construcción simbólica. Vuelve a la Zona 1 para manipular el triángulo.</p>`;
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
  $("xpLabel").textContent = `XP ${state.xp}`;
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

  if (correct) {
    state.completed.add(activity.id);
    state.xp += activity.xp;
    recordAttempt(activity, true, activity.xp);
    showModal(
      "¡Muy bien!",
      "Construcción lograda",
      `Formaste una relación correcta y ganaste ${activity.xp} XP. Estás trabajando: ${capacities[activity.capacity]}.`,
      [{ label: "Seguir", primary: true, onClick: () => {
        advanceActivity();
        saveProgress(false);
        renderAll();
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
      showModal(
        "Pista formativa",
        "Ajusta tu razonamiento",
        `Revisa la construcción, identifica las partes y vuelve a intentar. Te quedan ${state.zoneLives[zoneId]} vidas en esta zona.`,
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
          renderAll();
        }}
      ]
    );
  } else {
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
    tiempo: seconds,
    xp: xpEarned,
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
    xp: state.xp,
    reserva: state.reserveLives,
    completadas: state.completed.size,
    total: zones.reduce((sum, z) => sum + z.activities.length, 0),
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
  const headers = ["Estudiante", "Grado", "Zona", "Actividad", "Reto", "Nivel", "Actividad específica", "Intentos", "Tiempo", "XP", "Vidas", "Reserva", "Pegó", "Capacidad", "Pensamiento computacional", "Estado"];
  $("recordsTable").innerHTML = `
    <thead><tr>${headers.map(header => `<th>${header}</th>`).join("")}</tr></thead>
    <tbody>
      ${rows.map(row => `
        <tr>
          <td>${row.estudiante}</td><td>${row.grado}</td><td>${row.zona}</td><td>${row.actividad}</td>
          <td>${row.reto}</td><td>${row.nivel}</td><td>${row.actividadEspecifica}</td><td>${row.intentos}</td>
          <td>${row.tiempo}s</td><td>${row.xp}</td><td>${row.vidasZona}</td><td>${row.reserva}</td><td>${row.pegoTexto}</td>
          <td>${row.capacidad}</td><td>${row.pensamientoComputacional}</td><td>${row.estado}</td>
        </tr>
      `).join("") || `<tr><td colspan="${headers.length}">Aún no hay registros guardados.</td></tr>`}
    </tbody>
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
  const headers = Object.keys(rows[0]);
  const csv = [
    headers.join(","),
    ...rows.map(row => headers.map(header => `"${String(row[header]).replace(/"/g, '""')}"`).join(","))
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
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
    show("simScreen");
    renderAll();
  });

  $("validateBtn").addEventListener("click", validateActivity);
  $("saveProgressBtn").addEventListener("click", () => saveProgress(true));
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
