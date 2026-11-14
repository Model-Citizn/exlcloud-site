---
number: 7
name: "Board Paper Drafter"
slug: "board-paper-drafter"
tier: "Narrative"
summary: "Assembles a concise, board-ready paper from your commentary, cash narrative, variance analysis and KPI outputs, with every number traceable."
worksWith: ["Performance Report", "Weekly Cash Flow Model", "1-way Cash Flow Scenario Model", "3-Way Driver-based Financial Model"]
outputs: ["Executive summary with KPI tiles and traffic-light status", "Financial highlights: P&L summary, top variances and year-to-date position", "Operational commentary and cash position sections", "Outlook, risks and a Decisions Required section"]
askClaude: ["Draft the board paper", "Prepare board pack", "Management report for the board", "Executive summary for board"]
related: [6, 8, 13, 15]
knowledgeHub:
  - { title: "Model or Conversation? What to Rely On for Decision Making", url: "https://www.modelcitizn.com/knowledge-hub/blogs/model-vs-conversation/" }
  - { title: "KPI portfolio", url: "https://www.modelcitizn.com/knowledge-hub/blogs/kpi-portfolio/" }
  - { title: "Finance cadence", url: "https://www.modelcitizn.com/knowledge-hub/blogs/finance-cadence/" }
---

## What it does

The Board Paper Drafter assembles a complete, board-ready management report. It doesn't generate new analysis. It structures and presents the work already done by the Commentary Generator, Cash Flow Narrative, Variance Analysis Reporter and KPI Dashboard Formatter in one coherent document.

## When to use it

- Monthly or quarterly board packs.
- Management committee reporting.
- Investor updates.
- Any structured financial report that combines narrative with data.

## How it works

1. **Gather the inputs.** Claude draws on Skill 06 (variance commentary), Skill 08 (cash position), Skill 12 (financial highlights) and Skill 13 (KPI tiles).
2. **Executive summary.** Three to five bullets for the period, key KPI tiles such as revenue, EBITDA, cash and headcount, and on track, at risk or off track status.
3. **Financial highlights.** A P&L summary against budget and prior year, the top five variances in dollars and percent, and year to date against the full-year budget.
4. **Operational commentary.** Revenue, cost and bottom-line commentary drawn from Skill 06.
5. **Cash position.** Opening and closing cash and the key movements, drawn from Skill 08.
6. **Outlook and risks.** Key risks with mitigations, and a Decisions Required section.

## What you get

A three-to-five-page paper with numbered sections, formatted tables, and colour used sparingly: green for favourable, red for unfavourable and amber for watch items. The executive summary summarises the detail rather than repeating it, and year-to-date figures take priority over single-month moves.

## Good to know

- Text and document output only. It does not modify workbook data.
- Not for monthly commentary on its own (Skill 06) or for the cash flow narrative on its own (Skill 08).
- Forward-looking commentary is included only when you provide the outlook.
- A Decisions Required section is always included, even if the answer is "nil for this period".
- Cash commentary must reconcile to the balance sheet cash balance. Any gap is flagged.
- All numbers must be traceable to workbook cells. Appendices are added only on request.
- Keep KPIs consistent with Skill 13 so the dashboard and the board paper show the same metrics.
