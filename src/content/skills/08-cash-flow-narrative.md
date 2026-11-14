---
number: 8
name: "Cash Flow Narrative"
slug: "cash-flow-narrative"
tier: "Narrative"
summary: "Explains cash movements from opening to closing balance in plain English, with operating, investing and financing drivers and a cash bridge."
worksWith: ["Weekly Cash Flow Model", "1-way Cash Flow Scenario Model", "3-Way Driver-based Financial Model"]
outputs: ["Opening-to-closing cash headline with movement in dollars and percent", "Operating cash commentary with cash conversion ratio", "Investing and financing commentary", "Tabular cash bridge", "Forward look on known large payments and collections"]
askClaude: ["Explain cash movements", "Where did the cash go?", "Cash flow commentary", "Cash bridge narrative"]
related: [7, 6, 16]
knowledgeHub:
  - { title: "3-Way Financial Model: Fundamentals of Cash Flow Modelling", url: "https://www.modelcitizn.com/knowledge-hub/blogs/3-way-financial-modelling/" }
  - { title: "Finance cadence", url: "https://www.modelcitizn.com/knowledge-hub/blogs/finance-cadence/" }
---

## What it does

Cash Flow Narrative writes a plain-English explanation of how cash moved from the opening balance to the closing balance. It covers operating, investing and financing activity, puts numbers on the drivers, and produces a bridge a reader can follow line by line.

## When to use it

- Month-end packs where the cash result needs explaining, not just reporting.
- When someone asks "where did the cash go?"
- Before drafting a board paper: the output feeds the cash section of Skill 07.

## How it works

1. **Detect the format.** Claude identifies whether the source is a direct, indirect, waterfall or bank reconciliation layout.
2. **Extract.** Opening and closing cash, net movement, and the operating, investing and financing splits.
3. **Write the narrative**, following the same commentary standards as the other narrative skills:
   - Headline: cash at period end, up or down by how much and by what percentage.
   - Operating: cash conversion ratio (operating cash flow divided by EBITDA), and receivables and payables movements with their drivers.
   - Investing and financing: capex, debt, equity and dividends, with their purpose.
   - Bridge: a tabular walk from opening to closing.
   - Forward look: known large payments, collections and maturities.

## What you get

A short, quantified narrative and cash bridge in Australian English and AUD, ready to drop into a management pack or into the cash section of a board paper.

## Good to know

- Text output only. It does not build cash flow models or bank reconciliations.
- Under the indirect method, an increase in receivables is a cash outflow. The narrative handles signs accordingly.
- Large January, April, July and October payments are often quarterly GST/BAS, and super is payable 28 days after quarter end. These are treated as expected timing, not anomalies.
- Interest paid (cash) can differ from interest expense (accrual), and dividends and drawings depend on entity type.
- Restricted or ring-fenced cash is kept separate from free cash.
