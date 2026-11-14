---
number: 21
name: "Model Best Practice Benchmark"
slug: "model-best-practice-benchmark"
tier: "Advanced Workflows"
summary: "Scores any Excel model against 53 best-practice criteria, logs evidence-backed findings and builds a phased, costed remediation plan."
isNew: true
worksWith: ["Any Excel financial model", "EXL Cloud 3-Way Model", "EXL Cloud reporting packs"]
outputs: ["BM Control: headline score, Critical score, findings count, priority findings, fix hours and category scores", "BM Direct Evidence Map: what was scanned and where", "BM Assessment: every criterion scored 0–4 with severity and evidence", "BM Findings Log: every criterion scoring 2 or below", "BM Remediation Plan: findings in dependency-ordered phases with hours", "BM Data Plumbing: inventory of the model's data feeds", "BM Validation Checks: the benchmark's own integrity checks"]
askClaude: ["Benchmark this model against best practice", "Score the model against best practice", "Run the model best practice benchmark", "Build the remediation plan"]
related: [20, 10, 2, 1]
knowledgeHub:
  - { title: "Error Checks for Excel and Financial Modelling", url: "https://www.modelcitizn.com/knowledge-hub/blogs/error-checks-excel/" }
  - { title: "The Implications of Not Following a Modelling Standard", url: "https://www.modelcitizn.com/knowledge-hub/blogs/the-implications-of-not-following-a-modelling-standard/" }
  - { title: "Formula Construction Best Practice for Financial Modelling", url: "https://www.modelcitizn.com/knowledge-hub/blogs/formula-construction/" }
---

## What it does

Model Best Practice Benchmark scores an Excel model against a library of 53 best-practice criteria and turns the result into a plan of work. Every score is backed by evidence (counts and sheet!cell locations), every weak area becomes a logged finding, and the findings are sequenced into a phased remediation plan with estimated hours.

The model under review is treated as read-only throughout. The benchmark adds seven tabs to the end of the workbook, linked by `BM_` named ranges, and leaves your existing sheets untouched.

## When to use it

- You have inherited a model and need an objective view of its quality before relying on it.
- You want to know what to fix first, and roughly how long it will take.
- You have made improvements and want to measure progress against an earlier run.

## How it works

1. **Open a run.** Each run gets a Run ID (for example `R01-Lite`) in a run register, so re-runs are tracked and compared rather than overwritten.
2. **Collect evidence.** A Lite run is a direct scan of the open workbook by Claude. A full run adds an evidence pack from Excel's formula analyser and is the comparable, official benchmark.
3. **Score each applicable criterion** from 0 to 4, with evidence written against it. Criteria that genuinely don't apply are marked not applicable. For example, the 3-way integrity checks don't apply to reporting packs.
4. **Log findings.** Any criterion scoring 2 or below becomes a finding.
5. **Calculate the headline:** a severity-weighted score %, a separate Critical score %, the number of findings, priority findings (Critical and High) and estimated fix hours, plus a score for each category.
6. **Build the remediation plan,** sequencing findings into dependency-ordered phases with hours, so foundational fixes come before the work that depends on them.
7. **Run its own validation checks** to confirm the benchmark tabs are internally consistent.

## The criteria library

| Category | Criteria | Examples |
|---|---|---|
| Governance & Documentation (GOV) | 5 | User guide or instructions sheet; change log maintained; version control and file naming; cell legend; data source register |
| Structure & Flow (STR) | 7 | Logical tab order; inputs, workings and outputs separated; master control drives period and entity; grouping preferred to hidden rows; sheet protection on outputs |
| Inputs (INP) | 5 | Inputs colour-coded; assumptions centralised; data validation on inputs; no business hardcodes inside formulas |
| Formula Integrity (FRM) | 9 | No #REF!; no external links; no circular references; low unique-formula ratio; volatile functions minimised; defined-name hygiene |
| Consistency (CON) | 1 | Repeating period sheets share one structure |
| Checks (CHK) | 4 | Validation sheet with error count; checks left enabled; live failures resolved; tolerances held as inputs |
| Data & Feeds (DAT) | 6 | Raw data in Excel tables; last refresh stamped; data stored once; account and project mapping complete; Power Query documented |
| Outputs & Dashboards (OUT) | 6 | Outputs link to calculations; pivots reconciled; error handling doesn't mask issues; commentary ties to the numbers |
| Formatting (FMT) | 5 | Standard body font; gridlines hidden; header rows frozen; EXL Cloud palette; table naming convention |
| AI Governance (AI) | 2 | AI-built changes logged; AI-drafted commentary reviewed before use |
| 3-Way Integrity (TWI) | 3 | Balance sheet balances every period; closing cash ties; NPAT rolls into retained earnings |

## Severity weights

Each criterion carries a severity that weights its score in the headline:

| Severity | Weight |
|---|---|
| Critical | 4 |
| High | 3 |
| Medium | 2 |
| Low | 1 |

The Critical score % is reported separately, so a model can't hide a broken balance sheet behind good formatting.

## What you get

Seven tabs: BM Control, BM Direct Evidence Map, BM Assessment, BM Findings Log, BM Remediation Plan, BM Data Plumbing and BM Validation Checks. Together they give you a defensible score, the evidence behind it, a prioritised list of what is wrong and where, and a sequenced plan with hours to fix it.

## Good to know

- It assesses and plans. It does not fix the model. Use Skill 02 and the other skills to carry out the remediation, then re-run the benchmark under a new Run ID.
- Lite runs are quick and useful for direction. Use a full run when you need a result that compares like for like over time.
- Scores reflect the evidence at the time of the run. Fixes made afterwards are credited on the next run, not retrospectively.
- For a plausibility check of assumptions and outputs rather than build quality, use Skill 20.
