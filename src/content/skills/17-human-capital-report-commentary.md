---
number: 17
name: "Human Capital Report Commentary"
slug: "human-capital-report-commentary"
tier: "Advanced Workflows"
summary: "Builds a five-section Human Capital executive summary from EXL Cloud payroll data, with anomaly flags, charts and CFO decision points."
worksWith: ["EXL Cloud Human Capital Model", "EXL Cloud models with a Salaries & Wages component (tPayroll)"]
outputs: ["5. Exec Summary - HC Analysis sheet", "Workforce Snapshot with role breakdown and data quality", "Cost Summary tied to the model, with gap analysis", "Anomalies & Data Quality Flags rated by severity", "Tenure Analysis and prioritised CFO Decision Points", "Headcount and tenure charts, plus validation checks and log entries"]
askClaude: ["Human capital report", "Payroll executive summary", "Headcount analysis", "Analyse the payroll data"]
related: [9, 10, 13]
knowledgeHub:
  - { title: "KPI portfolio", url: "https://www.modelcitizn.com/knowledge-hub/blogs/kpi-portfolio/" }
  - { title: "Management Reporting with Scalable AI Modeling", url: "https://www.modelcitizn.com/knowledge-hub/webinars/management-reporting-ai/" }
---

## What it does

This skill reads the payroll tables in an EXL Cloud model, calculates workforce metrics, flags data quality gaps, and builds a formula-driven executive summary sheet with charts and validation. It is designed to tell a CFO both what the workforce costs and how complete the model's payroll data is.

## When to use it

- You want a workforce, headcount or payroll summary from an EXL Cloud model.
- You suspect the Salaries & Wages component is incomplete or understated.
- You need a snapshot of tenure, turnover and salary concentration.

## How it works

1. **Read the setup:** Master Control, the payroll and payroll adjustment tables, FTE Restructure, and the monthly salary cost summary. Missing or empty tables are recorded as data gaps, not skipped.
2. **Classify roles** from job titles into categories such as management, supervisors, team leaders, specialists, field workers and unclassified. Where titles are too messy for formulas, classifications are entered as blue inputs with notes explaining the logic.
3. **Analyse tenure** in bands (under 1 year, 1–2, 2–5 and over 5 years), with average, median, minimum and maximum.
4. **Build five sections:**
   - Workforce Snapshot.
   - Cost Summary, covering base salary, super, STI, bonus and payroll tax, with a gap analysis.
   - Anomalies & Flags.
   - Tenure Analysis.
   - CFO Decision Points, prioritised P1 to P6.
5. **Add charts** below the data: headcount by role and tenure distribution.
6. **Add validation checks and update the logs.**

## What you get

A single executive summary sheet in EXL Cloud house style. Counts and costs are formulas linked to the payroll tables and cost summary. Cross-checks confirm that category and tenure totals equal active headcount and that costs tie to the model. Standard anomaly checks cover missing salaries, flat forecasts with no wage escalation, missing incentives, an empty FTE Restructure, missing job titles, absent payroll tax, high turnover, long-service staff on $0 and salary concentration.

## Good to know

- Not for monthly P&L commentary, cash flow analysis or non-payroll workforce planning.
- Commentary cells are concise one-line flags, not paragraphs, so the sheet stays readable.
- Benchmark rates used in the gap analysis are blue input cells with their source noted.
- Payroll statuses beyond Active and Terminated, such as casual or contractor, are checked for, as are mixed superannuation types.
- Freeze panes may need setting manually if other workbooks are connected.
