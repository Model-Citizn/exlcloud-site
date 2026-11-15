import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://exlcloud.io",
  trailingSlash: "ignore",
  build: { format: "directory" },
  integrations: [react(), sitemap({ filter: (p) => !/\/(dl-[a-z0-9]+|404)\/?$/.test(p) }) /* download forms + 404 are noindex, keep them out */],
});
