import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL } from "../../lib/site.js";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Counter, DAB, FAQSection, Btn, Sec, SectionHead, Video, VideoLocal, PersonPlaceholder } from "../ui.jsx";
/* ═══ FOOTER ═══ */
const Footer = () =>
<footer style={{ background: C.dark, padding: "80px 24px 36px", color: "rgba(255,255,255,0.6)" }}>
    <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <img src="/images/logo-exlcloud250.png" alt="EXL Cloud" width="32" height="32" style={{ borderRadius: R.sm }} />
          <span style={{ color: C.w, fontFamily: F, fontWeight: 700, fontSize: 17 }}>EXL Cloud</span>
        </div>
        <p style={{ fontFamily: F, fontSize: 13, lineHeight: 1.9, margin: 0, color: "rgba(255,255,255,0.45)" }}>
          Keep Excel. Leverage the cloud.<br />80 Market Street<br />South Melbourne VIC 3205<br />+61 405 329 098<br />info@exlcloud.io
        </p>
      </div>
      <div>
        <div style={{ color: C.w, fontFamily: F, fontWeight: 600, fontSize: 13, marginBottom: 18, letterSpacing: 0.3 }}>Navigate</div>
        {[["About", "about"], ["Features", "features"], ["Skills Library", "skills"], ["Articles", "articles"], ["What's New", "gen2"], ["Pricing", "pricing"], ["Future", "future"], ["Contact", "contact"]].map(([l, p]) =>
      <div key={p}><a href={href(p)} style={{ display: "inline-block", color: "rgba(255,255,255,0.45)", fontFamily: F, fontSize: 13, padding: "5px 0", transition: "color 0.2s" }}>{l}</a></div>
      )}
      </div>
      <div>
        <div style={{ color: C.w, fontFamily: F, fontWeight: 600, fontSize: 13, marginBottom: 18, letterSpacing: 0.3 }}>Resources</div>
        {[["Knowledge Base", LINKS.knowledgeBase], ["Support Ticket", LINKS.supportTicket], ["Member Login", LINKS.memberLogin], ["Maven Courses", "https://maven.com/modelcitizn"], ["Podcast", "https://open.spotify.com/show/0WRSzeb3Z0UbHmXLz5qgpQ"], ["Knowledge Hub", "https://www.modelcitizn.com/knowledge-hub/"]].map(([l, u]) =>
      <div key={l}><a href={u} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.45)", fontFamily: F, fontSize: 13, textDecoration: "none", display: "block", padding: "5px 0" }}>{l}</a></div>
      )}
      </div>
      <div>
        <div style={{ color: C.w, fontFamily: F, fontWeight: 600, fontSize: 13, marginBottom: 18, letterSpacing: 0.3 }}>Connect</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[["LinkedIn", LINKS.linkedin], ["Facebook", LINKS.facebook], ["X / Twitter", LINKS.x]].map(([l, u]) =>
        <a key={l} href={u} target="_blank" rel="noopener noreferrer"
        style={{ color: "rgba(255,255,255,0.4)", fontFamily: F, fontSize: 12, textDecoration: "none", padding: "7px 14px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: R.full, transition: "all 0.2s" }}>{l}</a>
        )}
        </div>
      </div>
    </div>
    <div style={{ maxWidth: 1120, margin: "48px auto 0", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
      <span style={{ fontFamily: F, fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© {new Date().getFullYear()} {SITE.copyright}. All rights reserved.</span>
      <div style={{ display: "flex", gap: 20 }}>
        <a href={href("privacy")} style={{ fontFamily: F, fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Privacy Policy</a>
        <a href={href("eula")} style={{ fontFamily: F, fontSize: 12, color: "rgba(255,255,255,0.25)" }}>EULA</a>
      </div>
    </div>
  </footer>;

export default Footer;
