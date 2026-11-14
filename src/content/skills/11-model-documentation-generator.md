---
number: 11
name: "Model Documentation Generator"
slug: "model-documentation-generator"
tier: "Augmentation"
summary: "Reads a workbook and writes a plain-English methodology note covering architecture, data flow, calculation mechanics, assumptions and limitations."
worksWith: ["3-Way Driver-based Financial Model", "1-way Cash Flow and Profit Performance Scenario Models", "Bookkeeping Quoting Tool", "Any Excel model being handed over"]
outputs: ["Model overview: purpose, scope, entity, period, currency and basis", "Architecture map of tabs and data flow direction", "Plain-English calculation mechanics for each section", "Assumptions summary (cross-referenced to Skill 09 where available)", "Limitations, caveats and version history"]
askClaude: ["Document this model", "Methodology note", "Explain how this works", "How does this spreadsheet work?"]
related: [9, 14, 21]
knowledgeHub:
  - { title: "Financial Models: Workbook Structure and Hyperlinks", url: "https://www.modelcitizn.com/knowledge-hub/blogs/financial-models-layout/" }
  - { title: "User Friendliness in Financial Modelling", url: "https://www.modelcitizn.com/knowledge-hub/blogs/user-friendly-modelling/" }
---

## What it does

The Model Documentation Generator reads a workbook and produces a methodology note explaining how it works: what each tab does, what feeds what, and how the key calculations are built. It describes the model as it is, in plain English, so someone new can understand it without reverse-engineering formulas.

## When to use it

- Handing a model over to a colleague, client or reviewer.
- Picking up a model you didn't build.
- When someone asks "how does this spreadsheet work?"

## How it works

1. **Read the whole workbook**, including hidden and very hidden sheets, which can hold critical logic.
2. **Map the architecture:** the tab list with each tab's purpose and the direction data flows.
3. **Explain the calculations section by section:** inputs, method in plain English ("revenue multiplied by gross margin", not `=D15*$B$8`), outputs, downstream dependencies and sensitivities.
4. **Trace the dependency chain** to show what feeds what.
5. **Summarise assumptions**, referring to the Skill 09 register where it exists, or listing the top 10 to 15 if it doesn't.
6. **Record limitations:** what isn't modelled, known simplifications, data dependencies and fragile sections that are easy to break.
7. **Pull version history** from the Change Log.

## What you get

A methodology note, as text or as a Documentation tab, structured top-down: overview, architecture map, calculation mechanics, data flow, assumptions summary, limitations and caveats, and version history. Named ranges are grouped by prefix, the active scenario is noted, and any VBA macros in .xlsm files have their purpose documented.

## Good to know

- Describes what is. It doesn't modify the model or recommend changes. Use Skill 21 for a scored best-practice review.
- Assumption lists are not duplicated: if Skill 09 has run, the note refers to it.
- Brittle sections are flagged so the next person knows where to take care.
