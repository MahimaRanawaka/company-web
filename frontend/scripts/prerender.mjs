// Runs after `vite build`. Boots the built dist/ on a local static server,
// visits each marketing route with a real (headless) browser, and writes
// the fully-rendered HTML back into dist/<route>/index.html.
//
// Why: this is a client-only SPA (createRoot, not hydrateRoot in main.tsx),
// so a non-JS-executing crawler sees an empty <div id="root"> today. React
// still fully replaces this prerendered markup on the client once the bundle
// loads (createRoot always clears the container — no hydration mismatch),
// so real visitors are unaffected; only what a raw HTTP fetch sees changes.
//
// Scope: the ~14 marketing/nav routes only. The 16 service-detail and 12
// case-study-detail routes are still SPA-only — same technique, just not
// wired up yet, to keep build time and risk down for this first pass.

import { preview } from "vite";
import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROUTES = [
  "/",
  "/ennobler",
  "/ennobler/services",
  "/ennobler/products",
  "/ennobler/qaas",
  "/ennobler/pricing",
  "/oolo",
  "/oolo/services",
  "/oolo/pricing",
  "/portfolio",
  "/about",
  "/careers",
  "/contact",
  "/strategy-call",
];

async function main() {
  const server = await preview({ preview: { port: 4173, strictPort: false } });
  const base = server.resolvedUrls.local[0].replace(/\/$/, "");

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of ROUTES) {
    await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
    // small buffer past networkidle for any deferred/animated content to settle
    await page.waitForTimeout(300);
    const html = await page.content();

    const outDir = route === "/" ? "dist" : join("dist", route);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), html, "utf8");
    console.log(`prerendered ${route}`);
  }

  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
