---
number: 10
name: "Anomaly Detection"
slug: "anomaly-detection"
tier: "Augmentation"
summary: "Adds a formula-driven Validation Checks sheet that tests a workbook's integrity with automated PASS/FAIL checks and a headline error count."
worksWith: ["Any EXL Cloud workbook", "3-Way Driver-based Financial Model", "EXL Cloud Data Pull workbooks", "Financial Control Master Toolkit"]
outputs: ["Validation Checks sheet (red tab) with 10–15 targeted checks", "Formula-driven status on every check, never typed text", "PASS / FLAG / FAIL summary with red highlight on any FAIL", "Remediation note against every failing check", "Model-specific checks for EXL Cloud models"]
askClaude: ["Add validation checks", "Build a validation sheet", "PASS FAIL checks", "Workbook health check"]
related: [14, 2, 21]
knowledgeHub:
  - { title: "Error Checks for Excel and Financial Modelling", url: "https://www.modelcitizn.com/knowledge-hub/blogs/error-checks-excel/" }
  - { title: "The Implications of Not Following a Modelling Standard", url: "https://www.modelcitizn.com/knowledge-hub/blogs/the-implications-of-not-following-a-modelling-standard/" }
---

## What it does

Anomaly Detection (built as the Validation Checks Builder) adds a validation sheet to any workbook. Each check compares an expected value with an actual value calculated by formula and returns a status automatically, so problems surface the moment the numbers change rather than at review time.

## When to use it

- A workbook has no error checking, or its checks are typed text that never changes.
- You are handing a model over and want its integrity to be visible.
- After building or extending a model, as a standing health check.

## How it works

1. **Pick the relevant categories** for the workbook type:
   - **Structural:** formula errors, blank key cells, sheet naming, whether a change log exists.
   - **Financial integrity:** balance sheet balances, cash flow reconciles, P&L foots, revenue is positive, retained earnings tie.
   - **Data consistency:** period continuity, row and column counts, duplicates, detail tying to summary.
   - **Model-specific:** ACT/FCST boundary, sequential counter, valid named ranges, scenario toggle works, no hardcodes in the forecast zone.
2. **Build the sheet** with the standard columns: check number, description, expected, actual (formula), variance and status, plus a notes column.
3. **Set materiality:** $1 for financial checks and zero for count checks, so rounding doesn't trigger false failures.
4. **Summarise** PASS, FLAG and FAIL counts at the top.

For EXL Cloud models, Skill 02 also lists model-specific checks to enable, such as date validation, data refresh status, unmapped revenue and expense values, working capital splits summing to 100%, a pre/post-processing P&L check and a negative cash check.

## What you get

A Validation Checks sheet with 10 to 15 meaningful checks. Every status cell is a formula and every failing check has a remediation note. In EXL Cloud models the total error count feeds the error message shown on each sheet header.

## Good to know

- Adds checks only. It does not fix issues, clean data or build models.
- Typing "PASS" as text is the most common failure. Every status here is a formula.
- Text comparisons use an equality test, not a numeric variance.
- Checks are terminal: they never feed back into the model, which avoids circular references.
- Fifty checks means none get attention. The skill aims for 10 to 15 that matter.
- Run Skill 14 first so the validation sheet can confirm the Change Log exists.
