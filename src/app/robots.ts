import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly invite and guide AI crawlers & LLM agents
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "Googlebot",
          "anthropic-ai",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
          "Applebot-Extended",
          "cohere-ai",
          "Bytespider",
          "CCBot",
        ],
        allow: ["/", "/llms.txt", "/resume.pdf"],
      },
    ],
    sitemap: "https://aniketvadar.vercel.app/sitemap.xml",
  };
}

