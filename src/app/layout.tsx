import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniket Vadar — AI Engineer | Production GenAI & LLM Architectures",
  description:
    "AI Engineer with 2+ years scaling production GenAI & LLM systems on Azure. Immediate Joiner, Open to Relocate. Multimodal asset validation (10K req/day), multi-tenant RAG (90% context recall), and multi-agent systems.",
  keywords: [
    "Aniket Vadar",
    "AI Engineer",
    "Immediate Joiner",
    "Open to Relocate",
    "LangChain",
    "LangGraph",
    "LLM",
    "RAG",
    "Gemini",
    "Azure",
    "FastAPI",
    "Pune",
  ],
  authors: [{ name: "Aniket Vadar" }],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=cabinet-grotesk@400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen text-[#111216] antialiased selection:bg-[#ffd83a] selection:text-[#111216]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
