import { llmsFullTxt } from "../lib/llms.js";
/* /llms-full.txt — full text of every skill page and product guide, for AI assistants. */
export async function GET() {
  return new Response(await llmsFullTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
