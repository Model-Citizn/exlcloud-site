import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL } from "../../lib/site.js";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Counter, DAB, FAQSection, Btn, Sec, SectionHead, Video, VideoLocal, PersonPlaceholder } from "../ui.jsx";
/* ═══ CONTACT ═══ */
const Contact = () => {
  const hsUrl = LINKS.contactForm;
  return (
    <>
      <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}25, transparent 50%), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 70px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h1 style={{ fontFamily: F, fontSize: 44, fontWeight: 800, color: C.w, margin: 0 }}>Get in Touch</h1>
          <p style={{ fontFamily: F, fontSize: 18, color: "rgba(255,255,255,0.65)", margin: "14px 0 0" }}>Demos, enterprise pricing, or general enquiries.</p>
        </div>
      </section>
      <Sec>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          <div>
            <h3 style={{ fontFamily: F, fontSize: 22, fontWeight: 700, margin: "0 0 24px" }}>Contact Details</h3>
            {[["📍", "80 Market Street, South Melbourne VIC 3205"], ["📞", "+61 405 329 098"], ["✉️", "info@exlcloud.io"]].map(([i, t]) =>
            <div key={t} style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "center" }}><span style={{ fontSize: 18 }}>{i}</span><span style={{ fontFamily: F, fontSize: 15, color: C.gD }}>{t}</span></div>
            )}
            <div style={{ marginTop: 28 }}>
              <a href="mailto:info@exlcloud.io?subject=EXL%20Cloud%20Enquiry" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: F, fontSize: 15, fontWeight: 600, color: C.priL, textDecoration: "none", padding: "12px 24px", border: `1.5px solid ${C.priL}`, borderRadius: R.xl }}>
                <Icon name="mail" size={18} color={C.priL} /> Email us directly
              </a>
            </div>
            <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[["LinkedIn", LINKS.linkedin], ["Facebook", LINKS.facebook], ["X", LINKS.x]].map(([l, u]) =>
              <a key={l} href={u} target="_blank" rel="noopener noreferrer" style={{ fontFamily: F, fontSize: 13, color: C.priA, textDecoration: "none", padding: "8px 18px", border: `1px solid ${C.gL}`, borderRadius: R.full }}>{l}</a>
              )}
            </div>
          </div>
          <div style={{ background: C.warmBg, borderRadius: R.xl, overflow: "hidden", border: `1px solid ${C.gL}` }}>
            <div style={{ padding: "20px 24px", borderBottom: `1px solid ${C.gL}` }}>
              <h3 style={{ fontFamily: F, fontSize: 19, fontWeight: 700, margin: 0 }}>Send us a message</h3>
              <p style={{ fontFamily: F, fontSize: 13, color: C.g, margin: "6px 0 0" }}>We'll get back to you within 24 hours</p>
            </div>
            <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <a href={hsUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 14, padding: 20, background: C.w, borderRadius: R.lg, border: `1px solid ${C.gL}`, textDecoration: "none" }}>
                <div style={{ width: 48, height: 48, borderRadius: R.lg, background: `linear-gradient(135deg, ${C.priL}, ${C.priA})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="doc" size={22} color={C.w} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: F, fontSize: 15, fontWeight: 600, color: C.dark }}>Open enquiry form</div>
                  <div style={{ fontFamily: F, fontSize: 12, color: C.g }}>Opens in a new tab — sends to our Slack</div>
                </div>
                <Icon name="arrow" size={18} color={C.priA} />
              </a>
              <a href="mailto:info@exlcloud.io?subject=EXL%20Cloud%20Enquiry" style={{ display: "flex", alignItems: "center", gap: 14, padding: 20, background: C.w, borderRadius: R.lg, border: `1px solid ${C.gL}`, textDecoration: "none" }}>
                <div style={{ width: 48, height: 48, borderRadius: R.lg, background: `linear-gradient(135deg, ${C.blue}, #3B82F6)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="mail" size={22} color={C.w} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: F, fontSize: 15, fontWeight: 600, color: C.dark }}>Email info@exlcloud.io</div>
                  <div style={{ fontFamily: F, fontSize: 12, color: C.g }}>Opens your email client</div>
                </div>
                <Icon name="arrow" size={18} color={C.priA} />
              </a>
            </div>
          </div>
        </div>
      </Sec>
    </>);

};

export default Contact;
