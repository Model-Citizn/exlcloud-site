import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL, money } from "../../lib/site.js";
import SkillGrid from "../SkillGrid.jsx";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Counter, DAB, FAQSection, Btn, Sec, SectionHead, Video, VideoLocal, PersonPlaceholder } from "../ui.jsx";
/* ═══ GEN 2 ═══ */
/* `skills` = entries from the skills content collection (passed in by src/pages/gen2.astro) */
const Gen2 = ({ skills = [] }) => {
  return (
    <>
      <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}30, transparent), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 70px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontFamily: F, fontWeight: 700, color: C.mint, letterSpacing: 3, marginBottom: 16, fontSize: "25px" }}>2026 RELEASE</div>
          <h1 style={{ fontFamily: F, fontSize: 48, fontWeight: 800, color: C.w, lineHeight: 1.08, margin: "0 0 20px", letterSpacing: -0.5 }}>
            Smarter workbooks,<br />
            <span style={{ background: `linear-gradient(90deg, ${C.mint}, #95D5B2)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI-powered skills,</span><br />
            updated pricing.
          </h1>
          <p style={{ fontFamily: F, fontSize: 18, color: "rgba(255,255,255,0.65)", maxWidth: 560, lineHeight: 1.65, margin: "0 0 32px" }}>Three major updates — Gen 2 workbook rebuild, {SKILLS_LABEL} Claude AI skills, and updated subscription pricing.</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Btn href={LINKS.checkout}>Get EXL Cloud</Btn>
            <Btn href={LINKS.mavenLessons} variant="outline">Free Training</Btn>
          </div>
        </div>
      </section>

      {/* Gen 2 Workbook Upgrade */}
      <Sec>
        <DAB>The Gen 2 upgrade rebuilds every EXL Cloud workbook with dedicated Instructions sheets, improved navigation, consistent formatting, and plain-English formula notes. Combined with {SKILLS_LABEL} purpose-built Claude AI skills and updated pricing.</DAB>
        <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.priA, letterSpacing: 3, marginBottom: 6 }}>UPDATE 1 OF 3</div>
        <h2 style={{ fontFamily: F, fontSize: 32, fontWeight: 800, color: C.dark, margin: "0 0 32px" }}>Gen 2 Workbook Upgrade</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
          {[["doc", "Instructions Sheet", "Dedicated guidance in every workbook."], ["grid", "Improved Navigation", "Less time finding, more time analysing."], ["shield", "Consistent Formatting", "Uniform layout across all files."], ["eye", "Formula Transparency", "Plain-English notes on every formula."]].map(([ic, t, d], i) =>
          <div key={i} style={{ background: C.warmBg, borderRadius: R.xl, padding: 28, border: `1px solid ${C.gL}` }}>
              <div style={{ width: 48, height: 48, borderRadius: R.lg, background: `linear-gradient(135deg, ${C.pale}, ${C.warmBg})`, border: `1px solid ${C.mint}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Icon name={ic} size={22} color={C.priL} />
              </div>
              <h3 style={{ fontFamily: F, fontSize: 16, fontWeight: 700, color: C.dark, margin: "0 0 8px" }}>{t}</h3>
              <p style={{ fontFamily: F, fontSize: 14, color: C.g, margin: 0, lineHeight: 1.6 }}>{d}</p>
            </div>
          )}
        </div>
      </Sec>

      {/* Coverage */}
      <Sec bg={C.warmBg}>
        <h2 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: C.dark, margin: "0 0 28px" }}>Gen 2 Coverage</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          <div style={{ background: C.w, borderRadius: R.xl, padding: 28, border: `1px solid ${C.gL}` }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: R.full, background: C.priL, color: C.w, fontFamily: F, fontSize: 11, fontWeight: 700, marginBottom: 18 }}>FULL UPGRADE</span>
            {["Performance Report", "Positions & Returns", "1-Way Cash Flow Scenario Model", "1-Way Profit Performance Scenario Model", "3-Way Driver-Based Financial Model", "Profit & Loss Insights", "Trial Balance Insights", "Human Capital Model", "R&D Template", "Advanced Rolling Property Dev Model"].map((w) =>
            <div key={w} style={{ fontFamily: F, fontSize: 14, color: C.gD, padding: "7px 0", display: "flex", gap: 8, alignItems: "center" }}><Icon name="check" size={16} color={C.priA} />{w}</div>
            )}
          </div>
          <div style={{ background: C.w, borderRadius: R.xl, padding: 28, border: `1px solid ${C.gL}` }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: R.full, background: C.gL, color: C.gD, fontFamily: F, fontSize: 11, fontWeight: 700, marginBottom: 18 }}>INSTRUCTIONS UPDATE</span>
            {["Manual Journal (Data Push)", "Bank Transactions (Data Push)", "Invoices & Bills (Data Push)", "Chart of Accounts (Data Push)", "P&L / BS / Budget (Data Pull)", "Trial Balance (Data Pull)", "Account Transactions (Data Pull)", "Consolidated Workbook", "Financial Control Master Toolkit"].map((w) =>
            <div key={w} style={{ fontFamily: F, fontSize: 14, color: C.gD, padding: "7px 0", display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 16, height: 16, borderRadius: "50%", border: `1.5px solid ${C.gL}`, display: "inline-flex", flexShrink: 0 }}></span>{w}</div>
            )}
          </div>
        </div>
      </Sec>

      {/* Skills Library */}
      <Sec>
        <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.priA, letterSpacing: 3, marginBottom: 6 }}>UPDATE 2 OF 3</div>
        <h2 style={{ fontFamily: F, fontSize: 32, fontWeight: 800, color: C.dark, margin: "0 0 10px" }}>Skills Library — Claude AI for EXL Cloud</h2>
        <p style={{ fontFamily: F, fontSize: 16, color: C.g, margin: "0 0 36px", maxWidth: 560, lineHeight: 1.65 }}>{SKILLS_LABEL} purpose-built skills — and growing. Download from GitHub, load into Claude, instantly trained for that specific workbook.</p>
        <SkillGrid skills={skills} />
        <div style={{ marginTop: 8 }}><Btn href="/skills" variant="soft">Explore every skill →</Btn></div>
      </Sec>

      {/* Updated Pricing */}
      <Sec bg={C.warmBg}>
        <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.priA, letterSpacing: 3, marginBottom: 6 }}>UPDATE 3 OF 3</div>
        <h2 style={{ fontFamily: F, fontSize: 32, fontWeight: 800, color: C.dark, margin: "0 0 10px" }}>Updated Pricing</h2>
        <p style={{ fontFamily: F, fontSize: 16, color: C.g, margin: "0 0 36px", maxWidth: 560, lineHeight: 1.65 }}>Simple monthly plans, both including 5 Xero connections.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {[{ p: "Data Pull", price: `${money(PLANS.dataPull.price)}` }, { p: "Advanced Content", price: `${money(PLANS.advanced.price)}` }].map((x) =>
          <div key={x.p} style={{ background: C.w, borderRadius: R.xl, padding: 36, border: `1px solid ${C.gL}`, textAlign: "center" }}>
              <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, margin: "0 0 6px" }}>{x.p}</h3>
              <div style={{ fontFamily: F, fontSize: 14, color: C.g, marginBottom: 16 }}>5 connections included</div>
              <div style={{ fontFamily: F, fontSize: 36, fontWeight: 800, color: C.priL }}>{x.price}<span style={{ fontSize: 15, fontWeight: 500, color: C.g }}>/mo</span></div>
            </div>
          )}
        </div>
      </Sec>

      {/* AIPA Bonus */}
      <Sec>
        <div style={{ background: `linear-gradient(135deg, ${C.pri}, ${C.priL})`, borderRadius: R.xl, padding: 48, textAlign: "center" }}>
          <span style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.mint, letterSpacing: 3 }}>BONUS</span>
          <h3 style={{ fontFamily: F, fontSize: 28, fontWeight: 700, color: C.w, margin: "12px 0 14px" }}>45% off AI-Powered Accountant Program</h3>
          <p style={{ fontFamily: F, fontSize: 15, color: "rgba(255,255,255,0.65)", margin: "0 auto 28px", maxWidth: 480, lineHeight: 1.65 }}>Included with every subscription. Hosted on Maven. Stays active as long as your subscription remains.</p>
          <Btn href={LINKS.mavenCourses}>Join the Next Cohort →</Btn>
        </div>
      </Sec>
    </>);

};

export default Gen2;
