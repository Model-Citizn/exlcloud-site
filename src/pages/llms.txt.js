import { llmsTxt } from "../lib/llms.js";
/* /llms.txt — curated index for AI assistants (llmstxt.org). Built from site.js + content collections. */
export async function GET() {
  return new Response(await llmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
