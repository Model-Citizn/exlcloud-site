import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL, money } from "../../lib/site.js";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Counter, DAB, FAQSection, Btn, Sec, SectionHead, Video, VideoLocal, PersonPlaceholder } from "../ui.jsx";

/* FAQ items — rendered below and emitted as FAQPage JSON-LD by the .astro page */
export const FAQ = [
    { q: "What is EXL Cloud?", a: "EXL Cloud is an Excel add-in that connects Microsoft Excel to Xero accounting software. It pulls live data including trial balance, profit and loss, balance sheet, journals, and account transactions in 8 clicks. It also includes world-class financial models, reports, dashboards, and an AI skills library." },
    { q: "How does EXL Cloud differ from other Xero-to-Excel tools?", a: `EXL Cloud provides full formula transparency — every calculation is visible and editable in Excel. Unlike CSV exports, it includes driver-based financial models, HTML board packs, Power BI integration, ${SKILLS_LABEL} Claude AI-powered skills, and Dynamic Array formulas. Other tools export flat data; EXL Cloud delivers ready-made analysis.` },
    { q: "Does EXL Cloud work on Mac?", a: "EXL Cloud requires Microsoft Excel for Windows. Mac users can run it through Parallels Desktop with Windows and Excel installed." },
    { q: "How many Xero connections are included?", a: `Both plans include ${PLANS.advanced.connections} Xero connections. Additional connections are available with volume discounts — from $6.00/connection/month at 21+ on the Data Pull plan.` },
    { q: "Is there a free trial?", a: `Yes. EXL Cloud offers a ${SITE.trialDays}-day free trial with no credit card required. Cancel anytime during the trial period.` }];

/* ═══ HOME PAGE ═══ */
/* heroVideo / carousel / boardPack are islands passed in as slots from src/pages/index.astro */
const Home = ({ heroVideo, carousel, boardPack }) =>
<>
    {/* Hero */}
    <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}25, transparent 50%), radial-gradient(ellipse at 80% 100%, ${C.priA}15, transparent 50%), linear-gradient(170deg, ${C.dark} 0%, #0D2818 35%, ${C.pri} 100%)`, padding: "100px 24px 80px", position: "relative", overflow: "hidden" }}>
      {/* Background video — lazy loaded */}
      {heroVideo}
      {/* Subtle grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`, backgroundSize: "40px 40px" }}></div>
      <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="prod-grid">
        <div>
          <div style={{ fontFamily: F, fontWeight: 600, color: C.mint, letterSpacing: 3, marginBottom: 24, display: "flex", alignItems: "center", gap: 10, fontSize: "25px" }}>
            <span style={{ width: 32, height: 1, background: C.mint, display: "inline-block" }}></span>
            XERO → EXCEL → POWER BI
          </div>
          <h1 style={{ fontFamily: F, fontSize: 54, fontWeight: 800, color: C.w, lineHeight: 1.06, margin: "0 0 24px", letterSpacing: -1 }}>
            Keep Excel.<br />
            <span style={{ background: `linear-gradient(90deg, ${C.mint}, #95D5B2)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Leverage the cloud.</span>
          </h1>
          <p style={{ fontFamily: F, fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 36px", maxWidth: 480 }}>
            World-class reports, dashboards, and financial models — fully customisable in Microsoft Excel. From Xero data to board-ready output in 8 clicks.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
            <Btn href={LINKS.checkout}>Start {SITE.trialDays}-Day Free Trial</Btn>
            <Btn href="/features" variant="outline">Explore Features</Btn>
          </div>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            {[["20+", "Years of Excel mastery"], [SKILLS_LABEL, "AI-powered skills"], ["8", "Clicks to action"]].map(([n, l]) =>
          <div key={l}>
                <div style={{ fontFamily: F, fontSize: 32, fontWeight: 800, color: C.mint, lineHeight: 1 }}><Counter end={parseInt(n)} suffix={n.includes("+") ? "+" : ""} /></div>
                <div style={{ fontFamily: F, fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 6 }}>{l}</div>
              </div>
          )}
          </div>
        </div>
        {/* Hero visual — Product mockup with warm people element */}
        <div style={{ borderRadius: R.xl, overflow: "hidden", position: "relative" }}>
          <div style={{ background: `linear-gradient(145deg, ${C.priL}, ${C.pri})`, borderRadius: R.xl, padding: 32, position: "relative" }}>
            {/* Excel-like mockup */}
            <div style={{ background: "rgba(0,0,0,0.25)", borderRadius: R.lg, padding: 20, marginBottom: 20 }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 16, alignItems: "center" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }}></div>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }}></div>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22C55E" }}></div>
                <span style={{ fontFamily: F, fontSize: 10, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>3-Way Model.xlsx</span>
              </div>
              {/* Chart bars */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 100, padding: "0 8px" }}>
                {[35, 52, 44, 68, 58, 82, 75, 95].map((h, i) =>
              <div key={i} style={{ flex: 1, height: `${h}%`, background: `linear-gradient(to top, ${C.mint}90, ${C.mint})`, borderRadius: "4px 4px 0 0", opacity: 0.7 + i * 0.04, transition: "height 0.5s ease" }}></div>
              )}
              </div>
              {/* KPI row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 14 }}>
                {[["Revenue", "$1.2M"], ["GP%", "65%"], ["FCF", "$340K"]].map(([l, v]) =>
              <div key={l} style={{ background: "rgba(255,255,255,0.06)", borderRadius: R.sm, padding: "8px 10px", textAlign: "center" }}>
                    <div style={{ fontFamily: F, fontSize: 8, color: "rgba(255,255,255,0.35)", letterSpacing: 0.5 }}>{l}</div>
                    <div style={{ fontFamily: F, fontSize: 14, fontWeight: 700, color: C.w }}>{v}</div>
                  </div>
              )}
              </div>
            </div>
            {/* Team faces */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex" }}>
                {["/uploads/pasted-1780829731547-0.png", "/uploads/pasted-1780829749363-0.png", "/uploads/pasted-1780829763836-0.png"].map((src, i) =>
              <div key={i} style={{ width: 40, height: 40, borderRadius: "50%", border: "2.5px solid rgba(0,0,0,0.25)", marginLeft: i > 0 ? -10 : 0, position: "relative", zIndex: 3 - i, overflow: "hidden" }}>
                    <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                  </div>
              )}
              </div>
              <div>
                <div style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: C.w }}>Trusted by finance teams</div>
                <div style={{ fontFamily: F, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>across Australia & NZ</div>
              </div>
            </div>
          </div>
          {/* Video CTA overlay */}
          <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
            <a href={LINKS.explainerVideo} data-open-video
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", background: "rgba(0,0,0,0.55)", backdropFilter: "blur(12px)", borderRadius: R.lg, padding: "12px 16px" }}>
              <div style={{ display: "flex", flexShrink: 0 }}>
                {["/uploads/pasted-1780829731547-0.png", "/uploads/pasted-1780829749363-0.png", "/uploads/pasted-1780829763836-0.png"].map((src, i) =>
              <div key={i} style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", marginLeft: i > 0 ? -8 : 0, position: "relative", zIndex: 3 - i, overflow: "hidden" }}>
                    <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                  </div>
              )}
              </div>
              <div>
                <div style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: C.w }}>Watch the 2-minute intro</div>
                <div style={{ fontFamily: F, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>See EXL Cloud in action →</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* AEO: Direct Answer Block */}
    <Sec>
      <DAB>EXL Cloud is an Excel add-in that connects Microsoft Excel to Xero with a cash flow model in 8 clicks.<br /><br />It pulls and pushes live accounting data including trial balance, profit and loss, balance sheet,<br />journals, invoices and account transactions.<br /><br />EXL Cloud includes world-class financial models, dashboards, and reports — all fully customisable<br />in Microsoft Excel on your desktop.<br /><br />We bring cloud accounting data from Xero to Excel, so you don't have to fetch it the hard way<br />by going to the cloud.</DAB>
    </Sec>

    {/* Product Carousel */}
    <section style={{ background: `linear-gradient(180deg, ${C.pri}, ${C.dark})`, padding: "80px 24px 100px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <SectionHead tag="Product Suite" title="Swipe through the library" center light />
        {carousel}
      </div>
    </section>

    {/* Value Props */}
    <Sec bg={C.warmBg}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
        {[
      ["eye", "No Black Magic", "See exactly where every calculation comes from. Full formula transparency in every Gen 2 workbook."],
      ["bolt", "8 Clicks to Action", "Install — connect — pull. No training, no setup overhead. Start producing board-ready output immediately."],
      ["grid", "Unlimited Customisation", "Your themes, fonts, logos. It's a spreadsheet — edit anything, extend everything."],
      ["chart", "Power BI Ready", "Connect seamlessly with Power BI. Dynamic Arrays, LAMBDAs, Power Query — Modern Excel."]].
      map(([ic, t, d], i) =>
      <div key={i} style={{ background: C.w, borderRadius: R.xl, padding: 32, border: `1px solid ${C.gL}`, transition: "box-shadow 0.3s, transform 0.3s" }}>
            <div style={{ width: 52, height: 52, borderRadius: R.lg, background: `linear-gradient(135deg, ${C.pale}, ${C.warmBg})`, border: `1px solid ${C.mint}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <Icon name={ic} size={24} color={C.priL} />
            </div>
            <h3 style={{ fontFamily: F, fontSize: 18, fontWeight: 700, color: C.dark, margin: "0 0 10px" }}>{t}</h3>
            <p style={{ fontFamily: F, fontSize: 15, color: C.g, margin: 0, lineHeight: 1.65 }}>{d}</p>
          </div>
      )}
      </div>
    </Sec>

    {/* Board Pack Demo */}
    <Sec>
      <SectionHead tag="Interactive Demo" title="HTML Board Packs" desc="Single-file interactive reports with Chart.js charts, sticky navigation, and KPI tiles. Share a link instead of an attachment — no Excel needed for the reader." />
      {boardPack}
    </Sec>

    {/* Video Section */}
    <Sec bg={C.warmBg}>
      <SectionHead tag="See It in Action" title="Watch how it works" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        <VideoLocal />
        <Video id="qf1pEpPoYVg" title="3-Way Financial Model" />
        <Video id="Apty2pmgtYk" title="Start Menu & Navigation" />
        <Video id="fa22TR9MI-Y" title="Account Transactions Pull" />
      </div>
    </Sec>

    {/* How It Works */}
    <Sec>
      <SectionHead tag="How It Works" title="From Xero to insight in three steps" desc="No training. No setup meetings. Just install and start pulling data." center />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
        {[
      { step: "1", title: "Install the add-in", desc: "Download the EXL Cloud Excel plugin from the Knowledge Base. One-click install, works on any Windows machine.", icon: "download" },
      { step: "2", title: "Connect your Xero orgs", desc: "Authenticate with Xero and link your client organisations. Takes about 30 seconds per org.", icon: "plug" },
      { step: "3", title: "Pull data & customise", desc: "Hit 'Pull' on any report, model, or dashboard. Edit formulas, add your branding, present to clients.", icon: "chart" }].
      map((s) =>
      <div key={s.step} style={{ textAlign: "center", padding: 36, background: C.w, borderRadius: R.xl, border: `1px solid ${C.gL}` }}>
            <div style={{ width: 72, height: 72, borderRadius: R.xl, background: `linear-gradient(135deg, ${C.priL}, ${C.priA})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", boxShadow: `0 10px 30px ${C.priL}25` }}>
              <Icon name={s.icon} size={30} color={C.w} />
            </div>
            <div style={{ fontFamily: F, fontSize: 11, fontWeight: 700, color: C.priA, letterSpacing: 2, marginBottom: 8 }}>STEP {s.step}</div>
            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, margin: "0 0 10px" }}>{s.title}</h3>
            <p style={{ fontFamily: F, fontSize: 15, color: C.g, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
          </div>
      )}
      </div>
    </Sec>

    {/* Who It's For */}
    <Sec bg={C.warmBg}>
      <SectionHead tag="Built For You" title="Used by finance teams who love Excel" desc="From sole practitioners to mid-tier firms — EXL Cloud fits wherever Excel is already the daily workhorse." center />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
        {[
      { role: "Practice Partners", desc: "Advisory services powered by real-time Xero data. Deliver cash flow models and performance reports that win clients.", gradient: `linear-gradient(135deg, #2D6A4F, #40916C)` },
      { role: "CFOs & Controllers", desc: "Board-ready reports in minutes, not days. Full transparency — every number is traceable to source.", gradient: `linear-gradient(135deg, #1A3C2E, #2D6A4F)` },
      { role: "Bookkeepers", desc: "Clean data pulls, reconciliation workbooks, and journal push — all without leaving Excel.", gradient: `linear-gradient(135deg, #40916C, #74C69D)` },
      { role: "Analysts & Modellers", desc: "3-way driver-based models with scenarios, Dynamic Arrays, and Power BI integration out of the box.", gradient: `linear-gradient(135deg, #2563EB, #3B82F6)` }].
      map((p) =>
      <div key={p.role} style={{ background: C.w, borderRadius: R.xl, padding: 32, border: `1px solid ${C.gL}`, textAlign: "center" }}>
            <PersonPlaceholder size={72} gradient={p.gradient} />
            <div style={{ marginTop: 18 }}>
              <h4 style={{ fontFamily: F, fontSize: 17, fontWeight: 700, color: C.dark, margin: "0 0 8px" }}>{p.role}</h4>
              <p style={{ fontFamily: F, fontSize: 14, color: C.g, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
          </div>
      )}
      </div>
    </Sec>

    {/* Testimonials */}
    <Sec>
      <SectionHead tag="What Users Say" title="Trusted by finance professionals" center />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {[
      { q: "EXL Cloud is a game-changer! It delivers unparalleled efficiency gains, saving both time and money with insights across multiple entities that simply aren't available elsewhere.", name: "Advanced Content User", role: "Xero App Store Review", stars: 5 },
      { q: "The reports are exactly what I need for board meetings. Being able to customise everything in Excel means I'm not fighting the software — it works the way I already think.", name: "Practice Partner", role: "Melbourne, VIC", stars: 5 },
      { q: "We moved from a $2,000/month reporting tool to EXL Cloud. Better output, full formula transparency, and my team didn't need any training because it's just Excel.", name: "CFO, Mid-Market", role: "Sydney, NSW", stars: 5 }].
      map((t, i) =>
      <div key={i} style={{ background: C.warmBg, borderRadius: R.xl, padding: 32, position: "relative", border: `1px solid ${C.gL}` }}>
            <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
              {Array(t.stars).fill(0).map((_, j) => <span key={j} style={{ color: C.acc, fontSize: 16 }}>★</span>)}
            </div>
            <p style={{ fontFamily: F, fontSize: 15, color: C.gD, lineHeight: 1.7, margin: "0 0 24px", fontStyle: "italic" }}>"{t.q}"</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <PersonPlaceholder size={44} gradient={`linear-gradient(135deg, ${C.priL}, ${C.mint})`} />
              <div>
                <div style={{ fontFamily: F, fontSize: 14, fontWeight: 600, color: C.dark }}>{t.name}</div>
                <div style={{ fontFamily: F, fontSize: 12, color: C.g }}>{t.role}</div>
              </div>
            </div>
          </div>
      )}
      </div>
    </Sec>

    {/* Integrations */}
    <Sec bg={C.warmBg} style={{ padding: "56px 24px" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.g, letterSpacing: 3, marginBottom: 24 }}>INTEGRATIONS & PARTNERSHIPS</div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          {["Xero", "CPA Australia", "FMI", "Power BI", "CA ANZ", "Maven"].map((p) =>
        <div key={p} style={{ fontFamily: F, fontSize: 14, fontWeight: 600, color: C.gD, padding: "10px 22px", border: `1px solid ${C.gL}`, borderRadius: R.full, background: C.w }}>{p}</div>
        )}
        </div>
      </div>
    </Sec>

    {/* Gen 2 Banner */}
    <section style={{ background: `linear-gradient(135deg, ${C.pri}, ${C.priL})`, padding: "72px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 28 }}>
        <div>
          <span style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.mint, letterSpacing: 3 }}>2026 RELEASE</span>
          <h3 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: C.w, margin: "10px 0 0", lineHeight: 1.2 }}>Gen 2 + AI Skills Library + New Pricing</h3>
          <p style={{ fontFamily: F, fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "8px 0 0" }}>Every workbook rebuilt. {SKILLS_LABEL} Claude AI skills. Updated pricing now in effect.</p>
        </div>
        <Btn href="/gen2">See What's New →</Btn>
      </div>
    </section>

    {/* AEO: Home FAQ */}
    <Sec bg={C.warmBg}>
      <FAQSection items={FAQ} />
    </Sec>

    {/* CTA */}
    <Sec>
      <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
        <h2 style={{ fontFamily: F, fontSize: 36, fontWeight: 800, color: C.dark, margin: "0 0 16px", lineHeight: 1.15 }}>Ready to keep Excel and leverage the cloud?</h2>
        <p style={{ fontFamily: F, fontSize: 17, color: C.g, margin: "0 0 36px", lineHeight: 1.6 }}>{SITE.trialDays}-day free trial. No credit card. Cancel anytime.</p>
        <Btn href={LINKS.checkout}>Start Free Trial</Btn>
      </div>
    </Sec>
  </>;

export default Home;
