---
number: 9
name: "Assumption Register Builder"
slug: "assumption-register-builder"
tier: "Augmentation"
summary: "Finds every assumption in a workbook, including ones buried in formulas, and catalogues them in a single auditable Assumption Register sheet."
worksWith: ["3-Way Driver-based Financial Model", "1-way Cash Flow and Profit Performance Scenario Models", "Human Capital Model", "Any inherited Excel model"]
outputs: ["Assumption Register sheet with a tbl_Assumptions table", "Assumption name, current value, sheet and cell reference for each item", "Suggested category, source and sensitivity for you to confirm", "Owner and Last Reviewed fields for governance tracking", "Summary block: totals by sensitivity and source, plus unreviewed count", "Separate flags for constants embedded in formulas"]
askClaude: ["Extract assumptions", "Build assumption register", "Find hardcoded values", "What assumptions does this model use?"]
related: [20, 11, 10]
knowledgeHub:
  - { title: "Driver Based Planning and Forecasting for FP&A", url: "https://www.modelcitizn.com/knowledge-hub/blogs/driver-based-planning/" }
  - { title: "Model Sensitivity", url: "https://www.modelcitizn.com/knowledge-hub/blogs/model-sensitivity/" }
---

## What it does

Every financial model runs on assumptions: growth rates, margins, tax rates, timing parameters. In most models they are scattered across sheets and some are buried inside formulas. This skill finds them and organises them in a single register, so you can see what drives the model, who owns each assumption and when it was last reviewed.

## When to use it

- You have inherited a model built by someone else.
- You are preparing a model for scenario analysis.
- You are auditing a model for hidden hardcodes.
- You are documenting a model for handover, or for board or investor due diligence.

## How it works

1. **Scan every sheet**, including hidden ones. Claude looks for:
   - cells formatted as EXL Cloud inputs (blue text);
   - named ranges pointing to constant values;
   - hardcoded numbers that formulas refer to;
   - data validation dropdowns and labelled input sections;
   - labels containing keywords such as rate, growth, margin, factor or discount;
   - constants embedded inside formulas, such as `=Revenue*0.85`.
2. **Group related inputs.** For example, twelve salary cells become one "Salary by role" assumption, not twelve rows.
3. **Note the active scenario**, because a displayed value may not be the base case.
4. **Suggest categories** such as Revenue, Cost, Tax, Timing or Financing for you to confirm.
5. **Add the register** as a new sheet with a summary block above the table.

## What you get

An Assumption Register sheet listing each assumption with an ID, a plain-English description, current value, unit, sheet and cell reference, category, source or basis, owner, last reviewed date, sensitivity and notes. A summary shows totals by sensitivity and source and how many assumptions haven't been reviewed. Date assumptions such as forecast start, model end and financial year end are always included.

## Good to know

- Adds a sheet only. It does not change existing cells, references or named ranges.
- Not for model building, validation checks or commentary.
- Structural constants such as 12, 365 or 100 are left out unless they are clearly business assumptions.
- Constants embedded in formulas are flagged but not extracted, because fixing them means refactoring the formula, which is your call.
- Protected sheets may block the scan. Claude will ask you to unprotect them.
- To test whether assumptions are sensible rather than just list them, use Skill 20. Skill 11 refers to this register instead of duplicating it.
