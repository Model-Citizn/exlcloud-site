---
number: 6
name: "Monthly Commentary Generator"
slug: "monthly-commentary-generator"
tier: "Narrative"
summary: "Turns actual vs budget or prior period P&L data into structured, quantified management commentary that is ready for a pack or board paper."
worksWith: ["Profit & Loss Insights", "1-way Profit Performance Scenario Model", "Weekly Cash Flow Model", "Any workbook with mapped actual and comparative P&L data"]
outputs: ["Revenue commentary with top drivers and mix changes", "Cost commentary covering gross margin, operating expenses and wages", "Bottom-line commentary on EBITDA, NPAT and year-to-date position", "One-off items called out separately", "Commentary that references source cells"]
askClaude: ["Write commentary", "Explain the P&L", "Write up the month", "Explain the variances"]
related: [12, 7, 8]
knowledgeHub:
  - { title: "Management Reporting with Scalable AI Modeling", url: "https://www.modelcitizn.com/knowledge-hub/webinars/management-reporting-ai/" }
  - { title: "Finance cadence", url: "https://www.modelcitizn.com/knowledge-hub/blogs/finance-cadence/" }
---

## What it does

The Monthly Commentary Generator reads your actual results alongside budget, prior period or prior year comparatives, works out what drove the variances, and writes structured narrative paragraphs for management packs and board papers.

## When to use it

- At month end, when management commentary is due.
- When you need variance explanations for P&L line items.
- When drafting the narrative section of a management pack.
- Before running Skill 07, which uses this commentary as an input.

You need at least one period of actual P&L data, at least one comparative, and data mapped to standard P&L categories (run Skill 04 first if needed).

## How it works

1. **Read the data.** Claude identifies the Actual, Budget and Prior columns and calculates dollar and percentage variances.
2. **Rank by materiality.** Variances are sorted by size, focusing on material items rather than every line. Rounding noise is ignored.
3. **Write in a fixed order.**
   - Revenue: the total against the comparative, the top drivers and any mix change.
   - Costs: gross margin, operating expense movements, wages with headcount context where available, and one-offs.
   - Bottom line: EBITDA and margin, NPAT and the year-to-date position.
4. **Apply the commentary standards.** Facts before interpretation, favourable and unfavourable rather than good and bad, every movement quantified in dollars and percent, no more than three drivers per line, and Australian English.

## What you get

Short, specific paragraphs of two to three sentences each that lead with the variance and then explain it, for example "revenue increased $45K (8%) driven by…". Commentary references the cells it draws on so a reader can trace it back to source. Output can be inline, in Markdown, or written into specified workbook cells.

## Good to know

- Text output only. It does not modify workbook data or build models.
- Not for assembling a board paper (Skill 07) or for cash flow commentary (Skill 08).
- If the driver of a variance isn't clear from the data, the commentary says so rather than inventing an explanation.
- No forward-looking statements unless you ask for them.
- Claude confirms whether the budget is monthly or annual and whether "prior" means prior month or prior year, and flips Xero's negative revenue sign before calculating variances.
- When Skill 12 has already run, use its materiality flags rather than recalculating.
