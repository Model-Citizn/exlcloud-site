---
number: 16
name: "Weekly Cash Flow Scenario Overlay Builder"
slug: "weekly-cash-flow-scenario-overlay-builder"
tier: "Advanced Workflows"
summary: "Populates Base, Best and Worst scenarios in the Weekly Cash Flow model from your own actuals, then adds an Executive Summary and checks."
worksWith: ["EXL Cloud Weekly Cash Flow Scenario Model", "Connected EXL Cloud Performance Reports workbook (optional)", "Connected Invoices workbook (optional)"]
outputs: ["Base, Best and Worst entries in 3.b. Scenario Overlay", "0. Executive Summary with a scenario comparison table", "Key assumptions table linked to each overlay entry, with rationale", "Colour-coded risk flags", "Validation Checks sheet with 10+ checks", "Change Log and Claude Log entries"]
askClaude: ["Populate the weekly cash flow scenarios", "Set up the scenario overlay", "Populate Base/Best/Worst", "Cash flow scenario planning"]
related: [8, 20, 10]
knowledgeHub:
  - { title: "Scenario Analysis: The Best Cure for Uncertainty", url: "https://www.modelcitizn.com/knowledge-hub/blogs/scenario-analysis-the-best-cure-for-uncertainty/" }
  - { title: "Forecasts are always wrong", url: "https://www.modelcitizn.com/knowledge-hub/blogs/forecasts-always-wrong/" }
  - { title: "Model Sensitivity", url: "https://www.modelcitizn.com/knowledge-hub/blogs/model-sensitivity/" }
---

## What it does

This skill works inside the EXL Cloud Weekly Cash Flow Scenario Model. It analyses your actual cash performance, populates the Scenario Overlay with Base, Best and Worst cases calibrated from that history, and builds an Executive Summary that compares the three across the 52-week forecast. Scenario sizes come from the entity's own data, not generic industry assumptions.

## When to use it

- You have the Weekly Cash Flow Scenario Model open and the overlay is empty.
- You want to see how low cash gets, when, and under which case.

## How it works

1. **Discover the workbook.** Claude reads Master Control for the entity, currency and dates, and locates the Scenario Overlay, Chart Data and Helper sheets.
2. **Gather context.** If they are connected, it requests P&L detail from a Performance Reports workbook and AR/AP ageing from an Invoices workbook.
3. **Analyse actuals.** Revenue composition and concentration, cost base and trend, seasonality, prior-year one-off payments such as tax, dividends and insurance, AR/AP patterns, and the 52-week cash range.
4. **Populate the scenarios** using the overlay's behaviours ($ Repeat, $ Bullet, $ Spread):
   - **Base:** expected outcome, mainly end-of-financial-year obligations as one-off bullets.
   - **Best:** revenue uplift, cost savings, faster collections and lower EOFY obligations.
   - **Worst:** revenue decline, cost increases, a seasonal shutdown window, slower collections, faster supplier payments and higher EOFY obligations.
5. **Verify** that every entry actually moves cash.
6. **Build the Executive Summary:** current cash, EOFY trough, minimum and closing cash, net movement, inflows, outflows, average balance and the best-to-worst spread, all by formula.
7. **Add the Validation Checks, Change Log and Claude Log.**

## What you get

Three populated scenarios that produce different week-52 closing cash, an Executive Summary with key assumptions and risk flags, and validation checks covering entry counts, bullet timing, scenario divergence, Best ≥ Base ≥ Worst ordering, a liquidity floor, an Executive Summary cross-check and overlay errors.

## Good to know

- Not for monthly P&L commentary, 3-way model building or non-EXL Cloud cash flow models.
- Sign convention: a positive amount is cash in and a negative amount is cash out. An expense saving is entered as a positive.
- The start period is a date, not a week number. Entering a week number makes entries produce zero, so the skill anchors to the first forecast week's date.
- The % behaviour depends on the Base Forecast sheet. If that sheet is empty, the skill uses $ Repeat instead.
- Two entries for the same account stack, which lets you layer effects such as a decline plus a shutdown.
- Freeze panes can fail when several workbooks are open. If so, they are left for you to set.
