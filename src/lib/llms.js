/*
 * llms.txt / llms-full.txt builders (https://llmstxt.org).
 * Generated from the same config and content collections as the pages, so prices, the skills
 * list and articles can never drift from what the site shows.
 */
import { getCollection } from "astro:content";
import { SITE, PLANS, SKILLS_LABEL, LINKS, money } from "./site.js";

const pad = (n) => String(n).padStart(2, "0");
const TIERS = ["Foundation", "Data Infrastructure", "Narrative", "Augmentation", "Advanced Workflows"];
const U = (p) => SITE.url + p;

export async function loadContent() {
  const skills = (await getCollection("skills")).map((s) => s).sort((a, b) => a.data.number - b.data.number);
  const articles = (await getCollection("articles", ({ data }) => !data.draft)).sort((a, b) => +b.data.date - +a.data.date);
  return { skills, articles };
}

export function summaryBlock() {
  const a = SITE.address;
  return [
    `# ${SITE.name}`,
    "",
    `> ${SITE.name} is an Excel add-in that connects Microsoft Excel to Xero in ${SITE.clicks} clicks. It pulls live trial balance, profit and loss, balance sheet, journals and account transactions into Excel, and ships driver-based financial models, performance reports, HTML board packs, Power BI integration and ${SKILLS_LABEL} purpose-built Claude AI skills for those workbooks.`,
    "",
    "Key facts:",
    "",
    `- Plans (prices in ${PLANS.currency}, per month): ${PLANS.dataPull.name} ${money(PLANS.dataPull.price)} (Xero data pull and push); ${PLANS.advanced.name} ${money(PLANS.advanced.price)} (adds financial models, reports, Power BI integration, HTML board packs and the AI skills library). Both include ${PLANS.advanced.connections} Xero connections; extra connections are discounted by volume. ${SITE.trialDays}-day free trial.`,
    "- Platform: Microsoft Excel for Windows. Mac users run it through Parallels Desktop.",
    "- Modelling standard: zero hardcoding, blue inputs and black formulas, full three-way reconciliation, a validation sheet and a change log in every workbook.",
    `- Company: ${SITE.legalName}, ${a.street}, ${a.locality} ${a.region} ${a.postcode}, Australia. Founded by ${SITE.founder.name} (Chartered Accountant). Contact ${SITE.email}.`,
    `- In-depth financial modelling technique is published on the Model Citizn Knowledge Hub: ${LINKS.knowledgeHub}`,
  ].join("\n");
}

export async function llmsTxt() {
  const { skills, articles } = await loadContent();
  const out = [summaryBlock(), ""];
  out.push("## Product", "");
  out.push(`- [Features](${U("/features")}): Xero data pulls and pushes, financial models, reports, Power BI and board packs`);
  out.push(`- [Pricing](${U("/pricing")}): plans, connection pricing and FAQs`);
  out.push(`- [What's new in Generation 2](${U("/gen2")}): rebuilt workbooks, the AI skills library and current pricing`);
  out.push(`- [Interactive 3-way model demo](${U("/future")}): driver-based model that recalculates as you change drivers`);
  out.push(`- [Support and training](${U("/support")}): knowledge base, video library and support tickets`);
  out.push(`- [About](${U("/about")}): the team behind EXL Cloud`, "");

  out.push(`## AI skills library (${skills.length} Claude skills)`, "");
  out.push(`- [Skills library overview](${U("/skills")}): every skill grouped by tier`);
  for (const tier of TIERS) {
    for (const s of skills.filter((x) => x.data.tier === tier)) {
      out.push(`- [Skill ${pad(s.data.number)}: ${s.data.name}](${U("/skills/" + s.data.slug)}): ${tier}. ${s.data.summary}`);
    }
  }
  out.push("");

  const product = articles.filter((a) => a.data.kind === "product");
  const guides = articles.filter((a) => a.data.kind === "guide");
  out.push("## Product guides", "");
  for (const a of product) out.push(`- [${a.data.title}](${U("/articles/" + a.id)}): ${a.data.excerpt}`);
  out.push("", "## Xero and Excel guides", "");
  for (const a of guides) out.push(`- [${a.data.title}](${U("/articles/" + a.id)}): ${a.data.excerpt}`);
  out.push("");

  const hub = articles.filter((a) => a.data.kind === "hub");
  out.push("## Optional", "");
  out.push(`- [Full text of the skills and product guides](${U("/llms-full.txt")}): everything above in one Markdown file`);
  for (const a of hub) out.push(`- [${a.data.title}](${U("/articles/" + a.id)}): financial modelling article, originally published on the Model Citizn Knowledge Hub`);
  out.push(`- [Privacy policy](${U("/privacy")})`, `- [End user licence agreement](${U("/eula")})`, "");
  return out.join("\n");
}

/* Article bodies are HTML (older posts) or Markdown (newer ones); give LLMs plain Markdown-ish text. */
const tableToMd = (html) => {
  const rows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map((r) =>
    [...r[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((c) => c[1].replace(/<[^>]+>/g, "").replace(/\|/g, "/").trim()));
  if (!rows.length) return "";
  const head = `| ${rows[0].join(" | ")} |`, sep = `| ${rows[0].map(() => "---").join(" | ")} |`;
  return "\n" + [head, sep, ...rows.slice(1).map((r) => `| ${r.join(" | ")} |`)].join("\n") + "\n";
};
const htmlToText = (s) =>
  s
    .replace(/<table[\s\S]*?<\/table>/gi, tableToMd)
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "\n## $1\n")
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "\n### $1\n")
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, "\n#### $1\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/(p|ul|ol|blockquote)>/gi, "\n")
    .replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, (_, h, t) => `[${t}](${h.startsWith("/") ? SITE.url + h : h})`)
    .replace(/<(strong|b)>(.*?)<\/\1>/gi, "**$2**")
    .replace(/<(em|i)>(.*?)<\/\1>/gi, "*$2*")
    .replace(/<hr\s*\/?>/gi, "\n---\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;|&rsquo;/g, "'")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
const mdLinks = (s) => s.replace(/\]\(\/(?!\/)/g, `](${SITE.url}/`);

export async function llmsFullTxt() {
  const { skills, articles } = await loadContent();
  const out = [summaryBlock(), "", "This file contains the full text of every EXL Cloud AI skill page and product guide.", ""];
  out.push(`# AI skills library (${skills.length} skills)`, "");
  for (const s of skills) {
    const d = s.data;
    out.push(`## Skill ${pad(d.number)}: ${d.name}`, "");
    out.push(`URL: ${U("/skills/" + d.slug)}`, `Tier: ${d.tier}`, `Summary: ${d.summary}`);
    if (d.worksWith.length) out.push(`Works with: ${d.worksWith.join("; ")}`);
    if (d.outputs.length) out.push(`Adds to the workbook: ${d.outputs.join("; ")}`);
    if (d.askClaude.length) out.push(`Example prompts: ${d.askClaude.map((p) => `"${p}"`).join(", ")}`);
    out.push("", mdLinks(s.body.trim()).replace(/^## /gm, "### "), "");
  }
  out.push("# Product guides", "");
  for (const a of articles.filter((x) => x.data.kind === "product")) {
    const body = /<(p|h2|h3|ul)[\s>]/i.test(a.body) ? htmlToText(a.body) : mdLinks(a.body.trim());
    out.push(`## ${a.data.title}`, "", `URL: ${U("/articles/" + a.id)}`, `Published: ${a.data.date.toISOString().slice(0, 10)}`, "", body.replace(/^## /gm, "### "), "");
  }
  return out.join("\n");
}
