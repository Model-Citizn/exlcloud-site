/*
 * Content collections — the site's editable content lives in Markdown files, validated here.
 * A typo in frontmatter (missing title, bad date, unknown tier) fails the build with a clear message
 * instead of silently breaking a page.
 *
 *   src/content/articles/<slug>.md   → /articles/<slug>
 *   src/content/skills/NN-<slug>.md  → /skills/<slug>
 */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    author: z.string().default("Lance Rubin"),
    coauthor: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    excerpt: z.string().min(40),
    tags: z.array(z.string()).default([]),
    heroType: z.string().default("grid"),
    /* product = EXL Cloud product & skills; guide = how-to for EXL users; hub = republished from the MC Knowledge Hub */
    kind: z.enum(["product", "guide", "hub"]).default("product"),
    /* override the canonical URL (rarely needed) */
    canonical: z.string().url().optional(),
    /* where a republished post first appeared (e.g. the Model Citizn Knowledge Hub) — shown as a note */
    originalUrl: z.string().url().optional(),
    /* skill numbers this article is about — shown as links on the article and on those skill pages */
    skills: z.array(z.number().int().min(1)).default([]),
    draft: z.boolean().default(false),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/skills" }),
  schema: z.object({
    number: z.number().int().min(1),
    name: z.string(),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    tier: z.enum(["Foundation", "Data Infrastructure", "Narrative", "Augmentation", "Advanced Workflows"]),
    summary: z.string().max(200),
    isNew: z.boolean().default(false),
    worksWith: z.array(z.string()).default([]),
    outputs: z.array(z.string()).default([]),
    askClaude: z.array(z.string()).default([]),
    related: z.array(z.number().int()).default([]),
    knowledgeHub: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { articles, skills };
