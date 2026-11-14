---
title: "Error Checks for Excel and Financial Modelling"
author: "Lance Rubin"
coauthor: "Maarten (Spreadsheetsoftware)"
date: 2023-07-14
excerpt: "Every spreadsheet contains errors — the question is whether you catch them before your stakeholders do. Lance Rubin and model auditor Maarten (Spreadsheetsoftware) share practical error-check techniques, how to teach them, and how AI and automation change spreadsheet risk."
tags: ["Financial Modelling","Excel","Error Checking"]
heroType: "shield"
canonical: "https://www.modelcitizn.com/knowledge-hub/blogs/error-checks-excel/"
kind: "hub"
---
<h3>Introduction to the co-authors</h3>
<p>After graduating in Mathematical Economics, Maarten worked for 10 years as a quantitative consultant in both the profit and non-profit sectors. Throughout his career he has built and audited hundreds of small and large Excel models for different purposes, which gave him a detailed insight into the possibilities and drawbacks of using Excel.</p>
<p>Maarten provided key decision makers in the banking, real estate and stock market industries with accurate planning and investment decision models built in Excel. These models provided the necessary support for successful multi-million euros transactions.</p>
<p>Because of Maarten’s extensive experience with financial models, he is often approached to consult to companies on this matter or to provide them with very specific training to highly qualified professionals.</p>
<p>Although his mother tongue is Dutch, his English, German and French is impeccable.</p>
<p>In 2011 Maarten decided to take his knowledge and experience to a new level by helping even more professionals leverage the best of Excel (flexibility) whilst removing the draw backs (errors).</p>
<p>He started a company called <a href="https://spreadsheetsoftware.com/" target="_blank" rel="noopener noreferrer">Spreadsheetsoftware</a> with a lot of ideas, enthusiasm and a vision to develop, amongst other things, the most advanced error detection software in Excel called ExcelAnalyzer.</p>
<p>ExcelAnalyzer comes as an extra button in Excel and is positioned to be the solution to resolve errors and risks so that Excel users can gain confidence in their spreadsheets again.</p>
<h3>Why did Maarten select the topic and why is he passionate about it?</h3>
<p>I am no stranger to Excel errors and in fact, like many finance professionals, spreadsheeters and financial modellers, I had to face the reality that humans will naturally create errors without even realising it.</p>
<p>Excel is a development platform for decision making and its flexibility is both its strength and its weakness.</p>
<p>Whilst humans are incredibly creative and we assist in multi-million-euro transactions, there are some easy tips and tricks that we can apply with relative ease to make us even more awesome.</p>
<p>I wanted to help people save time and make more accurate decisions by sharing these tips.</p>
<h3>Topic and context in 3 sentences</h3>
<p>Here are a few key facts to kick this off:</p>
<ul><li>The reality is that anyone who has worked in a spreadsheet is not immune to the possibility of errors due to its flexibility which is both a blessing and a curse at the same time.</li>
<li>There are lots of statistics on this but a common one is that more than 90% of spreadsheets contain serious errors, while more than 90% of spreadsheet users are convinced that their models are error-free – <a href="https://www.accaglobal.com/an/en/student/sa/features/talking-technology---spreadsheet-solutions.html" target="_blank" rel="noopener noreferrer">ACCA article</a>.</li>
<li>It’s not Excel that is the problem, but the way it is used.</li></ul>
<h3>If you had to teach this topic in a class to school kids what key tips would you give them to focus on?</h3>
<p>Prevention is always better (cheaper) than the cure so be sure you follow best practice and keep your spreadsheets hygienically sound.</p>
<p>Kids generally don’t like to go to the doctor and especially not the dentist. So, stay away from too many sugary drinks, lollies and food that is generally bad for your health.</p>
<p>Errors in spreadsheets can be bad for your health too when a decision is being made based on an error-riddled spreadsheet.</p>
<p>The problem is most people don’t know that they have an error until it’s too late and very expensive to fix retrospectively.</p>
<p>Review recent articles in the series mentioned below to reduce the risk of errors by designing Flexible, Appropriate, well Structured and Transparent models.</p>
<p>Explore some of the tips in this article to reduce your risk of a bad tooth or other health issues from a poor diet in your Excel workbooks.</p>
<h3>What practical steps can people take now to learn more?</h3>
<p>Spreadsheeters use Excel like a messy teenager’s bedroom with stuff lying everywhere and no structure, whilst a financial modeller takes care in how they build their Excel models, and this includes error detection and trapping.</p>
<p>However, even professional financial modellers know that humans make errors and whilst it’s possible to reduce the error risk significantly it cannot be eliminated without the use of model audit software and another pair of eyes. Even then errors can sneak through after an audit.</p>
<p>To give this article justice it’s important to distinguish between error trapping or prevention and error detection and remediation.</p>
<p>Think of it like eating well and doing exercise that can help prevent you from getting sick without doing anything extra. Hygiene is a factor of life and you avoid problems down the track as the context for prevention and trapping errors in Excel.</p>
<p>Compared to error detection when you feel unwell you try to detect what is causing that issue and stick a thermometer in your mouth. Once you know it’s a temperature you self-medicate by taking a day off work, sleeping, drinking lots of water and perhaps taking a cold and flu tablet if you are a bit sniffly.</p>
<p>If you feel really sick the day after, then you go see a professional doctor (aka model auditor) for some professional help on your problem.</p>
<p>So why don’t we follow this same regime for our most favourite software Excel. For the purpose of this article we are referring to actual errors compared to alerts of potential errors.</p>
<p>An alert may not necessarily be an error, but it needs to be investigated as a possible business problem like breaching debt covenants or outside tolerance of certain KPIs.</p>
<strong>ERROR TRAPPING OR PREVENTION</strong>
<p>● <strong>Data Validation</strong> – this is one of the most under-utilised native functions in Excel that define what is acceptable in a particular cell. If anything doesn’t fit that rule then it throws out an error before it can cause damage ie only positive numbers or no text etc.</p>
<p>The use of data validation is a great way to prevent your spreadsheet from getting sick, like the example below.</p>
<p>You can even customise your error messages and input message alerts.</p>
<p>● <strong>Error trapping via flags or custom-built error checks</strong> – most financial modellers would build a model which contain specific error flags within it. The reason for doing this is to highlight in an instant when the error has occurred.</p>
<p>The flag can be custom built with an IFERROR or ISERROR formula if triggered.</p>
<p>Use conditional formatting for extra effect as it highlights clearly in red that errors exist.</p>
<p>Better yet, consider adding it to the title of the model for really broadcasting issues straight away, no matter where you are in the model you will see the heading change.</p>
<p>Here is a simple example to trap any Excel error (not a logic error, example here is #DIV/0!) in any series of precedent formula cells:</p>
<p>One of the best custom-built error checks is whether the Balance Sheet is in balance or not?</p>
<p>If the Balance Sheet is out of balance, it's an Error, NO If, Buts of Maybe’s, its wrong!</p>
<p>This is one of the primary reasons why a 3-way model is more robust than simply a cash flow only model without the Balance Sheet check.</p>
<p>There are different ways to create this error check for the Balance Sheet or any other cross balancing error check, where you expect two numbers from different parts of the model to equal each other.</p>
<p>Another example is revenue by customer and product should equal each other.</p>
<p>You should setup these error checks as you build the model and ensure that you gain more confidence in the overall accuracy of the calculations.</p>
<p>You would setup this error check where you expect the answer to equal zero when you subtract each number from the other.</p>
<p>Setup this error check formula using the following syntax:</p>
<p>=IF((C3-C5-C7)<>0, (C3-C5-C7),0)</p>
<p>Again, using conditional formatting can be useful to highlighting the errors as seen below:</p>
<strong>ERROR DETECTION</strong>
<p>When you feel like there could be an error but not sure where it is then you should grab that thermometer to test whether there is a problem.</p>
<p>Thermometers in the Excel world comes in the form of error detection tools that you can apply to your own models. Some of these are in-built to Excel but are often ignored and sometimes provide too many false positives.</p>
<p>Those tools that do not come with native Excel have been used by model auditors for many years and are well known to professional financial modellers, however most of these are built as an add-in using VBA (which is one of the most inefficient coding languages for heavy Excel processes).</p>
<p>However, this has advanced in the form of more efficient coding languages like VB.Net and C#, which ExcelAnalyzer currently uses.</p>
<p>Once you use your Excel thermometer you might see some interesting indicators of your spreadsheet health like number of hardcoded formulas, wasted space, model flow and complexity, unique formula count, redundant names, Excel error count and highlighting possible logic errors for checking inconsistent formulas.</p>
<p>Breaking the rules mentioned in the prior article like one row, one formula can be seen easily and quickly.</p>
<p>It’s almost like getting a full blood test on your spreadsheet without having to pay a doctor to get it.</p>
<p>But sometimes you might have to visit your doctor if your test results are really bad, they would show up things like this.</p>
<p>Note: that Excel sometimes flags these issues, but many people simply ignore them as sometimes they generate false positives or become annoying so they just get ignored.</p>
<p>Below are some more examples of what these test results would look like in terms of formula issues and errors, including risk areas like external links.</p>
<p>Understanding the flow of formulas and numbers in a spreadsheet or model is also often very difficult without your friendly doctor taking a closer look at it.</p>
<h3>Where are good places (links) to find out more on the topic?</h3>
<p>Here is a list of links which are useful to those readers wanting to develop a healthy relationship with Excel and avoid those problematic areas of errors:</p>
<ul><li>AccountechLive 2019 – Mastering Errors in Excel - Keep the Roses, Avoid the Thorns</li></ul>
<p>Other relevant articles in this series that can keep you nice and healthy:</p>
<ul><li><a href="https://www.linkedin.com/pulse/financial-model-development-lance-rubin/" target="_blank" rel="noopener noreferrer">Financial Model Development</a>– co-authored by David Thompson</li>
<li><a href="https://www.linkedin.com/pulse/user-friendliness-financial-modelling-lance-rubin/" target="_blank" rel="noopener noreferrer">User Friendliness in Financial Modelling</a> – co-authored by David Thompson</li>
<li><a href="https://www.linkedin.com/pulse/workbook-structure-hyperlinks-financial-models-lance-rubin/" target="_blank" rel="noopener noreferrer">Workbook Structure and Hyperlinks for Financial Models</a> - co-authored with Jennifer Harrison</li>
<li><a href="https://www.linkedin.com/pulse/best-practice-formula-construction-financial-modelling-lance-rubin/" target="_blank" rel="noopener noreferrer">Best Practice Formula Construction for Financial Modelling</a> – co-authored with Jennifer Harrison</li></ul>
<h3>How important is this skill in the context of learning financial modelling?</h3>
<p>The fact remains that all professional financial modellers and financial modelling firms recognise that as humans when we write formulas and code up any spreadsheet our creation of errors is inevitable.</p>
<p>In order to master the art of financial modelling we have to master the art of specifically focusing on preventing and trapping these errors and also design formulas and structure the workbook to greatly reduce this risk.</p>
<p>If you want to consider yourself as having robust financial modelling skills, then handling errors is a MUST have skill.</p>
<p>Not just post fact, but before, during and after building any model this must be front of mind.</p>
<p>The skill of error prevention and detection is vital, there is no other way of saying it.</p>
<h3>How does all this disruption, AI and Automation talk impact this topic?</h3>
<p>Whilst there are certainly software packages that can do some really great heavy lifting of error detection and reporting like ExcelAnalyzer and other similar tools, there is still a need for a human to interpret what impact that error might have.</p>
<p>The balance sheet check error seen above will not be detectible unless you specifically force an error creation for an imbalance so that the software can pick up the cell specifically.</p>
<p>If the logic of how a business makes money is out of sync with reality, its only the human that will be able to see this through the outputs or other cross checking over time when the actual results do not reconcile with the forecast.</p>
<p>Our role in error detection needs to change and evolve, like all things when it comes to AI and automation, to being the interpreter of the error vs manually hunting them (unless we are required to do so as part of an audit).</p>
<p>If you want to find out more and follow the rest of the article series be sure to download the <a href="https://fmwiki.glideapp.io/" target="_blank" rel="noopener noreferrer">Financial Modelling App</a></p>
<p>If you want to find more information on financial modelling and content visit the <a href="https://www.modelcitizn.com/" target="_blank" rel="noopener noreferrer">Model Citizn website</a>.</p>
