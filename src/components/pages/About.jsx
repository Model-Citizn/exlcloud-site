import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL } from "../../lib/site.js";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Counter, DAB, FAQSection, Btn, Sec, SectionHead, Video, VideoLocal, PersonPlaceholder } from "../ui.jsx";

/* FAQ items — rendered below and emitted as FAQPage JSON-LD by the .astro page */
export const FAQ = [
    { q: "Who founded EXL Cloud?", a: "EXL Cloud was founded by Lance Rubin, a Chartered Accountant with 20+ years of experience at PwC, KPMG, Investec Bank, and National Australia Bank. He is also the founder of Model Citizn and an FMI approved financial modelling trainer." },
    { q: "Where is EXL Cloud based?", a: "EXL Cloud Pty Ltd is based at 80 Market Street, South Melbourne VIC 3205, Australia." },
    { q: "What is the relationship between EXL Cloud and Model Citizn?", a: "Model Citizn is the parent consultancy founded by Lance Rubin. EXL Cloud is the technology product arm that delivers the Excel add-in and financial modelling content. The AI-Powered Accountant training program bridges both." }];

/* ═══ ABOUT ═══ */
const About = () =>
<>
    <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}25, transparent 50%), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 70px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <SectionHead tag="Our Team" title="About EXL Cloud" as="h1" desc="World-class experts with decades of Excel and data mastery. We believe every finance professional deserves transparent, customisable tools." light />
      </div>
    </section>
    <Sec>
      <DAB>EXL Cloud was founded by Lance Rubin, a Chartered Accountant who worked at PwC, KPMG, Investec Bank, and National Australia Bank. Lance is an FMI approved financial modelling trainer and CA ANZ financial modelling study guide co-author.</DAB>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
        {[
      { n: "Lance Rubin", r: "Chief Excel Officer", b: "Two decades across PwC, KPMG, Investec, NAB. FMI approved trainer. CA ANZ financial modelling study guide co-author. Founder of Model Citizn and the AI-Powered Accountant program.", c: C.priL, img: "/uploads/Lance-2b191b48.webp" },
      { n: "Marcus Small", r: "Chief Content Officer", b: "Founder of TheSmallman.com — one of the largest Excel resources on the web. Lead financial modelling trainer for CPA Australia. Design mastery behind every EXL Cloud workbook.", c: C.priA, img: "/uploads/Marcus-d3c6cfff.webp" },
      { n: "David Boyar", r: "Director", b: "Co-founded the Virtual CFO Association. Built and ran his own practice. Hosted From the Trenches — accounting's biggest podcast. CEO of Xero award-winning Change GPS.", c: C.mint, img: "/uploads/David+Boyar-58a13e07.webp" },
      { n: "Edwin Hartono Limbri", r: "Full-Stack Developer", b: "Data-driven solutions through statistics and coding. Lead developer of EXL Cloud's automation engine and the Excel Add-in powering the entire platform.", c: C.blue, img: "/uploads/edwin-da0e3d1f.webp" }].
      map((p) =>
      <div key={p.n} style={{ background: C.w, borderRadius: R.xl, padding: 32, border: `1px solid ${C.gL}`, borderTop: `4px solid ${p.c}` }}>
            <img src={p.img} alt={p.n} style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: `3px solid ${p.c}` }} />
            <h3 style={{ fontFamily: F, fontSize: 19, fontWeight: 700, color: C.dark, margin: "18px 0 4px" }}>{p.n}</h3>
            <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: p.c, letterSpacing: 1.5, marginBottom: 14, textTransform: "uppercase" }}>{p.r}</div>
            <p style={{ fontFamily: F, fontSize: 14, color: C.g, lineHeight: 1.65, margin: 0 }}>{p.b}</p>
          </div>
      )}
      </div>
    </Sec>
    <Sec bg={C.warmBg}>
      <FAQSection items={FAQ} />
    </Sec>
  </>;

export default About;
