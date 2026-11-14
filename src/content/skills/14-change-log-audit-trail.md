---
number: 14
name: "Change Log & Audit Trail"
slug: "change-log-audit-trail"
tier: "Augmentation"
summary: "Adds a structured Change Log, a separate Claude Log of AI changes, and a version control header, so you can see who changed what and when."
worksWith: ["Any EXL Cloud workbook", "3-Way Driver-based Financial Model", "Human Capital Model", "Advanced Rolling Property Development Model"]
outputs: ["Change Log tab with a tbl_ChangeLog table, most recent first", "Claude Log tab with a tbl_ClaudeLog table of AI-made changes", "Version control header on the Instructions sheet"]
askClaude: ["Add a change log", "Audit trail", "Add a Claude Log", "Who changed what?"]
related: [10, 11, 9]
knowledgeHub:
  - { title: "Automation in Modelling", url: "https://www.modelcitizn.com/knowledge-hub/blogs/automation-in-modelling/" }
  - { title: "AI Financial Modelling: 8 AI Builds Tested", url: "https://www.modelcitizn.com/knowledge-hub/ai-artefacts/ai-financial-modelling/" }
---

## What it does

Change Log & Audit Trail adds the governance sheets a workbook needs to show its history: a log of every change, a separate log of changes made by Claude, and a version header so anyone opening the file knows which version they are looking at and its status.

## When to use it

- A workbook has no record of what changed between versions.
- Claude is making changes and you need AI edits kept separate from human ones.
- You are preparing a model for review or handover.

## How it works

1. **Change Log.** Claude adds a `tbl_ChangeLog` Excel table on a grey Change Log tab, sorted most recent first. Categories include Initial Build, Data Update, Formula Change, Formatting, Structure, Bug Fix, Enhancement, Configuration, Validation and Review.
2. **Claude Log.** A separate `tbl_ClaudeLog` table records the date, session, skill used, action, cells modified, verification and whether you approved the change.
3. **Version header.** The Instructions sheet shows the name, version, last modified date (taken from the latest Change Log entry) and status: Draft, Under Review, Approved or Archived.

## What you get

Two auto-expanding, filterable log tables and a version header. Versions use major.minor numbering: structural changes are major, data and formatting changes are minor.

## Good to know

- Adds documentation only. It does not modify calculations or data.
- Logs are always Excel tables, not plain ranges.
- The Claude Log is kept separate because auditors need to distinguish AI changes from human ones.
- "Approved By" stays blank until someone has actually reviewed the change.
- Run this before Skill 10, so the validation sheet can check that the Change Log exists.
