---
number: 20
name: "Assumption & Output Reasonableness Check"
slug: "assumption-output-reasonableness-check"
tier: "Advanced Workflows"
summary: "Flags assumptions and outputs that fall outside sensible ranges, from wild growth rates to Worst cases that never stress cash, in one re-runnable sheet."
worksWith: ["EXL Cloud 3-Way Model", "Model Citizn 3-way workbooks", "1-way Cash Flow and Profit Performance Scenario Models"]
outputs: ["Assumption & Output Reasonableness Check sheet near the front of the workbook", "Combined Summary: checks tested, passed, flagged and items to verify", "Assumption section: live values linked to source and tested against editable bounds", "Output section: trend, cash and liquidity, margin and scenario-ordering tests", "Judgemental items to verify for each section", "Key findings in plain English, highest impact first, each with a fix"]
askClaude: ["Run a reasonableness check", "Are these assumptions sensible?", "Flag anything wildly out of range", "Does the output make sense?"]
related: [9, 21, 16]
knowledgeHub:
  - { title: "Model Sensitivity", url: "https://www.modelcitizn.com/knowledge-hub/blogs/model-sensitivity/" }
  - { title: "Scenario Analysis: The Best Cure for Uncertainty", url: "https://www.modelcitizn.com/knowledge-hub/blogs/scenario-analysis-the-best-cure-for-uncertainty/" }
  - { title: "Forecasts are always wrong", url: "https://www.modelcitizn.com/knowledge-hub/blogs/forecasts-always-wrong/" }
---

## What it does

Assumptions can each look sensible on their own and still combine into an output that doesn't make sense. Individually reasonable growth rates can compound into a hockey stick. A "Worst case" may never actually stress cash. A margin may improve every year with nothing in the model driving it.

This skill adds one sheet that tests both sides. A combined Summary at the top gives the whole picture at a glance. Below it are two clearly separated sections: one testing the inputs (does each driver sit in a sensible range?) and one testing the outputs (do the results behave sensibly?). The result is a review you can re-run, not a one-off opinion.

## When to use it

- Before relying on a forecast or sending it to a board or lender.
- After someone else has changed the drivers.

If you ask only about assumptions, Claude builds only the assumption section. If you ask only about outputs, it builds only the output section. A general request builds both.

## How it works

1. **Find the source sheets by content, not name.** Sheet names and numbering vary between workbooks, even within the EXL Cloud template family. Claude identifies the Scenario Manager, revenue and COGS driver sheets (including any split by tracking category), roles and salary setup, tax, working capital, assets and capital. For outputs, it identifies the consolidated output, annual rollups and dashboards.
2. **Harvest the key drivers:** growth rates, CPI, margins, working capital days, salaries and rate increases, GST, corporate tax, depreciation life, discount rate and multiples. Placeholders and structural constants are skipped.
3. **Harvest the headline outputs** across the horizon and by scenario: revenue, gross margin, EBITDA and margin, and minimum and closing cash. These are taken from where the model already consolidates them.
4. **Build the assumption section.** Each row shows the source cell, a Live Value formula linked to it, Reasonable Low and High bounds as blue editable inputs, and a status of within range, below range or above range.
5. **Build the output section** below a clear divider:
   - **Trend:** year-on-year moves on forecast-only periods.
   - **Margin and ratio bands.**
   - **Cash and liquidity:** the Worst-case minimum cash, flagged if it goes materially negative or never stresses at all.
   - **Scenario ordering:** Worst ≤ Base ≤ Best, flagging inversions and scenarios that have converged.
6. **Write the combined Summary** last, once the real table ranges are known.
7. **List judgemental items and key findings.** These cover what a range check can't score, such as placeholder salary step-ups or a suspiciously flat margin.

## How the bounds are set

Bounds come from the business's own history first. Where the workbook has actual data for a metric, Claude derives the band from that history and records the method in the Notes column so it can be reproduced. Where there is no usable history, it falls back to fixed defaults:

- statutory and market-set items: GST at 10%, corporate tax at 25–30%, payroll tax at 4.0–6.5%, discount rate at 8–20%, EV/EBITDA at 4–12x, depreciation life at 3–15 years;
- generic business-performance ranges, such as Base revenue growth of 3–20% a year.

You can edit any bound.

On a re-run, existing bounds are carried forward unchanged. Live values, statuses and the Summary refresh, but the standard doesn't move. A new flag therefore always means something in the model changed, not that the check redrew its own rubric.

## What you get

One sheet with a single Summary (total checks, passed, flagged for review, and judgemental items to verify), followed by the assumption and output sections. Each section has its own table, items to verify and three to seven key findings, such as "Corporate tax 0%: set to 25% or 30%". Every live value and status is a formula. The bounds are the only typed inputs.

## Good to know

- Adds one sheet only. It never changes existing cells, references or named ranges.
- Not for cataloguing every input (use Skill 09), hunting formula errors or balance sheet imbalances, or writing narrative on why the numbers moved (use Skill 06). It flags plausibility, not completeness or arithmetic.
- Some Scenario Manager rows are links back to calculation sheets, not inputs. Claude traces them to the real input before flagging.
- Corporate income tax and GST are separate inputs. A 0% company tax rate is a common and easily missed anomaly.
- Driver-sheet growth rates are annual, not monthly.
- Partial first or last years, and annual columns that blend actual and forecast months, are marked as not comparable rather than flagged against the same band.
- Uniform growth across every revenue stream, or a margin that never moves, is flagged as a possible hardcode even when the number looks plausible.
