---
number: 3
name: "Clean & Validate Data"
slug: "clean-validate-data"
tier: "Data Infrastructure"
summary: "Runs 15 quality checks on a raw Xero or EXL Cloud extract, reports PASS/FLAG/FAIL and fixes safe issues before the data enters a workbook."
worksWith: ["EXL Cloud Data Pull workbooks", "Xero P&L, Balance Sheet and Trial Balance extracts", "CSV or XLSX data files"]
outputs: ["Data Quality sheet with 15 checks and a PASS/FLAG/FAIL summary", "Cleaned file saved as [filename]_CLEAN.xlsx", "Auto-fixes for blank rows, whitespace and currency symbols", "Instructions, Validation Checks and Change Log tabs"]
askClaude: ["Clean this data", "Validate my data pull", "Data quality check", "Check this Xero extract"]
related: [4, 5, 10]
knowledgeHub:
  - { title: "Data sourcing for modelling", url: "https://www.modelcitizn.com/knowledge-hub/blogs/data-sourcing-modelling/" }
  - { title: "Error Checks for Excel and Financial Modelling", url: "https://www.modelcitizn.com/knowledge-hub/blogs/error-checks-excel/" }
---

## What it does

Clean & Validate Data is the pre-flight check for raw data. Before an extract from Xero or the EXL Cloud Start Menu goes into a report, dashboard or model, this skill scans it for quality issues, reports what it found and fixes the safe ones with your confirmation.

## When to use it

- You have just pulled a P&L, Balance Sheet or Trial Balance and want to know it is clean.
- A CSV or XLSX file looks messy: blank rows, numbers stored as text, mixed date formats.
- You are about to run Skill 04 (Trial Balance Mapper). Clean data first.

## How it works

1. **Read.** Claude identifies the file type, detects the header row and counts rows and columns.
2. **Run 15 checks.** These include blank rows, duplicate rows and duplicate keys, blank key cells, date format consistency and validity, numbers stored as text, text in numeric columns, currency symbols, whitespace, header anomalies, encoding issues, negative direction, row count against source and column count against the known EXL Cloud format.
3. **Report.** A summary in the form `[X] PASS | [Y] FLAG | [Z] FAIL`, laid out in the standard validation pattern.
4. **Auto-fix.** Blank rows, whitespace and currency symbols are always safe to fix. Number conversion needs the column confirmed. Removing duplicates and standardising dates are done only after Claude asks.
5. **Output.** A cleaned file with a Data Quality sheet and a Change Log entry.

## What you get

- A Data Quality sheet showing every check with expected value, actual value, variance and status.
- A `_CLEAN.xlsx` copy of your file in EXL Cloud Best Practice formatting.
- Instructions, Validation Checks and Change Log tabs.

## Good to know

- Cleans data only. It does not map accounts (Skill 04), build periods (Skill 05) or build models.
- Built for Xero quirks: the TB "Total" row is excluded, Xero's negative revenue is correct and is not flagged, and account codes with leading zeros stay as text.
- Australian dates are DD/MM/YYYY by default. Ambiguous dates such as 03/04/2026 are flagged, never silently converted.
- Files over 50,000 rows are sampled (1,000 rows) to detect patterns, then fixes are applied to the full set.
- A Source Name column is kept alongside cleaned names so later lookups against the original Xero names still work.
