#!/usr/bin/env node
/*
 * Generates 1200×630 article hero / social-share images in the EXL Cloud house style
 * for any article in src/content/articles that has no images/articles/<slug>.png yet.
 * Existing images are never overwritten (pass --force <slug> to regenerate one).
 *
 *     npm run images
 *
 * Requires Playwright + Chromium (npx playwright install chromium if not present).
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const forceIdx = process.argv.indexOf("--force");
const FORCE = forceIdx > -1 ? process.argv[forceIdx + 1] : null;

/* read title + heroType from each article's frontmatter */
const ARTICLES = fs.readdirSync(path.join(ROOT, "src/content/articles")).filter((f) => f.endsWith(".md")).map((f) => {
  const fmText = fs.readFileSync(path.join(ROOT, "src/content/articles", f), "utf8").match(/^---\n([\s\S]*?)\n---/)[1];
  const get = (k) => { const m = fmText.match(new RegExp(`^${k}:\\s*(.+)$`, "m")); return m ? JSON.parse(m[1]) : undefined; };
  return { slug: f.replace(/\.md$/, ""), title: get("title"), heroType: get("heroType") || "grid" };
});

const S = "rgba(116,198,157,0.28)"; // motif stroke
const MOTIFS = {
  grid: `<g stroke="${S}" stroke-width="1.5" fill="none">${[0, 1, 2, 3, 4, 5].map((i) => `<line x1="0" y1="${i * 40}" x2="300" y2="${i * 40}"/>`).join("")}${[0, 1, 2, 3, 4, 5].map((i) => `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="200"/>`).join("")}</g>
         <g fill="rgba(116,198,157,0.22)"><rect x="61" y="41" width="58" height="38"/><rect x="181" y="121" width="58" height="38"/><rect x="121" y="81" width="58" height="38"/></g>`,
  flow: `<g stroke="${S}" stroke-width="2" fill="none"><rect x="0" y="60" width="80" height="80" rx="10"/><rect x="130" y="0" width="80" height="80" rx="10"/><rect x="130" y="120" width="80" height="80" rx="10"/><rect x="260" y="60" width="80" height="80" rx="10"/>
         <path d="M80 100 L130 40 M80 100 L130 160 M210 40 L260 100 M210 160 L260 100"/></g>`,
  compare: `<g stroke="${S}" stroke-width="2" fill="none"><rect x="0" y="0" width="140" height="200" rx="12"/><rect x="200" y="0" width="140" height="200" rx="12"/><path d="M155 100 h30 M175 90 l10 10 -10 10"/></g>
         <g fill="rgba(116,198,157,0.2)">${[30, 70, 110, 150].map((y) => `<rect x="20" y="${y}" width="${100 - y / 3}" height="14" rx="4"/><rect x="220" y="${y}" width="${60 + y / 3}" height="14" rx="4"/>`).join("")}</g>`,
  chart: `<g fill="rgba(116,198,157,0.2)">${[40, 60, 75, 95, 120, 150, 185].map((h, i) => `<rect x="${i * 50}" y="${200 - h}" width="34" height="${h}" rx="4"/>`).join("")}</g><path d="M0 170 C100 140 200 90 340 20" stroke="${S}" stroke-width="2" fill="none"/>`,
  shield: `<path d="M170 0 l120 45 v65 c0 60 -50 105 -120 125 c-70 -20 -120 -65 -120 -125 v-65z" stroke="${S}" stroke-width="2.5" fill="rgba(116,198,157,0.06)"/><path d="M120 115 l35 35 l70 -75" stroke="rgba(116,198,157,0.45)" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  trending: `<path d="M0 200 L90 130 L160 160 L340 10" stroke="rgba(116,198,157,0.4)" stroke-width="4" fill="none" stroke-linejoin="round"/><path d="M290 10 h50 v50" stroke="rgba(116,198,157,0.4)" stroke-width="4" fill="none"/>
         <g stroke="${S}" stroke-width="1" fill="none">${[50, 100, 150].map((y) => `<line x1="0" y1="${y}" x2="340" y2="${y}" stroke-dasharray="4 6"/>`).join("")}</g>`,
  target: `<g stroke="${S}" stroke-width="2" fill="none"><circle cx="170" cy="105" r="100"/><circle cx="170" cy="105" r="68"/><circle cx="170" cy="105" r="36"/></g><circle cx="170" cy="105" r="10" fill="rgba(116,198,157,0.5)"/>
         <path d="M300 -10 L180 98" stroke="rgba(116,198,157,0.45)" stroke-width="4"/><path d="M285 -12 l20 0 0 20" stroke="rgba(116,198,157,0.45)" stroke-width="4" fill="none"/>`,
  search: `<g stroke="${S}" stroke-width="2" fill="none">${[0, 1, 2, 3].map((i) => `<rect x="0" y="${i * 50}" width="220" height="34" rx="6"/>`).join("")}</g>
         <g fill="rgba(116,198,157,0.25)"><rect x="10" y="10" width="120" height="14" rx="4"/><rect x="10" y="60" width="160" height="14" rx="4"/><rect x="10" y="110" width="90" height="14" rx="4"/><rect x="10" y="160" width="140" height="14" rx="4"/></g>
         <circle cx="270" cy="120" r="55" stroke="rgba(116,198,157,0.45)" stroke-width="5" fill="rgba(11,31,23,0.4)"/><path d="M310 160 l40 40" stroke="rgba(116,198,157,0.45)" stroke-width="8" stroke-linecap="round"/>`,
};

const html = (title, motif) => `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,700;9..40,800&display=swap" rel="stylesheet">
<style>
  html,body{margin:0;width:1200px;height:630px;overflow:hidden}
  body{font-family:'DM Sans',system-ui,sans-serif;position:relative;
    background:radial-gradient(ellipse 70% 60% at 55% 30%, #1E4A37 0%, transparent 70%), linear-gradient(170deg,#132A1F 0%,#0B1F17 60%,#050D09 100%)}
  .dots{position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px, rgba(116,198,157,0.07) 1px, transparent 0);background-size:24px 24px}
  .pill{position:absolute;top:36px;left:40px;background:#74C69D;color:#0B1F17;font-weight:700;font-size:14px;padding:9px 13px;border-radius:7px}
  .motif{position:absolute;left:430px;top:60px;width:360px;height:240px}
  .t{position:absolute;left:40px;bottom:96px;right:120px}
  .bar{width:60px;height:4px;background:#74C69D;border-radius:2px;margin-bottom:14px}
  h1{margin:0;color:#fff;font-weight:800;font-size:${title.length > 60 ? 38 : 44}px;line-height:1.15;letter-spacing:-0.3px;max-width:980px}
</style></head><body><div class="dots"></div><div class="pill">EXL Cloud</div>
<svg class="motif" viewBox="-10 -20 360 250">${motif}</svg>
<div class="t"><div class="bar"></div><h1>${title.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</h1></div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
let n = 0;
for (const a of ARTICLES) {
  const out = path.join(ROOT, "public/images/articles", `${a.slug}.png`);
  if (fs.existsSync(out) && FORCE !== a.slug) continue;
  await page.setContent(html(a.title, MOTIFS[a.heroType] || MOTIFS.grid), { waitUntil: "networkidle" });
  await page.screenshot({ path: out, type: "png" });
  console.log("  + images/articles/" + a.slug + ".png");
  n++;
}
await browser.close();
console.log(`✓ ${n} image(s) generated.`);
