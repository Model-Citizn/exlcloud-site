import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL } from "../../lib/site.js";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Btn, Sec, SectionHead, DAB } from "../ui.jsx";
/* ═══ HERO BACKGROUND VIDEO (lazy-loaded) ═══ */
const HeroVideo = () => {
  const [loaded, setLoaded] = React.useState(false);
  const videoRef = React.useRef(null);
  // Skip the background video only on data-saver / slow connections — it's decorative and a 5MB
  // request on a slow connection hurts. Reduced-motion no longer hides it (that silently removed
  // the video on desktops with OS animations off); it just prevents autoplay below.
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn && (conn.saveData || /(2g|slow-2g)/.test(conn.effectiveType || ""))) return;
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);
  React.useEffect(() => {
    if (loaded && videoRef.current) {
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; /* static first frame */
      const p = videoRef.current.play();
      if (p && p.catch) p.catch(() => {});
    }
  }, [loaded]);
  if (!loaded) return null;
  return (
    <video ref={videoRef} muted loop playsInline preload="auto"
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", opacity: 0.2, zIndex: 0,
        animation: "heroFadeIn 2s ease forwards",
      }}>
      <source src="/images/hero-video.mp4" type="video/mp4" />
    </video>
  );
};

export default HeroVideo;
