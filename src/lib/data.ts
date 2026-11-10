// Portfolio data extracted from Aniket Vadar's resume
// This is the single source of truth for all content on the site

export const personalInfo = {
  name: "Aniket Vadar",
  title: "AI Engineer",
  tagline: "Building production LLM systems that scale",
  email: "aniketvadar18@gmail.com",
  phone: "+91-9284884457",
  linkedin: "https://linkedin.com/in/aniket-vadar",
  github: "https://github.com/Aniket-Vadar",
  location: "Pune, India",
  availability: "Immediate Joiner",
  relocation: "Open to Relocate (Bangalore, Pune, Mumbai, Hyderabad, Gurgaon & Remote)",
  resumeUrl: "/resume.pdf",
};

export const summary =
  "AI Engineer with 2+ years of experience building and deploying production LLM systems end to end using Python, LangChain, and Prompt Engineering. Built and scaled a multimodal Gen AI asset validation system on Azure handling 4K–10K requests/day, cutting inference cost by 80% and latency by 83%. Shipped a role-based, multi-tenant RAG chatbot (90% Context Recall) and a vision-LLM invoice extraction system (90% less manual processing). Strong in LLM evaluation pipelines, observability, and secure AI design.";

export const skills = {
  "Generative AI": [
    "LangChain",
    "LangGraph",
    "RAG",
    "Prompt Engineering",
    "Prompt Caching",
    "Multimodal AI (Gemini)",
    "Multi-Agent Systems",
    "Conversational AI",
  ],
  "LLMs & Retrieval": [
    "OpenAI (GPT)",
    "Gemini (2.0 Flash, 3.1 Flash Lite, 3.1 Pro)",
    "Groq (Llama 3.3)",
    "Pinecone",
    "Cohere Rerank",
    "Ragas",
  ],
  "Backend & Data": [
    "Python",
    "FastAPI",
    "REST APIs",
    "SQL",
    "PostgreSQL",
    "Supabase",
    "pgvector",
    "SQLAlchemy",
    "Redis",
    "SSE",
  ],
  "Evaluation & Observability": [
    "Golden Dataset Testing",
    "LLM-as-a-Judge",
    "CI/CD Evaluation Gates",
    "LangSmith",
    "SigNoz",
  ],
  "Cloud & DevOps": [
    "Azure (Function Apps, VM, Web App)",
    "GCP (Vision API)",
    "Docker",
    "CI/CD",
    "Git",
    "GitHub",
  ],
};

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: "full-time" | "intern";
  projects: {
    name: string;
    tag: string;
    bullets: string[];
    tech: string[];
  }[];
}

export const experience: Experience[] = [
  {
    role: "Artificial Intelligence Engineer",
    company: "AssetCues Solutions Pvt. Ltd",
    location: "Pune, India",
    period: "Jan 2025 – Present",
    type: "full-time",
    projects: [
      {
        name: "Asset Validation System",
        tag: "Production · 4K–10K req/day",
        bullets: [
          "Built a production multimodal system that checks whether user-entered asset details (name, model, barcode) match the asset photo, using Gemini, LangChain, and FastAPI on Azure Function Apps.",
          "Designed a step-by-step validation flow with confidence scores: high-confidence mismatches are auto-corrected from a Pinecone knowledge base, low-confidence cases go to human review.",
          "Cut inference cost by 80% (₹1.50 → ₹0.30) and latency by 83% (60s → 10s) by using a smaller model, prompt caching, parallelizing calls, and reducing image quality.",
          "Fixed barcode accuracy loss by adding a ZXing fallback, reaching 100% exact match on the golden dataset.",
          "Replaced manual testing with a custom evaluation pipeline over ~200 golden samples per scenario.",
          "Added Gemini 3.1 Pro LLM-as-a-Judge to score qualitative outputs before each release with CI/CD gates.",
          "Improved reliability with 3 retries + 30s timeout; used SigNoz traces and LangSmith to refine prompts.",
        ],
        tech: [
          "Python",
          "LangChain",
          "Gemini",
          "Pinecone",
          "ZXing",
          "FastAPI",
          "Azure",
          "Docker",
          "CI/CD",
          "SigNoz",
          "LangSmith",
        ],
      },
      {
        name: "Enterprise RAG Chatbot",
        tag: "Production · Multi-tenant",
        bullets: [
          "Built a production RAG chatbot with LangChain, OpenAI embeddings, Pinecone, and GPT for internal teams and clients using page-level chunking.",
          "Implemented idempotent ingestion with SHA-256 deterministic vector IDs, preventing duplicates on re-upload.",
          "Enforced access control via Pinecone metadata filters on tenant and role for 6 internal teams and client-side tenants.",
          "Improved relevance with dense retrieval + Cohere Rerank on top 10 results; added input guardrails against prompt injection.",
          "Cut perceived latency from 20s to 3–5s with response streaming; added Redis session memory (5-min TTL) per tenant.",
          "Evaluated with Ragas (Faithfulness, Answer Relevancy, Context Recall) achieving 90% Context Recall.",
        ],
        tech: [
          "Python",
          "LangChain",
          "OpenAI",
          "Pinecone",
          "Cohere Rerank",
          "Redis",
          "FastAPI",
          "Azure",
          "Docker",
          "Ragas",
        ],
      },
      {
        name: "Invoice Data Extraction",
        tag: "Production · Vision-LLM",
        bullets: [
          "Built a vision-LLM pipeline using Gemini 3.1 Flash Lite directly on invoice files (no OCR step) to classify invoices by PO type and extract dynamic fields (tax, GST, PAN).",
          "Added automated validation that recalculates item-level tax and totals to flag incorrect amounts, reducing manual processing time by 90%.",
          "Used prompt caching and input guardrails to mitigate prompt injection hidden in adversarial PDF content.",
        ],
        tech: [
          "Python",
          "LangChain",
          "Gemini 3.1 Flash Lite",
          "Pinecone",
          "Prompt Caching",
        ],
      },
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "AssetCues Solutions Pvt. Ltd",
    location: "Pune, India",
    period: "Jul 2024 – Jan 2025",
    type: "intern",
    projects: [
      {
        name: "Text-to-SQL Chatbot & AI Audit Pipeline",
        tag: "Production · Serverless",
        bullets: [
          "Built a template-based text-to-SQL chatbot: Llama 3.3 on Groq classifies intent and picks a predefined query template. LLM never writes SQL; queries are parameterized and SELECT-only with regex blocking.",
          "Used Redis for multi-tenant session isolation and multi-turn history.",
          "Built a two-stage AI audit pipeline comparing baseline and current asset images using Google Vision API and GPT-4o mini on serverless Azure, detecting tampering and damage over 6-month intervals.",
        ],
        tech: [
          "Python",
          "Groq (Llama 3.3)",
          "Google Vision API",
          "GPT-4o mini",
          "Redis",
          "Docker",
          "Azure",
          "CI/CD",
        ],
      },
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering (B.E.) in Information Technology",
  institution:
    "Zeal College of Engineering and Research (Savitribai Phule Pune University)",
  location: "Pune, India",
  graduated: "2024",
};

export const certifications = [
  {
    name: "Developing Secure Software (LFD121)",
    issuer: "Linux Foundation",
    date: "Oct 2026",
  },
  {
    name: "Generative AI for Project Managers",
    issuer: "PMI",
    date: "Nov 2024",
  },
  {
    name: "Data Analysis with Python",
    issuer: "IBM",
    date: "Mar 2024",
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  highlights: string[];
  emoji: string;
}

export const projects: Project[] = [
  {
    title: "Socialix – AI Agent Social Media Planner",
    description:
      "Multi-agent social media campaign planner with a LangGraph supervisor coordinating Researcher, Creator, Scheduler, and Analytics agents.",
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Gemini",
      "Supabase",
      "pgvector",
      "SSE",
      "Next.js",
    ],
    github:
      "https://github.com/Aniket-Vadar/Social-Media-AI-Agent-Team-Backend",
    live: "https://socialmedia-ashen-iota.vercel.app",
    highlights: [
      "Human-in-the-loop approval with Postgres checkpointing",
      "Real-time agent progress via Server-Sent Events",
      "Multi-tenant with workspace-level row-level security",
    ],
    emoji: "📱",
  },
  {
    title: "AI Agent Travel Audio Guide",
    description:
      "Multi-agent travel planner: research agent gathers data from Wikipedia API, writer creates stories, manager reviews, planner generates itinerary.",
    tech: [
      "Python",
      "LangGraph",
      "CrewAI",
      "Google AI Voice",
      "Docker",
      "Vercel",
    ],
    github: "https://github.com/Aniket-Vadar/AI-Agent-Travel-Guide-Backend",
    live: "https://ai-agent-travel-planner-three.vercel.app",
    highlights: [
      "Audio synthesis with Google AI Voice API",
      "Multi-agent orchestration with LangGraph + CrewAI",
      "Deployed to Vercel with CI/CD and Docker",
    ],
    emoji: "✈️",
  },
  {
    title: "AIOps Root Cause Analysis Copilot",
    description:
      "An intelligent AIOps copilot that automates root cause analysis of production incidents using LLMs and observability data.",
    tech: ["Python", "LangChain", "OpenAI", "FastAPI"],
    github:
      "https://github.com/Aniket-Vadar/AIOps-Root-Cause-Analysis-Copilot",
    highlights: [
      "Automated root cause analysis for production incidents",
      "Integrates with observability platforms",
      "LLM-powered intelligent triage and resolution",
    ],
    emoji: "🔍",
  },
  {
    title: "ATS Resume Builder",
    description:
      "AI-powered resume builder that creates ATS-friendly resumes tailored to specific job descriptions.",
    tech: ["Python", "Streamlit", "OpenAI", "LangChain"],
    github: "https://github.com/Aniket-Vadar/ATS-Resume-Builder",
    highlights: [
      "ATS-optimized resume generation",
      "Job description analysis and keyword matching",
      "Multiple resume template support",
    ],
    emoji: "📄",
  },
  {
    title: "Fitness Chat Bot",
    description:
      "Conversational AI fitness assistant providing personalized workout plans and nutrition advice.",
    tech: ["Python", "LangChain", "Streamlit"],
    github: "https://github.com/Aniket-Vadar/Fitness-Chat-Bot",
    highlights: [
      "Personalized fitness recommendations",
      "Conversational AI with memory",
      "Nutrition and workout planning",
    ],
    emoji: "💪",
  },
  {
    title: "Deepfake Image Detection (LSTM)",
    description:
      "Deep learning model using LSTM networks to detect deepfake images with high accuracy.",
    tech: ["Python", "TensorFlow", "LSTM", "Computer Vision"],
    github: "https://github.com/Aniket-Vadar/Deepfake-image-detection-LSTM",
    highlights: [
      "LSTM-based deepfake detection pipeline",
      "High accuracy on benchmark datasets",
      "Real-time image analysis capability",
    ],
    emoji: "🛡️",
  },
];

export const metrics = [
  { value: "10K+", label: "Daily AI Requests" },
  { value: "80%", label: "Cost Reduction" },
  { value: "83%", label: "Latency Cut" },
  { value: "90%", label: "Context Recall" },
];

