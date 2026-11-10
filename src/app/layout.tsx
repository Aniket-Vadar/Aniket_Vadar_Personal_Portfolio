import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://aniketvadar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aniket Vadar — AI Engineer | Production GenAI, LLMs & Multi-Agent Systems",
    template: "%s | Aniket Vadar",
  },
  description:
    "AI Engineer with 2+ years scaling production GenAI & LLM architectures on Azure (10K+ req/day, 83% latency cuts, 80% cost savings). Architect of enterprise multi-tenant RAG (90% context recall) & multi-agent fleets. Immediate Joiner, Open to Relocate.",
  keywords: [
    "Aniket Vadar",
    "AI Engineer",
    "Artificial Intelligence Engineer",
    "GenAI Engineer",
    "LLM Engineer",
    "Production LLMs",
    "Retrieval-Augmented Generation",
    "Enterprise RAG",
    "LangChain",
    "LangGraph",
    "Multi-Agent Systems",
    "Gemini 3.1 Pro",
    "Gemini 2.0 Flash",
    "Gemini 3.1 Flash Lite",
    "OpenAI GPT-4o",
    "Prompt Engineering",
    "Prompt Caching",
    "Pinecone Vector Database",
    "Supabase pgvector",
    "Azure Function Apps",
    "Azure Cloud Serverless",
    "FastAPI Python",
    "Ragas Evaluation",
    "LLM-as-a-Judge",
    "SigNoz Distributed Tracing",
    "LangSmith",
    "Zero-OCR Invoice Extraction",
    "Multimodal Asset Validation",
    "AIOps Root Cause Analysis",
    "Pune AI Engineer",
    "India AI Engineer",
    "Immediate Joiner AI Engineer",
    "Open to Relocate AI Engineer",
  ],
  authors: [{ name: "Aniket Vadar", url: "https://github.com/Aniket-Vadar" }],
  creator: "Aniket Vadar",
  publisher: "Aniket Vadar",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Aniket Vadar — AI Engineer | Production GenAI & Multi-Agent Systems",
    description:
      "2+ years scaling production LLM systems on Azure handling 10K+ req/day. Enterprise RAG (90% recall), multimodal validation, and multi-agent systems. Immediate Joiner, Open to Relocate.",
    url: siteUrl,
    siteName: "Aniket Vadar Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Aniket Vadar — AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Vadar — AI Engineer | Production GenAI & LLMs",
    description:
      "Production AI Engineer: 10K+ req/day on Azure, 83% latency cut, 80% cost reduction, 90% context recall. Immediate Joiner, Open to Relocate.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  category: "technology",
};

// Rich JSON-LD Structured Data for Google, Bing, ChatGPT, and Gemini Knowledge Graphs
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Aniket Vadar",
      alternateName: ["Aniket", "Aniket Vadar AI"],
      jobTitle: "Artificial Intelligence Engineer",
      description:
        "AI Engineer with 2+ years of experience scaling production GenAI and LLM architectures on Azure handling 10K+ requests/day. Specialized in enterprise multi-tenant RAG, multimodal verification, and autonomous multi-agent systems.",
      url: siteUrl,
      sameAs: [
        "https://github.com/Aniket-Vadar",
        "https://linkedin.com/in/aniket-vadar",
      ],
      email: "mailto:aniketvadar18@gmail.com",
      telephone: "+91-9284884457",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "India",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Zeal College of Engineering and Research, Savitribai Phule Pune University",
      },
      worksFor: {
        "@type": "Organization",
        name: "AssetCues Solutions Pvt. Ltd",
      },
      knowsAbout: [
        "Artificial Intelligence",
        "Large Language Models (LLMs)",
        "Generative AI",
        "Retrieval-Augmented Generation (RAG)",
        "LangChain",
        "LangGraph",
        "Multi-Agent Systems",
        "Prompt Engineering",
        "Prompt Caching",
        "Vector Databases",
        "Pinecone",
        "FastAPI",
        "Python",
        "Microsoft Azure",
        "Google Gemini API",
        "OpenAI GPT-4o",
        "Ragas LLM Evaluation",
        "SigNoz Distributed Tracing",
        "Docker Containerization",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "AI Engineer",
        occupationalCategory: "15-1252.00",
        skills:
          "Python, LangChain, LangGraph, RAG, Prompt Engineering, Prompt Caching, Gemini, OpenAI, Pinecone, Azure, FastAPI, Docker, CI/CD",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Aniket Vadar — AI Engineer Portfolio",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Aniket Vadar — AI Engineer",
        description:
          "Official interactive portfolio and resume of Aniket Vadar, AI Engineer specializing in production LLMs, RAG, and multi-agent systems.",
      },
      about: { "@id": `${siteUrl}/#person` },
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
  ],
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
        {/* JSON-LD Schema for Google, ChatGPT, Gemini, and AI Agents */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
