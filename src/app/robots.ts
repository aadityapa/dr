import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-data";

/**
 * Crawling rules.
 *
 * AI answer engines (ChatGPT, Claude, Perplexity, Gemini/Google-Extended) are
 * explicitly allowed — being cited in AI answers is now a real discovery
 * channel for a local clinic, and `/llms.txt` gives them a clean summary.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
