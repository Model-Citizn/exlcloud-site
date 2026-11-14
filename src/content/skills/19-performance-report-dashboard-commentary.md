---
number: 19
name: "Performance Report Dashboard Commentary"
slug: "performance-report-dashboard-commentary"
tier: "Advanced Workflows"
summary: "Writes data-driven analysis commentary into the five dashboard text boxes of an EXL Cloud Performance Reports workbook."
worksWith: ["EXL Cloud Performance Reports workbook", "Performance Report"]
outputs: ["Actuals Dashboard commentary", "Combo Dashboard commentary", "Revenue Dashboard commentary", "Expense Dashboard commentary", "EBITDA Dashboard commentary, with underlying vs statutory EBITDA where relevant", "Change Log and Claude Log entries"]
askClaude: ["Write dashboard commentary", "Populate the commentary text boxes", "Update the EBITDA dashboard commentary", "Analyse the P&L and write commentary"]
related: [6, 13, 12]
knowledgeHub:
  - { title: "Management Reporting with Scalable AI Modeling", url: "https://www.modelcitizn.com/knowledge-hub/webinars/management-reporting-ai/" }
  - { title: "Visual influence", url: "https://www.modelcitizn.com/knowledge-hub/blogs/visual-influence/" }
  - { title: "KPI portfolio", url: "https://www.modelcitizn.com/knowledge-hub/blogs/kpi-portfolio/" }
---

## What it does

This skill reads the P&L and chart data in an EXL Cloud Performance Reports workbook and writes analysis commentary directly into the named commentary text boxes on each dashboard. The structure is the same for every business. The content comes entirely from the numbers in your workbook.

## When to use it

- At month end, when the Performance Report dashboards need fresh commentary.
- When the text boxes still show placeholder text.
- When you want consistent, quantified commentary across all five dashboards.

## How it works

1. **Read the sources in one pass:** Master Control (entity, period end, financial year start), the charts data, the P&L pivot and the actual vs budget report.
2. **Find the text boxes.** Claude lists the shapes on each dashboard to confirm the commentary box names rather than assuming them.
3. **Analyse each dashboard:**
   - **Actuals:** YTD revenue, expenses, EBITDA, margin and non-recurring items.
   - **Combo:** P&L waterfall, quarterly EBITDA and the three-month trend.
   - **Revenue:** streams, the dominant share, best and worst months and lumpy items.
   - **Expense:** top categories, run-rate and one-offs.
   - **EBITDA:** monthly profile, margin trend, and underlying vs statutory EBITDA.
4. **Write each box separately**, then read back the opening text to confirm it landed.
5. **Update the Change Log and Claude Log.**

## What you get

Five commentary blocks of three to four paragraphs each (about 200–280 words), in a consistent shape:

- an opening line with entity, dashboard and period;
- top-line performance against prior year;
- sub-drivers, with non-recurring items named and quantified;
- trend and context.

Dollar values are shown as $Xk or $X.XM and percentages to one decimal place.

## Good to know

- Not for P&L pivot analysis, creating new dashboards or building charts.
- If no budget is loaded (all zeros), the commentary says so explicitly and compares against prior year only. Zero budget is never treated as a budget miss.
- EXL Cloud's "Sales" (primary trading revenue) and "Revenue" (other income streams) are kept distinct.
- Quarters follow the financial year start in Master Control, not an assumed July start.
- If depreciation isn't tracked separately, EBITDA may equal net profit. This is confirmed before any claim is made.
