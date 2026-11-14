---
number: 2
name: "Best Practice Financial Modelling"
slug: "best-practice-financial-modelling"
tier: "Foundation"
summary: "Applies EXL Cloud formatting, colour coding, number format, tab structure and formula standards so every model is consistent and auditable."
worksWith: ["EXL Cloud 3-Way Driver-based Financial Model", "Any EXL Cloud workbook", "Any Excel financial model"]
outputs: ["Colour-coded inputs, linked inputs and calculations", "Standard number formats (brackets for negatives, dash for zeros)", "Numbered tab structure and time series layout", "Sheet view defaults (no gridlines or headings, header rows frozen)", "Validation Checks sheet with error count on every sheet header", "Linked Income Statement, Balance Sheet and Cash Flow layout with balance checks"]
askClaude: ["Format my model", "Colour code my inputs", "Apply modelling best practice", "Check my formula discipline"]
related: [1, 10, 21]
knowledgeHub:
  - { title: "Formula Construction Best Practice for Financial Modelling", url: "https://www.modelcitizn.com/knowledge-hub/blogs/formula-construction/" }
  - { title: "The Implications of Not Following a Modelling Standard", url: "https://www.modelcitizn.com/knowledge-hub/blogs/the-implications-of-not-following-a-modelling-standard/" }
  - { title: "User Friendliness in Financial Modelling", url: "https://www.modelcitizn.com/knowledge-hub/blogs/user-friendly-modelling/" }
---

## What it does

This skill holds the formatting, structure and formula rules for financial models built on the EXL Cloud platform. Claude follows it when building, modifying or auditing any Excel model, so the result looks and behaves like every other EXL Cloud model: inputs are obvious, calculations are traceable and errors surface on every sheet.

## When to use it

- Formatting a new or inherited model to the EXL Cloud standard.
- Checking that inputs are blue and calculations are black.
- Fixing inconsistent number formats or sign conventions.
- Reviewing tab structure, formula discipline or the validation setup.

## How it works

1. **Colour coding.** Inputs are blue text on light green; linked inputs (for example from the Scenario Manager) are blue on medium green; calculations are black. Section headers are dark green with white bold text and span the full width of the sheet.
2. **Fonts and number formats.** Arial 9pt for body content. Negatives in brackets, zeros shown as a dash, percentages to one decimal place, and revenue positive and expenses negative.
3. **Tab structure.** Tabs follow a numbered hierarchy: Instructions and Master Control, then outputs and dashboards, data input, mapping and checks, calculation engines, the consolidated output, dashboard data feeds, chart of accounts, Helper, Validation Checks and Change Log.
4. **Time series layout.** Columns A–G hold labels, periods run from column H, and a header block carries dates, financial year and the ACT/FCST flag.
5. **Sheet view.** Gridlines and headings hidden, header rows frozen.
6. **Formula rules.** No business hardcodes in calculations, structured table references, EOMONTH for all date maths, IF guards against divide-by-zero, no circular references, and helper rows in place of deeply nested formulas.
7. **Validation and outputs.** A Validation Checks sheet with a total error count, an error message on every sheet header, and a balance sheet check and cash check that must equal zero every period.

## What you get

A model that follows one consistent standard: clearly marked inputs, professional number formats, a predictable tab order, and three linked financial statements with built-in balance and cash checks. Excel tables use the `tbl_` prefix and the model's green table style.

## Good to know

- Not for building calculation engines or proprietary modelling logic.
- True constants (12 months, divide by 100) and labelled input cells are allowed. Business assumptions typed inside formulas, values pasted over live calculations and copy-pasted links are not.
- The most common audit failure is an input cell that isn't coloured blue.
- The validation check catalogue itself is owned by Skill 10. This skill sets which model-specific checks must be enabled.
