---
title: "How Low Does Cash Go? Weekly Cash Flow Scenarios with Skill 16"
author: "Lance Rubin"
date: 2026-11-14
excerpt: "Skill 16 fills the EXL Cloud Weekly Cash Flow model's Scenario Overlay with Base, Best and Worst cases calibrated from your own actuals — then shows the trough, the timing and the spread between cases on one Executive Summary."
tags: ["Cash Flow", "AI", "Claude", "EXL Cloud"]
heroType: "trending"
kind: "product"
skills: [16, 20, 10, 8]
---

**The short answer:** open the EXL Cloud Weekly Cash Flow Scenario Model, ask Claude to "populate the weekly cash flow scenarios", and Skill 16 builds three scenarios from your actual cash history — not generic industry percentages — then answers the question every owner asks: *how low does cash get, and when?*

## The problem with most cash flow scenarios

Most "scenarios" are the base case with revenue nudged up or down 10%. They rarely stress the things that actually drain cash: the end-of-year tax and insurance bullets, a seasonal shutdown, customers paying slower while suppliers want paying faster. So the worst case never really gets close to the overdraft limit — and nobody notices until it does.

## What Skill 16 does differently

**It starts from your actuals.** Before writing a single scenario entry, Claude reads the model's Master Control and analyses your history: revenue mix and concentration, the cost base and its trend, seasonality, last year's one-off payments such as tax, dividends and insurance, debtor and creditor patterns, and the 52-week cash range.

**It builds three distinct cases** using the Scenario Overlay's own behaviours — `$ Repeat` for ongoing changes, `$ Bullet` for one-off payments and `$ Spread` for amounts across a period:

| Case | What goes in |
|---|---|
| **Base** | The expected outcome, mainly end-of-financial-year obligations as one-off bullets |
| **Best** | Revenue uplift, cost savings, faster collections, lower EOFY obligations |
| **Worst** | Revenue decline, cost increases, a seasonal shutdown window, slower collections, faster supplier payments, higher EOFY obligations |

**It checks its own work.** Every entry is verified to actually move cash, and the validation checks confirm the three cases diverge, order correctly (Best ≥ Base ≥ Worst), and respect a liquidity floor.

## What you see

A new **Executive Summary** at the front of the workbook: current cash, the EOFY trough, minimum and closing cash, net movement, inflows, outflows, average balance and the best-to-worst spread — all by formula, so they update when the overlay changes. Each overlay entry links to a key-assumptions table with its rationale, and risk flags are colour-coded.

If a Performance Reports workbook or an Invoices workbook is connected, Claude also uses its P&L detail and debtor/creditor ageing to sharpen the scenarios.

## Tips from the build

- **Positive is cash in, negative is cash out.** An expense saving is entered as a positive.
- **Start periods are dates, not week numbers.** The skill anchors to the first forecast week's date.
- **Entries stack.** Two entries on the same account combine — useful for layering a revenue decline with a shutdown.

## Pair it with

- **[Skill 20 — Reasonableness Check](/skills/assumption-output-reasonableness-check)** to test that the scenario drivers sit in sensible ranges.
- **[Skill 08 — Cash Flow Narrative](/skills/cash-flow-narrative)** to explain the cash movement in plain English for the owner or board.

**Go deeper:** [Scenario Analysis: The Best Cure for Uncertainty](https://www.modelcitizn.com/knowledge-hub/blogs/scenario-analysis-the-best-cure-for-uncertainty/) and [Forecasts Are Always Wrong](https://www.modelcitizn.com/knowledge-hub/blogs/forecasts-always-wrong/) on the Model Citizn Knowledge Hub.

---

*Skill 16 is included with the EXL Cloud Advanced Content plan. [Full skill details →](/skills/weekly-cash-flow-scenario-overlay-builder)*
