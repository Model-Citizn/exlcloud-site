/*
 * EXL Cloud — SITE CONFIG (single source of truth)
 * ------------------------------------------------
 * Every price, link, contact detail and headline number used across the site lives here.
 * Change it once; every page, FAQ, JSON-LD block and meta tag picks it up on the next build.
 */

export const SITE = {
  name: "EXL Cloud",
  legalName: "EXL Cloud Pty Ltd", // ⚠ privacy policy / EULA use "EXL Cloud Holdings Pty Ltd" — confirm the correct entity
  url: "https://exlcloud.io",
  tagline: "Keep Excel. Leverage the cloud.",
  /* homepage meta description (≤160 chars) */
  description: "EXL Cloud is an Excel add-in that connects Excel to Xero in 8 clicks. Pull live trial balance, P&L, balance sheet, journals and transactions into Excel.",
  email: "info@exlcloud.io",
  phone: "+61 405 329 098",
  phoneIntl: "+61-405-329-098",
  address: { street: "80 Market Street", locality: "South Melbourne", region: "VIC", postcode: "3205", country: "AU" },
  founder: { name: "Lance Rubin", jobTitle: "Chief Excel Officer" },
  copyright: "EXL Cloud by XLC",
  clicks: 8, // "Xero to Excel in 8 clicks"
  trialDays: 7,
};

/* Headline skills number shown in copy. The real list is the `skills` content collection (src/content/skills). */
export const SKILLS_LABEL = "20+";

export const PLANS = {
  dataPull: {
    name: "Data Pull",
    price: 70,
    connections: 5,
    checkout: "https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Data-Pull-Promotion-Starter-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1",
    extraConnections: [["6–10 connections", "$7.50/ea"], ["11–20 connections", "$6.80/ea"], ["21+ connections", "$6.00/ea"], ["Enterprise", "Price on application"]],
  },
  advanced: {
    name: "Advanced Content",
    price: 170,
    connections: 5,
    checkout: "https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Xero-Advanced-Content-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1",
    extraConnections: [["6–20 connections", "$16.25/ea"], ["21+ connections", "$12.70/ea"], ["Enterprise", "Price on application"]],
  },
  currency: "AUD",
  aipaDiscount: "45%",
};

export const LINKS = {
  checkout: PLANS.advanced.checkout,
  knowledgeBase: "https://docs.xlconnect.net",
  supportTicket: "https://exlcloud.atlassian.net/servicedesk/customer/portal/1",
  memberLogin: "https://account.xlconnect.net",
  maven: "https://maven.com/modelcitizn",
  mavenLessons: "https://maven.com/modelcitizn#lightning-lessons",
  mavenCourses: "https://maven.com/modelcitizn#courses",
  contactForm: "https://share.hsforms.com/1Ghuax7wHQg6Bg22sJfVVSAcw2qe",
  knowledgeHub: "https://www.modelcitizn.com/knowledge-hub/",
  skillsGithub: "https://github.com/Model-Citizn", // ⚠ point at the public skills download repo/page when it exists
  linkedin: "https://www.linkedin.com/company/exl-cloud",
  facebook: "https://www.facebook.com/EXLCloud",
  x: "https://x.com/exl_cloud",
  explainerVideo: "/uploads/exlcloud-2min-intro.mp4",
  heroVideo: "/images/hero-video.mp4",
};

/*
 * Lead capture for the free model downloads (/dl-3way, /dl-performance, /dl-cashflow).
 * Set these to a HubSpot form (Marketing → Forms → form → Share/Embed shows portalId + formId).
 * While empty, the download is still released but the lead is NOT recorded anywhere.
 */
export const LEAD_FORM = { hubspotPortalId: "", hubspotFormId: "" };

export const NAV = [
  ["Home", "/"], ["About", "/about"], ["Features", "/features"], ["Skills", "/skills"], ["Articles", "/articles"],
  ["What's New", "/gen2"], ["Pricing", "/pricing"], ["Support", "/support"], ["Contact", "/contact"],
];

/* Legacy page-key → URL (kept so ported components can keep saying href("features")). */
export const href = (p) => (p === "home" ? "/" : p.startsWith("article:") ? "/articles/" + p.slice(8) : "/" + p);

export const money = (n) => `$${n}`;
