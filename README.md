# Aniket Vadar — AI Engineer & Production GenAI Portfolio

An end-to-end, minimal, high-performance portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**, crafted specifically to showcase production AI engineering expertise to HR recruiters, technical talent teams, and engineering leaders.

---

## 🚀 Live Sections & Architecture

1. **Navigation Bar (`Navbar.tsx`)**
   - Brand logo and designation tag.
   - Smooth-scrolling links to `#about`, `#experience`, `#skills`, `#projects`, `#clock`, `#contact`.
   - Direct 1-click **Resume Download (PDF)** button.
   - 3D keycap `Let's Talk ↗` button.
   - Fully responsive mobile drawer.

2. **Hero Section (`Hero.tsx`)**
   - **Status Badge**: `AVAILABLE FOR AI ENGINEER / LLM ROLES · PUNE & REMOTE`.
   - **Headline**: *"Hi, I'm Aniket Vadar, an AI Engineer with a curious mind."*
   - **Value Proposition**: 2+ years scaling production GenAI on Azure handling 10K+ req/day, 83% latency cuts, and 80% cost reductions.
   - **Primary CTAs**: Explore Projects, View Resume (PDF), Interactive Dial ⌚.
   - **Direct Profile Links**: LinkedIn, GitHub, Email, Phone, Pune location.

3. **Production Impact Metrics Bar (`MetricsBar.tsx`)**
   - **10K+ req/day**: High-throughput multimodal asset checks on Azure Function Apps.
   - **83% faster**: Latency slashed from 60s to 10s via Gemini prompt caching & parallel execution.
   - **80% cost savings**: Unit cost cut from ₹1.50 to ₹0.30 via lean models & reasoning optimization.
   - **90% Context Recall**: Ragas evaluation score on golden datasets for enterprise RAG.

4. **The Interactive Vibe Clock (`InteractiveClockSection.tsx`)**
   - Chunky octagon wall clock featuring 8 glossy black moulded bars.
   - **10 3D shapes spelling P-O-R-T-F-O-L-I-O ★** spaced 36° apart.
   - **Spring physics**: Hour and minute hands follow real-time or swing to point at letters with short-way angular rotation.
   - **Interactive Dial Dragging**: Dragging the dial rotates hands and opens project cards when passing within 12° of a letter.
   - **Spin the Clock**: Automated sequence stepping through all 10 shapes at 0.9s intervals.
   - **Synchronized Detail Card**: Shows kicker, title, narrative, tech badges, and visit progress squares.

5. **Executive Summary / About Me (`AboutSection.tsx`)**
   - Career summary tailored for recruiters.
   - 4 Core Engineering Pillars: Production Scale AI, Cost & Latency Engineering, Eval-First Philosophy, and Hardened AI Security.
   - Education & current company credentials.

6. **Production Work Experience (`ExperienceSection.tsx`)**
   - **AssetCues Solutions Pvt. Ltd — Artificial Intelligence Engineer (Jan 2025 – Present)**
     - *Asset Validation System* (Multimodal AI, 4K–10K req/day, ZXing fallback, Gemini LLM-as-a-Judge, SigNoz, LangSmith).
     - *Enterprise RAG Chatbot* (OpenAI, Pinecone metadata RBAC for 6 teams, Cohere Rerank, Redis session memory, 90% context recall).
     - *Invoice Data Extraction & Validation* (Zero-OCR Gemini 3.1 Flash Lite, 90% manual processing reduction, prompt caching).
   - **AssetCues Solutions Pvt. Ltd — AI Engineer Intern (Jul 2024 – Jan 2025)**
     - *Template-Based Text-to-SQL Chatbot* (Llama 3.3 on Groq, Redis multi-turn).
     - *Two-Stage AI Audit Pipeline* (Azure serverless, GPT-4o mini, Google Vision API).

7. **Technical Skills Arsenal (`SkillsSection.tsx`)**
   - **Generative AI**: LangChain, LangGraph, RAG, Prompt Engineering, Prompt Caching, Multimodal AI, Multi-Agent Systems.
   - **LLMs & Retrieval**: OpenAI, Gemini (2.0 Flash, 3.1 Flash Lite, 3.1 Pro), Groq (Llama 3.3), Pinecone, Cohere Rerank, Ragas.
   - **Backend & Data**: Python, FastAPI, REST APIs, SQL, PostgreSQL (Supabase, pgvector), SQLAlchemy, SSE, Redis, ZXing.
   - **Evaluation & Observability**: Golden Dataset Testing, LLM-as-a-Judge, CI/CD Evaluation Gates, LangSmith, SigNoz.
   - **Cloud & DevOps**: Azure (Function Apps, VM, Web App), GCP (Vision API), Docker, CI/CD, Git, GitHub.

8. **Open Source & Featured Code (`ProjectsSection.tsx`)**
   Includes all requested GitHub repositories with direct links and live demos:
   - [Socialix – AI Agent Social Media Campaign Planner](https://github.com/Aniket-Vadar/Social-Media-AI-Agent-Team-Backend)
   - [AI Agent Travel Guide & Audio Planner](https://github.com/Aniket-Vadar/AI-Agent-Travel-Guide-Backend)
   - [AIOps Root Cause Analysis Copilot](https://github.com/Aniket-Vadar/AIOps-Root-Cause-Analysis-Copilot)
   - [ATS Resume Builder](https://github.com/Aniket-Vadar/ATS-Resume-Builder)
   - [Fitness Chat Bot](https://github.com/Aniket-Vadar/Fitness-Chat-Bot)
   - [Deepfake Image Detection (LSTM)](https://github.com/Aniket-Vadar/Deepfake-image-detection-LSTM)

9. **Education & Certifications (`EducationCertifications.tsx`)**
   - **B.E. in Information Technology**: Zeal College of Engineering and Research (Savitribai Phule Pune University, 2024).
   - **Developing Secure Software (LFD121)**: Linux Foundation (Oct 2026).
   - **Generative AI for Project Managers**: PMI (Nov 2024).
   - **Data Analysis with Python**: IBM (Mar 2024).

10. **Recruiter & HR Contact Section (`ContactSection.tsx`)**
    - 1-click copy-to-clipboard for email (`aniketvadar18@gmail.com`) and phone (`+91-9284884457`).
    - Quick-starter email subject buttons for recruiters:
      - 📅 Schedule an Interview / Technical Screen
      - ⚡ Discuss AI Architecture & Cost Optimization
      - 💬 General Inquiries & Collaboration
    - Direct PDF Resume download link.
    - Verified contact response time (&lt; 2 hours).

---

## 🛠️ Local Development & Running

### Prerequisites
- Node.js 18+ (tested on Node.js v20.12.1)
- npm or pnpm

### Quick Start
```bash
# Navigate to the portfolio folder
cd B:\Aniket\portfolio

# Install dependencies (if not already installed)
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```
