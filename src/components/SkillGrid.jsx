import React from "react";
import { C, F, R } from "../lib/theme.js";

export const TIERS = ["Foundation", "Data Infrastructure", "Narrative", "Augmentation", "Advanced Workflows"];
export const pad = (n) => String(n).padStart(2, "0");

/*
 * Skills grouped by tier. `skills` comes from the skills content collection
 * ({ number, name, summary, tier, slug, isNew }) — add a Markdown file to add a card.
 */
const SkillGrid = ({ skills }) => (
  <>
    {TIERS.map((tier) => {
      const items = skills.filter((s) => s.tier === tier).sort((a, b) => a.number - b.number);
      if (!items.length) return null;
      return (
        <div key={tier} style={{ marginBottom: 32 }}>
          <h3 style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.priL, letterSpacing: 2, marginBottom: 14, textTransform: "uppercase", borderBottom: `1px solid ${C.gL}`, paddingBottom: 8 }}>{tier}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {items.map((s) => (
              <a key={s.number} href={`/skills/${s.slug}`} className="lift" style={{ display: "block", background: C.warmBg, borderRadius: R.lg, padding: 20, border: `1px solid ${s.isNew ? C.mint : C.gL}` }}>
                <span style={{ fontFamily: F, fontSize: 11, fontWeight: 700, color: C.priA }}>SKILL {pad(s.number)}</span>
                {s.isNew && <span style={{ fontFamily: F, fontSize: 10, fontWeight: 700, color: C.w, background: C.priA, borderRadius: R.full, padding: "2px 8px", marginLeft: 8, letterSpacing: 1 }}>NEW</span>}
                <h4 style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: C.dark, margin: "6px 0" }}>{s.name}</h4>
                <p style={{ fontFamily: F, fontSize: 13, color: C.g, margin: 0, lineHeight: 1.55 }}>{s.summary}</p>
              </a>
            ))}
          </div>
        </div>
      );
    })}
  </>
);

export default SkillGrid;
