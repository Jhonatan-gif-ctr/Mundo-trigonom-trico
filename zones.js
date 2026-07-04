import { useEffect, useRef } from "react";
import Phaser from "phaser";

export default function PhaserGame({ zone, activity, onSolved, onFeedback }) {
  const hostRef = useRef(null);

  useEffect(() => {
    if (!hostRef.current) return undefined;
    onSolved(false);

    const Scene = buildScene({ zone, activity, onSolved, onFeedback });
    const game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: hostRef.current,
      width: 980,
      height: 560,
      backgroundColor: "#f6fbf7",
      scene: Scene,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      }
    });

    return () => game.destroy(true);
  }, [zone.id, activity.id]);

  return <div className="phaser-host" ref={hostRef} />;
}

function buildScene({ zone, activity, onSolved, onFeedback }) {
  return class ChallengeScene extends Phaser.Scene {
    constructor() {
      super("challenge");
      this.solvedParts = new Set();
      this.expectedParts = 1;
    }

    create() {
      this.drawBase();
      if (activity.scene === "triangle-ratio") this.triangleRatio();
      else if (activity.scene === "reciprocal-balance") this.reciprocalBalance();
      else if (activity.scene === "reciprocal-rule") this.reciprocalRule();
      else if (activity.scene === "reciprocal-memory") this.reciprocalMemory();
      else if (activity.scene === "reciprocal-intruder") this.reciprocalIntruder();
      else if (activity.scene === "reciprocal-puzzle") this.reciprocalPuzzle();
      else if (activity.scene === "reciprocal-wheel") this.reciprocalWheel();
      else if (activity.scene === "elastic-triangle") this.elasticTriangle();
      else if (activity.scene === "circuit-match") this.circuitMatch();
      else if (activity.scene === "truth-belt") this.truthBelt();
      else if (activity.scene === "confused-avatar") this.confusedAvatar();
      else if (activity.scene === "expression-crusher") this.expressionCrusher();
      else if (activity.scene === "bridge-builder") this.bridgeBuilder();
      else if (activity.scene === "flow-verifier") this.flowVerifier();
      else if (activity.scene === "vault-cryptogram") this.vaultCryptogram();
      else this.placeholder();
      this.input.on("dragstart", (_pointer, object) => object.setDepth(20));
      this.input.on("drag", (pointer, object) => {
        object.x = pointer.x;
        object.y = pointer.y;
      });
      this.input.on("dragend", (_pointer, object, dropped) => {
        if (!dropped) this.returnCard(object);
      });
    }

    drawBase() {
      this.add.rectangle(490, 280, 960, 530, 0xf6fbf7).setStrokeStyle(4, 0x17284a);
      this.add.grid(490, 280, 940, 510, 40, 40, 0xffffff, 0, 0xa7d8c2, 0.26);
      this.add.text(28, 22, activity.title, { fontFamily: "Arial", fontSize: "25px", fontStyle: "bold", color: "#102044" });
      this.add.text(28, 56, activity.instruction, { fontFamily: "Arial", fontSize: "16px", color: "#102044", wordWrap: { width: 890 } });
    }

    text(x, y, value, size = 20, color = "#102044") {
      return this.add.text(x, y, value, {
        fontFamily: "Arial",
        fontSize: `${size}px`,
        fontStyle: "bold",
        color
      }).setOrigin(0.5);
    }

    card(x, y, label, value = label, color = 0xe8f0ff) {
      const box = this.add.rectangle(0, 0, Math.max(120, label.length * 11), 48, color).setStrokeStyle(3, 0x17284a);
      const text = this.add.text(0, 0, label, { fontFamily: "Arial", fontSize: "18px", fontStyle: "bold", color: "#102044" }).setOrigin(0.5);
      const card = this.add.container(x, y, [box, text]);
      card.value = value;
      card.home = { x, y };
      card.setSize(box.width, box.height);
      card.setInteractive({ draggable: true });
      this.input.setDraggable(card);
      return card;
    }

    slot(x, y, label, expected, key, width = 150, height = 58) {
      const rect = this.add.rectangle(x, y, width, height, 0xffffff).setStrokeStyle(3, 0x345c4a);
      this.text(x, y - height / 2 - 18, label, 15, "#345c4a");
      rect.setInteractive({ dropZone: true });
      rect.expected = Array.isArray(expected) ? expected : [expected];
      rect.key = key;
      this.input.on("drop", (_pointer, object, zoneObject) => {
        if (zoneObject !== rect) return;
        if (rect.expected.includes(object.value)) {
          object.x = rect.x;
          object.y = rect.y;
          object.disableInteractive();
          rect.setFillStyle(0xd9ffe7);
          this.solvedParts.add(rect.key);
          this.checkSolved();
          onFeedback("correct");
        } else {
          rect.setFillStyle(0xffdfdf);
          this.tweens.add({ targets: object, x: object.home.x, y: object.home.y, duration: 260, ease: "Back.Out" });
          this.time.delayedCall(260, () => rect.setFillStyle(0xffffff));
          onFeedback("error");
        }
      });
      return rect;
    }

    returnCard(object) {
      this.tweens.add({ targets: object, x: object.home.x, y: object.home.y, duration: 260, ease: "Back.Out" });
    }

    checkSolved() {
      if (this.solvedParts.size >= this.expectedParts) {
        onSolved(true);
        this.add.rectangle(490, 505, 560, 54, 0xe4ffe9).setStrokeStyle(3, 0x169c54);
        this.text(490, 505, "Construcción lista. Ahora valida el reto.", 20, "#0f6b39");
      }
    }

    triangleShape(x = 235, y = 420, scale = 1) {
      const g = this.add.graphics();
      g.lineStyle(5, 0x17284a, 1);
      g.fillStyle(0xdcecff, 1);
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(x, y - 220 * scale);
      g.lineTo(x + 330 * scale, y);
      g.closePath();
      g.fillPath();
      g.strokePath();
      this.add.rectangle(x + 24, y - 24, 38, 38, 0xffffff, 0).setStrokeStyle(4, 0x17284a);
      this.add.arc(x + 285 * scale, y, 56, 180, 255, false, 0xffe2e2).setStrokeStyle(4, 0xd72525);
      this.text(x + 292 * scale, y - 24, "α", 24, "#d72525");
      this.text(x - 72, y - 115 * scale, "opuesto", 18, "#0b8f48");
      this.text(x + 150 * scale, y + 58, "adyacente", 18, "#6734d9");
      this.text(x + 228 * scale, y - 112 * scale, "hipotenusa", 18, "#c82121");
    }

    triangleRatio() {
      this.expectedParts = 2;
      const [top, bottom] = {
        sen: ["opuesto", "hipotenusa"],
        cos: ["adyacente", "hipotenusa"],
        tan: ["opuesto", "adyacente"],
        csc: ["hipotenusa", "opuesto"],
        sec: ["hipotenusa", "adyacente"],
        cot: ["adyacente", "opuesto"]
      }[activity.ratio];
      this.triangleShape();
      this.slot(705, 235, "Numerador", top, "num", 220, 70);
      this.add.rectangle(705, 290, 240, 4, 0x17284a);
      this.slot(705, 355, "Denominador", bottom, "den", 220, 70);
      this.card(620, 470, "opuesto", "opuesto", 0xd9ffe7);
      this.card(760, 470, "adyacente", "adyacente", 0xeee4ff);
      this.card(900, 470, "hipotenusa", "hipotenusa", 0xffe3e3);
    }

    reciprocalBalance() {
      this.expectedParts = 6;
      this.triangleShape(125, 385, 0.65);
      const pairs = [
        ["sen(θ)", "y sobre r"],
        ["cos(θ)", "x sobre r"],
        ["tan(θ)", "y sobre x"],
        ["csc(θ)", "r sobre y"],
        ["sec(θ)", "r sobre x"],
        ["cot(θ)", "x sobre y"]
      ];
      pairs.forEach(([name, frac], index) => {
        this.slot(460 + (index % 3) * 155, 165 + Math.floor(index / 3) * 85, name, frac, `frac-${index}`, 130, 44);
        this.card(450 + (index % 3) * 155, 390 + Math.floor(index / 3) * 58, frac, frac, 0xfff1bd);
      });
      this.add.rectangle(760, 325, 280, 92, 0xffffff).setStrokeStyle(4, 0x17284a);
      this.text(760, 300, "Balanza: 1 = [ ] · [ ]", 19);
      this.slot(705, 350, "factor", "sen(θ)", "bal-a", 115, 45);
      this.slot(820, 350, "factor", "csc(θ)", "bal-b", 115, 45);
      this.card(680, 468, "sen(θ)", "sen(θ)", 0xd9ffe7);
      this.card(815, 468, "csc(θ)", "csc(θ)", 0xd9ffe7);
    }

    reciprocalRule() {
      this.expectedParts = 2;
      this.add.rectangle(500, 260, 690, 150, 0xffffff).setStrokeStyle(4, 0x17284a);
      this.text(500, 250, "n · m = [     ]  →  n = 1 sobre [     ]", 26);
      this.slot(450, 315, "primer vacío", "1", "one", 120, 52);
      this.slot(635, 315, "denominador", "m", "m", 120, 52);
      [["0", 0xe7efff], ["1", 0xdfffe8], ["-1", 0xffe4e4], ["m", 0xfff1bd], ["n", 0xfff1bd]].forEach((item, index) => this.card(260 + index * 120, 440, item[0], item[0], item[1]));
    }

    reciprocalMemory() {
      this.expectedParts = 3;
      const pairs = [["sen(θ)", "csc(θ)"], ["cos(θ)", "sec(θ)"], ["tan(θ)", "cot(θ)"]];
      pairs.flat().forEach((label, index) => this.card(230 + (index % 3) * 190, 195 + Math.floor(index / 3) * 120, label, label, 0xe8f0ff));
      pairs.forEach((pair, index) => this.slot(240 + index * 245, 435, `${pair[0]} · ${pair[1]}`, pair, `pair-${index}`, 200, 58));
    }

    reciprocalIntruder() {
      this.expectedParts = 1;
      this.add.rectangle(500, 250, 570, 110, 0xfff8df).setStrokeStyle(4, 0x17284a);
      this.text(500, 212, "cos(θ)  —  sec(θ)  —  csc(θ)", 25);
      this.slot(500, 360, "Expulsa el intruso", "csc(θ)", "intruder", 230, 70);
      this.card(330, 480, "cos(θ)", "cos(θ)");
      this.card(500, 480, "sec(θ)", "sec(θ)");
      this.card(670, 480, "csc(θ)", "csc(θ)", 0xffe2e2);
    }

    reciprocalPuzzle() {
      this.expectedParts = 6;
      const formulas = [
        ["csc(θ)", "1 sobre sen(θ)"],
        ["sec(θ)", "1 sobre cos(θ)"],
        ["cot(θ)", "1 sobre tan(θ)"]
      ];
      formulas.forEach(([left, right], index) => {
        this.slot(310, 170 + index * 95, left, left, `left-${index}`, 150, 54);
        this.text(430, 170 + index * 95, "=", 22);
        this.slot(560, 170 + index * 95, "fracción", right, `right-${index}`, 210, 54);
      });
      ["csc(θ)", "sec(θ)", "cot(θ)", "1 sobre sen(θ)", "1 sobre cos(θ)", "1 sobre tan(θ)"].forEach((label, index) => this.card(220 + (index % 3) * 230, 450 + Math.floor(index / 3) * 58, label, label, 0xfff1bd));
    }

    reciprocalWheel() {
      this.expectedParts = 1;
      this.add.circle(250, 285, 95, 0xfff1bd).setStrokeStyle(4, 0x17284a);
      this.text(250, 285, "tan(θ) · cot(θ) = 1", 18);
      this.text(610, 215, "Despeja cot(θ)", 24);
      this.slot(610, 305, "cot(θ) =", "1 sobre tan(θ)", "despeje", 240, 70);
      this.card(455, 450, "tan(θ)", "tan(θ)");
      this.card(610, 450, "1 sobre tan(θ)", "1 sobre tan(θ)", 0xdfffe8);
      this.card(790, 450, "tan(θ) sobre 1", "tan(θ) sobre 1");
    }

    elasticTriangle() {
      this.expectedParts = 1;
      this.triangleShape(170, 410, 0.82);
      this.add.rectangle(650, 220, 220, 28, 0x7c51ff);
      this.add.rectangle(650, 285, 220, 28, 0x0bbf72);
      this.add.rectangle(650, 350, 220, 28, 0xffd76b);
      this.text(650, 195, "tan(θ)", 18);
      this.text(650, 260, "cot(θ)", 18);
      this.text(650, 325, "Producto final = 1", 18);
      this.slot(650, 455, "Arrastra la conclusión", "tan(θ) · cot(θ) = 1", "product", 270, 58);
      this.card(650, 515, "tan(θ) · cot(θ) = 1", "tan(θ) · cot(θ) = 1", 0xdfffe8);
    }

    circuitMatch() {
      this.expectedParts = 3;
      const matches = [
        ["3 sen(θ)csc(θ)", "3"],
        ["5 sobre cos(θ)", "5 sec(θ)"],
        ["2 tan(θ)cot(θ)", "2"]
      ];
      matches.forEach(([left, right], index) => {
        this.slot(245, 170 + index * 105, left, right, `wire-${index}`, 250, 60);
        this.card(700, 170 + index * 105, right, right, 0xdfffe8);
      });
    }

    truthBelt() {
      this.expectedParts = 3;
      this.slot(315, 360, "Comprobado", "tan(θ) · cot(θ) = 1", "true-a", 260, 80);
      this.slot(665, 360, "Refutado", "sen(θ) · cos(θ) = 1", "false-a", 260, 80);
      this.card(230, 190, "tan(θ) · cot(θ) = 1", "tan(θ) · cot(θ) = 1", 0xdfffe8);
      this.card(510, 190, "sen(θ) · cos(θ) = 1", "sen(θ) · cos(θ) = 1", 0xffe3e3);
      this.slot(315, 455, "Comprobado", "cos(θ) · sec(θ) = 1", "true-b", 260, 80);
      this.card(760, 190, "cos(θ) · sec(θ) = 1", "cos(θ) · sec(θ) = 1", 0xdfffe8);
    }

    confusedAvatar() {
      this.expectedParts = 1;
      this.add.rectangle(500, 230, 650, 130, 0xfff8df).setStrokeStyle(4, 0x17284a);
      this.text(500, 205, "Si tan(θ) = 3 sobre 4, entonces cot(θ) = -3 sobre 4", 21);
      this.text(500, 250, "Borra la idea incorrecta y coloca la fracción invertida.", 17);
      this.slot(500, 365, "cot(θ) correcto", "4 sobre 3", "fix", 240, 70);
      this.card(310, 475, "-3 sobre 4", "-3 sobre 4", 0xffe3e3);
      this.card(500, 475, "4 sobre 3", "4 sobre 3", 0xdfffe8);
      this.card(690, 475, "3 sobre 4", "3 sobre 4");
    }

    expressionCrusher() {
      this.expectedParts = 2;
      this.add.rectangle(500, 165, 540, 80, 0xfff8df).setStrokeStyle(4, 0x17284a);
      this.text(500, 165, "E = 5 cos(θ)sec(θ) + 10", 24);
      this.slot(370, 320, "Trituradora", "cos(θ)sec(θ)", "crush", 230, 76);
      this.slot(645, 320, "Resultado final", "15", "result", 190, 76);
      this.card(290, 465, "cos(θ)sec(θ)", "cos(θ)sec(θ)", 0xdfffe8);
      this.card(485, 465, "1", "1", 0xfff1bd);
      this.card(645, 465, "15", "15", 0xdfffe8);
      this.card(785, 465, "10", "10");
    }

    bridgeBuilder() {
      this.expectedParts = 1;
      this.add.rectangle(250, 360, 230, 60, 0x94d3ff).setStrokeStyle(4, 0x17284a);
      this.add.rectangle(730, 360, 230, 60, 0x94d3ff).setStrokeStyle(4, 0x17284a);
      this.slot(490, 360, "Pieza del puente", "1 sobre csc(θ)", "bridge", 260, 76);
      this.card(360, 475, "1", "1", 0xfff1bd);
      this.card(520, 475, "csc(θ)", "csc(θ)");
      this.card(710, 475, "1 sobre csc(θ)", "1 sobre csc(θ)", 0xdfffe8);
    }

    flowVerifier() {
      this.expectedParts = 5;
      const expected = ["Inicio", "Leer A y B", "Multiplicar A · B", "¿Resultado = 1?", "Son recíprocas"];
      expected.forEach((label, index) => this.slot(500, 150 + index * 70, `Paso ${index + 1}`, label, `flow-${index}`, 260, 50));
      ["Multiplicar A · B", "Inicio", "Son recíprocas", "Leer A y B", "¿Resultado = 1?", "Sumar A + B"].forEach((label, index) => this.card(150 + (index % 3) * 220, 500 + Math.floor(index / 3) * 48, label, label, label.includes("Sumar") ? 0xffe3e3 : 0xe8f0ff));
    }

    vaultCryptogram() {
      this.expectedParts = 3;
      this.add.rectangle(500, 160, 760, 90, 0xfff8df).setStrokeStyle(4, 0x17284a);
      this.text(500, 145, "V = sen(α) · sec(β) · cot(γ)", 20);
      this.text(500, 180, "    csc(α) · cos(β) · tan(γ)", 20);
      this.slot(260, 350, "Patrón rojo", "sen(α) con csc(α)", "vault-a", 230, 70);
      this.slot(500, 350, "Patrón azul", "sec(β) con cos(β)", "vault-b", 230, 70);
      this.slot(740, 350, "Patrón verde", "cot(γ) con tan(γ)", "vault-c", 230, 70);
      this.card(230, 480, "sen(α) con csc(α)", "sen(α) con csc(α)", 0xffe3e3);
      this.card(500, 480, "sec(β) con cos(β)", "sec(β) con cos(β)", 0xe8f0ff);
      this.card(770, 480, "cot(γ) con tan(γ)", "cot(γ) con tan(γ)", 0xdfffe8);
    }

    placeholder() {
      this.expectedParts = 1;
      this.add.rectangle(500, 285, 650, 180, 0xfff8df).setStrokeStyle(4, 0x17284a);
      this.text(500, 260, "Escena en preparación", 28);
      this.text(500, 305, "Esta actividad conservará la estructura de progreso, vidas y reporte.", 18);
      this.slot(500, 405, "Marcar revisión", "listo", "placeholder", 180, 58);
      this.card(500, 500, "listo", "listo", 0xdfffe8);
    }
  };
}
