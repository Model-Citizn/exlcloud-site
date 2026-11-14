---
title: "Zero Hardcoding: The EXL Cloud Standard for Driver-Based 3-Way Models"
author: "Lance Rubin"
date: 2026-11-14
excerpt: "Blue inputs, black formulas, no numbers typed into calculations, a full three-way reconciliation, a dedicated validation sheet and a change log in every workbook. These are the EXL Cloud modelling standards — and in the age of AI they matter more, not less."
tags: ["Financial Modelling","Excel","3-Way Model","EXL Cloud"]
heroType: "flow"
kind: "product"
skills: [2, 9, 10, 21]
---
<p><strong>The short answer:</strong> The EXL Cloud modelling standard is a set of non-negotiable rules for driver-based financial models: zero hardcoding in calculations, blue inputs and black formulas, a fully reconciled three-way model (P&amp;L, balance sheet and cash flow), a dedicated error and validation sheet, and a change log in every workbook. Every EXL Cloud Gen 2 workbook and every EXL Cloud AI skill is built to this standard.</p>
<h2>Why standards, and why now?</h2>
<p>I've reviewed a lot of models over two decades in banking, Big 4 and advisory. The models that failed rarely failed because of a complex formula. They failed because someone typed a number into a calculation row in 2019 and nobody noticed it was still there in 2023.</p>
<p>AI raises the stakes. Claude can now build and extend a model in minutes. Without standards, you just get bad models faster. With standards, AI becomes a force multiplier — because a model built to a known standard can be checked against that standard, by a human or by another skill.</p>
<h2>The six rules</h2>
<h3>1. Zero hardcoding</h3>
<p>No business number is ever typed into a calculation. Growth rates, prices, headcount, days — they all live in labelled input cells and are referenced. The only literals allowed in formulas are structural constants (12 months in a year, 1 for a flag).</p>
<p><em>Why it matters:</em> a hardcode is invisible. It doesn't change when the assumption changes, and it's the single most common cause of models quietly giving the wrong answer.</p>
<h3>2. Blue inputs, black formulas</h3>
<p>Inputs are blue font. Formulas are black. Links to other sheets follow a consistent convention. Anyone opening the model knows instantly what they're allowed to change and what they shouldn't touch.</p>
<h3>3. Driver-based, one direction</h3>
<p>Inputs → calculations → outputs. Revenue is built from drivers (customers × price, jobs × average value), not typed as a total. Calculations flow one way, so a change to a driver ripples predictably through to the outputs.</p>
<h3>4. Full three-way reconciliation</h3>
<p>The P&amp;L, balance sheet and cash flow statement are fully integrated. Net profit rolls into retained earnings. The cash flow statement reconciles to the movement in cash on the balance sheet. The balance sheet balances in every single period, not just the last one.</p>
<h3>5. A dedicated error and validation sheet</h3>
<p>Every check — balance sheet balances, cash ties, retained earnings rolls forward, inputs within range — rolls up to a single sheet with a single answer: errors = 0, or not. That status is displayed on the cover and on every output, so nobody can present a model that's quietly broken.</p>
<h3>6. A change log in every workbook</h3>
<p>Every structural change is logged: what changed, where, why, and who did it. When AI is involved, that's logged too. Six months later, the change log is the difference between understanding a model and reverse-engineering it.</p>
<h2>What this looks like in an EXL Cloud workbook</h2>
<p>The Gen 2 rebuild applied these standards to every EXL Cloud workbook. Each one now includes a dedicated Instructions sheet, consistent navigation and formatting, plain-English notes on formulas, and validation checks wired to a single status. The 3-Way Driver-Based Financial Model pulls actuals straight from Xero, so the forecast starts from real numbers, not a copy-paste.</p>
<p>Want to see it in action? Try the <a href="/future">interactive 3-way model demo</a> — move the drivers and watch the P&amp;L, balance sheet and cash flow respond together.</p>
<h2>Standards make AI trustworthy</h2>
<p>This is the part most people miss. When a model follows known rules, AI can check it against those rules:</p>
<ul>
<li><strong>Skill 02</strong> enforces the formatting and formula standards whenever Claude builds a sheet.</li>
<li><strong>Skill 09</strong> extracts every hardcoded assumption into a register — and finds the ones that shouldn't be there.</li>
<li><strong>Skill 10</strong> adds PASS/FAIL validation checks.</li>
<li><strong>Skill 21</strong> benchmarks the whole model and tells you exactly where it falls short. <a href="/articles/how-to-benchmark-a-financial-model-against-best-practice">How the benchmark works →</a></li>
</ul>
<p>Without a standard, an AI review can only tell you what it thinks. With one, it can tell you what's missing, where, and how long it'll take to fix.</p>
<h2>Frequently asked questions</h2>
<h3>Is a single hardcode really a problem?</h3>
<p>One hardcode in a model that nobody else will ever touch is a small risk. One hardcode in a model that's rolled forward monthly, shared with a lender and extended by AI is a time bomb. The rule is zero because "a few" never stays a few.</p>
<h3>Do these standards apply to models built outside EXL Cloud?</h3>
<p>Yes. They're consistent with recognised standards like FAST, SSRB and ICAEW guidance. EXL Cloud just makes them the default.</p>
<h3>Where can I learn to build models this way?</h3>
<p>Our free Lightning Lessons on Maven cover the fundamentals, and the AI-Powered Accountant program goes deep on building and reviewing models with Claude. EXL Cloud subscribers receive 45% off the program.</p>
<p><strong>Go deeper:</strong> <a href="https://www.modelcitizn.com/knowledge-hub/blogs/3-way-financial-modelling/" target="_blank" rel="noopener">3-Way Financial Model: Fundamentals</a>, <a href="https://www.modelcitizn.com/knowledge-hub/blogs/driver-based-planning/" target="_blank" rel="noopener">Driver Based Planning and Forecasting</a> and <a href="https://www.modelcitizn.com/knowledge-hub/blogs/error-checks-excel/" target="_blank" rel="noopener">Error Checks for Excel</a> on the Model Citizn Knowledge Hub.</p>
<hr>
<p><em>Every EXL Cloud Gen 2 workbook is built to these standards and connects to Xero in 8 clicks. <a href="/features">Explore the workbooks →</a></em></p>
