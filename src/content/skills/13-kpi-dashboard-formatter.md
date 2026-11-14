---
number: 13
name: "KPI Dashboard Formatter"
slug: "kpi-dashboard-formatter"
tier: "Augmentation"
summary: "Lays out a one-page KPI dashboard with tiles, variances, trend arrows and chart-ready data, all linked to source by formula."
worksWith: ["Performance Report", "Profit & Loss Insights", "3-Way Driver-based Financial Model", "R&D Template"]
outputs: ["5–8 KPI tiles with value, variance and trend arrow", "P&L summary and Cash/Balance Sheet summary panels", "Chart data area", "Three-bullet traffic-light commentary", "Landscape, one-page print setup"]
askClaude: ["Build a dashboard", "KPI dashboard", "Executive dashboard", "One-page summary"]
related: [7, 12, 19]
knowledgeHub:
  - { title: "KPI portfolio", url: "https://www.modelcitizn.com/knowledge-hub/blogs/kpi-portfolio/" }
  - { title: "Visual influence", url: "https://www.modelcitizn.com/knowledge-hub/blogs/visual-influence/" }
---

## What it does

The KPI Dashboard Formatter builds a one-page dashboard: KPI tiles across the top, P&L and cash summaries beneath, an area for chart data, and short traffic-light commentary. It is a presentation layer that links to your existing numbers.

## When to use it

- You need a one-page management or executive summary.
- You want consistent KPI tiles for a board paper (Skill 07 uses them).

## How it works

1. **Choose the KPIs.** The defaults are revenue, gross margin %, EBITDA, net profit, cash, receivables days, payables days and FTE, up to eight tiles.
2. **Build the tiles.** Each has a label, the value, the variance in green or red, and a trend arrow.
3. **Lay out the page.** Tiles across the top, P&L summary on the left, cash and balance sheet summary on the right, chart data below, and three traffic-light bullets at the bottom.
4. **Format.** White background, hidden gridlines, an EXL green title bar, and landscape fit to one page.
5. **Link.** Every value is a formula to source data, never pasted.

## What you get

A navy-tabbed dashboard sheet that fits on one printed landscape page and refreshes with the workbook.

## Good to know

- Presentation layer only. It does not build calculation engines or models.
- Some charts may need to be created manually in Excel. The skill always builds the chart data table, and uses character bars in place of sparklines where needed.
- Merged cells are kept to the fixed header area so sorting still works.
- Use the same KPIs here as in the board paper (Skill 07).
