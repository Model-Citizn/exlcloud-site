---
title: "Not All Datadear Replacements Are Created Equally"
author: "Lance Rubin"
date: 2022-10-03
excerpt: "Fast forward to today and next month (end of October 2022) the data connection is going to be pulled (which was announced a few months ago) leaving many who have not prepared for this event exposed...."
tags: ["Financial Modelling","Excel","SaaS"]
heroType: "compare"
originalUrl: "https://www.modelcitizn.com/knowledge-hub/blogs/datadear-replacements/"
kind: "hub"
---
<h3>Background</h3>
<p>Fast forward to today and next month (end of October 2022) the data connection is going to be pulled (which was announced a few months ago) leaving many who have not prepared for this event exposed.</p>
<p>There has been a massive rise in alternatives to plug this gap since the announcement and whilst it’s great to have options, not all options are the same.</p>
<p>More options = more research and of course, you don’t often know until you actually get into a trial and start using it that you realise it may not really fit the current and future business plans.</p>
<p>The purpose of this article is to help you shortcut that decision and make sure you don’t waste time and money on all the various options for your business and make an informed decision.</p>
<strong>Full disclosure:</strong> Yes we of course offer one of those solutions, but really want to make sure people get through this uncertainty with relatively little disruption and continue to leverage Excel for all its power and ubiquity.
<h3>Factors to consider</h3>
<p>When you start to research alternative options be sure to look out for these factors and make sure you ask the right questions when assessing alternatives.</p>
<p>Below is a summary of these 10 factors that you should be considering in your final decision, particularly if it's a core accounting process that you are running monthly, weekly and maybe even daily in some cases.</p>
<p>We will discuss each of these in more detail below but here is a short checklist:</p>
<ul><li>Intermediary server or data warehouse (that stores your/clients data)</li>
<li>Pull speed of data</li>
<li>Cost</li>
<li>Value-added Excel content</li>
<li>Post-purchase support and training</li>
<li>Push and pull capabilities</li>
<li>Multi-entity consolidation (not aggregation)</li>
<li>Multi-currency handling</li>
<li>Robust spreadsheet tool for modellers and accountants</li>
<li>Data pulled into pre-designed tables or on a single cell formula basis</li></ul>
<h3>1. Intermediary server or data warehouse (that stores your/clients data)</h3>
<p>More recently a number of solution providers who offer a data warehouse and intermediary servers that manage bigger data have started to connect that to Excel. Whilst this is a scalable data solution for “big data”, often this can be a hammer used to crack a walnut when a simpler tool, like Excel standalone, will do fine.</p>
<p>Intermediary servers can add cost, latency and complexity to the data model especially if it’s a cube-based relational database structure and the interface can be less intuitive.</p>
<p>Sometimes you just want the raw tables in Excel without the data model as you might want to build your own data model, relationships or logic.</p>
<h3>2. Pull speed of data</h3>
<p>One of the criticisms we heard from customers and experienced ourselves with DataDear was the slow pull speed that would often hang and even crash Excel. DataDear had an intermediary server and a range of other factors that would have impacted speed.</p>
<p>Also because you are using Excel, you will be limited anyway by the amount it can process. It’s not a database, so don't treat it like one.</p>
<p>So if you are looking to pull 50 entities' profit and loss and balance sheet at the same time on a monthly basis for the past 3 years, you might run into a problem or suggest you make, pour and drink a long coffee in the meantime.</p>
<p>The question is does the process really need to run like that or can it be optimised? If not, you are probably better off with an intermediary server to do that heavy lifting and not using Excel at all.</p>
<p>Excel is pretty good at handling a lot of data especially if you save this as an XLSB format and use Power Query. XLSB files are compressed and run more efficiently and of course there are over 1 million rows in Excel, but you should not be coming close to that or you will have issues.</p>
<p>This is where the intermediary server may be useful, but that brings other challenges as mentioned above.</p>
<h3>3. Cost</h3>
<p>Cost can be a big factor when all you want to do is pull data (hopefully in tables already ie not CSV) into Excel. A data warehouse instance in the background can add to that cost when at times it may not be required.</p>
<p>The cost of transitioning is often ignored and sometimes all you need is a plug-and-play solution directly into Excel with little setup effort.</p>
<p>Make sure you factor all the relevant costs into the transition, at times some of these are hidden and require a lot of your own time to re-engineer or external consulting time to set up.</p>
<h3>4. Value-added Excel content</h3>
<p>Some options in the market provide you with a simple data pull and not a lot more. Others offer you Power BI which is an awesome tool, but formula logic and creative thinking are limited by complexities in DAX and MScript.</p>
<p>No matter what the media or marketers say or think, Excel is not going anywhere and is an awesome tool for reporting, dashboards and modelling. There are also some pretty cool dashboards that can be developed in Excel.</p>
<p>It’s can take a long time and expert skills (which are hard to find) to build these awesome reports, dashboards and models so look carefully if these come with the data pulling capabilities.</p>
<h3>5. Post-purchase support and training</h3>
<p>Do you get post-purchase training, boot camps and skills development?</p>
<p>No matter what technology you use, the embedding and ongoing value extraction from the technology needs ongoing support and training.</p>
<p>Especially if you are talking about newer cutting-edge skills in analytics, modelling and automation.</p>
<p>Are boot camps or master classes offered on a regular basis at no extra cost?</p>
<h3>6. Push and pull capabilities</h3>
<p>However, for the more automation-focused accountants and finance professionals the push capabilities can save you a lot of time.</p>
<p>Pushing data for tasks like creating invoices, bills, bank transactions or manual journals.</p>
<p>Make sure your chosen solution also has a push capability.</p>
<h3>7. Multi-entity consolidation (not aggregation)</h3>
<p>Think for a moment about a SAAS business that has an IP entity that charges a license fee to other companies in the group.</p>
<p>In some cases, there is an employment company that pays all employees centrally but cross charges a management fee.</p>
<p>The most basic form of intercompany eliminations is of course equity in a subsidiary and investment held by the holding company so assets and equity are not overstated.</p>
<p>Handling proper consolidation processes and intercompany eliminations is reasonably technical and often not well managed with straight data pull processes. With some Power Query Magic, you can do a lot.</p>
<h3>8. Multi-currency handling</h3>
<p>Similar to multi-entity, multi-currency groups can be complex with having to translate subsidiaries with varying currencies across profit and loss and balance sheet at a different rate relative to the group reporting rate eg AUD against USD, GBP, NZD etc.</p>
<p>Ensuring that the solution can handle multiple currencies is critical for running robust group reporting results.</p>
<p>Transparency on what rates are being used and their source is equally important for audit and reporting purposes.</p>
<h3>9. Robust spreadsheet tool for modellers and accountants</h3>
<p>Ask any leading or expert financial modeller what spreadsheet technology they would use and more often than not it’s Microsoft Excel (not Excel for Mac).</p>
<p>Now whilst other spreadsheet tools like Google Sheets are great for multi-user collaboration, they often fall over with larger data sets as the browser simply cannot process more data efficiently.</p>
<p>In some cases, the same cell having different values for different users of the same spreadsheet live has been witnessed by heavy Google sheets users.</p>
<p>If you are going to build proper robust financial models and analyses then for the most stable and advanced tool Excel simply is the right tool.</p>
<p>Throw in Dynamic Arrays, LAMBDA and other enhancements and you have a true weapon of data and modelling at your fingertips.</p>
<p>The Power tools of Excel really sets it apart.</p>
<h3>10. Data pulled into pre-designed tables or on a single cell formula basis</h3>
<p>Some solutions in the market pull data not in a tabular structure but on a formula query basis.</p>
<p>Whilst this can be very fast and efficient to run, often you require 1 click tabular structures ready to go for the profit and loss across multiple entities, currencies and tracking categories.</p>
<p>Be careful you understand clearly how the data is being pulled and what’s required on your end to do that in the most efficient way.</p>
<h3>Why EXL Cloud?</h3>
<p>Of course, we believe what we have built can handle a lot of the challenges currently being experienced out there, but also take it beyond just data pulling and pushing problems but a holistic solution for analytics, modelling and advisory support.</p>
<p>Our 1-way cash flow model has got the eyes of many excited accountants looking to develop cash flow advisory services.</p>
<p>We also recently developed a weekly cash flow model for training purposes and will be releasing it soon. You can see the weekly cash flow in a <a href="https://www.youtube.com/watch?v=1DSV5rXLfbY" target="_blank" rel="noopener noreferrer"><strong>recent cash flow webinar.</strong></a></p>
<p>But don’t listen to us, check it out yourself with <a href="https://exlcloud.io/features" target="_blank" rel="noopener noreferrer"><strong>free downloads</strong></a> and <a href="https://exlcloud.io/support" target="_blank" rel="noopener noreferrer"><strong>videos</strong></a>.</p>
<p>Our <a href="https://exlcloud.io/support" target="_blank" rel="noopener noreferrer"><strong>Excel boot camps are launching soon</strong></a>!</p>
<p>We will let you decide rather than us doing the hard sales pitch here.</p>
<p>We have had comments from customers that we seem to be the closest solution that fits their needs and more.</p>
<p>Every business and firm needs to assess the tool relative to where they are now and where they want to go.</p>
<p>Whilst it's great to have alternatives, make sure you choose the right tool that suits the future strategy of your firm.</p>
<p>If you want to check out more, head over to <a href="https://exlcloud.io/" target="_blank" rel="noopener noreferrer"><strong>our website</strong></a> and you can <a href="/pricing"><strong>start a free 7-day trial</strong></a>.</p>
