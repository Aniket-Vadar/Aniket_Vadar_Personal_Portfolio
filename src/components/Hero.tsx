"use client";

import React from "react";
import { personalInfo } from "@/lib/data";
import { ArrowDown, ArrowUpRight, FileText, Mail, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-12 sm:pt-16 sm:pb-20 bg-lemon-gradient">
      {/* Decorative Ambient Radial Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/20 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Available for Hire Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-black/10 shadow-xs mb-5 hover:shadow-sm transition-all">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold text-gray-800 tracking-wide">
            AVAILABLE FOR AI ENGINEER / LLM ROLES · PUNE & REMOTE
          </span>
        </div>

        {/* Spaced Mini Label */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1c1a0c]" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#1c1a0c]/80">
            PORTFOLIO · EVERY HOUR IS A PROJECT
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111216] max-w-4xl leading-[1.05] mb-5 font-clash">
          Hi, I&apos;m{" "}
          <span className="font-serif-custom italic font-normal text-black underline decoration-[#111216] decoration-2 underline-offset-4">
            Aniket
          </span>
          , a vibe builder<br className="hidden sm:inline" />
          {" "}with a curious mind.
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="text-base sm:text-lg text-[#1c1a0c]/85 max-w-2xl font-medium leading-relaxed mb-8">
          2+ years building and scaling production LLM systems on Azure handling{" "}
          <strong className="text-black font-bold">10K+ requests/day</strong>.
          Cut latency by <strong className="text-black font-bold">83%</strong> and inference cost by{" "}
          <strong className="text-black font-bold">80%</strong>. Architect of enterprise RAG, vision-LLMs, and multi-agent fleets.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
          <a
            href="#projects"
            className="keycap-3d-black inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#ffd83a]" />
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="keycap-3d-white inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-[#111216] border border-black/10 transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#c2361b]" />
            <span>View Resume (PDF)</span>
            <ArrowUpRight className="w-4 h-4 text-gray-400" />
          </a>

          <a
            href="#clock"
            className="keycap-3d-yellow inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-[#111216] transition-all cursor-pointer"
          >
            <span>Interactive Dial ⌚</span>
          </a>
        </div>

        {/* Social / Contact Quick Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2 text-xs font-semibold text-gray-600">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.04] hover:bg-black/10 text-gray-800 transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[#0a66c2]" />
            <span>linkedin.com/in/aniket-vadar</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.04] hover:bg-black/10 text-gray-800 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-black" />
            <span>github.com/Aniket-Vadar</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.04] hover:bg-black/10 text-gray-800 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#c2361b]" />
            <span>{personalInfo.email}</span>
          </a>

          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-black/[0.04] text-gray-600">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>{personalInfo.location}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
