#!/usr/bin/env node
/*
 * Content guard-rails — run in CI before the build (npm run check).
 * Fails on: stale claims (old prices / skill counts / Boot Camp), gaps or duplicates in skill numbering,
 * related-skill references that don't exist, articles without a hero image.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const problems = [];
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));

const STALE = [
  [/\b(1\d|2[1-9]) (purpose-built )?(Claude )?(AI[- ]powered|AI) skills/gi, 'skill count in copy must be SKILLS_LABEL ("20+")'],
  [/\$(50|125) AUD/g, "old pricing — use PLANS in src/lib/site.js"],
  [/Boot Camp/g, "Boot Camp is unavailable on Apple silicon — say Parallels Desktop"],
];
for (const f of walk(path.join(ROOT, "src")).filter((f) => /\.(astro|jsx?|ts|md)$/.test(f))) {
  const txt = fs.readFileSync(f, "utf8");
  for (const [re, why] of STALE) for (const m of txt.matchAll(re)) problems.push(`${path.relative(ROOT, f)}: "${m[0]}" — ${why}`);
}

const fm = (file) => {
  const m = fs.readFileSync(file, "utf8").match(/^---\n([\s\S]*?)\n---/);
  return m ? m[1] : "";
};
const field = (src, k) => (src.match(new RegExp(`^${k}:\\s*(.+)$`, "m")) || [])[1];

const skillDir = path.join(ROOT, "src/content/skills");
const skills = fs.readdirSync(skillDir).filter((f) => f.endsWith(".md")).map((f) => {
  const s = fm(path.join(skillDir, f));
  return { f, n: Number(field(s, "number")), related: JSON.parse(field(s, "related") || "[]") };
});
const nums = skills.map((s) => s.n).sort((a, b) => a - b);
nums.forEach((n, i) => { if (n !== i + 1) problems.push(`skills: numbering gap/duplicate near ${n} (expected ${i + 1})`); });
for (const s of skills) {
  if (!s.f.startsWith(String(s.n).padStart(2, "0") + "-")) problems.push(`skills/${s.f}: file name should start with ${String(s.n).padStart(2, "0")}-`);
  for (const r of s.related) if (!nums.includes(r)) problems.push(`skills/${s.f}: related skill ${r} does not exist`);
}

const artDir = path.join(ROOT, "src/content/articles");
for (const f of fs.readdirSync(artDir).filter((f) => f.endsWith(".md"))) {
  const slug = f.replace(/\.md$/, "");
  if (!fs.existsSync(path.join(ROOT, "public/images/articles", slug + ".png"))) problems.push(`articles/${f}: no hero image — run npm run images`);
  const sk = JSON.parse(field(fm(path.join(artDir, f)), "skills") || "[]");
  for (const n of sk) if (!nums.includes(n)) problems.push(`articles/${f}: references skill ${n} which does not exist`);
}

if (problems.length) { console.error("✗ Content check failed:\n  " + problems.join("\n  ")); process.exit(1); }
console.log(`✓ Content check passed — ${skills.length} skills, ${fs.readdirSync(artDir).length} articles.`);
