---
number: 12
name: "Variance Analysis Reporter"
slug: "variance-analysis-reporter"
tier: "Augmentation"
summary: "Builds a two-period variance workbook with materiality flags, favourable/unfavourable logic, waterfall data and driver notes."
worksWith: ["Profit & Loss Insights", "Trial Balance Insights", "Accounts Receivable and Payable Insights", "Performance Report"]
outputs: ["Variance Summary: Actual, Budget, $ and % variance, F/U, flag and driver", "Waterfall Data ready for a bridge chart", "Detail by Category with subtotals", "Trend View where multi-period data exists", "Instructions, Validation Checks and Change Log tabs"]
askClaude: ["Variance analysis", "Actual vs budget report", "Compare two periods", "YoY variance"]
related: [6, 7, 13]
knowledgeHub:
  - { title: "Management Reporting with Scalable AI Modeling", url: "https://www.modelcitizn.com/knowledge-hub/webinars/management-reporting-ai/" }
  - { title: "Forecasts are always wrong", url: "https://www.modelcitizn.com/knowledge-hub/blogs/forecasts-always-wrong/" }
---

## What it does

The Variance Analysis Reporter compares two periods, such as actual and budget, month on month or year on year, and builds an analysis workbook that flags what is material, marks each line favourable or unfavourable, and leaves room for driver notes. It produces the numbers. Skill 06 turns them into narrative.

## When to use it

- Month-end actual vs budget reporting.
- Month-on-month or year-on-year comparisons.
- Before writing commentary or a board paper, so both draw on the same variance data.

## How it works

1. **Line up the two periods** and calculate dollar and percentage variances for every line.
2. **Apply materiality thresholds.** These are adjustable defaults:
   - Material (red): over $10K and over 10%.
   - Notable (amber): over $5K or over 20%.
   - Immaterial: below both.
   - An alternative method based on percentage of revenue is also available.
3. **Apply sign-aware F/U logic.** Revenue above comparative is favourable. A cost increase is unfavourable even when the dollar variance is positive.
4. **Build the supporting views:** waterfall data, detail by category, and a trend view where data allows.
5. **Add validation** and a Change Log entry.

## What you get

An analysis workbook with Variance Summary, Waterfall Data, Detail by Category and Trend View sheets, plus Instructions, Validation Checks and Change Log tabs. It feeds Skill 06 and the financial highlights section of Skill 07.

## Good to know

- Produces the analysis workbook only. It does not build forecast models or write narrative commentary.
- A $0 comparator shows "n/a" or "New", not #DIV/0!.
- Claude asks whether the budget is phased or straight-lined.
- Large offsetting variances on two lines usually indicate a reclassification, not a real movement.
- Year-to-date figures accumulate, so a $5K monthly variance becomes $60K over a year. The report doesn't double-alarm on this.
