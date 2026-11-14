import { IS_PRODUCTION } from "../lib/site.js";

/* Staging builds block all crawlers; the production build (SITE_ENV=production) welcomes them. */
export function GET() {
  const body = IS_PRODUCTION
    ? `# EXL Cloud - exlcloud.io\n# AI crawlers welcome (Answer Engine Optimisation).\nUser-agent: *\nAllow: /\nDisallow: /dl-3way\nDisallow: /dl-performance\nDisallow: /dl-cashflow\n\nSitemap: https://exlcloud.io/sitemap-index.xml\n`
    : `# STAGING — not for indexing. Set SITE_ENV=production for the live build.\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
