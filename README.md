# exlcloud.io

Source for **https://exlcloud.io**. Team editing guide: **[HOW-TO-UPDATE.md](HOW-TO-UPDATE.md)**.

 Built with [Astro](https://astro.build) (static HTML, React only for the few
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
| Images, videos, logos | `public/` (served from the site root, so `public/images/x.png` → `/images/x.png`) |
| robots.txt (staging vs live) | `src/pages/robots.txt.js` — driven by `SITE_ENV` |
| llms.txt / llms-full.txt (for AI assistants) | Generated automatically from `src/lib/site.js` + the skills and articles — no editing needed. Logic in `src/lib/llms.js` |

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

## Staging, then launch (new-repo approach)

This site is deployed from its **own repo** to a staging address first; the old site keeps serving exlcloud.io from
`Model-Citizn/exlcloud-public` untouched until launch.

**Set up staging (once)**
1. New repo (e.g. `Model-Citizn/exlcloud-site`) containing this code.
2. Settings → Pages → Source = **GitHub Actions**. Custom domain = **beta.exlcloud.io**, tick *Enforce HTTPS* once offered.
3. DNS: add `CNAME  beta  →  model-citizn.github.io`.
4. Leave the `SITE_ENV` variable **unset** → every page is `noindex`, `robots.txt` disallows all, amber staging bar shows.

**Launch checklist** (do it out of hours)
1. Final review on beta.exlcloud.io; HubSpot `LEAD_FORM` IDs set and a test lead received.
2. Settings → Secrets and variables → Actions → Variables → add `SITE_ENV` = `production` (makes pages indexable, removes the bar).
3. Old repo `exlcloud-public`: Settings → Pages → remove custom domain `exlcloud.io`.
4. New repo: Settings → Pages → custom domain `exlcloud.io` → wait for the certificate (minutes, up to ~1 hour) → *Enforce HTTPS*.
5. Actions → re-run the latest deploy so the production build goes out.
6. Check https://exlcloud.io, /robots.txt (should allow), a skill page and an article. Resubmit `https://exlcloud.io/sitemap-index.xml` in Google Search Console.

**Roll back:** move the custom domain back to `exlcloud-public` (step 3/4 in reverse). The old site is unchanged there.
Keep the old repo for a few weeks before archiving it.

## Backups & rollback

- `backup/live-2026-11-14` — tag of the live single-file site before the November 2026 update.
- `pre-astro-rebuild` — tag of the single-file site with the November consistency fixes, just before the rebuild.
- `legacy/` — the old `index.html` app, articles data and earlier design drafts, kept for reference (not deployed).

**Roll back the live site:** `git revert` the merge commit on `main` (Actions redeploys). To go all the way back to the
old single-file site, also switch Pages Source back to "Deploy from a branch" (`main`, `/root`) and
`git reset --hard backup/live-2026-11-14 && git push --force-with-lease origin main`.

## Lead capture
Model downloads (`/dl-3way`, `/dl-performance`, `/dl-cashflow`) submit to the EXL Cloud HubSpot contact form
(`LEAD_FORM` in `src/lib/site.js`, same form as `LINKS.contactForm`). HubSpot records the contact and the existing
Zapier zap posts "Conversion request submitted by …" to Slack #xl-zap-messages, with `Model download: <file>` as the details.

## Open items
- Confirm the legal entity name (`EXL Cloud Pty Ltd` vs `EXL Cloud Holdings Pty Ltd` in the privacy policy / EULA).
- `LINKS.skillsGithub` — point at the public skills download location.
