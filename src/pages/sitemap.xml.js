/* Keeps the old /sitemap.xml URL (submitted to Google/Bing) working: points at Astro's sitemap index. */
export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://exlcloud.io/sitemap-0.xml</loc></sitemap></sitemapindex>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
