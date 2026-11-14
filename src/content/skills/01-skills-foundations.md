---
number: 1
name: "EXL Cloud Skills Foundations"
slug: "skills-foundations"
tier: "Foundation"
summary: "Sets the quality bar for every Claude skill and Excel model you review, with a checklist, the five skill killers and workbook-to-skill routing."
worksWith: ["Any SKILL.md file", "Any Excel financial model", "EXL Cloud workbooks (for skill routing)"]
outputs: ["Skill quality checklist review (structure, description, content, gotchas)", "Check against the five skill killers", "Description length check against the 1,024-character ceiling", "Model review for hardcodes, formula discipline and separated assumptions", "Recommended skill sequence for a named EXL Cloud workbook"]
askClaude: ["Check my skill", "Audit this skill", "Review my model for hardcodes", "Are my assumptions separated?"]
related: [2, 21, 10]
knowledgeHub:
  - { title: "Skill Sprawl Warning: I Hit Claude's Skills Limit at 196", url: "https://www.modelcitizn.com/knowledge-hub/blogs/claude-skill-sprawl/" }
  - { title: "The Language of AI for Accountants", url: "https://www.modelcitizn.com/knowledge-hub/blogs/the-language-of-ai-for-accountants/" }
  - { title: "The Implications of Not Following a Modelling Standard", url: "https://www.modelcitizn.com/knowledge-hub/blogs/the-implications-of-not-following-a-modelling-standard/" }
---

## What it does

Skills Foundations is the quality standard that sits under every other EXL Cloud skill. It defines what a good Claude skill looks like and what a well-built Excel model looks like, then checks your work against that bar. Skills and models built without a standard work for their author and break for everyone else.

It covers two jobs: auditing SKILL.md files you build or adapt, and reviewing Excel models for hardcodes, formula discipline and whether assumptions are kept separate from workings.

## When to use it

- You have written or edited a skill and want it checked before you rely on it.
- A skill is not firing when you expect it to, or fires when it shouldn't.
- You want a model reviewed for hardcodes and comingled assumptions.
- You want to know which EXL Cloud skills to run on a particular workbook.

## How it works

1. Claude classifies the skill by maintenance posture (Capability Uplift or Encoded Preference) and functional category, and applies the scoping test: one sentence, one job.
2. It checks the file structure: frontmatter, opening context, then body instructions.
3. It reviews the description as a trigger, not a summary: trigger phrases first, third person, a clear "Do NOT use for" boundary, and under the 1,024-character platform ceiling (aiming for under 950).
4. It tests the skill against the five skill killers: a description that doesn't trigger, over-defined process, stating the obvious, a missing gotcha section, and a monolithic blob.
5. It runs the full quality checklist across structure, description, content and gotchas.
6. When you name a workbook and ask to enhance it, it looks up the recommended skill sequence for that workbook type and suggests it for you to confirm.

## What you get

- A checklist review of the skill with specific gaps called out.
- A pass or fail against each of the five skill killers.
- A character count for the description, with headroom for future trigger phrases.
- For models: a review of hardcodes, formula discipline and validation standards.
- A suggested skill sequence for a named EXL Cloud workbook, such as the Weekly Cash Flow Model.

## Good to know

- Not for building financial models (use Skill 02) or for data cleanup (use Skill 03).
- These are principles, not a form to fill in. A short skill for a simple task doesn't need every section.
- Gotchas have to be earned from real runs. The skill discourages speculative gotchas and auditing a skill that has never actually been run.
- Re-evaluate skills after model upgrades: a guardrail that mattered on one model version may be redundant on the next.
