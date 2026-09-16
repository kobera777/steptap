/**
 * Red de seguridad visual: capturas de página completa y comparación píxel a píxel.
 *
 *   node scripts/shots.mjs capture --name baseline   → shots/baseline/*.png (referencia)
 *   node scripts/shots.mjs capture --name current    → shots/current/*.png  (tras cambios)
 *   node scripts/shots.mjs diff [--threshold 0.1]    → tabla + shots/diff/*.png
 *
 * `capture` arranca `next start -p 3999` sobre el último `npm run build`
 * (o usa --url si ya hay un servidor). Requiere Chromium de Playwright
 * (`npx playwright install chromium`); si no está, usa Edge o Chrome del sistema.
 */

import { spawn, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const shotsDir = path.join(root, "shots");

/** Páginas que se capturan. El primer álbum de la galería se lee de data/gallery.ts. */
const ROUTES = ["/", "/about", "/directions", "/schedule", "/song-analysis", "/gallery"];
/** Anchos de pantalla: escritorio, tableta, móvil. */
const WIDTHS = [1280, 768, 375];
const PORT = 3999;

// ---------- argumentos ----------
const [mode, ...rest] = process.argv.slice(2);
const args = Object.fromEntries(
  rest
    .map((a, i, all) => (a.startsWith("--") ? [a.slice(2), all[i + 1]] : []))
    .filter((x) => x.length),
);

if (mode === "capture") await capture(args.name ?? "current", args.url);
else if (mode === "diff") await diff(parseFloat(args.threshold ?? "0.1"));
else {
  console.error(
    "Uso: node scripts/shots.mjs capture --name baseline|current [--url …]\n     node scripts/shots.mjs diff [--threshold 0.1]",
  );
  process.exit(2);
}

// ---------- captura ----------
async function capture(name, url) {
  const outDir = path.join(shotsDir, name);
  mkdirSync(outDir, { recursive: true });

  const routes = [...ROUTES, firstAlbumRoute()];
  let server;
  if (!url) {
    if (!existsSync(path.join(root, ".next"))) {
      console.error("No hay build. Ejecuta primero: npm run build");
      process.exit(1);
    }
    server = await startServer();
    url = `http://localhost:${PORT}`;
  }

  const browser = await launchBrowser();
  const context = await browser.newContext({
    reducedMotion: "reduce", // MotionEffects muestra todo sin animar
    deviceScaleFactor: 1,
    locale: "ru-RU",
  });

  console.log(
    `Capturando ${routes.length} páginas × ${WIDTHS.length} anchos → shots/${name}/`,
  );
  for (const route of routes) {
    for (const width of WIDTHS) {
      const page = await context.newPage();
      await page.setViewportSize({ width, height: 900 });
      await page.goto(url + route, { waitUntil: "networkidle" });
      // Contenido que cambia solo (vídeos incrustados) se tapa; el cursor no se ve.
      await page.addStyleTag({
        content:
          "iframe, video { visibility: hidden !important; } * { cursor: none !important; }",
      });
      await page.evaluate(async () => {
        await document.fonts.ready;
        // Recorre la página para disparar imágenes lazy y vuelve arriba.
        const step = window.innerHeight;
        for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
        await new Promise((r) => setTimeout(r, 300));
      });
      await page.waitForLoadState("networkidle");
      const file = path.join(outDir, `${fileName(route)}-${width}.png`);
      await page.screenshot({ path: file, fullPage: true, animations: "disabled" });
      console.log(`  ✓ ${route.padEnd(40)} ${width}px`);
      await page.close();
    }
  }

  await browser.close();
  stopServer(server);
  console.log("Listo.");
}

async function launchBrowser() {
  try {
    return await chromium.launch();
  } catch {
    for (const channel of ["msedge", "chrome"]) {
      try {
        const b = await chromium.launch({ channel });
        console.log(
          `(Chromium de Playwright no instalado; usando ${channel} del sistema)`,
        );
        return b;
      } catch {
        /* siguiente */
      }
    }
    console.error("No hay navegador. Ejecuta: npx playwright install chromium");
    process.exit(1);
  }
}

function startServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn("npx", ["next", "start", "-p", String(PORT)], {
      cwd: root,
      shell: true,
      stdio: ["ignore", "pipe", "inherit"],
    });
    const deadline = Date.now() + 60_000;
    const ping = async () => {
      try {
        const res = await fetch(`http://localhost:${PORT}/`);
        if (res.ok) return resolve(proc);
      } catch {
        /* aún no responde */
      }
      if (Date.now() > deadline) {
        stopServer(proc);
        return reject(new Error("next start no respondió en 60 s"));
      }
      setTimeout(ping, 500);
    };
    proc.stdout.on("data", () => {});
    ping();
  });
}

/** Mata `next start` y sus hijos (en Windows `kill()` solo cierra el shell). */
function stopServer(proc) {
  if (!proc) return;
  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(proc.pid), "/T", "/F"], { stdio: "ignore" });
  } else {
    proc.kill();
  }
}

function firstAlbumRoute() {
  const src = readFileSync(path.join(root, "data", "gallery.ts"), "utf8");
  const m = src.match(/slug:\s*"([^"]+)"/);
  return m ? `/gallery/${m[1]}` : "/gallery";
}

function fileName(route) {
  return route === "/" ? "home" : route.slice(1).replace(/\//g, "__");
}

// ---------- comparación ----------
async function diff(threshold) {
  const baseDir = path.join(shotsDir, "baseline");
  const curDir = path.join(shotsDir, "current");
  const diffDir = path.join(shotsDir, "diff");
  if (!existsSync(baseDir) || !existsSync(curDir)) {
    console.error(
      "Faltan capturas. Primero: npm run shots:baseline (antes) y npm run shots (después).",
    );
    process.exit(1);
  }
  mkdirSync(diffDir, { recursive: true });

  const files = readdirSync(baseDir)
    .filter((f) => f.endsWith(".png"))
    .sort();
  let failed = 0;
  const rows = [];

  for (const file of files) {
    const curFile = path.join(curDir, file);
    if (!existsSync(curFile)) {
      rows.push([file, "—", "—", "falta en current"]);
      failed++;
      continue;
    }
    const a = PNG.sync.read(readFileSync(path.join(baseDir, file)));
    const b = PNG.sync.read(readFileSync(curFile));
    const width = Math.max(a.width, b.width);
    const height = Math.max(a.height, b.height);
    const A = pad(a, width, height);
    const B = pad(b, width, height);
    const out = new PNG({ width, height });
    const changed = pixelmatch(A.data, B.data, out.data, width, height, {
      threshold: 0.1,
    });
    const pct = (changed / (width * height)) * 100;
    const sizeNote = a.height !== b.height ? ` alto ${a.height}→${b.height}` : "";
    if (pct > threshold) {
      failed++;
      writeFileSync(path.join(diffDir, file), PNG.sync.write(out));
    }
    rows.push([
      file,
      String(changed),
      pct.toFixed(3) + " %",
      (pct > threshold ? "CAMBIÓ" : "ok") + sizeNote,
    ]);
  }

  const w = [Math.max(...rows.map((r) => r[0].length)), 10, 9];
  console.log(
    "\n" +
      "archivo".padEnd(w[0]) +
      "  píxeles".padStart(w[1]) +
      "  %".padStart(w[2]) +
      "  estado",
  );
  for (const [f, px, pct, st] of rows)
    console.log(f.padEnd(w[0]) + px.padStart(w[1]) + pct.padStart(w[2]) + "  " + st);
  console.log(
    failed
      ? `\n${failed} captura(s) con cambios por encima de ${threshold} %. Diferencias en shots/diff/.`
      : `\nSin cambios visuales (${rows.length} capturas, umbral ${threshold} %).`,
  );
  process.exit(failed ? 1 : 0);
}

/** Rellena con blanco hasta width×height para poder comparar alturas distintas. */
function pad(png, width, height) {
  if (png.width === width && png.height === height) return png;
  const out = new PNG({ width, height, fill: true });
  out.data.fill(255);
  PNG.bitblt(png, out, 0, 0, png.width, png.height, 0, 0);
  return out;
}
