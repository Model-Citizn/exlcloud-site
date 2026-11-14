import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL, money } from "../../lib/site.js";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Counter, DAB, FAQSection, Btn, Sec, SectionHead, Video, VideoLocal, PersonPlaceholder } from "../ui.jsx";

/* FAQ items — rendered below and emitted as FAQPage JSON-LD by the .astro page */
export const FAQ = [
    { q: "What data can EXL Cloud pull from Xero?", a: "EXL Cloud pulls trial balance, profit and loss, balance sheet, account transactions, FX rates, named budgets, chart of accounts, journals, invoices, and bills." },
    { q: "Can EXL Cloud push data back to Xero?", a: "Yes. With the Data Push feature, you can push manual journals, bank transactions, invoices, bills, and chart of accounts updates from Excel back to Xero." },
    { q: "What financial models are included?", a: "The Advanced Content plan includes a 3-Way Driver-Based Financial Model, Performance Report, 1-Way Cash Flow Scenario Model, 1-Way Profit Performance Model, Positions & Returns, Human Capital Model, R&D Template, and more." },
    { q: "Does EXL Cloud integrate with Power BI?", a: "Yes. EXL Cloud workbooks use Dynamic Arrays and structured tables that connect directly with Power BI for interactive dashboards and data visualisation." }];

/* ═══ FEATURES ═══ */
/* boardPack is an island passed in as a slot from src/pages/features.astro */
const Features = ({ boardPack }) =>
<>
    <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}25, transparent 50%), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 70px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <SectionHead tag="Capabilities" title="Features" as="h1" desc="Transparent, customisable, Power BI-ready. Everything in the app you already know — Microsoft Excel." light />
      </div>
    </section>
    <Sec>
      <DAB>EXL Cloud offers two product tiers: Data Pull ({money(PLANS.dataPull.price)} AUD/month) for Xero data extraction and push, and Advanced Content ({money(PLANS.advanced.price)} AUD/month) which adds world-class financial models, performance reports, HTML board packs, Power BI integration, and {SKILLS_LABEL} Claude AI-powered skills. Both include 5 Xero connections.</DAB>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
        {[
      ["eye", "Transparent Logic", "Full formula transparency. No black boxes."],
      ["chart", "Power BI Integration", "Connect seamlessly with Power BI. No data warehouse."],
      ["grid", "Unlimited Customisation", "Your brand, your layouts. Zero coding."],
      ["bolt", "8 Clicks to Action", "Install, connect, pull. Instant value."],
      ["shield", "Gen 2 Standard", "Instructions, validation checks, change logs in every workbook."],
      ["ai", "AI Skills Library", `${SKILLS_LABEL} purpose-built Claude AI skills for EXL Cloud workbooks.`]].
      map(([ic, t, d], i) =>
      <div key={i} style={{ background: C.warmBg, borderRadius: R.xl, padding: 28, border: `1px solid ${C.gL}` }}>
            <div style={{ width: 48, height: 48, borderRadius: R.lg, background: `linear-gradient(135deg, ${C.pale}, ${C.warmBg})`, border: `1px solid ${C.mint}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <Icon name={ic} size={22} color={C.priL} />
            </div>
            <h3 style={{ fontFamily: F, fontSize: 17, fontWeight: 700, color: C.dark, margin: "0 0 8px" }}>{t}</h3>
            <p style={{ fontFamily: F, fontSize: 14, color: C.g, margin: 0, lineHeight: 1.65 }}>{d}</p>
          </div>
      )}
      </div>
    </Sec>
    {/* Comparison Table */}
    <Sec bg={C.warmBg}>
      <SectionHead tag="Why EXL Cloud" title="See how we stack up." desc="Feeling overwhelmed by the number of 'apps' getting stacked in your tech-stack? Quit using apps that you only open a few times a year and utilise the one app you know, you love, and you actually use everyday — Microsoft Excel." center />
      <div>
          <div style={{ borderRadius: R.xl, overflow: "hidden", border: `1px solid ${C.gL}`, background: C.w, boxShadow: "0 8px 40px rgba(0,0,0,0.04)" }}>
            {(() => {
          const competitors = ["EXL Cloud", "Spotlight", "Castaway", "Futrli", "Fathom HQ", "Modano"];
          const features = [
          { f: ["Fully ", { b: "integrated into Excel" }, " via an add-in — works inside the spreadsheet you already use, with no separate app or virtual machine required"], vals: ["✓", "✗", "✗", "✗", "✗", "✗"] },
          { f: ["Fully ", { b: "transparent" }, " and ", { b: "customisable business logic" }, " — every formula is visible and editable, no proprietary black boxes or locked modules"], vals: ["✓", "✗", "✓", "✗", "✗", "Limited"] },
          { f: ["Integrates seamlessly with ", { b: "Power BI" }, " for ", { b: "Data Analytics" }, " and ", { b: "insights" }, " — connect your Excel workbooks directly to Power BI dashboards without a data warehouse"], vals: ["✓", "✗", "✗", "✗", "✗", "✗"] },
          { f: ["Less than ", { b: "8 clicks" }, " to a populated interactive and functional ", { b: "cash flow scenario model" }, " in Excel — install, connect, pull, done"], vals: ["✓", "✗", "✗", "✗", "✗", "✗"] },
          { f: ["Can leverage ", { b: "scalable data analytics" }, " and cloud storage tools — Dynamic Arrays, LAMBDAs, Power Query, and OneDrive/SharePoint integration"], vals: ["✓", "✓", "✗", "✓", "✓", "✓"] },
          { f: ["Fully ", { b: "customise" }, " your own dashboards, themes, fonts, styles, colours, logos — it's your spreadsheet, make it your own brand"], vals: ["✓", "Limited", "Limited", "Limited", "Limited", "Limited"] }];

          const CellVal = ({ v, highlight }) => {
            if (v === "✓") return <div style={{ width: 26, height: 26, borderRadius: "50%", background: C.priA, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", boxShadow: highlight ? `0 2px 8px ${C.priA}40` : "none" }}><svg viewBox="0 0 24 24" width="15" height="15"><path d="M20 6L9 17l-5-5" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>;
            if (v === "✗") return <span style={{ fontFamily: F, fontSize: 16, color: "#d0d0d0", fontWeight: 500 }}>✗</span>;
            return <span style={{ fontFamily: F, fontSize: 11, color: C.g, fontWeight: 600 }}>{v}</span>;
          };
          return (
            <>
                  <div style={{ display: "grid", gridTemplateColumns: `2.8fr repeat(${competitors.length}, 1fr)`, background: C.pri }}>
                    <div style={{ padding: "16px 24px", fontFamily: F, fontSize: 13, fontWeight: 700, color: C.mint }}>Feature</div>
                    {competitors.map((c, ci) => <div key={c} style={{ padding: "16px 8px", fontFamily: F, fontSize: 12, fontWeight: 700, color: ci === 0 ? C.mint : C.w, textAlign: "center", lineHeight: 1.25, background: ci === 0 ? "rgba(116,198,157,0.12)" : "transparent" }}>{c}</div>)}
                  </div>
                  {features.map((row, ri) =>
              <div key={ri} style={{ display: "grid", gridTemplateColumns: `2.8fr repeat(${competitors.length}, 1fr)`, borderBottom: ri < features.length - 1 ? `1px solid ${C.gL}` : "none", background: ri % 2 === 0 ? C.warmBg : C.w, alignItems: "center" }}>
                      <div style={{ padding: "18px 24px", fontFamily: F, fontSize: 13.5, color: C.gD, lineHeight: 1.55 }}>
                        {row.f.map((seg, si) => typeof seg === "string" ? <span key={si}>{seg}</span> : <strong key={si}>{seg.b}</strong>)}
                      </div>
                      {row.vals.map((v, vi) => <div key={vi} style={{ padding: "18px 8px", textAlign: "center", background: vi === 0 ? "rgba(116,198,157,0.04)" : "transparent" }}><CellVal v={v} highlight={vi === 0} /></div>)}
                    </div>
              )}
                </>);

        })()}
          </div>
        </div>
    </Sec>

    {/* Gen 1 Workbook Downloads */}
    <Sec>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="prod-grid">
        <div>
          <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.priA, letterSpacing: 3, marginBottom: 12, textTransform: "uppercase" }}>FLAGSHIP</div>
          <h2 style={{ fontFamily: F, fontSize: 36, fontWeight: 800, color: C.dark, margin: "0 0 24px", lineHeight: 1.1 }}>Try our flagship model.</h2>
          <h3 style={{ fontFamily: F, fontSize: 24, fontWeight: 800, color: C.priL, margin: "0 0 16px", lineHeight: 1.2 }}>Download our 3-way Financial Model</h3>
          <p style={{ fontFamily: F, fontSize: 15, color: C.priA, margin: "0 0 12px", fontWeight: 600 }}>Still not sure if EXL Cloud is for you?</p>
          <p style={{ fontFamily: F, fontSize: 15, color: C.gD, lineHeight: 1.65, margin: "0 0 28px" }}>Why not download our flagship 3-way financial model and take a closer look for yourself and compare?</p>
          <Btn href="/dl-3way" variant="primary">Get It</Btn>
        </div>
        <a href="/dl-3way" className="lift" style={{ display: "block", borderRadius: R.xl, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.12)", cursor: "pointer", transition: "transform 0.3s" }}>
          <img src="/images/3way-model.png" alt="3-Way Driver-Based Financial Model Dashboard" style={{ width: "100%", height: "auto", display: "block" }} />
        </a>
      </div>
    </Sec>

    <Sec bg={C.warmBg}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="prod-grid">
        <a href="/dl-performance" className="lift" style={{ display: "block", borderRadius: R.xl, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.12)", cursor: "pointer", transition: "transform 0.3s" }}>
          <img src="/images/performance-report.png" alt="Performance Report Dashboard" style={{ width: "100%", height: "auto", display: "block" }} />
        </a>
        <div>
          <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.priA, letterSpacing: 3, marginBottom: 12, textTransform: "uppercase" }}>STILL UNSURE?</div>
          <h3 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: C.dark, margin: "0 0 16px", lineHeight: 1.15 }}>Download our Performance Report</h3>
          <p style={{ fontFamily: F, fontSize: 15, color: C.priA, margin: "0 0 12px", fontWeight: 600 }}>Still not sure if EXL Cloud is for you?</p>
          <p style={{ fontFamily: F, fontSize: 15, color: C.gD, lineHeight: 1.65, margin: "0 0 12px" }}>Why not download our Performance Report and take a closer look for yourself and compare?</p>
          <p style={{ fontFamily: F, fontSize: 15, color: C.gD, lineHeight: 1.65, margin: "0 0 28px" }}>Learn more by <a href="https://www.youtube.com/watch?v=qf1pEpPoYVg" target="_blank" rel="noopener noreferrer" style={{ color: C.priA, fontWeight: 600, textDecoration: "underline" }}>watching a video</a> on how easily this report is created.</p>
          <Btn href="/dl-performance" variant="primary">Get It</Btn>
        </div>
      </div>
    </Sec>

    <Sec>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="prod-grid">
        <div>
          <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.priA, letterSpacing: 3, marginBottom: 12, textTransform: "uppercase" }}>STILL NOT CONVINCED?</div>
          <h3 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: C.dark, margin: "0 0 16px", lineHeight: 1.15 }}>Download our 1-way Cash Flow Scenario Model</h3>
          <p style={{ fontFamily: F, fontSize: 15, color: C.priA, margin: "0 0 12px", fontWeight: 600 }}>There is no better way to add valuable insight to decision-making than a financial model with scenarios.</p>
          <p style={{ fontFamily: F, fontSize: 15, color: C.gD, lineHeight: 1.65, margin: "0 0 12px" }}>Download our 1-way cash flow scenario model, you will be impressed.</p>
          <p style={{ fontFamily: F, fontSize: 15, color: C.gD, lineHeight: 1.65, margin: "0 0 28px" }}>Learn more by <a href="https://www.youtube.com/watch?v=fa22TR9MI-Y" target="_blank" rel="noopener noreferrer" style={{ color: C.priA, fontWeight: 600, textDecoration: "underline" }}>watching a video</a> on how easily this model is created.</p>
          <Btn href="/dl-cashflow" variant="primary">Get It</Btn>
        </div>
        <a href="/dl-cashflow" className="lift" style={{ display: "block", borderRadius: R.xl, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.12)", cursor: "pointer", transition: "transform 0.3s" }}>
          <img src="/images/cashflow-model.png" alt="1-Way Cash Flow Scenario Model Dashboard" style={{ width: "100%", height: "auto", display: "block" }} />
        </a>
      </div>
    </Sec>

    {/* Power BI Section */}
    <Sec bg={C.warmBg}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="prod-grid">
        <div>
          <SectionHead tag="Power BI Integration" title="Weel Expense Insights using EXL Cloud and Power BI" />
          <p style={{ fontFamily: F, fontSize: 15, color: C.gD, lineHeight: 1.65, margin: "0 0 12px" }}><strong>Your spending data is trying to tell you something.</strong><br />But you need to unlock its full value with Excel and Power BI insights.</p>
          <p style={{ fontFamily: F, fontSize: 15, color: C.gD, lineHeight: 1.65, margin: "0 0 12px" }}>Following a live advanced spend analysis masterclass, Lance helped finance teams put their Weel spend data to good use.</p>
          <p style={{ fontFamily: F, fontSize: 15, color: C.priA, lineHeight: 1.65, margin: "0 0 12px", fontWeight: 500 }}>The recording and content can be found <a href="https://maven.com/modelcitizn" target="_blank" rel="noopener noreferrer" style={{ color: C.priA, fontWeight: 600, textDecoration: "underline" }}>here</a> for you to watch.</p>
          <p style={{ fontFamily: F, fontSize: 15, color: C.gD, lineHeight: 1.65, margin: 0 }}>We have also embedded the Power BI analysis for you to have a play.</p>
        </div>
        <div style={{ borderRadius: R.xl, overflow: "hidden", boxShadow: "0 8px 30px rgba(0,0,0,0.06)", border: `1px solid ${C.gL}` }}>
          <img src="/images/powerbi-weel.png" alt="Weel Expense Insights Power BI Dashboard" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </div>
    </Sec>

    {/* Gen 2 — HTML Board Packs */}
    <Sec>
      <SectionHead tag="Gen 2" title="HTML Board Packs" desc="Single-file interactive HTML reports. Chart.js charts, KPI tiles, commentary blocks. Share a link — no Excel needed for the reader." />
      {boardPack}
    </Sec>
    <Sec>
      <SectionHead title="See it in action" desc="Watch how EXL Cloud workbooks are created and customised in minutes." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        <VideoLocal />
        <Video id="qf1pEpPoYVg" title="3-Way Driver-Based Financial Model" />
        <Video id="Apty2pmgtYk" title="Start Menu & Navigation" />
      </div>
    </Sec>
    <Sec bg={C.warmBg} style={{ textAlign: "center", padding: "64px 24px" }}>
      <h2 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: C.dark, margin: "0 0 14px" }}>Want to explore the scenario model?</h2>
      <p style={{ fontFamily: F, fontSize: 16, color: C.g, margin: "0 0 28px" }}>See what driver-based modelling looks like with our interactive 3-way scenario demo.</p>
      <Btn href="/future">Try the Interactive Model →</Btn>
    </Sec>
    <Sec bg={C.warmBg}>
      <FAQSection items={FAQ} />
    </Sec>
  </>;

export default Features;
