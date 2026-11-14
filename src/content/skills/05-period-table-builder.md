---
number: 5
name: "Period Table Builder"
slug: "period-table-builder"
tier: "Data Infrastructure"
summary: "Builds tbl_Period, the date backbone of every EXL Cloud time-series workbook, with financial years, counters and ACT/FCST flags."
worksWith: ["EXL Cloud 3-Way Driver-based Financial Model", "1-way Cash Flow and Profit Performance Scenario Models", "Any EXL Cloud time-series workbook"]
outputs: ["tbl_Period Excel table with one row per period", "Financial year, FY period and display labels", "ACT/FCST flag driven by a cutoff date", "Named ranges for start, end and forecast start", "Validation checks on dates and counters"]
askClaude: ["Build tbl_Period", "Set up periods", "ACT FCST toggle", "Financial year dates"]
related: [3, 4, 2]
knowledgeHub:
  - { title: "Table Based Financial Modelling with Excel Tables", url: "https://www.modelcitizn.com/knowledge-hub/blogs/table-based-financial-modeling/" }
  - { title: "Financial Models: Workbook Structure and Hyperlinks", url: "https://www.modelcitizn.com/knowledge-hub/blogs/financial-models-layout/" }
---

## What it does

The period table, `tbl_Period`, defines the date columns that every calculation engine, report and dashboard in an EXL Cloud workbook refers to. Build it correctly once and every downstream formula picks up the right dates, financial years and actual/forecast split automatically.

## When to use it

- Setting up a new EXL Cloud report, model or dashboard.
- Extending a workbook's time horizon with more future periods.
- Changing the financial year end month.
- Switching between monthly, quarterly and annual periods.

## How it works

1. **Inputs.** You confirm the start date, number of periods, periodicity (monthly by default), financial year end month (June is the Australian default) and the ACT/FCST cutoff.
2. **Build the table.** Claude creates `tbl_Period` with period start and end dates, days in period, a sequential counter starting at 1, calendar month and year, financial year, period within the financial year, the ACT/FCST flag and a display label such as "Jan 24".
3. **Derive every date.** All dates come from the start date using EOMONTH. Nothing is typed in by hand.
4. **Link the controls.** The ACT/FCST cutoff refers to a named range or Master Control cell rather than a typed date, so changing it flows through.
5. **Check.** Validation confirms total periods equal actual plus forecast, every date is a month-end, and the counter has no gaps.

## What you get

A structured Excel table named exactly `tbl_Period`, supporting named ranges (for example start date, forecast start and FY end month), a small control panel, and validation checks, ready for structured references across the workbook.

## Good to know

- Builds date infrastructure only. It does not build models, reports or formatting beyond the period sheet, and it is not for calendar scheduling or project timelines.
- Quarters align to the financial year: with a June year end, Q1 is July to September.
- The financial year is based on the period start month. A period stays ACT until its end date passes the cutoff.
- Dates are stored as real dates, not TEXT() strings, so date arithmetic keeps working.
- Monthly and quarterly periods are never mixed in one table.
- When used after Skill 04, the table needs at least as many ACT months as the trial balance data covers.
