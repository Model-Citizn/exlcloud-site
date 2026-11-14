import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL } from "../../lib/site.js";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Btn, Sec, SectionHead, DAB } from "../ui.jsx";
/* ═══ FUTURE — Interactive Scenario Model ═══ */
/* Slider defined outside the component so it isn't re-created each render (that made dragging drop focus) */
const Sl = ({ l, v, set, mn, mx }) =>
  <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
        <span style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: C.gD }}>{l}</span>
        <span style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: C.priL }}>{v}%</span>
      </div>
      <input type="range" min={mn} max={mx} value={v} onChange={(e) => set(+e.target.value)} style={{ width: "100%", accentColor: C.priA }} />
    </div>;

const Future = () => {
  const [sc, setSc] = React.useState("base");
  const [rg, setRg] = React.useState(15);const [cp, setCp] = React.useState(35);
  const [og, setOg] = React.useState(8);const [tr, setTr] = React.useState(30);const [ir, setIr] = React.useState(5);
  const presets = { base: { rg: 15, cp: 35, og: 8, tr: 30, ir: 5 }, optimistic: { rg: 25, cp: 30, og: 5, tr: 25, ir: 4 }, conservative: { rg: 5, cp: 40, og: 12, tr: 30, ir: 7 } };
  React.useEffect(() => {const s = presets[sc];setRg(s.rg);setCp(s.cp);setOg(s.og);setTr(s.tr);setIr(s.ir);}, [sc]);
  const bR = 1000,bO = 300,bD = 500;const yrs = [];let cc = 200;
  for (let y = 0; y < 6; y++) {const r = bR * Math.pow(1 + rg / 100, y);const c = r * (cp / 100);const gp = r - c;const o = bO * Math.pow(1 + og / 100, y);const eb = gp - o;const d = r * 0.03;const ei = eb - d;const int = bD * (ir / 100);const ebt = ei - int;const tx = Math.max(0, ebt * (tr / 100));const np = ebt - tx;const ocf = np + d;const cx = r * 0.05;const fcf = ocf - cx;cc += fcf;yrs.push({ yr: `FY${27 + y}`, r: Math.round(r), c: Math.round(c), gp: Math.round(gp), o: Math.round(o), eb: Math.round(eb), np: Math.round(np), ocf: Math.round(ocf), fcf: Math.round(fcf), cash: Math.round(cc), gpm: (gp / r * 100).toFixed(1), npm: (np / r * 100).toFixed(1) });}
  const fy32 = yrs[5];


  return (
    <>
      <section style={{ background: `radial-gradient(ellipse at 30% 0%, ${C.priL}25, transparent), linear-gradient(170deg, ${C.dark}, #0D2818, ${C.pri})`, padding: "100px 24px 70px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontFamily: F, fontWeight: 700, color: C.mint, letterSpacing: 3, marginBottom: 16, fontSize: "25px" }}>INTERACTIVE MODEL</div>
          <h1 style={{ fontFamily: F, fontSize: 44, fontWeight: 800, color: C.w, lineHeight: 1.1, margin: "0 0 18px", letterSpacing: -0.5 }}>The Future of Financial Modelling</h1>
          <p style={{ fontFamily: F, fontSize: 18, color: "rgba(255,255,255,0.65)", maxWidth: 560, lineHeight: 1.65 }}>Adjust the drivers. Watch the 3-way model respond in real time. This is driver-based modelling — the EXL Cloud way.</p>
        </div>
      </section>
      <Sec bg={C.warmBg}>
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {[["base", "Base Case"], ["optimistic", "Optimistic"], ["conservative", "Conservative"]].map(([k, l]) =>
          <button key={k} onClick={() => setSc(k)} style={{ fontFamily: F, fontSize: 13, fontWeight: 600, padding: "10px 26px", borderRadius: R.full, cursor: "pointer", border: "none", background: sc === k ? C.priL : C.w, color: sc === k ? C.w : C.gD, boxShadow: sc === k ? `0 4px 12px ${C.priL}30` : "0 1px 3px rgba(0,0,0,0.05)", transition: "all 0.2s" }}>{l}</button>
          )}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 32, alignItems: "start" }} className="model-grid">
          <div className="driver-panel" style={{ background: C.w, borderRadius: R.xl, padding: 28, border: `1px solid ${C.gL}` }}>
            <h3 style={{ fontFamily: F, fontSize: 16, fontWeight: 700, margin: "0 0 22px", display: "flex", alignItems: "center", gap: 10 }}><Icon name="chart" size={20} />Drivers</h3>
            <Sl l="Revenue Growth" v={rg} set={setRg} mn={-10} mx={50} />
            <Sl l="COGS %" v={cp} set={setCp} mn={10} mx={80} />
            <Sl l="OpEx Growth" v={og} set={setOg} mn={-5} mx={30} />
            <Sl l="Tax Rate" v={tr} set={setTr} mn={0} mx={50} />
            <Sl l="Interest Rate" v={ir} set={setIr} mn={0} mx={15} />
            <div style={{ marginTop: 20, padding: 14, background: C.pale, borderRadius: R.lg, fontFamily: F, fontSize: 11, color: C.priL, lineHeight: 1.6 }}>All inputs → P&L → BS → CF. Zero hardcoding. EXL Cloud standard.</div>
          </div>
          <div>
            {/* KPI tiles */}
            <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.g, marginBottom: 8, letterSpacing: 0.5 }}>FY32 KEY METRICS</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12, marginBottom: 28 }}>
              {[["Revenue", `$${(fy32.r / 1000).toFixed(1)}M`], ["GP Margin", `${fy32.gpm}%`], ["NPAT", `$${fy32.np}K`], ["FCF", `$${fy32.fcf}K`], ["Cash", `$${(fy32.cash / 1000).toFixed(1)}M`]].map(([l, v]) =>
              <div key={l} style={{ background: C.w, borderRadius: R.lg, padding: 18, border: `1px solid ${C.gL}`, textAlign: "center" }}>
                  <div style={{ fontFamily: F, fontSize: 10, color: C.g, fontWeight: 600, letterSpacing: 0.5 }}>{l}</div>
                  <div style={{ fontFamily: F, fontSize: 22, fontWeight: 800, color: C.priL, marginTop: 4 }}>{v}</div>
                </div>
              )}
            </div>
            {/* Charts */}
            <div style={{ background: C.w, borderRadius: R.xl, padding: 24, border: `1px solid ${C.gL}`, marginBottom: 24 }}>
              <h4 style={{ fontFamily: F, fontSize: 14, fontWeight: 700, margin: "0 0 16px" }}>P&L Waterfall ($K)</h4>
              <SBarChart data={yrs} keys={["r", "gp", "eb", "np"]} colors={[C.priL, C.priA, C.mint, C.blue]} height={250} labelKey="yr" />
              <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 8 }}>
                {[["Revenue", C.priL], ["GP", C.priA], ["EBITDA", C.mint], ["NPAT", C.blue]].map(([n, c]) => <div key={n} style={{ display: "flex", alignItems: "center", gap: 5 }}><div style={{ width: 12, height: 12, borderRadius: 3, background: c }} /><span style={{ fontFamily: F, fontSize: 11, color: "#666" }}>{n}</span></div>)}
              </div>
            </div>
            <div style={{ background: C.w, borderRadius: R.xl, padding: 24, border: `1px solid ${C.gL}`, marginBottom: 24 }}>
              <h4 style={{ fontFamily: F, fontSize: 14, fontWeight: 700, margin: "0 0 16px" }}>Cash Flow ($K)</h4>
              <SAreaChart data={yrs} dataKey="cash" fill={C.pale} stroke={C.priL} height={210} labelKey="yr" />
            </div>
            <div style={{ background: C.w, borderRadius: R.xl, padding: 24, border: `1px solid ${C.gL}`, marginBottom: 24 }}>
              <h4 style={{ fontFamily: F, fontSize: 14, fontWeight: 700, margin: "0 0 16px" }}>Margins (%)</h4>
              <SLineChart data={yrs} lines={[{ key: "gpm", name: "GP %", color: C.priA }, { key: "npm", name: "NPAT %", color: C.blue }]} height={190} labelKey="yr" domain={[-20, 80]} />
            </div>
            {/* Table */}
            <div style={{ background: C.w, borderRadius: R.xl, padding: 24, border: `1px solid ${C.gL}`, overflow: "auto" }}>
              <h4 style={{ fontFamily: F, fontSize: 14, fontWeight: 700, margin: "0 0 16px" }}>P&L Summary ($K)</h4>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: F, fontSize: 13 }}>
                <thead><tr style={{ borderBottom: `2px solid ${C.priL}` }}>
                  {["", "FY27", "FY28", "FY29", "FY30", "FY31", "FY32"].map((h) =>
                    <th key={h} style={{ textAlign: h ? "right" : "left", padding: "8px 6px", color: C.gD, fontWeight: 700, fontSize: 12 }}>{h}</th>
                    )}
                </tr></thead>
                <tbody>
                  {[["Revenue", "r"], ["COGS", "c"], ["Gross Profit", "gp"], ["OpEx", "o"], ["EBITDA", "eb"], ["NPAT", "np"], ["Operating CF", "ocf"], ["Free CF", "fcf"]].map(([l, k]) =>
                  <tr key={l} style={{ borderBottom: `1px solid ${C.gL}`, background: ["Gross Profit", "EBITDA", "NPAT"].includes(l) ? C.pale : "transparent" }}>
                      <td style={{ padding: "7px 6px", fontWeight: ["Gross Profit", "EBITDA", "NPAT"].includes(l) ? 700 : 400, fontSize: 13 }}>{l}</td>
                      {yrs.map((y) =>
                    <td key={y.yr} style={{ textAlign: "right", padding: "7px 6px", color: y[k] < 0 ? C.red : C.gD, fontWeight: ["Gross Profit", "EBITDA", "NPAT"].includes(l) ? 700 : 400 }}>{y[k].toLocaleString()}</td>
                    )}
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Sec>
      <Sec style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: F, fontSize: 32, fontWeight: 800, margin: "0 0 14px" }}>This is the EXL Cloud Standard</h2>
        <p style={{ fontFamily: F, fontSize: 16, color: C.g, margin: "0 0 32px" }}>Driver-based. Formula-driven. Scenario-enabled. Fully transparent.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn href={LINKS.checkout}>Get EXL Cloud</Btn>
          <Btn href={LINKS.mavenCourses} variant="dark">AI-Powered Accountant</Btn>
        </div>
      </Sec>
    </>);

};

export default Future;
