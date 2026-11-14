import React from "react";
import { C, F, R } from "../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL } from "../lib/site.js";
/* ═══ SIMPLE SVG CHARTS (no Recharts dependency) ═══ */
export const SBarChart = ({ data, keys, colors, labels, height = 180, labelKey, labelColor = "#999" }) => {
  const allVals = data.flatMap((d) => keys.map((k) => Math.abs(d[k] || 0)));
  const mx = Math.max(...allVals);
  const bw = keys.length;
  return (
    <div style={{ height }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: height - 28, padding: "0 2px" }}>
        {data.map((d, i) =>
        <div key={i} style={{ flex: 1, display: "flex", gap: 2, alignItems: "flex-end", height: "100%" }}>
            {keys.map((k, ki) =>
          <div key={ki} style={{ flex: 1, height: `${Math.max(2, Math.abs(d[k]) / mx * 100)}%`, background: colors[ki], borderRadius: "4px 4px 0 0", transition: "height 0.5s ease", minHeight: 2 }} />
          )}
          </div>
        )}
      </div>
      {labelKey && <div style={{ display: "flex", gap: 6, marginTop: 6, padding: "0 2px" }}>
        {data.map((d, i) => <div key={i} style={{ flex: 1, textAlign: "center", fontFamily: F, fontSize: 10, color: labelColor }}>{d[labelKey]}</div>)}
      </div>}
    </div>);

};
export const SAreaChart = ({ data, dataKey, fill, stroke, height = 180, labelKey, labelColor = "#999" }) => {
  const vals = data.map((d) => d[dataKey]);
  const mx = Math.max(...vals);const mn = Math.min(...vals.filter((v) => v >= 0));
  const w = 600;const h = height;const padL = 16;const padR = 40;
  const pts = vals.map((v, i) => [padL + i / (vals.length - 1) * (w - padL - padR), h - 24 - (v - mn * 0.8) / (mx - mn * 0.8) * (h - 50)]);
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
  const area = `${line} L${pts[pts.length - 1][0]},${h - 24} L${pts[0][0]},${h - 24} Z`;
  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ display: 'block' }}>
        {[0.25, 0.5, 0.75].map((f) => <line key={f} x1={padL} y1={(h - 50) * f + 16} x2={w - padR} y2={(h - 50) * f + 16} stroke="#eee" strokeWidth="1" />)}
        <path d={area} fill={fill} opacity="0.3" />
        <path d={line} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
        {pts.map((p, i) => <React.Fragment key={i}><circle cx={p[0]} cy={p[1]} r="4" fill={stroke} /><text x={p[0]} y={p[1] - 10} textAnchor="middle" fontSize="11" fill={stroke} fontWeight="600" fontFamily={F}>{parseFloat(vals[i]).toFixed(1)}</text></React.Fragment>)}
        {labelKey && data.map((d, i) => <text key={i} x={pts[i][0]} y={h - 6} textAnchor="middle" fontSize="11" fill={labelColor} fontFamily={F}>{d[labelKey]}</text>)}
      </svg>
    </div>);

};
export const SLineChart = ({ data, lines, height = 180, labelKey, domain }) => {
  const allVals = data.flatMap((d) => lines.map((l) => parseFloat(d[l.key]) || 0));
  const mn = domain ? domain[0] : Math.min(...allVals);const mx = domain ? domain[1] : Math.max(...allVals);
  const w = 600;const h = height;const padL = 16;const padR = 40;
  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ display: 'block' }}>
        {[0.25, 0.5, 0.75].map((f) => <line key={f} x1={padL} y1={(h - 50) * f + 16} x2={w - padR} y2={(h - 50) * f + 16} stroke="#eee" strokeWidth="1" />)}
        {lines.map((ln) => {
          const pts = data.map((d, i) => [padL + i / (data.length - 1) * (w - padL - padR), h - 24 - (parseFloat(d[ln.key]) - mn) / (mx - mn) * (h - 50)]);
          const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
          return <React.Fragment key={ln.key}><path d={path} fill="none" stroke={ln.color} strokeWidth="2.5" strokeLinejoin="round" />{pts.map((p, i) => <React.Fragment key={i}><circle cx={p[0]} cy={p[1]} r="4" fill={ln.color} /><text x={p[0]} y={p[1] - 10} textAnchor="middle" fontSize="11" fill={ln.color} fontWeight="600" fontFamily={F}>{parseFloat(data[i][ln.key]).toFixed(1)}</text></React.Fragment>)}</React.Fragment>;
        })}
        {labelKey && data.map((d, i) => <text key={i} x={padL + i / (data.length - 1) * (w - padL - padR)} y={h - 6} textAnchor="middle" fontSize="11" fill="#999" fontFamily={F}>{d[labelKey]}</text>)}
      </svg>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 4 }}>
        {lines.map((ln) => <div key={ln.key} style={{ display: "flex", alignItems: "center", gap: 5 }}><div style={{ width: 12, height: 3, borderRadius: 2, background: ln.color }} /><span style={{ fontFamily: F, fontSize: 11, color: "#666" }}>{ln.name}</span></div>)}
      </div>
    </div>);

};
export const SPieChart = ({ data, size = 120 }) => {
  const total = data.reduce((s, d) => s + d.value, 0);
  let cum = 0;const r = size / 2;const ir = r * 0.65;
  const arcs = data.map((d) => {
    const start = cum / total * Math.PI * 2 - Math.PI / 2;
    cum += d.value;
    const end = cum / total * Math.PI * 2 - Math.PI / 2;
    const lg = d.value / total > 0.5 ? 1 : 0;
    return { ...d, d: `M${r + ir * Math.cos(start)},${r + ir * Math.sin(start)} A${ir},${ir} 0 ${lg} 1 ${r + ir * Math.cos(end)},${r + ir * Math.sin(end)} L${r + r * 0.95 * Math.cos(end)},${r + r * 0.95 * Math.sin(end)} A${r * 0.95},${r * 0.95} 0 ${lg} 0 ${r + r * 0.95 * Math.cos(start)},${r + r * 0.95 * Math.sin(start)} Z` };
  });
  return <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>{arcs.map((a, i) => <path key={i} d={a.d} fill={a.color} />)}</svg>;
};
export const SHBarChart = ({ data, dataKey, labelKey, fill, height = 200 }) => {
  const mx = Math.max(...data.map((d) => d[dataKey]));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, height }}>
      {data.map((d, i) =>
      <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
          <span style={{ fontFamily: F, fontSize: 12, color: "#555", width: 80, textAlign: "right", flexShrink: 0 }}>{d[labelKey]}</span>
          <div style={{ flex: 1, height: "70%", background: "#f0f0f0", borderRadius: 6, overflow: "hidden" }}>
            <div style={{ width: `${d[dataKey] / mx * 100}%`, height: "100%", background: fill, borderRadius: 6, transition: "width 0.5s ease" }} />
          </div>
          <span style={{ fontFamily: F, fontSize: 11, color: "#888", width: 35, flexShrink: 0 }}>{d[dataKey]}</span>
        </div>
      )}
    </div>);

};

/* ═══ SVG ICONS ═══ */
export const Icon = ({ name, size = 24, color = C.priA }) => {
  const icons = {
    eye: <><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" fill="none" stroke={color} strokeWidth="1.5" /></>,
    plug: <><path d="M12 2v6m-4-2v4m8-4v4M8 10h8v4a4 4 0 01-8 0v-4z" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" /><path d="M12 18v4" stroke={color} strokeWidth="1.5" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" fill="none" stroke={color} strokeWidth="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" fill="none" stroke={color} strokeWidth="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" fill="none" stroke={color} strokeWidth="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" fill="none" stroke={color} strokeWidth="1.5" /></>,
    chart: <><path d="M3 3v18h18" stroke={color} strokeWidth="1.5" strokeLinecap="round" /><path d="M7 17l4-6 4 4 5-8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></>,
    bolt: <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" /></>,
    shield: <><path d="M12 2l8 4v5c0 5.25-3.5 9.75-8 11-4.5-1.25-8-5.75-8-11V6l8-4z" fill="none" stroke={color} strokeWidth="1.5" /><path d="M9 12l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></>,
    doc: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" fill="none" stroke={color} strokeWidth="1.5" /><path d="M14 2v6h6M8 13h8M8 17h5" stroke={color} strokeWidth="1.5" strokeLinecap="round" /></>,
    ai: <><circle cx="12" cy="12" r="3" fill="none" stroke={color} strokeWidth="1.5" /><path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-7.07l-2.83 2.83m-4.48 4.48l-2.83 2.83m0-10.14l2.83 2.83m4.48 4.48l2.83 2.83" stroke={color} strokeWidth="1.5" strokeLinecap="round" /></>,
    play: <><polygon points="5,3 19,12 5,21" fill={color} /></>,
    arrow: <><path d="M5 12h14m-7-7l7 7-7 7" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>,
    mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke={color} strokeWidth="1.5" /><path d="M22 6l-10 7L2 6" fill="none" stroke={color} strokeWidth="1.5" /></>,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" fill="none" stroke={color} strokeWidth="1.5" /><circle cx="9" cy="7" r="4" fill="none" stroke={color} strokeWidth="1.5" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" fill="none" stroke={color} strokeWidth="1.5" /></>,
    download: <><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></>,
    check: <><path d="M20 6L9 17l-5-5" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>,
    heart: <><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="none" stroke={color} strokeWidth="1.5" /></>,
    star: <><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" /></>
  };
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none">{icons[name]}</svg>;
};

/* ═══ COUNTER (static: final value rendered server-side) ═══ */
export const Counter = ({ end, suffix = "" }) => <span>{Number(end).toLocaleString("en-AU")}{suffix}</span>;

/* ═══ AEO: DIRECT ANSWER BLOCK ═══ */
export const DAB = ({ children }) =>
<div style={{ background: C.w, borderRadius: R.xl, border: `1px solid ${C.gL}`, textAlign: "center", padding: "36px 40px", margin: "0 auto 48px" }}>
    <div style={{ width: 52, height: 52, borderRadius: R.lg, background: `linear-gradient(135deg, ${C.pale}, ${C.warmBg})`, border: `1px solid ${C.mint}30`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><circle cx="7" cy="14" r="4.5" stroke={C.priA} strokeWidth="1.5" /><circle cx="17" cy="14" r="4.5" stroke={C.priA} strokeWidth="1.5" /><path d="M11.5 14h1" stroke={C.priA} strokeWidth="1.5" strokeLinecap="round" /><path d="M2.5 14H2m20 0h-.5" stroke={C.priA} strokeWidth="1.5" strokeLinecap="round" /><path d="M7 9.5V7M17 9.5V7" stroke={C.priA} strokeWidth="1.5" strokeLinecap="round" /></svg>
    </div>
    <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, margin: "0 0 12px" }}>Overview</h3>
    <p style={{ fontFamily: F, color: C.g, lineHeight: 1.7, margin: 0, fontSize: "20px" }}>{children}</p>
  </div>;


/* ═══ AEO: FAQ SECTION ═══
   Native <details>: every answer is in the HTML (search + AI crawlers) and works with JS off.
   FAQPage JSON-LD for the same items is emitted by the page (see faqJsonLd in lib/seo.js). */
export const FAQSection = ({ items, title = "Frequently Asked Questions" }) =>
<div className="faq">
    <h3 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: C.dark, margin: "0 0 28px" }}>{title}</h3>
    {items.map((item, i) =>
    <details key={i} style={{ borderBottom: `1px solid ${C.gL}`, padding: "18px 0" }}>
        <summary style={{ fontFamily: F, fontSize: 16, fontWeight: 600, color: C.dark, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          {item.q}
          <span className="faq-plus" aria-hidden="true" style={{ color: C.priA, fontSize: 22, lineHeight: 1, flexShrink: 0 }}>+</span>
        </summary>
        <div style={{ marginTop: 12, fontFamily: F, fontSize: 15, color: C.g, lineHeight: 1.75 }}>{item.a}</div>
      </details>
    )}
  </div>;

export const Btn = ({ children, onClick, variant = "primary", href, style: s = {}, ...rest }) => {
  const base = {
    fontFamily: F, fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer",
    borderRadius: R.xl, padding: "14px 32px", letterSpacing: 0.2, transition: "all 0.3s ease",
    textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: 8, textAlign: "center", ...s
  };
  const v = {
    primary: { ...base, background: `linear-gradient(135deg, ${C.mint}, #52B788)`, color: C.dark, boxShadow: "0 4px 14px rgba(116,198,157,0.35)" },
    outline: { ...base, background: "rgba(255,255,255,0.08)", color: C.w, border: "1.5px solid rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" },
    dark: { ...base, background: C.pri, color: C.w, boxShadow: "0 4px 14px rgba(26,60,46,0.25)" },
    ghost: { ...base, background: "transparent", color: C.priA, padding: "8px 0", boxShadow: "none" },
    soft: { ...base, background: C.pale, color: C.priL, boxShadow: "none" }
  };
  /* internal links ("/pricing") open in the same tab; external links in a new tab */
  if (href && href.startsWith("/")) return <a href={href} style={v[variant]} {...rest}>{children}</a>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" style={v[variant]} {...rest}>{children}</a>;
  return <button type="button" onClick={onClick} style={v[variant]} {...rest}>{children}</button>;
};

/* ═══ SECTION WRAPPER ═══ */
export const Sec = ({ children, bg = C.w, style: s = {} }) =>
<section style={{ background: bg, padding: "100px 24px", ...s }}>
    <div style={{ maxWidth: 1120, margin: "0 auto" }}>{children}</div>
  </section>;


/* ═══ SECTION HEADER ═══ */
/* `as="h1"` for the page-hero heading (one h1 per page) */
export const SectionHead = ({ tag, title, desc, center = false, light = false, as: H = "h2" }) =>
<div style={{ textAlign: center ? "center" : "left", marginBottom: 48, maxWidth: center ? 640 : "none", margin: center ? "0 auto 48px" : "0 0 48px" }}>
    {tag && <div style={{ fontFamily: F, fontWeight: 700, color: light ? C.mint : C.priA, letterSpacing: 3, marginBottom: 12, textTransform: "uppercase", fontSize: 25 }}>{tag}</div>}
    <H style={{ fontFamily: F, fontSize: 36, fontWeight: 800, color: light ? C.w : C.dark, lineHeight: 1.15, margin: "0 0 12px", textWrap: "pretty" }}>{title}</H>
    {desc && <p style={{ fontFamily: F, fontSize: 17, color: light ? "rgba(255,255,255,0.65)" : C.g, lineHeight: 1.65, margin: 0, textWrap: "pretty" }}>{desc}</p>}
  </div>;


/* ═══ VIDEO EMBED ═══ */
export const Video = ({ id, title }) =>
<a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer"
style={{ display: "block", borderRadius: R.lg, overflow: "hidden", background: C.dark, position: "relative", aspectRatio: "16/9", textDecoration: "none", boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(135deg,${C.dark},${C.pri})`, position: "relative" }}>
      <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={title}
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.45 }}
    onError={(e) => {e.target.style.display = "none";}} />
      <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(255,255,255,0.3)", zIndex: 1, transition: "transform 0.3s" }}>
        <Icon name="play" size={24} color={C.w} />
      </div>
      <div style={{ position: "absolute", bottom: 16, left: 18, right: 18, zIndex: 1 }}>
        <div style={{ fontFamily: F, fontSize: 14, color: C.w, fontWeight: 600 }}>{title}</div>
        <div style={{ fontFamily: F, fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>Watch on YouTube ↗</div>
      </div>
    </div>
  </a>;


/* ═══ LOCAL VIDEO CARD ═══ */
/* Opens the explainer modal (vanilla script in BaseLayout listens for [data-open-video]) */
export const VideoLocal = ({ title = "2-Minute Introduction" }) =>
  <button type="button" data-open-video aria-label={`Play video: ${title}`}
    style={{ display: "block", borderRadius: R.lg, overflow: "hidden", background: C.dark, position: "relative", aspectRatio: "16/9", border: "none", cursor: "pointer", boxShadow: "0 8px 30px rgba(0,0,0,0.12)", width: "100%", padding: 0 }}>
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(135deg,${C.pri} 0%,${C.priA} 100%)`, position: "relative" }}>
      <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(255,255,255,0.35)", zIndex: 1 }}>
        <Icon name="play" size={24} color={C.w} />
      </div>
      <div style={{ position: "absolute", top: 12, left: 14, zIndex: 1 }}>
        <span style={{ fontFamily: F, fontSize: 10, fontWeight: 700, color: C.mint, letterSpacing: 2, background: "rgba(0,0,0,0.4)", padding: "3px 8px", borderRadius: R.full }}>EXPLAINER</span>
      </div>
      <div style={{ position: "absolute", bottom: 16, left: 18, right: 18, zIndex: 1, textAlign: "left" }}>
        <div style={{ fontFamily: F, fontSize: 14, color: C.w, fontWeight: 600 }}>{title}</div>
        <div style={{ fontFamily: F, fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 3 }}>2 min · Play now ▶</div>
      </div>
    </div>
  </button>;

/* ═══ PERSON PLACEHOLDER ═══ */
export const PersonPlaceholder = ({ initials, name, size = 72, gradient }) =>
<div style={{
  width: size, height: size, borderRadius: "50%", overflow: "hidden",
  background: gradient || `linear-gradient(135deg, ${C.priL}, ${C.mint})`,
  display: "flex", alignItems: "center", justifyContent: "center",
  boxShadow: "0 4px 16px rgba(0,0,0,0.12)", flexShrink: 0
}}>
    {/* Warm silhouette placeholder */}
    <svg viewBox="0 0 80 80" width={size * 0.75} height={size * 0.75}>
      <circle cx="40" cy="28" r="14" fill="rgba(255,255,255,0.85)" />
      <ellipse cx="40" cy="62" rx="22" ry="16" fill="rgba(255,255,255,0.85)" />
    </svg>
  </div>;


