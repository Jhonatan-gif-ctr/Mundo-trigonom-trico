<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mundo Trigonométrico</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main id="app">
    <section class="screen login-screen" id="loginScreen">
      <div class="math-bg" aria-hidden="true"></div>
      <article class="panel login-card">
        <p class="eyebrow">Simulador web constructivo</p>
        <h1>MUNDO TRIGONOMÉTRICO</h1>
        <p class="lead">Construye, prueba, explica y generaliza identidades trigonométricas mediante retos graduados.</p>

        <label class="field">
          <span>Nombres y apellidos</span>
          <input id="studentName" autocomplete="name">
        </label>

        <label class="field">
          <span>Grado/Sección</span>
          <input id="studentGrade" autocomplete="off">
        </label>

        <div class="field">
          <span>Avatar</span>
          <div class="avatar-choice">
            <label><input type="radio" name="avatar" value="varon" checked> Explorador</label>
            <label><input type="radio" name="avatar" value="mujer"> Exploradora</label>
          </div>
        </div>

        <div class="login-actions">
          <button class="primary" id="enterBtn">Entrar como estudiante</button>
          <button type="button" id="shareBtn">Compartir enlace</button>
          <button type="button" id="teacherBtn">Entrar como docente</button>
        </div>
      </article>
    </section>

    <section class="screen hidden" id="teacherLoginScreen">
      <article class="panel login-card">
        <p class="eyebrow">Acceso docente</p>
        <h1>Panel de seguimiento</h1>
        <p class="lead">Ingresa la clave docente para revisar avances, rúbrica y calificaciones.</p>
        <label class="field">
          <span>Clave docente</span>
          <input id="teacherCodeInput" type="password" autocomplete="off">
        </label>
        <div class="login-actions">
          <button class="primary" id="teacherAccessBtn">Ingresar</button>
          <button type="button" data-screen="loginScreen">Volver</button>
        </div>
      </article>
    </section>

    <section class="screen hidden" id="welcomeScreen">
      <article class="panel welcome-card">
        <p class="eyebrow">Bienvenida</p>
        <h1 id="welcomeTitle">Bienvenido</h1>
        <p class="lead">Aquí no basta recordar una fórmula: deberás construirla, comprobarla, explicar el patrón y resolver retos.</p>

        <div class="info-grid">
          <div class="info info-theory"><strong>Teoría</strong><span>Observa relaciones y símbolos antes de operar.</span></div>
          <div class="info info-activity"><strong>Actividad</strong><span>Manipula valores, arma fracciones y completa reglas.</span></div>
          <div class="info info-challenge"><strong>Reto</strong><span>Supera niveles básico, intermedio y avanzado.</span></div>
          <div class="info info-progress"><strong>Progreso</strong><span>El sistema registra intentos, tiempo, XP, vidas y uso de pegado.</span></div>
        </div>

        <div class="rules-card">
          <h2>Cómo funciona la aventura</h2>
          <p><strong>Zonas bloqueadas:</strong> avanzarás en orden. Cada zona se desbloquea cuando completas la anterior.</p>
          <p><strong>Vidas por zona:</strong> comienzas cada zona con 5 vidas. Si las pierdes, solo se reinicia esa zona, no todo tu progreso.</p>
          <p><strong>Recuperación:</strong> si completas una zona con 1, 2, 3 o 4 vidas, la siguiente zona inicia nuevamente con 5 vidas.</p>
          <p><strong>Bonificación perfecta:</strong> si completas una zona conservando las 5 vidas, además acumulas 5 vidas extra para el reto final.</p>
          <p><strong>Tiempo y progreso:</strong> puedes enviar tu avance en cualquier momento, aunque no hayas terminado todas las zonas.</p>
          <p><strong>Importante:</strong> si cierras o recargas la página antes de enviar tu progreso, podrías perder el avance de esta sesión.</p>
        </div>

        <button class="primary" id="startBtn">Comenzar aventura</button>
      </article>
    </section>

    <section class="screen hidden" id="mapScreen">
      <header class="topbar">
        <div>
          <h1>Mapa de aventura</h1>
          <p>Elige una zona desbloqueada. Tu avatar marcará el lugar de la ruta donde estás avanzando.</p>
        </div>
        <div class="status">
          <button type="button" id="musicBtnMap">Música quiz: apagada</button>
          <span id="mapScoreLabel">Puntaje 0/100</span>
        </div>
      </header>
      <section class="map-layout">
        <article class="panel map-panel">
          <h2>Ruta trigonométrica</h2>
          <p class="lead">Cada zona se desbloquea al completar la anterior. Dentro de cada zona también avanzarás por niveles.</p>
          <div class="adventure-map" id="adventureMap"></div>
          <div class="map-actions">
            <button class="primary" id="continueZoneBtn">Ver niveles de la zona actual</button>
            <button type="button" id="exportProgressMapBtn">Enviar progreso</button>
            <button type="button" id="viewGradeMapBtn">Ver nota</button>
          </div>
        </article>
      </section>
    </section>

    <section class="screen hidden" id="levelMapScreen">
      <header class="topbar">
        <div>
          <h1 id="levelMapTitle">Mapa de niveles</h1>
          <p id="levelMapSubtitle">Completa los niveles en orden. Cada punto abre una ventana de actividad.</p>
        </div>
        <div class="status">
          <button type="button" id="backToWorldMapBtn">Mapa general</button>
          <button type="button" id="viewGradeLevelBtn">Ver nota</button>
          <button type="button" id="openCurrentActivityBtn" class="primary">Entrar al nivel actual</button>
        </div>
      </header>
      <section class="map-layout">
        <article class="panel map-panel">
          <h2 id="levelMapZoneName">Zona</h2>
          <p class="lead" id="levelMapZoneText">Construye, comprueba y comunica lo que descubriste.</p>
          <div class="level-adventure-map" id="levelAdventureMap"></div>
        </article>
      </section>
    </section>

    <section class="screen hidden" id="simScreen">
      <header class="topbar">
        <div>
          <h1>MUNDO TRIGONOMÉTRICO</h1>
          <p id="zoneSubtitle">Razones e identidades trigonométricas</p>
        </div>
        <div class="status">
          <button type="button" id="mapBtn">Mapa de niveles</button>
          <button type="button" id="musicBtn">Música quiz: apagada</button>
          <span id="studentLabel">Estudiante</span>
          <span id="xpLabel">XP 0</span>
          <span id="livesLabel">Vidas 5</span>
          <span id="reserveLabel">Reserva 0</span>
          <span id="timeLabel">00:00</span>
        </div>
      </header>

      <nav class="zone-nav" id="zoneNav"></nav>
      <section class="level-track panel" id="levelTrack"></section>

      <section class="workspace">
        <div class="left-scroll">
          <section class="panel theory-card">
            <p class="eyebrow" id="zoneTag">Zona</p>
            <h2 id="zoneTitle">Zona</h2>
            <div id="zoneTheory"></div>
          </section>

          <section class="panel activity-card">
            <h2>Construye y comprende</h2>
            <p id="buildPrompt"></p>
            <canvas id="triangleCanvas" width="760" height="380" aria-label="Triángulo rectángulo interactivo"></canvas>
            <div id="interactiveArea"></div>
          </section>

          <section class="panel pythagoras-card">
            <h2>Registro matemático</h2>
            <p id="mathRecord">Completa la actividad para ver cómo cambia el registro.</p>
          </section>
        </div>

        <aside class="right-scroll">
          <section class="panel instruction-card">
            <h2>Instrucciones de la zona</h2>
            <p id="zoneInstructions"></p>
          </section>

          <section class="panel challenge-card" id="challengeCard">
            <p class="eyebrow" id="challengeLevel">Nivel</p>
            <h2 id="challengeTitle">Reto</h2>
            <p id="challengeText"></p>

            <div id="challengeControls">
              <div id="fractionBox" class="fraction-builder">
                <label>
                  <span>Numerador</span>
                  <input id="numInput" autocomplete="off">
                </label>
                <div class="fraction-line"></div>
                <label>
                  <span>Denominador</span>
                  <input id="denInput" autocomplete="off">
                </label>
              </div>

              <label id="answerBox" class="field answer-field">
                <span>Respuesta o explicación breve</span>
                <input id="answerInput" autocomplete="off">
              </label>

              <div id="optionBox" class="option-box"></div>

              <div class="symbol-buttons">
                <button type="button" data-symbol="√2">Insertar √2</button>
                <button type="button" data-symbol="√3">Insertar √3</button>
              </div>

              <div class="quick-buttons" id="quickButtons">
                <button data-fill="num" data-side="opuesto">↑ opuesto</button>
                <button data-fill="num" data-side="adyacente">↑ adyacente</button>
                <button data-fill="num" data-side="hipotenusa">↑ hipotenusa</button>
                <button data-fill="den" data-side="opuesto">↓ opuesto</button>
                <button data-fill="den" data-side="adyacente">↓ adyacente</button>
                <button data-fill="den" data-side="hipotenusa">↓ hipotenusa</button>
              </div>

              <p class="hint">Texto pegado: rojo. Texto escrito: azul. El reporte docente registra este dato.</p>
              <button class="primary" id="validateBtn">Validar reto</button>
            </div>
          </section>

          <section class="panel values-card">
            <h2>Valores y progreso</h2>
            <p id="valuesText"></p>
          </section>

          <section class="panel sliders-card">
            <h2>Construye los catetos</h2>
            <div id="sliders"></div>
          </section>

          <section class="panel progress-card">
            <h2>Cierre y envío</h2>
            <button type="button" id="closeActivityBtn">Cerrar actividad</button>
            <button type="button" id="exportProgressBtn">Enviar progreso</button>
            <button type="button" id="viewGradeBtn">Ver nota docente</button>
          </section>
        </aside>
      </section>
    </section>

    <section class="screen hidden" id="teacherScreen">
      <header class="topbar">
        <div>
          <h1>Panel docente</h1>
          <p>Seguimiento, rúbrica y calificación del simulador</p>
        </div>
        <div class="status">
          <button type="button" data-screen="loginScreen">Salir</button>
        </div>
      </header>

      <section class="teacher-layout">
        <div class="teacher-tabs">
          <button class="primary" id="databaseTab">Base de datos</button>
          <button id="rubricTab">Rúbrica y notas</button>
        </div>

        <section class="panel" id="databasePanel">
          <h2>Base de datos de interacción</h2>
          <p class="lead">Registra zona, actividad, reto, nivel, intentos, tiempo, XP, vidas, uso de pegado y capacidades trabajadas.</p>
          <div class="teacher-summary" id="teacherSummary"></div>
          <label class="field">
            <span>Importar progreso enviado por estudiante (.json)</span>
            <input id="importProgressInput" type="file" accept="application/json">
          </label>
          <div class="table-wrap">
            <table id="recordsTable"></table>
          </div>
          <button type="button" id="downloadRecordsBtn">Descargar reporte CSV</button>
        </section>

        <section class="panel hidden" id="rubricPanel">
          <h2>Rúbrica de evaluación</h2>
          <div class="table-wrap">
            <table id="rubricTable"></table>
          </div>

          <h2>Calificar estudiantes</h2>
          <div class="table-wrap">
            <table id="gradeTable"></table>
          </div>
        </section>
      </section>
    </section>

    <section class="modal-layer hidden" id="modalLayer" aria-live="polite">
      <article class="modal-card">
        <p class="eyebrow" id="modalKind">Mensaje</p>
        <h2 id="modalTitle">Título</h2>
        <p id="modalMessage">Mensaje</p>
        <div class="modal-actions" id="modalActions"></div>
      </article>
    </section>
  </main>

  <script src="app.js"></script>
</body>
</html>
