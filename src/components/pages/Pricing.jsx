import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL, money } from "../../lib/site.js";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Counter, DAB, FAQSection, Btn, Sec, SectionHead, Video, VideoLocal, PersonPlaceholder } from "../ui.jsx";

/* FAQ items — rendered below and emitted as FAQPage JSON-LD by the .astro page */
export const FAQ = [
    { q: "What is the difference between Data Pull and Advanced Content?", a: `Data Pull (${money(PLANS.dataPull.price)}/month) covers Xero data extraction and push capabilities — P&L, BS, TB, transactions, journals. Advanced Content (${money(PLANS.advanced.price)}/month) includes everything in Data Pull plus world-class financial models, performance reports, scenario models, HTML board packs, Power BI integration, ${SKILLS_LABEL} Claude AI skills, and a 45% discount on the AI-Powered Accountant program.` },
    { q: "How much do additional Xero connections cost?", a: "Data Pull: 6-10 at $7.50/ea, 11-20 at $6.80/ea, 21+ at $6.00/ea. Advanced Content: 6-20 at $16.25/ea, 21+ at $12.70/ea. Enterprise pricing is available on application." },
    { q: "Are prices in AUD or USD?", a: "All prices are in Australian Dollars (AUD)." }];

/* ═══ PRICING ═══ */
const Pricing = () =>
<>
    <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}25, transparent 50%), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 70px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h1 style={{ fontFamily: F, fontSize: 44, fontWeight: 800, color: C.w, margin: 0, letterSpacing: -0.5 }}>Pricing & Sign Up</h1>
        <p style={{ fontFamily: F, fontSize: 18, color: "rgba(255,255,255,0.65)", margin: "14px 0 0", maxWidth: 520, lineHeight: 1.6 }}>Choose the plan that fits. 7-day free trial included. Benefit from lower marginal cost as you add connections.</p>
      </div>
    </section>
    <Sec>
      <DAB>EXL Cloud offers two plans: Data Pull at {money(PLANS.dataPull.price)} AUD per month and Advanced Content at {money(PLANS.advanced.price)} AUD per month. Both include 5 Xero connections with volume discounts for additional connections.</DAB>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
        <div style={{ background: C.w, borderRadius: R.xl, padding: 36, border: `1px solid ${C.gL}` }}>
          <h3 style={{ fontFamily: F, fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>Data Pull Plan</h3>
          <p style={{ fontFamily: F, fontSize: 13, color: C.g, margin: "0 0 16px", lineHeight: 1.6 }}>Quick and easy way to pull and push data directly from Xero into Excel. Perfect if you've been impacted by deprecated data pull services.</p>
          <div style={{ fontFamily: F, fontSize: 40, fontWeight: 800, color: C.priL, margin: "0 0 6px" }}>{money(PLANS.dataPull.price)}<span style={{ fontSize: 15, fontWeight: 500, color: C.g }}>/month</span></div>
          <div style={{ fontFamily: F, fontSize: 14, color: C.g, marginBottom: 24 }}>Includes 5 connections</div>
          <div><Btn href={PLANS.dataPull.checkout} style={{ width: "100%" }}>Sign Up</Btn></div>
          <div style={{ marginTop: 24 }}>
            {["Xero data pull & push", "Clean P&L, BS, TB data pulls", "Account transactions", "FX rates & named budgets", "Gen 2 workbooks"].map((f) =>
          <div key={f} style={{ fontFamily: F, fontSize: 14, color: C.gD, padding: "9px 0", borderBottom: `1px solid ${C.gL}`, display: "flex", gap: 10, alignItems: "center" }}><Icon name="check" size={16} color={C.priA} />{f}</div>
          )}
          </div>
          <div style={{ marginTop: 20, background: C.warmBg, borderRadius: R.lg, padding: 18 }}>
            <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.gD, marginBottom: 10 }}>Additional connections/month:</div>
            <table style={{ width: "100%", fontFamily: F, fontSize: 13, borderCollapse: "collapse" }}>
              <tbody>
                {[["6–10 connections", "$7.50/ea"], ["11–20 connections", "$6.80/ea"], ["21+ connections", "$6.00/ea"], ["Enterprise", "Price on application"]].map(([t, p]) =>
              <tr key={t}><td style={{ padding: "5px 0", color: C.gD }}>{t}</td><td style={{ padding: "5px 0", textAlign: "right", fontWeight: 600, color: C.priL }}>{p}</td></tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
        {/* Advanced Content */}
        <div style={{ background: C.w, borderRadius: R.xl, padding: 36, border: `2px solid ${C.priA}`, position: "relative" }}>
          <div style={{ position: "absolute", top: -12, right: 24, background: `linear-gradient(135deg, ${C.priA}, ${C.mint})`, color: C.w, fontFamily: F, fontSize: 11, fontWeight: 700, padding: "5px 16px", borderRadius: R.full, letterSpacing: 1 }}>RECOMMENDED</div>
          <h3 style={{ fontFamily: F, fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>Advanced Content Plan</h3>
          <p style={{ fontFamily: F, fontSize: 13, color: C.g, margin: "0 0 16px", lineHeight: 1.6 }}>World-class expert financial models, dashboards, analytics and reports directly in Excel. Includes all Data Pull content.</p>
          <div style={{ fontFamily: F, fontSize: 40, fontWeight: 800, color: C.priL, margin: "0 0 6px" }}>{money(PLANS.advanced.price)}<span style={{ fontSize: 15, fontWeight: 500, color: C.g }}>/month</span></div>
          <div style={{ fontFamily: F, fontSize: 14, color: C.g, marginBottom: 24 }}>Includes 5 connections</div>
          <div><Btn href={LINKS.checkout} style={{ width: "100%" }}>Sign Up</Btn></div>
          <div style={{ marginTop: 24 }}>
            {["Everything in Data Pull", "Performance Reports", "3-Way Driver-Based Financial Model", "1-Way Cash Flow Scenario Model", "1-Way Profit Performance Model", "Positions & Returns", "Power BI integration", `${SKILLS_LABEL} Claude AI skills included`, "45% off AIPA program", "HTML Board Packs"].map((f) =>
          <div key={f} style={{ fontFamily: F, fontSize: 14, color: C.gD, padding: "9px 0", borderBottom: `1px solid ${C.gL}`, display: "flex", gap: 10, alignItems: "center" }}><Icon name="check" size={16} color={C.priA} />{f}</div>
          )}
          </div>
          <div style={{ marginTop: 20, background: C.warmBg, borderRadius: R.lg, padding: 18 }}>
            <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.gD, marginBottom: 10 }}>Additional connections/month:</div>
            <table style={{ width: "100%", fontFamily: F, fontSize: 13, borderCollapse: "collapse" }}>
              <tbody>
                {[["6–20 connections", "$16.25/ea"], ["21+ connections", "$12.70/ea"], ["Enterprise", "Price on application"]].map(([t, p]) =>
              <tr key={t}><td style={{ padding: "5px 0", color: C.gD }}>{t}</td><td style={{ padding: "5px 0", textAlign: "right", fontWeight: 600, color: C.priL }}>{p}</td></tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Help CTA */}
      <div style={{ marginTop: 36, background: `linear-gradient(135deg, ${C.pri}, ${C.priL})`, borderRadius: R.xl, padding: 40, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div>
          <h3 style={{ fontFamily: F, fontSize: 22, fontWeight: 700, color: C.w, margin: "0 0 10px" }}>Need help automating reporting?</h3>
          <p style={{ fontFamily: F, fontSize: 15, color: "rgba(255,255,255,0.65)", margin: 0, maxWidth: 460, lineHeight: 1.6 }}>We've automated many bookkeeping and reporting processes. Reach out to find out how we can save you hours every month end.</p>
        </div>
        <Btn href={LINKS.contactForm}>Get in Touch</Btn>
      </div>
      <div style={{ textAlign: "center", marginTop: 28 }}>
        <p style={{ fontFamily: F, fontSize: 12, color: C.g }}>Mac users: Parallels required to run EXL Cloud.</p>
      </div>
    </Sec>
    <Sec bg={C.warmBg}>
      <FAQSection items={FAQ} />
    </Sec>
  </>;

export default Pricing;
