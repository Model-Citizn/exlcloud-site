import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL } from "../../lib/site.js";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Btn, Sec, SectionHead, DAB } from "../ui.jsx";
/* ═══ BOARD PACK INTERACTIVE DEMO ═══ */
const BoardPackDemo = () => {
  const { useState: us } = React;
  const [tab, setTab] = us("overview");
  const revData = [{ m: "Jul", r: 180, e: 140 }, { m: "Aug", r: 195, e: 148 }, { m: "Sep", r: 210, e: 152 }, { m: "Oct", r: 230, e: 158 }, { m: "Nov", r: 250, e: 162 }, { m: "Dec", r: 275, e: 168 }];
  const pieData = [{ name: "Subscriptions", value: 62, color: C.priL }, { name: "Advisory", value: 24, color: C.mint }, { name: "Training", value: 14, color: C.acc }];
  return (
    <div style={{ background: C.w, borderRadius: R.xl, overflow: "hidden", border: `1px solid ${C.gL}`, boxShadow: "0 24px 80px rgba(0,0,0,0.06)" }}>
      {/* Browser chrome */}
      <div style={{ background: "#F5F6F7", padding: "12px 18px", display: "flex", alignItems: "center", gap: 10, borderBottom: `1px solid ${C.gL}` }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#EF4444" }}></div>
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#F59E0B" }}></div>
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#22C55E" }}></div>
        </div>
        <div style={{ flex: 1, background: C.w, borderRadius: R.full, padding: "5px 14px", fontFamily: F, fontSize: 12, color: C.g }}>board-pack-q4-2026.html</div>
      </div>
      {/* Header */}
      <div style={{ background: C.pri, padding: "14px 20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <span style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: C.w, whiteSpace: "nowrap" }}>Q4 2026 Board Pack</span>
          <span style={{ fontFamily: F, fontSize: 11, color: C.mint, fontWeight: 500 }}>EXL Cloud</span>
        </div>
        <div style={{ display: "flex", gap: 3 }}>
          {["overview", "revenue", "expenses"].map((t) =>
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "5px 14px", borderRadius: R.full, border: "none", cursor: "pointer", fontFamily: F, fontSize: 11, fontWeight: 600,
            background: tab === t ? "rgba(255,255,255,0.18)" : "transparent",
            color: tab === t ? C.w : "rgba(255,255,255,0.55)", textTransform: "capitalize"
          }}>{t}</button>
          )}
        </div>
      </div>
      {/* Content */}
      <div style={{ padding: 28 }}>
        {tab === "overview" &&
        <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14, marginBottom: 28 }}>
              {[["Revenue", "$1.34M", "↑ 18%", C.priL], ["EBITDA", "$420K", "↑ 24%", C.priA], ["Net Profit", "$285K", "↑ 15%", C.blue], ["Cash", "$890K", "↑ 32%", C.mint]].map(([l, v, d, c]) =>
            <div key={l} style={{ background: `${c}08`, borderLeft: `3px solid ${c}`, borderRadius: R.md, padding: 16 }}>
                  <div style={{ fontFamily: F, fontSize: 11, color: C.g, fontWeight: 600, letterSpacing: 0.5 }}>{l}</div>
                  <div style={{ fontFamily: F, fontSize: 22, fontWeight: 800, color: C.dark, marginTop: 2 }}>{v}</div>
                  <div style={{ fontFamily: F, fontSize: 12, color: c, fontWeight: 600, marginTop: 2 }}>{d}</div>
                </div>
            )}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 18 }} className="bp-grid2">
              <div style={{ background: C.warmBg, borderRadius: R.md, padding: 20 }}>
                <div style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: C.dark, marginBottom: 14 }}>Revenue vs Expenses ($K)</div>
                <SBarChart data={revData} keys={["r", "e"]} colors={[C.priL, C.gL]} height={170} labelKey="m" />
              </div>
              <div style={{ background: C.warmBg, borderRadius: R.md, padding: 20 }}>
                <div style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: C.dark, marginBottom: 14 }}>Revenue Mix</div>
                <div style={{ display: "flex", justifyContent: "center", padding: "10px 0" }}><SPieChart data={pieData} size={116} /></div>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 6 }}>
                  {pieData.map((d) =>
                <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 3, background: d.color }}></div>
                      <span style={{ fontFamily: F, fontSize: 10, color: C.g }}>{d.name} {d.value}%</span>
                    </div>
                )}
                </div>
              </div>
            </div>
          </div>
        }
        {tab === "revenue" &&
        <div>
            <div style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: C.dark, marginBottom: 18 }}>Monthly Revenue Trend ($K)</div>
            <SAreaChart data={revData} dataKey="r" fill={C.pale} stroke={C.priL} height={210} labelKey="m" />
            <div style={{ marginTop: 18, padding: 18, background: C.pale, borderRadius: R.md, borderLeft: `3px solid ${C.priL}` }}>
              <div style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: C.priL, marginBottom: 6 }}>Commentary</div>
              <div style={{ fontFamily: F, fontSize: 14, color: C.gD, lineHeight: 1.65 }}>Revenue grew 53% across H2, driven by 12 new Advanced Content subscriptions and the Weel partnership. December uptick reflects year-end advisory billings.</div>
            </div>
          </div>
        }
        {tab === "expenses" &&
        <div>
            <div style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: C.dark, marginBottom: 18 }}>Expense Breakdown ($K)</div>
            <SHBarChart data={[{ c: "Payroll", v: 280 }, { c: "Tech", v: 95 }, { c: "Marketing", v: 65 }, { c: "Overheads", v: 45 }, { c: "Legal", v: 20 }]} dataKey="v" labelKey="c" fill={C.priA} height={210} />
          </div>
        }
      </div>
    </div>);

};

// Export to window

export default BoardPackDemo;
