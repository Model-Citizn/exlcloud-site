import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL, LEAD_FORM } from "../../lib/site.js";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Btn, Sec, SectionHead, DAB } from "../ui.jsx";
/* ═══ DOWNLOAD FORM ═══ */
export const downloadItems = {
  "3way": { title: "Download the 3-way Financial Scenario and Simulation Model", link: "https://drive.google.com/file/d/11fVtpMofFewANVJYwoRb9bvCxanPApnE/view?usp=sharing", label: "3-way Financial Model" },
  "performance": { title: "Download the multi entity and currency Performance Report", link: "https://drive.google.com/file/d/1mMWxdZ3oAeps6IzBVFKK1Wksp8bQSdee/view?usp=sharing", label: "Performance Report" },
  "cashflow": { title: "Download the Multi Entity and Currency One-Way Cash Flow Scenario Model", link: "https://drive.google.com/file/d/1qE2ot_OZpXGVDmU-IYdhsqsC6lK602vE/view?usp=sharing", label: "1-way Cash Flow Scenario Model" }
};

const DownloadForm = ({ item = "3way" }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ firstName: "", lastName: "", email: "", country: "Australia", phone: "+61" });
  const dl = downloadItems[item] || downloadItems["3way"];
  const [sending, setSending] = React.useState(false);
  /* Lead goes to the HubSpot contact form set in LEAD_FORM (src/lib/site.js), which also fires the
     Zapier → Slack #xl-zap-messages notification. Only fields that exist on that form are sent; country
     rides inside `message`. If HubSpot rejects the full payload (e.g. phone validation) we retry once
     with the core fields so the lead is never silently dropped. The download is released either way,
     so a HubSpot outage never blocks the visitor. (The old site only saved leads in the visitor's own
     browser via localStorage, so they never reached EXL Cloud.) */
  const submitLead = async () => {
    const { hubspotPortalId, hubspotFormId } = LEAD_FORM;
    if (!hubspotPortalId || !hubspotFormId) return;
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`;
    const phone = form.phone.replace(/[^\d+]/g, "");
    const core = [
      { name: "email", value: form.email.trim() },
      { name: "firstname", value: form.firstName.trim() },
      { name: "lastname", value: form.lastName.trim() },
      { name: "message", value: `Model download: ${dl.label} | Country: ${form.country}${phone.length > 4 ? ` | Phone: ${phone}` : ""}` },
    ];
    const context = { pageUri: location.href, pageName: document.title };
    const post = (fields) => fetch(url, {
      method: "POST", keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields, context }),
    });
    try {
      const res = await post(phone.length > 4 ? [...core, { name: "phone", value: phone }] : core);
      if (!res.ok) await post(core);
    } catch (err) { /* network/HubSpot failure: still release the download */ }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await submitLead();
    setSending(false);
    setSubmitted(true);
  };
  return (
    <Sec>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="prod-grid">
        <div>
          <h1 style={{ fontFamily: F, fontSize: 36, fontWeight: 800, color: C.priL, lineHeight: 1.15, margin: "0 0 32px" }}>{dl.title}</h1>
          <p style={{ fontFamily: F, fontSize: 15, color: C.gD, margin: "0 0 32px" }}>info@exlcloud.io</p>
          <div style={{ fontFamily: F, fontSize: 15, color: C.dark, fontWeight: 700, lineHeight: 1.7 }}>80 Market Street<br />South Melbourne VIC<br />+61 405 329 098</div>
          <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
            {[["f", LINKS.facebook], ["𝕏", LINKS.x], ["in", LINKS.linkedin]].map(([icon, url]) =>
            <a key={icon} href={url} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: "50%", background: C.priL, color: C.w, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>{icon}</a>
            )}
          </div>
        </div>
        <div>
          {!submitted ?
          <form onSubmit={handleSubmit}>
              <div style={{ fontFamily: F, fontSize: 14, fontWeight: 700, color: C.dark, marginBottom: 8 }}>Name</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                <div>
                  <label style={{ fontFamily: F, fontSize: 12, color: C.priL, fontWeight: 600 }}>First Name <span style={{ color: C.g, fontWeight: 400 }}>(required)</span></label>
                  <input required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.gL}`, borderRadius: R.sm, fontFamily: F, fontSize: 14, marginTop: 4, outline: "none" }} />
                </div>
                <div>
                  <label style={{ fontFamily: F, fontSize: 12, color: C.priL, fontWeight: 600 }}>Last Name <span style={{ color: C.g, fontWeight: 400 }}>(required)</span></label>
                  <input required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.gL}`, borderRadius: R.sm, fontFamily: F, fontSize: 14, marginTop: 4, outline: "none" }} />
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontFamily: F, fontSize: 12, color: C.priL, fontWeight: 600 }}>Email <span style={{ color: C.g, fontWeight: 400 }}>(required)</span></label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.gL}`, borderRadius: R.sm, fontFamily: F, fontSize: 14, marginTop: 4, outline: "none" }} />
              </div>
              <div style={{ fontFamily: F, fontSize: 14, fontWeight: 700, color: C.dark, marginBottom: 8 }}>Phone contact</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
                <div>
                  <label style={{ fontFamily: F, fontSize: 12, color: C.priL, fontWeight: 600 }}>Country</label>
                  <select value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.gL}`, borderRadius: R.sm, fontFamily: F, fontSize: 14, marginTop: 4, outline: "none", background: C.w }}>
                    <option>Australia</option><option>New Zealand</option><option>United Kingdom</option><option>United States</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: F, fontSize: 12, color: C.priL, fontWeight: 600 }}>Number</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.gL}`, borderRadius: R.sm, fontFamily: F, fontSize: 14, marginTop: 4, outline: "none" }} />
                </div>
              </div>
              <button type="submit" style={{ background: C.priA, color: C.w, fontFamily: F, fontSize: 16, fontWeight: 700, padding: "16px 48px", border: "none", borderRadius: R.sm, cursor: "pointer", letterSpacing: 1, opacity: sending ? 0.6 : 1 }} disabled={sending}>{sending ? "SENDING…" : "SEND"}</button>
            </form> :

          <div>
              <h2 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: C.priL, margin: "0 0 16px" }}>Thank you!</h2>
              <p style={{ fontFamily: F, fontSize: 18, color: C.dark, margin: "0 0 20px", fontWeight: 600 }}>Click the link to download.</p>
              <a href={dl.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: F, fontSize: 20, fontWeight: 800, color: C.priL, textDecoration: "underline" }}>{dl.label}</a>
            </div>
          }
        </div>
      </div>
    </Sec>);

};

export default DownloadForm;
