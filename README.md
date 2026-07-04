# MUNDO TRIGONOMÉTRICO

Versión base profesional del simulador, migrada temporalmente desde la versión 10 hacia una arquitectura con React + Vite + Phaser.

## Qué conserva de la versión 10

- Inicio de sesión con nombres, apellidos, Grado/Sección y avatar.
- Acceso docente con clave privada.
- Mapa general de zonas.
- Mapa por niveles: Inicio, Intermedio y Avanzado.
- Vidas por zona, XP, puntaje sobre 100 y envío de progreso.
- Zona 3 de cociente bloqueada temporalmente.
- Panel docente con lista de estudiantes, progreso individual, rúbrica, notas y descarga CSV.
- Conexión preparada con Google Sheets mediante Apps Script.
- Copia temporal de la versión 10 en `public/legacy-v10`.

## Nueva estructura

- `src/data`: zonas, retos, rúbrica y configuración.
- `src/services`: progreso, CSV, Google Sheets, sonido y utilidades matemáticas.
- `src/game`: escenas Phaser para actividades arrastrables e interactivas.
- `src/styles`: diseño visual general.

## Cómo ejecutar

```bash
npm install
npm run dev
```

## Cómo generar archivos para publicar

```bash
npm run build
```

Luego se sube el contenido de la carpeta `dist` si se usa un hosting como Netlify, Vercel o Cloudflare Pages.  
Para GitHub Pages también puede publicarse el proyecto completo y configurar la compilación con Vite.

## Clave docente

La clave docente actual es:

```text
PROFE-TRIGO-2026
```
