import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL } from "../../lib/site.js";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Counter, DAB, FAQSection, Btn, Sec, SectionHead, Video, VideoLocal, PersonPlaceholder } from "../ui.jsx";
/* ═══ SUPPORT ═══ */
const Support = () =>
<>
    <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}25, transparent 50%), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 70px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h1 style={{ fontFamily: F, fontSize: 44, fontWeight: 800, color: C.w, margin: 0 }}>Support & Training</h1>
        <p style={{ fontFamily: F, fontSize: 18, color: "rgba(255,255,255,0.65)", margin: "14px 0 0" }}>Knowledge base, video library, support tickets, and masterclasses.</p>
      </div>
    </section>
    <Sec>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {[
      ["doc", "Knowledge Base", "Tips, tricks, and developer docs.", [LINKS.knowledgeBase, "Open"]],
      ["mail", "Support Ticket", "Lodge a ticket with our team.", [LINKS.supportTicket, "Lodge Ticket"]],
      ["users", "AI & Modelling Training", "Free Lightning Lessons on Maven — AI and financial modelling skills.", ["https://maven.com/modelcitizn#lightning-lessons", "Browse Sessions"]]].
      map(([ic, t, d, link], i) =>
      <div key={i} style={{ background: C.warmBg, borderRadius: R.xl, padding: 32, border: `1px solid ${C.gL}` }}>
            <div style={{ width: 52, height: 52, borderRadius: R.lg, background: `linear-gradient(135deg, ${C.pale}, ${C.warmBg})`, border: `1px solid ${C.mint}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <Icon name={ic} size={24} color={C.priL} />
            </div>
            <h3 style={{ fontFamily: F, fontSize: 18, fontWeight: 700, color: C.dark, margin: "0 0 8px" }}>{t}</h3>
            <p style={{ fontFamily: F, fontSize: 14, color: C.g, margin: "0 0 18px", lineHeight: 1.6 }}>{d}</p>
            {link && <Btn href={link[0]} variant="dark" style={{ padding: "10px 20px", fontSize: 13 }}>{link[1]}</Btn>}
          </div>
      )}
      </div>
    </Sec>
    <Sec bg={C.warmBg}>
      <SectionHead title="Video Library" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        <VideoLocal />
        <Video id="Apty2pmgtYk" title="Getting Setup" />
        <Video id="Oz9KWoXE00c" title="Start Menu" />
        <Video id="ElNEuovt7uw" title="Performance Report" />
        <Video id="wJsM4He8SKs" title="1-Way Cash Flow Model" />
        <Video id="fa22TR9MI-Y" title="Account Transactions Report" />
        <Video id="lWo0M8wJw-U" title="Profit & Loss and Balance Sheet Pull" />
        <Video id="qf1pEpPoYVg" title="3-Way Model with Power BI" />
      </div>
      <div style={{ marginTop: 48 }}>
        <SectionHead title="Masterclass Series" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        <Video id="nav1XWfOLMg" title="Financial Modelling & Expenses with Weel" />
        <Video id="YlD3m-tfosY" title="Cash Flow Advisory Masterclass" />
        <Video id="DXcQr9_tqIA" title="Advanced Expense Analysis with Weel" />
        <Video id="1DSV5rXLfbY" title="Cash Flow Modelling Webinar" />
      </div>
    </Sec>
  </>;

export default Support;
