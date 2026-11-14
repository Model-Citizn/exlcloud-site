# exlcloud.io

Source for **https://exlcloud.io**. Built with [Astro](https://astro.build) (static HTML, React only for the few
interactive pieces) and deployed to GitHub Pages by GitHub Actions.

## Where things live

| To change… | Edit |
|---|---|
| Prices, connection tiers, checkout links, contact details, "20+" skills label, nav | `src/lib/site.js` — **one place, used everywhere** (pages, FAQs, structured data) |
| A skill page (or add skill 22) | `src/content/skills/NN-slug.md` |
| An article (or add one) | `src/content/articles/slug.md` |
| Page copy & layout | `src/components/pages/*.jsx` (Home, About, Features, Gen2, Pricing, Support, Contact, Legal, Nav, Footer) |
| Page titles & meta descriptions | `src/pages/*.astro` |
| Interactive pieces | `src/components/islands/*.jsx` (product carousel, board-pack demo, hero video, Future model, download form) |
| Colours, font, radii | `src/lib/theme.js` |
| Shared CSS (responsive rules, article typography) | `src/styles/global.css` |
| Images, videos, logos, CNAME, robots.txt | `public/` (served from the site root, so `public/images/x.png` → `/images/x.png`) |

### Add a skill
1. Copy an existing file in `src/content/skills/`, name it `22-your-skill.md`.
2. Fill in the frontmatter (`number`, `name`, `slug`, `tier`, `summary`, …). Set `isNew: true` and remove it from the previous new skill.
3. That's it — it appears on `/skills`, `/gen2`, gets its own page at `/skills/your-skill`, and is in the sitemap.

### Add an article
1. Create `src/content/articles/your-slug.md` with frontmatter: `title`, `date`, `excerpt`, `tags`, `kind: "product"`,
   and `skills: [21, 20]` to link it to skill pages. Write the body in Markdown.
2. `npm run images` creates the hero/social image. Commit both.

`kind` controls where it appears on `/articles`: `product` (EXL Cloud & skills), `guide` (Xero + Excel how-tos),
`hub` (republished from the Model Citizn Knowledge Hub — set `originalUrl:` to show an "Originally published on…" note).

## Run it locally

```bash
npm ci            # once
npm run dev       # live preview at http://localhost:4321
npm run check     # content guard-rails (stale prices/counts, skill numbering, missing images)
npm run build     # production build into dist/
```

Every pull request runs `check` + `build` in GitHub Actions; merges to `main` deploy automatically.

## One-time switch-over (from the old single-file site)

The old site was served straight from the repo root. The new one is built by Actions, so **before merging this
branch into `main`**: repo **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.
The live site keeps serving until the first Actions deploy replaces it. Custom domain (`exlcloud.io`) stays as is.

## Backups & rollback

- `backup/live-2026-11-14` — tag of the live single-file site before the November 2026 update.
- `pre-astro-rebuild` — tag of the single-file site with the November consistency fixes, just before the rebuild.
- `legacy/` — the old `index.html` app, articles data and earlier design drafts, kept for reference (not deployed).

**Roll back the live site:** `git revert` the merge commit on `main` (Actions redeploys). To go all the way back to the
old single-file site, also switch Pages Source back to "Deploy from a branch" (`main`, `/root`) and
`git reset --hard backup/live-2026-11-14 && git push --force-with-lease origin main`.

## Open items
- `LEAD_FORM` in `src/lib/site.js` — add the HubSpot portal and form IDs so model-download leads are recorded
  (until then, downloads are released but leads aren't captured — same as before, where they were only stored in
  the visitor's own browser).
- Confirm the legal entity name (`EXL Cloud Pty Ltd` vs `EXL Cloud Holdings Pty Ltd` in the privacy policy / EULA).
- `LINKS.skillsGithub` — point at the public skills download location.
