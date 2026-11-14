---
title: "Assumption and Output Reasonableness Checks: When the Model Adds Up but Doesn't Make Sense"
author: "Lance Rubin"
date: 2026-11-14
excerpt: "A model can balance perfectly and still be wrong. Individually sensible assumptions compound into a hockey stick, the 'worst case' never stresses cash, margins quietly improve every year. Skill 20 tests both the inputs and the outputs against reasonable ranges — and flags what doesn't make sense."
tags: ["Financial Modelling","AI","Error Checking","Forecasting"]
heroType: "search"
kind: "product"
skills: [20, 9, 10]
---
<p><strong>The short answer:</strong> A reasonableness check tests whether a model's assumptions sit within sensible ranges and whether its outputs behave plausibly — not whether the arithmetic is right. EXL Cloud's Skill 20 builds a single Assumption &amp; Output Reasonableness Check sheet in your workbook that links live to every key driver and headline output, compares each to editable low/high bounds, and flags anything outside the range for review.</p>
<h2>Balanced is not the same as right</h2>
<p>Every modeller knows the relief of a balance sheet check turning green. But a balanced model only tells you the double entry works. It says nothing about whether the story the model tells is believable.</p>
<p>The errors that hurt in practice usually aren't #REF!s. They're things like:</p>
<ul>
<li>A 30% growth rate copied across every revenue stream, with no differentiation.</li>
<li>Individually reasonable growth assumptions that compound into a five-year hockey stick.</li>
<li>A "worst case" scenario that never actually brings cash close to zero.</li>
<li>Gross margin that improves every single year with nothing in the model driving it.</li>
<li>A corporate tax rate of 0% because the input was never filled in.</li>
</ul>
<p>None of these break a formula. All of them can break a decision.</p>
<h2>Two checks, one sheet</h2>
<p>Skill 20 deliberately pairs two checks, because assumptions and outputs fail in different ways.</p>
<h3>1. Assumption reasonableness</h3>
<p>Claude finds the model's driver sheets by what's on them — scenario manager, revenue and cost drivers, salaries, tax, working capital, assets and capital — rather than relying on sheet names, which vary between workbooks. It harvests the key value-drivers only (growth rates, CPI, margins, working capital days, salary increases, GST, company tax, depreciation lives, discount rates) and builds a table:</p>
<ul>
<li><strong>Source cell</strong> — exactly where the assumption lives.</li>
<li><strong>Live value</strong> — a formula link, so the check updates when the model does.</li>
<li><strong>Reasonable low / high</strong> — editable bounds, with the rationale written down.</li>
<li><strong>Status</strong> — passed, or flagged above/below range.</li>
</ul>
<h3>2. Output reasonableness</h3>
<p>The second section looks at what the drivers produce, across the forecast horizon and by scenario where available:</p>
<ul>
<li><strong>Trend sanity</strong> — does revenue, EBITDA or margin move in a way the drivers explain?</li>
<li><strong>Cash and liquidity</strong> — what's the minimum cash position, and when?</li>
<li><strong>Margin and ratio bands</strong> — are gross and EBITDA margins within a plausible band for the business?</li>
<li><strong>Scenario ordering</strong> — is Worst ≤ Base ≤ Best for the metrics that matter? If not, the scenarios aren't doing their job.</li>
</ul>
<p>A single summary at the top gives the whole picture in four numbers: checks tested, passed, flagged for review, and judgement items to verify.</p>
<h2>Why the bounds are editable — and stable</h2>
<p>There's no universal "reasonable" growth rate. A SaaS start-up and a mature construction business have very different ranges. So the bounds are inputs: blue cells you can change, with the rationale next to them.</p>
<p>Just as important, when the check is re-run next month, the existing bounds are carried forward unchanged. Only genuinely new assumptions get new bounds. If the standard moved every time you ran it, the check would just be inventing a new rubric each month and you'd never know whether the model had changed or the test had. A reasonableness check is only useful if it's consistent.</p>
<h2>Flags are prompts, not verdicts</h2>
<p>A flag doesn't mean the assumption is wrong. A 40% growth rate might be entirely justified by a signed contract. The point is that someone has to look at it and write down why. That written rationale is what turns a model from "the spreadsheet says so" into something a lender, investor or board can rely on.</p>
<h2>Where it fits in the review process</h2>
<ol>
<li><strong>Validation checks</strong> (Skill 10) — does the model work? Balance sheet, cash, retained earnings.</li>
<li><strong>Reasonableness check</strong> (Skill 20) — do the numbers make sense?</li>
<li><strong>Commentary</strong> (Skills 06, 08) — explain the numbers you now trust.</li>
<li><strong>Benchmark</strong> (Skill 21) — periodically, is the model built well enough to keep trusting? <a href="/articles/how-to-benchmark-a-financial-model-against-best-practice">How benchmarking works →</a></li>
</ol>
<h2>Frequently asked questions</h2>
<h3>Is this the same as an assumption register?</h3>
<p>No. An assumption register (Skill 09) catalogues every input. A reasonableness check tests only the key value-drivers and the headline outputs for plausibility. They complement each other.</p>
<h3>Can I run just the assumption or just the output section?</h3>
<p>Yes. Ask for one and Skill 20 builds only that section; the summary then reports on that section alone.</p>
<h3>Does it work on models built outside EXL Cloud?</h3>
<p>It's designed for EXL Cloud and Model Citizn 3-way workbooks, but because it finds sheets by content rather than by name, it adapts well to other driver-based models.</p>
<p><strong>Go deeper:</strong> <a href="https://www.modelcitizn.com/knowledge-hub/blogs/model-sensitivity/" target="_blank" rel="noopener">Model Sensitivity</a> and <a href="https://www.modelcitizn.com/knowledge-hub/blogs/scenario-analysis-the-best-cure-for-uncertainty/" target="_blank" rel="noopener">Scenario Analysis: The Best Cure for Uncertainty</a> on the Model Citizn Knowledge Hub. Full skill details: <a href="/skills/assumption-output-reasonableness-check">Skill 20</a>.</p>
<hr>
<p><em>Skill 20 is part of the EXL Cloud AI Skills Library — 20+ Claude skills included with the Advanced Content plan. <a href="/articles/exl-cloud-ai-skills-library-explained">Explore the library →</a></em></p>
