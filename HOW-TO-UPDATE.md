# How to update exlcloud.io

Plain-English guide for the EXL Cloud team. No software to install — everything below works in the GitHub website.
Every change is checked automatically, appears on the staging site first (while staging), and can be undone.

## The golden rules
1. **Edit the text files listed below, never the built website.** There is no HTML to upload any more.
2. **Don't use "Add files via upload" to replace pages.** That's what made the old site drift out of sync.
3. **If the automatic check goes red, nothing goes live.** Open the failed run — the message says what to fix.

## Where everything lives

| I want to change… | Open this file in GitHub |
|---|---|
| A price, connection tier, checkout link, phone, email, address | `src/lib/site.js` |
| The "20+ skills" figure used in copy | `src/lib/site.js` → `SKILLS_LABEL` |
| A skill's page (name, summary, prompts, outputs, Knowledge Hub links) | `src/content/skills/NN-name.md` |
| An article | `src/content/articles/article-name.md` |
| Home, About, Features, Pricing, Support, Contact page wording | `src/components/pages/<Page>.jsx` (search for the sentence with Ctrl+F) |
| Page title / Google description | `src/pages/<page>.astro` |
| An image or video | `public/images/` or `public/uploads/` |

## Edit something (2 minutes)
1. Go to the file on github.com → click the **pencil** (Edit).
2. Change the text. Keep the quotes, commas and `---` lines exactly as they are.
3. Click **Commit changes…** → choose **"Create a new branch… and start a pull request"** → **Propose changes** → **Create pull request**.
4. Wait for the green tick (the automatic check + build, ~2 minutes). Red cross = click **Details** to see what's wrong.
5. **Merge pull request.** The site updates about 2 minutes later.

To undo: open the merged pull request → **Revert** → merge the revert.

## Add a new skill (e.g. skill 22)
1. Open `src/content/skills/`, open the latest skill file, click **⋯ → Copy raw contents**.
2. **Add file → Create new file**, name it `22-short-name.md`, paste, and change:
   - `number: 22`, `name`, `slug: "short-name"` (lowercase, hyphens), `tier`, `summary` (one sentence, ≤ 160 characters)
   - `isNew: true` — and set the previous skill's `isNew` to `false`
   - `worksWith`, `outputs`, `askClaude`, `related` (skill numbers), `knowledgeHub` links
   - the body text under the second `---`
3. Pull request → green tick → merge. It appears on /skills, /gen2 and at /skills/short-name automatically.

## Add a new article
1. **Add file → Create new file** in `src/content/articles/`, named like `my-article-title.md`.
2. Start with this header, then write the article in normal text (use `##` for headings, `-` for bullets):
   ```
   ---
   title: "My Article Title"
   date: 2026-12-01
   excerpt: "One or two sentences that sum it up — shown as the Key Takeaway and in Google."
   tags: ["AI", "EXL Cloud"]
   kind: "product"
   skills: [21, 20]
   ---
   ```
3. Pull request. The check will say the article has **no hero image** — ask Claude (in a Claude Code session on this repo)
   to "generate the article image", or upload a 1200×630 PNG to `public/images/articles/my-article-title.png`.

## Videos
- **Main product / skill videos:** upload to YouTube (public or unlisted) and give Claude the link — they load fast and help Google.
- **Short autoplay/background clips:** MP4 under ~20 MB in `public/uploads/`. Large uploads need a Claude Code session
  (the GitHub website caps uploads at 25 MB).

## Bigger changes
New pages, layout or design changes: open a Claude Code session on this repo and describe the change. Claude edits the
real files, runs the checks, tests in a browser and opens a pull request for you to review. Mock-ups from Claude Design
are welcome as the brief — hand them to Claude Code to build, don't upload exported HTML.

## Staging vs live (search engines)
While this repo serves **beta.exlcloud.io**, every page is hidden from Google (amber "Staging preview" bar at the top).
At launch, set the repo variable `SITE_ENV` = `production` (Settings → Secrets and variables → Actions → Variables) —
see "Launch checklist" in README.md. Never set it on a repo that isn't serving exlcloud.io.
