:root {
  color-scheme: light;
  --ink: #102044;
  --navy: #132748;
  --line: #17284a;
  --paper: #fffdf8;
  --mint: #eaf7f1;
  --green: #34a86f;
  --gold: #ffe28a;
  --blue: #dfeaff;
  --shadow: 6px 6px 0 rgba(23, 40, 74, 0.28);
  font-family: "Trebuchet MS", Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  color: var(--ink);
  background: linear-gradient(135deg, #e7f4ef 0%, #f8fff8 45%, #eaf0ff 100%);
}

button,
input,
textarea {
  font: inherit;
}

button {
  border: 3px solid var(--line);
  background: var(--blue);
  color: var(--ink);
  font-weight: 800;
  padding: 0.75rem 1rem;
  cursor: pointer;
  box-shadow: 4px 4px 0 rgba(23, 40, 74, 0.28);
}

button:hover {
  transform: translateY(-1px);
}

button.primary {
  background: var(--gold);
}

button.locked {
  opacity: 0.55;
}

.screen {
  min-height: 100vh;
}

.center-screen {
  display: grid;
  place-items: center;
  padding: 2rem;
}

.trig-bg {
  background:
    radial-gradient(circle at 18% 18%, rgba(255, 226, 138, 0.46), transparent 24%),
    radial-gradient(circle at 80% 28%, rgba(168, 221, 255, 0.46), transparent 27%),
    linear-gradient(0deg, rgba(18, 39, 72, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(18, 39, 72, 0.04) 1px, transparent 1px),
    linear-gradient(135deg, #eaf7f1 0%, #fdfaf0 100%);
  background-size: auto, auto, 38px 38px, 38px 38px, auto;
}

.panel {
  background: var(--paper);
  border: 4px solid #9ccfb8;
  box-shadow: var(--shadow);
}

.login-card,
.welcome-card {
  width: min(760px, 100%);
  padding: 2rem;
}

.eyebrow {
  margin: 0 0 0.5rem;
  color: #4d6282;
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

h1,
h2 {
  margin: 0 0 0.75rem;
}

.lead {
  line-height: 1.55;
}

.field {
  display: grid;
  gap: 0.45rem;
  margin: 1rem 0;
  font-weight: 800;
}

.field input,
.field textarea {
  width: 100%;
  border: 3px solid var(--line);
  padding: 0.8rem;
  background: #fff;
  color: var(--ink);
}

.field textarea {
  min-height: 120px;
  resize: vertical;
}

.choice-row,
.button-row,
.top-actions,
.activity-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 86px;
  padding: 1rem 1.35rem;
  color: #fff;
  background: var(--navy);
  border-bottom: 4px solid var(--line);
}

.topbar h1,
.topbar p {
  margin: 0;
}

.top-actions span {
  font-weight: 900;
}

.top-actions button {
  background: #ecf3ff;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.info-grid article {
  display: grid;
  gap: 0.4rem;
  min-height: 108px;
  padding: 1rem;
  background: #ecfff3;
  border: 3px solid #9ccfb8;
  box-shadow: 4px 4px 0 rgba(23, 40, 74, 0.18);
}

.warning {
  padding: 1rem;
  border: 3px solid #f0b640;
  background: #fff7da;
  font-weight: 800;
}

.map-shell {
  width: min(1180px, calc(100% - 2rem));
  margin: 1.25rem auto;
  padding: 1.25rem;
}

.island-map {
  position: relative;
  min-height: 560px;
  overflow: hidden;
  border: 4px solid var(--line);
  background: linear-gradient(#bfe5ff, #dff7ff);
}

.island-map svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.island {
  fill: #93d56b;
  stroke: #5aa346;
  stroke-width: 12;
}

.route {
  fill: none;
  stroke: #f8d08a;
  stroke-width: 34;
  stroke-linecap: round;
  stroke-dasharray: 18 14;
}

.map-node {
  position: absolute;
  min-width: 108px;
  border-radius: 999px;
}

.map-node span:first-child {
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  margin-right: 0.35rem;
  border: 2px solid var(--line);
  border-radius: 50%;
  background: #fff;
}

.map-node.done {
  background: #d8ffe5;
}

.node-0 { left: 13%; top: 52%; }
.node-1 { left: 27%; top: 35%; }
.node-2 { left: 43%; top: 45%; }
.node-3 { left: 58%; top: 28%; }
.node-4 { left: 72%; top: 39%; }
.node-5 { left: 63%; top: 66%; }
.node-6 { left: 35%; top: 70%; }

.avatar {
  position: absolute;
  left: 50%;
  bottom: 110%;
  width: 38px;
  height: 54px;
  transform: translateX(-50%);
  animation: float 1.8s ease-in-out infinite;
}

.avatar::before {
  content: "";
  position: absolute;
  left: 8px;
  top: 0;
  width: 22px;
  height: 22px;
  border: 3px solid var(--line);
  border-radius: 50%;
  background: #ffd6ab;
}

.avatar span {
  position: absolute;
  left: 4px;
  top: 24px;
  width: 30px;
  height: 28px;
  border: 3px solid var(--line);
  border-radius: 9px 9px 4px 4px;
  background: #4d8bff;
}

.avatar.female span {
  background: #ff73af;
}

@keyframes float {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, -8px); }
}

.level-map {
  position: relative;
  min-height: 420px;
  overflow: hidden;
  border: 4px solid var(--line);
  background: radial-gradient(circle at 50% 50%, #fdf7df 0 18%, transparent 19%), linear-gradient(135deg, #dff7ff, #ecfff3);
}

.level-route {
  position: absolute;
  left: 16%;
  right: 16%;
  top: 52%;
  border-top: 16px dashed #f0b640;
}

.level-node {
  position: absolute;
  width: 190px;
  min-height: 96px;
  border-radius: 18px;
}

.level-node strong,
.level-node span {
  display: block;
}

.level-0 { left: 12%; top: 38%; }
.level-1 { left: calc(50% - 95px); top: 38%; }
.level-2 { right: 12%; top: 38%; }

.activity-layout {
  width: min(1240px, calc(100% - 2rem));
  margin: 1rem auto;
}

.activity-main {
  padding: 1.25rem;
}

.phaser-host {
  width: 100%;
  min-height: 520px;
  margin: 1rem 0;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 4px solid var(--line);
  background: #fff;
}

.construct-target {
  display: inline-block;
  padding: 0.65rem 1rem;
  border: 3px solid #9ccfb8;
  background: #f0fff5;
  font-weight: 900;
}

.activity-actions {
  position: sticky;
  bottom: 0;
  z-index: 4;
  padding: 1rem;
  border: 4px solid var(--line);
  background: rgba(255, 253, 248, 0.94);
}

.argument-box {
  margin-top: 1rem;
}

.teacher-layout {
  width: min(1240px, calc(100% - 2rem));
  margin: 1rem auto;
}

.teacher-tabs {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.teacher-layout .panel {
  padding: 1.25rem;
}

.student-list {
  display: grid;
  gap: 0.75rem;
  margin: 1rem 0;
}

.student-list button {
  display: flex;
  justify-content: space-between;
  background: #fff;
}

.table-wrap {
  max-width: 100%;
  overflow: auto;
  margin: 1rem 0;
  border: 3px solid var(--line);
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}

th,
td {
  padding: 0.65rem;
  border: 1px solid #b6c2d6;
  text-align: left;
}

th {
  color: #fff;
  background: var(--navy);
}

.grade-row {
  grid-template-columns: minmax(180px, 1fr) 130px;
  align-items: center;
}

.modal-layer {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(9, 17, 31, 0.58);
}

.modal-card {
  width: min(620px, 100%);
  padding: 1.5rem;
  background: var(--paper);
  border: 4px solid var(--line);
  box-shadow: var(--shadow);
}

@media (max-width: 820px) {
  .topbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .island-map,
  .level-map {
    min-height: 650px;
  }

  .map-node {
    left: 50% !important;
    transform: translateX(-50%);
  }

  .node-0 { top: 8%; }
  .node-1 { top: 20%; }
  .node-2 { top: 32%; }
  .node-3 { top: 44%; }
  .node-4 { top: 56%; }
  .node-5 { top: 68%; }
  .node-6 { top: 80%; }

  .level-node {
    left: 50% !important;
    right: auto !important;
    transform: translateX(-50%);
  }

  .level-0 { top: 12%; }
  .level-1 { top: 40%; }
  .level-2 { top: 68%; }

  .level-route {
    left: 50%;
    top: 15%;
    bottom: 15%;
    right: auto;
    border-top: 0;
    border-left: 16px dashed #f0b640;
  }
}
