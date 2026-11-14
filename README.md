# exlcloud-public

Source for **https://exlcloud.io**, served by GitHub Pages from `main` (custom domain in `CNAME`).

## How the site is built

The whole site is one React app in **`index.html`** (compiled in the browser by Babel — no build server).
Articles live in **`articles-data.jsx`**.

GitHub Pages needs a real file at every URL, so every route — `/about`, `/gen2`, `/articles/<slug>` … — is a
*generated copy* of `index.html` with its own title, description, canonical URL, Open Graph tags, JSON-LD and
pre-rendered text for search/AI crawlers. **Never edit those copies by hand.** Edit the sources, then regenerate:

| To change… | Edit | Then run |
|---|---|---|
| Any page content, pricing, skills list, nav, styles | `index.html` | `node tools/build-pages.mjs` |
| Page titles / meta descriptions | `PAGE_META` in `index.html` | `node tools/build-pages.mjs` |
| Add / edit an article | `articles-data.jsx` | `node tools/make-article-images.mjs` then `node tools/build-pages.mjs` |

`node tools/build-pages.mjs --check` verifies everything is in sync and that stale claims (old skill counts,
old $50/$125 pricing, Boot Camp) haven't crept back in. The GitHub Action in `.github/workflows/site-check.yml`
runs this on every pull request and push to `main`.

Bump `SITE_UPDATED` in `tools/build-pages.mjs` when you make a site-wide content change (drives sitemap `lastmod`).

### Skills count
Site copy says **"20+" Claude AI skills**. The actual list (currently 21) lives in the `skills` array of the `Gen2`
component in `index.html`. Add new skills there — mark the newest with a `"NEW"` 4th element to show the badge.

## Assets

- `images/` — live site images, logos, hero video (`images/hero-video.mp4`), article hero images (`images/articles/`).
- `uploads/` — team photos, client logos and the 2-minute explainer (`uploads/exlcloud-2min-intro.mp4`).
- `EXL Cloud Site.html`, `EXL Cloud Site v4.html`, `EXL Cloud Public Site Rebuild/`, root `*.jsx`, `uploads/exlcloud-site/` —
  **legacy design drafts**, kept for reference only. Not linked from the live site and excluded in `robots.txt`.

## Branches, backups and rollback

- `main` = live site. Don't commit straight to it — work on a branch and merge via pull request.
- Every release is preceded by an annotated backup tag of the live site, e.g. `backup/live-2026-11-14`.

**Roll back the live site to a backup tag** (GitHub Pages redeploys automatically within a minute or two):

```bash
git fetch --tags origin
git checkout main
git revert --no-edit <merge-commit-sha>      # preferred: undo one release, keep history
# or, to hard-reset to the backup exactly:
git reset --hard backup/live-2026-11-14
git push --force-with-lease origin main
```

**Preview locally:** `python3 -m http.server 8000` in the repo root, then open `http://localhost:8000/#/gen2`
(hash routing is used automatically off the live domain).
