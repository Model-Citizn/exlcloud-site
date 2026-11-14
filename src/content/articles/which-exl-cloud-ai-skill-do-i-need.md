---
title: "Which EXL Cloud AI Skill Do I Need? A Quick Guide by Task"
author: "Lance Rubin"
date: 2026-11-14
excerpt: "Twenty-plus skills is a lot to remember. This guide maps the job in front of you — clean a data pull, check a model, write commentary, review an inherited workbook — to the EXL Cloud Claude skill built for it."
tags: ["AI", "Claude", "EXL Cloud"]
heroType: "search"
kind: "product"
skills: [1, 2, 9, 10, 20, 21]
---

**The short answer:** start from the job, not the skill name. Find your task in the table below and use the skill next to it. If you're new to the library, load Skill 01 and Skill 02 first — every other skill checks its work against them.

## I want to…

| I want to… | Use | Why this one |
|---|---|---|
| Check a Xero extract before using it | [Skill 03 — Clean & Validate Data](/skills/clean-validate-data) | Quality checks plus safe fixes before data enters a workbook |
| Map a trial balance to reporting lines | [Skill 04 — Trial Balance Mapper](/skills/trial-balance-mapper) | Standard categories, with uncertain mappings flagged |
| Set up monthly periods and ACT/FCST flags | [Skill 05 — Period Table Builder](/skills/period-table-builder) | Builds `tbl_Period`, the date backbone of every time-series workbook |
| Format a model to EXL Cloud standards | [Skill 02 — Best Practice Financial Modelling](/skills/best-practice-financial-modelling) | Colour coding, number formats, tab structure, formula rules |
| Find every hardcoded assumption | [Skill 09 — Assumption Register Builder](/skills/assumption-register-builder) | One auditable register, including numbers buried in formulas |
| Add error checks to a workbook | [Skill 10 — Anomaly Detection](/skills/anomaly-detection) | Formula-driven PASS/FAIL checks with a headline error count |
| Sense-check growth rates and outputs | [Skill 20 — Assumption & Output Reasonableness Check](/skills/assumption-output-reasonableness-check) | Flags drivers and results outside sensible, editable ranges |
| Score a model I've inherited | [Skill 21 — Model Best Practice Benchmark](/skills/model-best-practice-benchmark) | Severity-weighted score, findings log and costed remediation plan |
| Document how a model works | [Skill 11 — Model Documentation Generator](/skills/model-documentation-generator) | Plain-English methodology note and instructions |
| Track who changed what | [Skill 14 — Change Log & Audit Trail](/skills/change-log-audit-trail) | Change Log, Claude Log and a version header |
| Compare actuals to budget | [Skill 12 — Variance Analysis Reporter](/skills/variance-analysis-reporter) | Materiality flags and favourable/unfavourable logic |
| Write the monthly commentary | [Skill 06 — Monthly Commentary Generator](/skills/monthly-commentary-generator) | Quantified, structured management commentary |
| Explain the cash movement | [Skill 08 — Cash Flow Narrative](/skills/cash-flow-narrative) | Opening-to-closing cash bridge in plain English |
| Build a one-page KPI view | [Skill 13 — KPI Dashboard Formatter](/skills/kpi-dashboard-formatter) | Tiles, variances and trend arrows linked to source |
| Draft the board paper | [Skill 07 — Board Paper Drafter](/skills/board-paper-drafter) | Assembles commentary, cash, variances and KPIs |
| Prepare for the meeting | [Skill 15 — Meeting Prep Pack](/skills/meeting-prep-pack) | One-page brief with likely questions and risk flags |
| Model weekly cash flow scenarios | [Skill 16 — Weekly Cash Flow Scenario Overlay Builder](/skills/weekly-cash-flow-scenario-overlay-builder) | Base, Best and Worst cases from your own actuals |
| Analyse payroll and headcount | [Skill 17 — Human Capital Report Commentary](/skills/human-capital-report-commentary) | Five-section workforce summary with CFO decision points |
| Analyse invoices and bills from Xero | [Skill 18 — Invoice & Bill Pull Analysis](/skills/invoice-bill-pull-analysis) | Four-sheet analysis suite with cross-footing checks |
| Fill in Performance Report commentary | [Skill 19 — Performance Report Dashboard Commentary](/skills/performance-report-dashboard-commentary) | Writes straight into the dashboard text boxes |
| Check a skill or model against our quality bar | [Skill 01 — EXL Cloud Skills Foundations](/skills/skills-foundations) | The checklist every other skill is built against |

## Skills that are easy to confuse

**Skill 09 vs Skill 20.** Skill 09 *catalogues* every input. Skill 20 *tests* the key drivers for plausibility. Run 09 when you need to know what's in the model; run 20 when you need to know whether it makes sense.

**Skill 10 vs Skill 21.** Skill 10 *adds* validation checks to a workbook. Skill 21 *scores* the whole workbook — including whether its checks are switched on and can genuinely fail.

**Skill 06 vs Skill 19.** Skill 06 writes a standalone commentary section. Skill 19 writes directly into the text boxes on the EXL Cloud Performance Report dashboards.

## Where to start if you're new

1. Load Skill 01 and Skill 02 — they set the standard everything else follows.
2. Pick one recurring task from the table and use its skill for a full month-end.
3. Add Skill 10 and Skill 20 to that workflow before anything goes to a reader. See [Month-End with EXL Cloud](/articles/month-end-with-exl-cloud-ai-skills) for the full sequence.

**Go deeper:** [The Language of AI for Accountants](https://www.modelcitizn.com/knowledge-hub/blogs/the-language-of-ai-for-accountants/) on the Model Citizn Knowledge Hub explains the terms used across the library.

---

*Every skill above is included with the EXL Cloud Advanced Content plan. [See the full skills library →](/skills)*
