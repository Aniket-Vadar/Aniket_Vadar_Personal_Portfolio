"use client";

import React from "react";
import { summary, personalInfo } from "@/lib/data";
import { ShieldCheck, Gauge, Cpu, CheckCircle2, Award, BookOpen } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      title: "Production Scale AI",
      desc: "Architected multimodal GenAI on Azure Functions scaling 4K–10K req/day with 99.9% uptime and sub-10s turnaround.",
      icon: Cpu,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      title: "Cost & Latency Engineering",
      desc: "Slashed unit cost by 80% and latency by 83% via Gemini prompt caching, smaller specialized models, and ZXing fallbacks.",
      icon: Gauge,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Eval-First Philosophy",
      desc: "Automated CI/CD release gates powered by Gemini 3.1 Pro LLM-as-a-Judge and golden datasets of ~200 edge cases.",
      icon: CheckCircle2,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Hardened AI Security",
      desc: "SHA-256 deterministic vector IDs, adversarial PDF prompt injection guards, and tenant session memory isolation with Redis.",
      icon: ShieldCheck,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-black/[0.06] bg-[#fffdfa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
              01 / ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111216] tracking-tight mt-1">
              Engineering AI Systems That Deliver Business ROI
            </h2>
          </div>
          <span className="text-xs font-semibold text-gray-500 font-mono-custom">
            PUNE, INDIA · 2+ YEARS PRODUCTION AI
          </span>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story (Left) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-2xl p-6 border border-black/10">
              <h3 className="text-base font-extrabold text-[#111216] mb-3">
                Executive Summary
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium mb-4">
                {summary}
              </p>
              <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs text-gray-600">
                <span className="font-bold text-black">Current Role:</span>
                <span>AI Engineer @ AssetCues</span>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs text-gray-600">
                <span className="font-bold text-black">Education:</span>
                <span>B.E. in Information Technology (2024)</span>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs text-gray-600">
                <span className="font-bold text-black">Focus:</span>
                <span className="font-semibold text-emerald-700">RAG · Multimodal · Multi-Agent</span>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs text-gray-600">
                <span className="font-bold text-black">Availability:</span>
                <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  ⚡ Immediate Joiner (0 Days)
                </span>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs text-gray-600">
                <span className="font-bold text-black">Relocation:</span>
                <span className="font-semibold text-blue-700">
                  📍 Open to Relocate (Pan-India &amp; Remote)
                </span>
              </div>
            </div>

            {/* Quote / Vibe Box */}
            <div className="rounded-2xl p-5 bg-[#ffd83a]/25 border border-[#ffd83a]/70">
              <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                &ldquo;Great AI engineering isn&apos;t just about bigger prompts. It&apos;s about rigorous evaluation, aggressive caching, graceful fallbacks, and observable production performance.&rdquo;
              </p>
              <span className="text-[11px] font-bold text-gray-700 block mt-2">
                — Aniket Vadar
              </span>
            </div>
          </div>

          {/* Pillars Grid (Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-5 border border-black/10 hover:border-black/25 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-9 h-9 rounded-xl ${h.bg} ${h.color} flex items-center justify-center mb-3.5`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[#111216] mb-1.5">
                      {h.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

