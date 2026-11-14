import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL } from "../../lib/site.js";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Btn, Sec, SectionHead, DAB } from "../ui.jsx";
/* ═══ PRODUCT CAROUSEL ═══ */
const products = [
{ name: "Performance Report", desc: "Board-ready performance analysis from Xero data in minutes. Variance analysis, KPI tiles, and trend charts.", color: "#2D6A4F", tag: "GEN 2" },
{ name: "3-Way Financial Model", desc: "Fully integrated Income Statement, Balance Sheet, and Cash Flow Statement. Driver-based with LAMBDAs and Dynamic Arrays.", color: "#52B788", tag: "FLAGSHIP" },
{ name: "Cash Flow Scenario Model", desc: "Scenario-driven cash flow forecasting with base, optimistic, and conservative cases. Decision-ready output.", color: "#40916C", tag: "GEN 2" },
{ name: "HTML Board Pack", desc: "Interactive single-file HTML board packs with Chart.js charts, sticky nav, KPI tiles — no Excel needed for the reader.", color: "#7C3AED", tag: "NEW" },
{ name: "Profit Performance Model", desc: "1-way profit performance with scenario comparison dashboards. Wired to Xero for live data refresh.", color: "#2563EB", tag: "GEN 2" }];


const ProductCarousel = () => {
  const [idx, setIdx] = React.useState(0);
  const p = products[idx];
  React.useEffect(() => {const t = setInterval(() => setIdx((i) => (i + 1) % products.length), 5000);return () => clearInterval(t);}, []);
  const mockData = [{ m: "Jan", v: 42 }, { m: "Feb", v: 55 }, { m: "Mar", v: 48 }, { m: "Apr", v: 67 }, { m: "May", v: 73 }, { m: "Jun", v: 85 }];
  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 28, justifyContent: "center" }}>
        {products.map((_, i) =>
        <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 36 : 10, height: 10, borderRadius: R.full, border: "none", cursor: "pointer", background: i === idx ? C.mint : "rgba(255,255,255,0.25)", transition: "all 0.4s ease" }} />
        )}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="prod-grid">
        <div>
          <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: R.full, background: "rgba(116,198,157,0.15)", color: C.mint, fontFamily: F, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, marginBottom: 18 }}>{p.tag}</span>
          <h3 style={{ fontFamily: F, fontSize: 32, fontWeight: 800, color: C.w, margin: "0 0 14px", lineHeight: 1.15 }}>{p.name}</h3>
          <p style={{ fontFamily: F, fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: "0 0 28px" }}>{p.desc}</p>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => setIdx((i) => (i - 1 + products.length) % products.length)} style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: C.w, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
            <button onClick={() => setIdx((i) => (i + 1) % products.length)} style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: C.w, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
          </div>
        </div>
        {/* Interactive Workbook Mockup */}
        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: R.xl, padding: 28, border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(8px)", transform: "perspective(800px) rotateY(-2deg)", transition: "all 0.6s ease" }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 18, alignItems: "center" }}>
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#EF4444" }}></div>
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#F59E0B" }}></div>
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#22C55E" }}></div>
            <span style={{ fontFamily: F, fontSize: 11, color: "rgba(255,255,255,0.4)", marginLeft: 10 }}>{p.name}.xlsx</span>
          </div>
          <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
            {["Dashboard", "Data", "Scenarios"].map((t, i) =>
            <div key={t} style={{ padding: "5px 14px", borderRadius: `${R.sm}px ${R.sm}px 0 0`, background: i === 0 ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)", fontFamily: F, fontSize: 11, color: i === 0 ? C.mint : "rgba(255,255,255,0.35)", fontWeight: i === 0 ? 600 : 400 }}>{t}</div>
            )}
          </div>
          <SBarChart data={mockData.map((d, i) => ({ ...d, v: d.v * (1 + idx * 0.15 + i * 0.05) }))} keys={["v"]} colors={[p.color]} height={165} labelKey="m" labelColor="rgba(255,255,255,0.35)" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 12 }}>
            {[["Revenue", "$1.2M", "↑ 15%"], ["GP Margin", "65%", "↑ 3pp"], ["FCF", "$340K", "↑ 22%"]].map(([l, v, d]) =>
            <div key={l} style={{ background: "rgba(255,255,255,0.05)", borderRadius: R.md, padding: "10px 12px", textAlign: "center" }}>
                <div style={{ fontFamily: F, fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: 0.5 }}>{l}</div>
                <div style={{ fontFamily: F, fontSize: 16, fontWeight: 700, color: C.w, marginTop: 2 }}>{v}</div>
                <div style={{ fontFamily: F, fontSize: 10, color: C.mint, marginTop: 1 }}>{d}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

};

export default ProductCarousel;
