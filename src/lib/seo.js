/* Structured data (JSON-LD) builders — fed from SITE/PLANS so prices and counts never drift. */
import { SITE, PLANS, SKILLS_LABEL } from "./site.js";

export const orgJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/images/logo-exlcloud500.png`,
  description: `EXL Cloud is an Excel add-in that connects Microsoft Excel to Xero in ${SITE.clicks} clicks, enabling world-class financial reports, dashboards, and models.`,
  address: { "@type": "PostalAddress", streetAddress: SITE.address.street, addressLocality: SITE.address.locality, addressRegion: SITE.address.region, postalCode: SITE.address.postcode, addressCountry: SITE.address.country },
  contactPoint: { "@type": "ContactPoint", telephone: SITE.phoneIntl, email: SITE.email, contactType: "customer service" },
  founder: { "@type": "Person", name: SITE.founder.name, jobTitle: SITE.founder.jobTitle },
  sameAs: ["https://www.linkedin.com/company/exl-cloud", "https://www.facebook.com/EXLCloud", "https://x.com/exl_cloud"],
});

export const softwareJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EXL Cloud",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows",
  description: `Excel add-in connecting Microsoft Excel to Xero accounting software. Pulls live data including trial balance, profit and loss, balance sheet, journals, and account transactions in ${SITE.clicks} clicks.`,
  offers: [
    { "@type": "Offer", name: "Data Pull Plan", price: PLANS.dataPull.price.toFixed(2), priceCurrency: PLANS.currency, description: `Xero data pull and push. Includes ${PLANS.dataPull.connections} Xero connections.` },
    { "@type": "Offer", name: "Advanced Content Plan", price: PLANS.advanced.price.toFixed(2), priceCurrency: PLANS.currency, description: `All Data Pull features plus financial models, dashboards, reports, Power BI integration, ${SKILLS_LABEL} Claude AI skills. Includes ${PLANS.advanced.connections} Xero connections.` },
  ],
  featureList: `Xero data pull, Xero data push, 3-Way Financial Model, Performance Reports, Cash Flow Scenario Model, Power BI integration, HTML Board Packs, ${SKILLS_LABEL} Claude AI Skills, Dynamic Arrays, LAMBDAs`,
});

export const personJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lance Rubin",
  jobTitle: "Chief Excel Officer",
  worksFor: { "@type": "Organization", name: SITE.legalName },
  alumniOf: [{ "@type": "Organization", name: "PwC" }, { "@type": "Organization", name: "KPMG" }, { "@type": "Organization", name: "Investec Bank" }, { "@type": "Organization", name: "National Australia Bank" }],
  description: "Lance Rubin is a Chartered Accountant who worked at PwC, KPMG, Investec Bank, and National Australia Bank. He is an FMI approved financial modelling trainer, CA ANZ financial modelling study guide co-author, and founder of Model Citizn.",
  knowsAbout: ["Financial Modelling", "Excel", "Xero", "Power BI", "3-Way Financial Models", "SaaS Metrics"],
});

export const faqJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

export const breadcrumbJsonLd = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: SITE.url + path })),
});

/* Trim plain text to a meta-description length at a word boundary. */
export const clip = (s, n = 158) => {
  const t = String(s).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (t.length <= n) return t;
  const cut = t.slice(0, n - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s—-]+$/, "") + "…";
};
