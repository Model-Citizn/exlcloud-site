import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../lib/site.js";

/* RSS feed of EXL Cloud's own articles (republished Knowledge Hub posts excluded). */
export async function GET(context) {
  const articles = (await getCollection("articles", ({ data }) => !data.draft && data.kind !== "hub"))
    .sort((a, b) => +b.data.date - +a.data.date);
  return rss({
    title: "EXL Cloud Articles",
    description: "Product guides for EXL Cloud and its Claude AI skills library.",
    site: context.site ?? SITE.url,
    items: articles.map((a) => ({ title: a.data.title, pubDate: a.data.date, description: a.data.excerpt, link: `/articles/${a.id}/` })),
    customData: "<language>en-au</language>",
  });
}
