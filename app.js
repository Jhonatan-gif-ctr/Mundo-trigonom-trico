const state = {
  student: "",
  grade: "",
  xp: 0,
  lives: 5,
  built: new Set(),
  startTime: Date.now(),
  challenge: "sen",
  controls: {
    aInt: 3,
    aR2: 0,
    aR3: 0,
    bInt: 4,
    bR2: 0,
    bR3: 0
  }
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

const $ = (id) => document.getElementById(id);

function show(id) {
  for (const screen of document.querySelectorAll(".screen")) {
    screen.classList.add("hidden");
  }
  $(id).classList.remove("hidden");
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

function normalize(text) {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");
}

function normalizeSide(text) {
  const t = normalize(text).replace(/\*/g, "");
  const exactA = normalize(exactSide("a"));
  const exactB = normalize(exactSide("b"));
  const exactC = normalize(exactHyp());
  if (["a", "opuesto", "catetoopuesto"].includes(t) || t === exactA) return "opuesto";
  if (["b", "adyacente", "catetoadyacente"].includes(t) || t === exactB) return "adyacente";
  if (["c", "hipotenusa"].includes(t) || t === exactC) return "hipotenusa";
  return "";
}

function drawTriangle() {
  const canvas = $("triangleCanvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const a = sideValue("a");
  const b = sideValue("b");
  const c = hypValue();
  const scale = Math.min(320 / b, 260 / a);
  const triW = b * scale;
  const triH = a * scale;
  const cx = (w - triW) / 2;
  const cy = h - 78;
  const ax = cx + triW;
  const ay = cy;
  const bx = cx;
  const by = cy - triH;

  ctx.strokeStyle = "rgba(19,159,82,.15)";
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

  label(ctx, cx - 65, (cy + by) / 2, `opuesto\na = ${exactSide("a")}`, "#dcfce7", "#139f52");
  label(ctx, (cx + ax) / 2, cy + 46, `adyacente\nb = ${exactSide("b")}`, "#ede9fe", "#7c3aed");
  label(ctx, (ax + bx) / 2 + 80, (ay + by) / 2, `hipotenusa\nc = ${exactHyp()}`, "#fee2e2", "#dc2626");

  $("pythagorasText").textContent = `c² = a² + b²  →  c² = (${exactSide("a")})² + (${exactSide("b")})²  →  c = ${exactHyp()}`;
}

function label(ctx, x, y, text, fill, stroke) {
  const lines = text.split("\n");
  const width = Math.max(...lines.map(line => line.length)) * 8 + 20;
  const height = lines.length * 18 + 12;
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

function updateStatus() {
  $("studentLabel").textContent = state.student;
  $("xpLabel").textContent = `XP ${state.xp}`;
  $("livesLabel").textContent = `Vidas ${state.lives}`;
  const sec = Math.floor((Date.now() - state.startTime) / 1000);
  $("timeLabel").textContent = `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
  $("builtLabel").textContent = `Razones construidas: ${state.built.size ? [...state.built].map(r => labels[r]).join(", ") : "ninguna"}`;
}

function updateValues() {
  const a = sideValue("a");
  const b = sideValue("b");
  const angle = Math.atan(a / b) * 180 / Math.PI;
  $("valuesText").innerHTML = `
    a = ${exactSide("a")}<br>
    b = ${exactSide("b")}<br>
    c = ${exactHyp()}<br>
    α ≈ ${Math.round(angle)} grados<br>
    Construidas: ${state.built.size} de 6
  `;
}

function setChallenge() {
  const remaining = Object.keys(ratioMap).filter(key => !state.built.has(key));
  if (!remaining.length) {
    const advance = confirm("Construiste las 6 razones trigonométricas.\n\nAceptar: avanzar al siguiente nivel.\nCancelar: seguir explorando.");
    if (!advance) {
      state.built.clear();
      updateAll();
      setChallenge();
    }
    return;
  }
  state.challenge = remaining[Math.floor(Math.random() * remaining.length)];
  $("challengeText").textContent = `Construye ${labels[state.challenge]} escribiendo numerador y denominador.`;
  $("numInput").value = "";
  $("denInput").value = "";
  $("numInput").className = "";
  $("denInput").className = "";
}

function buildSliders() {
  const defs = [
    ["aInt", "a entero", "opuesto"],
    ["aR2", "a coef √2", "opuesto"],
    ["aR3", "a coef √3", "opuesto"],
    ["bInt", "b entero", "adyacente"],
    ["bR2", "b coef √2", "adyacente"],
    ["bR3", "b coef √3", "adyacente"]
  ];
  $("sliders").innerHTML = "";
  defs.forEach(([key, labelText, type]) => {
    const row = document.createElement("div");
    row.className = `slider-row ${type}`;
    row.innerHTML = `
      <label>
        <span>${labelText}</span>
        <output>${state.controls[key]}</output>
      </label>
      <input type="range" min="0" max="10" step="1" value="${state.controls[key]}">
    `;
    const input = row.querySelector("input");
    const output = row.querySelector("output");
    input.addEventListener("input", () => {
      state.controls[key] = Number(input.value);
      output.textContent = input.value;
      state.built.clear();
      updateAll();
      setChallenge();
    });
    $("sliders").appendChild(row);
  });
}

function validateRatio() {
  const num = normalizeSide($("numInput").value);
  const den = normalizeSide($("denInput").value);
  const expected = ratioMap[state.challenge];
  if (!num || !den) {
    alert("Completa numerador y denominador. Puedes escribir opuesto, adyacente, hipotenusa, a, b, c o el valor exacto del lado.");
    return;
  }
  if (num === expected[0] && den === expected[1]) {
    state.built.add(state.challenge);
    state.xp += 15;
    alert(`¡Construcción lograda!\nFormaste correctamente ${labels[state.challenge]}. Ganaste 15 XP.`);
    updateAll();
    setChallenge();
  } else {
    state.lives -= 1;
    if (state.lives <= 0) state.lives = 5;
    alert("Revisa tu fracción. Observa qué lado debe ir arriba y cuál abajo.");
    updateAll();
  }
}

function updateAll() {
  drawTriangle();
  updateValues();
  updateStatus();
}

function markTyping(input) {
  input.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "v") return;
    input.className = "typed";
  });
  input.addEventListener("paste", () => {
    setTimeout(() => input.className = "pasted", 0);
  });
}

$("enterBtn").addEventListener("click", () => {
  const name = $("studentName").value.trim();
  const grade = $("studentGrade").value.trim();
  if (!name || !grade) {
    alert("Escribe tu nombre y grado o sección.");
    return;
  }
  state.student = name;
  state.grade = grade;
  $("welcomeTitle").textContent = `Bienvenido, ${name}`;
  show("welcomeScreen");
});

$("startBtn").addEventListener("click", () => {
  state.startTime = Date.now();
  show("simScreen");
  buildSliders();
  updateAll();
  setChallenge();
});

document.querySelectorAll("[data-fill]").forEach(button => {
  button.addEventListener("click", () => {
    const input = button.dataset.fill === "num" ? $("numInput") : $("denInput");
    input.value = button.dataset.side;
    input.className = "typed";
  });
});

$("validateBtn").addEventListener("click", validateRatio);
markTyping($("numInput"));
markTyping($("denInput"));
setInterval(updateStatus, 1000);
