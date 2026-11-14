---
number: 4
name: "Trial Balance Mapper"
slug: "trial-balance-mapper"
tier: "Data Infrastructure"
summary: "Maps every account in a raw trial balance to a standard P&L and Balance Sheet category structure, flagging anything it can't map with confidence."
worksWith: ["EXL Cloud Data Pull workbooks", "Trial Balance Insights", "Consolidated Workbook (P&L and BS)", "Xero trial balance extracts"]
outputs: ["tbl_AccountMapping table with category, sub-category, method and confidence", "Mapping Summary with P&L and Balance Sheet subtotals", "Balance check: Assets = Liabilities + Equity", "Unmapped accounts list and mapping statistics", "Instructions, Validation Checks and Change Log tabs"]
askClaude: ["Map my TB", "Map trial balance", "Categorise accounts", "Map Xero accounts"]
related: [3, 5, 12]
knowledgeHub:
  - { title: "Data sourcing for modelling", url: "https://www.modelcitizn.com/knowledge-hub/blogs/data-sourcing-modelling/" }
  - { title: "Table Based Financial Modelling with Excel Tables", url: "https://www.modelcitizn.com/knowledge-hub/blogs/table-based-financial-modeling/" }
---

## What it does

Trial Balance Mapper takes a raw trial balance and maps every account to a standard category structure, so reports, dashboards and models can aggregate consistently. It shows how each account was mapped and how confident the match is, and it never guesses silently.

## When to use it

- Setting up a new client after pulling a trial balance from Xero.
- Grouping a chart of accounts into standard P&L and Balance Sheet categories.
- Preparing mapped data for P&L or Balance Sheet reports, dashboards or models.

Run Skill 03 (Clean & Validate Data) first.

## How it works

1. **Standard hierarchy.** P&L accounts map to Revenue, COGS and Expenses, with sub-categories such as Salaries & Wages, Occupancy and Professional Fees. Balance Sheet accounts map to current and non-current assets and liabilities, and to equity.
2. **Mapping logic, in priority order.** Exact name match, then keyword match (for example "depreciation"), then Xero code range (200s revenue, 300s COGS, 400s expenses, 500–600s assets, 700s liabilities, 800s equity).
3. **Unmatched accounts** are flagged UNMAPPED with an amber highlight for you to resolve.
4. **Manual overrides** you make are formatted as inputs so they stand out.
5. **Summary and checks.** Claude builds the P&L and Balance Sheet summaries, a balance check, and validation checks.

## What you get

- **Account Mapping** sheet: a `tbl_AccountMapping` table with account code and name, statement, category, sub-category, net balance, mapping method (Exact, Keyword, Code or Manual), confidence (High, Medium or Low) and notes.
- **Mapping Summary** sheet: P&L from Revenue to Net Profit, the Balance Sheet with a balance check, the unmapped list and confidence statistics.
- Instructions, Validation Checks and Change Log tabs.

## Good to know

- Produces the mapping table only. It does not reconcile two trial balances, build forecast engines or clean data.
- Xero "Bank" accounts map to Current Assets > Cash, not a separate category.
- GST Collected and GST Paid are kept as separate accounts. Drawings are an equity contra account, not an expense.
- Clearing and suspense accounts are flagged as UNMAPPED. A non-zero balance usually points to an upstream data issue.
- Xero account names with &, / or () are kept exactly as they are.
