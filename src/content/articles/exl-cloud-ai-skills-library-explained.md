---
title: "The EXL Cloud AI Skills Library: Every Claude Skill Explained"
author: "Lance Rubin"
date: 2026-11-14
excerpt: "EXL Cloud now ships 20+ purpose-built Claude AI skills, organised into five tiers — Foundation, Data Infrastructure, Narrative, Augmentation and Advanced Workflows. Here's what each one does, when to use it, and how they fit together inside an Excel workbook connected to Xero."
tags: ["AI","Claude","EXL Cloud","Financial Modelling"]
heroType: "grid"
kind: "product"
skills: [1, 2, 10, 20, 21]
---
<p><strong>The short answer:</strong> The EXL Cloud AI Skills Library is a set of 20+ purpose-built skills for Anthropic's Claude that are trained on the structure of EXL Cloud workbooks. You download a skill, load it into Claude, and Claude immediately knows how that workbook is built — its sheets, its named ranges, its formatting standards and its checks. Instead of prompting from scratch every month, you invoke a skill and get the same quality of output every time.</p>
<h2>What is a skill, and why not just prompt?</h2>
<p>A prompt is a one-off instruction. A skill is an encoded way of working. It captures how an experienced modeller would approach a task — what to look at first, what standards to apply, what "done" looks like — and packages it so Claude follows that method consistently.</p>
<p>That consistency is the whole point. Finance teams don't need a clever answer once; they need the same reliable answer every month-end, for every client, regardless of who presses the button. A well-built skill turns good practice into repeatable practice.</p>
<p>Every EXL Cloud skill follows the same rules as the workbooks themselves: blue inputs, black formulas, no hardcoded numbers in calculation blocks, a validation sheet that tells you whether the model is healthy, and a change log so you can see what was done and when.</p>
<h2>Tier 1 — Foundation</h2>
<p>These two skills set the standard everything else is built on. Load them first.</p>
<ul>
<li><strong>Skill 01 — EXL Cloud Skills Foundations.</strong> Quality benchmarking for skill development and model auditing. It defines how a skill should behave, how outputs are checked, and what gets logged.</li>
<li><strong>Skill 02 — Best Practice Financial Modelling.</strong> Formatting, colour coding and formula standards for Excel models. When any other skill builds a sheet, it re-checks the output against Skill 02 before handing it back.</li>
</ul>
<h2>Tier 2 — Data Infrastructure</h2>
<p>Bad data in means bad analysis out. These skills make sure the data feeding your models is clean and structured before anything is built on top of it.</p>
<ul>
<li><strong>Skill 03 — Clean &amp; Validate Data.</strong> Automated data cleanup before any reporting or modelling work begins.</li>
<li><strong>Skill 04 — Trial Balance Mapper.</strong> Maps accounts from any accounting system into standardised categories, so a Xero chart of accounts lands in the right reporting lines.</li>
<li><strong>Skill 05 — Period Table Builder.</strong> Builds the Period date structure that drives every time-series workbook — monthly, quarterly, financial year and actual/forecast flags.</li>
</ul>
<h2>Tier 3 — Narrative</h2>
<p>Numbers without a story don't get acted on. These skills turn workbook data into the words boards and owners actually read.</p>
<ul>
<li><strong>Skill 06 — Monthly Commentary Generator.</strong> Professional management commentary from P&amp;L and cash flow data.</li>
<li><strong>Skill 07 — Board Paper Drafter.</strong> Assembles a complete board-ready report from commentary and financial data.</li>
<li><strong>Skill 08 — Cash Flow Narrative.</strong> Explains cash movements in plain English across operating, investing and financing activities.</li>
</ul>
<h2>Tier 4 — Augmentation</h2>
<p>These skills add the governance layer that most spreadsheets are missing — the bits that separate a spreadsheet from a financial model.</p>
<ul>
<li><strong>Skill 09 — Assumption Register Builder.</strong> Scans a workbook and extracts every hardcoded assumption into a structured register.</li>
<li><strong>Skill 10 — Anomaly Detection.</strong> Adds automated PASS/FAIL validation checks to any workbook.</li>
<li><strong>Skill 11 — Model Documentation Generator.</strong> Auto-generates an Instructions sheet covering model structure and usage.</li>
<li><strong>Skill 12 — Variance Analysis Reporter.</strong> Builds a structured comparison of actuals to budget, forecast or prior period.</li>
<li><strong>Skill 13 — KPI Dashboard Formatter.</strong> A one-page executive dashboard with tiles and traffic-light indicators.</li>
<li><strong>Skill 14 — Change Log &amp; Audit Trail.</strong> Structured change tracking sheets for every workbook.</li>
<li><strong>Skill 15 — Meeting Prep Pack.</strong> Generates a meeting preparation pack directly from workbook data.</li>
</ul>
<h2>Tier 5 — Advanced Workflows</h2>
<p>These are workbook-specific and multi-step. They're where the library has grown fastest in 2026.</p>
<ul>
<li><strong>Skill 16 — Weekly Cash Flow Scenario Overlay Builder.</strong> Builds scenario overlays for the EXL Cloud Weekly Cash Flow model.</li>
<li><strong>Skill 17 — Human Capital Report Commentary.</strong> Workforce cost analysis and CFO-ready commentary from payroll data.</li>
<li><strong>Skill 18 — Invoice &amp; Bill Pull Analysis.</strong> Analysis suite for invoice and bill data pulled from Xero.</li>
<li><strong>Skill 19 — Performance Report Dashboard Commentary.</strong> Writes dashboard commentary for EXL Cloud Performance Reports.</li>
<li><strong>Skill 20 — Assumption &amp; Output Reasonableness Check.</strong> Tests drivers and outputs against editable reasonable ranges and flags anything that doesn't make sense. <a href="/articles/assumption-and-output-reasonableness-checks">Read the deep dive →</a></li>
<li><strong>Skill 21 — Model Best Practice Benchmark.</strong> Scores a workbook against a weighted best-practice criteria library and produces a findings log and a phased remediation plan with estimated fix hours. <a href="/articles/how-to-benchmark-a-financial-model-against-best-practice">Read the deep dive →</a></li>
</ul>
<h2>How the skills work together</h2>
<p>The tiers are deliberately ordered. A typical month-end flow looks like this:</p>
<ol>
<li><strong>Pull</strong> the latest actuals from Xero with EXL Cloud (8 clicks).</li>
<li><strong>Clean and map</strong> with Skills 03 and 04 if the chart of accounts has changed.</li>
<li><strong>Check</strong> the model with Skills 10 and 20 — is it healthy, and do the numbers make sense?</li>
<li><strong>Explain</strong> with Skills 06, 08 and 19 — commentary that matches the numbers.</li>
<li><strong>Package</strong> with Skill 07 — a board paper ready for review.</li>
</ol>
<p>Skill 21 sits slightly outside that loop. You run it when you inherit a model, before a major decision is made on a model's output, or quarterly as a health check — it tells you how far a workbook is from best practice and what it would take to close the gap.</p>
<h2>Where do the skills come from?</h2>
<p>Every skill was built and tested against real EXL Cloud Gen 2 workbooks by the Model Citizn team, then refined on live client engagements. That's why they're opinionated: they encode how we actually build and review models, not a generic idea of what a model should look like.</p>
<h2>Frequently asked questions</h2>
<h3>Which plan includes the AI skills?</h3>
<p>The skills library is included in the Advanced Content plan ($170 AUD/month, 5 Xero connections included). The plan also includes the 3-way driver-based model, Performance Reports, cash flow and profit scenario models, Power BI integration and HTML board packs.</p>
<h3>Do I need a paid Claude account?</h3>
<p>Skills are loaded into Claude, so you need access to Claude with skills enabled. Check Anthropic's current plan details for which tiers support skills.</p>
<h3>Can I edit or extend a skill?</h3>
<p>Yes. A skill is a structured instruction file. You can adapt it to your firm's conventions — many of our AI-Powered Accountant students do exactly that as their capstone.</p>
<h3>Does Claude change my workbook without asking?</h3>
<p>Skills that build sheets add new, clearly labelled tabs and log what they did in the workbook's change log. Review-type skills (like Skill 21) treat the model under review as read-only.</p>
<p><strong>Go deeper:</strong> on the Model Citizn Knowledge Hub, <a href="https://www.modelcitizn.com/knowledge-hub/blogs/claude-skill-sprawl/" target="_blank" rel="noopener">Skill Sprawl Warning</a> covers how to keep a skills library manageable, and <a href="https://www.modelcitizn.com/knowledge-hub/ai-artefacts/ai-financial-modelling/" target="_blank" rel="noopener">AI Financial Modelling: 8 AI Builds Tested</a> shows why encoded standards matter. Every skill has its own page in the <a href="/skills">skills library</a>.</p>
<hr>
<p><em>EXL Cloud connects Excel to Xero in 8 clicks and ships 20+ Claude AI skills with the Advanced Content plan. <a href="/skills">See the full skills library →</a></em></p>
