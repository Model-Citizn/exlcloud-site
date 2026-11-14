import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { LINKS, NAV } from "../../lib/site.js";
import { Btn } from "../ui.jsx";

/*
 * Site navigation — static HTML. Scroll shading and the mobile menu toggle are handled by the
 * small script in BaseLayout.astro (no React needed in the browser).
 * `current` is the active path ("/pricing"), set by the layout.
 */
const isActive = (current, to) => (to === "/" ? current === "/" : current === to || current.startsWith(to + "/"));

const Nav = ({ current = "/" }) => (
  <nav id="site-nav" data-scrolled="false" style={{ position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", transition: "all 0.3s ease" }}>
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 12 }} aria-label="EXL Cloud home">
        <img src="/images/logo-exlcloud250.png" alt="" width="36" height="36" style={{ borderRadius: R.md, boxShadow: "0 2px 8px rgba(116,198,157,0.3)" }} />
        <span style={{ color: C.w, fontFamily: F, fontWeight: 700, fontSize: 18, letterSpacing: -0.3 }}>EXL Cloud</span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="dnav">
        {NAV.map(([label, to]) => {
          const on = isActive(current, to);
          return (
            <a key={to} href={to} aria-current={on ? "page" : undefined} className="nav-link" style={{
              background: on ? "rgba(116,198,157,0.12)" : "none", fontFamily: F, fontSize: 13.5, fontWeight: 500,
              color: on ? C.mint : "rgba(255,255,255,0.7)", padding: "7px 12px", borderRadius: R.full, transition: "all 0.2s",
            }}>{label}</a>
          );
        })}
        <Btn href={LINKS.checkout} style={{ padding: "9px 22px", fontSize: 13, marginLeft: 8 }}>Get Started</Btn>
      </div>
      <button type="button" id="nav-toggle" className="mtog" aria-expanded="false" aria-controls="nav-mobile" aria-label="Open menu"
        style={{ background: "none", border: "none", cursor: "pointer", color: C.w, fontSize: 24, display: "none", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: R.md }}>
        ☰
      </button>
    </div>
    <div id="nav-mobile" hidden style={{ background: C.dark, padding: "16px 24px 24px", flexDirection: "column", gap: 4, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {NAV.map(([label, to]) => {
        const on = isActive(current, to);
        return (
          <a key={to} href={to} aria-current={on ? "page" : undefined}
            style={{ display: "block", background: on ? "rgba(116,198,157,0.1)" : "none", fontFamily: F, fontSize: 15, color: on ? C.mint : "rgba(255,255,255,0.8)", padding: "12px 16px", borderRadius: R.md }}>
            {label}
          </a>
        );
      })}
      <div style={{ marginTop: 8 }}>
        <Btn href={LINKS.checkout} style={{ width: "100%", padding: "14px 24px" }}>Get Started</Btn>
      </div>
    </div>
  </nav>
);

export default Nav;
