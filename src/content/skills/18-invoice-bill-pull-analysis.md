---
number: 18
name: "Invoice & Bill Pull Analysis"
slug: "invoice-bill-pull-analysis"
tier: "Advanced Workflows"
summary: "Turns a Xero Invoice & Credit Note data pull into a four-sheet analysis suite: calculations, executive summary, dashboard and validation checks."
worksWith: ["EXL Cloud Invoice & Credit Note Data Pull", "Accounts Receivable Insights", "Accounts Payable Insights", "Accounts Receivable Model"]
outputs: ["Calculations sheet: KPIs, tracking category breakdowns, top accounts, monthly series, top contacts", "Executive Summary with KPI row, summary tables and narrative insights", "Dashboard with four formula-linked charts", "Validation Checks with 12+ cross-footing checks", "Change Log and Claude Log entries"]
askClaude: ["Analyse the invoice pull", "Build the bill analysis", "What does this Xero pull show?", "Break down the invoices"]
related: [3, 13, 10]
knowledgeHub:
  - { title: "Data sourcing for modelling", url: "https://www.modelcitizn.com/knowledge-hub/blogs/data-sourcing-modelling/" }
  - { title: "Table Based Financial Modelling with Excel Tables", url: "https://www.modelcitizn.com/knowledge-hub/blogs/table-based-financial-modeling/" }
  - { title: "Visual influence", url: "https://www.modelcitizn.com/knowledge-hub/blogs/visual-influence/" }
---

## What it does

This skill takes a Xero-sourced Invoice & Credit Note data pull and builds a complete analysis on top of it. Every figure is a SUMIFS or COUNTIFS over the source table using structured references, so the analysis refreshes when the data does.

## When to use it

- You have an invoice or bill data pull with line-item data in an Excel table.
- You want to understand spend patterns, revenue concentration, data quality or anomalies.
- You need a one-page summary and dashboard of billing activity.

## How it works

1. **Investigate the workbook:** entity, date range, table name, column map and row count.
2. **Discover the exact values** in every dimension: tracking categories, account codes, item types and statuses. Real data contains typos and blanks, so the skill never assumes spelling. Blanks are tracked as "Untagged".
3. **Classify account codes** into Revenue, Cost of Sales, Operating Expenses, Tax/Statutory and Balance Sheet, and measure any unclassified gap.
4. **Build the Calculations sheet** with six sections: key metrics, tracking category 1, tracking category 2, the top 20 account codes, a monthly time series and the top 20 contacts.
5. **Build the Executive Summary:** a KPI row, the linked tables, account category totals and four to six narrative insights covering the business profile, concentration risk, data quality, cost structure, key activities and anomalies.
6. **Build the Dashboard:** a monthly trend chart and bar charts by tracking category and top contacts.
7. **Build the Validation Checks:** totals tie across every view, item types sum to the grand total, line counts match, untagged shares and the credit note ratio are tested, and the Calculations sheet is checked for formula errors.
8. **Update the logs** and set tab colours.

## What you get

A four-sheet suite (Calculations, Executive Summary, Dashboard and Validation Checks) linked to the source table, with PASS, FLAG and FAIL colour coding and notes explaining any check that doesn't pass.

## Good to know

- Not for bank transaction analysis, trial balance reconciliation or monthly P&L commentary.
- Account code classification by prefix rarely captures 100% of codes. A small gap is expected and reported, not forced to zero.
- Typos found in tracking categories are used exactly in formulas and called out as a data quality observation.
- Large datasets are read in chunks, and Excel's own SUMIFS does the aggregation.
