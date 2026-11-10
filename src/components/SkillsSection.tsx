"use client";

import React from "react";
import { skills } from "@/lib/data";
import { Cpu, Database, Code, CheckCircle2, Cloud } from "lucide-react";

export default function SkillsSection() {
  const categoryIcons: Record<string, React.ElementType> = {
    "Generative AI": Cpu,
    "LLMs & Retrieval": Database,
    "Backend & Data": Code,
    "Evaluation & Observability": CheckCircle2,
    "Cloud & DevOps": Cloud,
  };

  const categoryDescriptions: Record<string, string> = {
    "Generative AI": "Frameworks and patterns for production AI applications & multi-agent systems.",
    "LLMs & Retrieval": "Foundation models, embedding models, vector search, reranking & evaluation.",
    "Backend & Data": "Robust APIs, database schemas, vector extensions, caching & real-time streaming.",
    "Evaluation & Observability": "Continuous testing, LLM-as-a-Judge gates, distributed tracing & metrics.",
    "Cloud & DevOps": "Serverless architectures, cloud functions, containerization & CI/CD deployment.",
  };

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-black/[0.06] bg-[#fffdfa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
            03 / TECHNICAL ARSENAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111216] tracking-tight mt-1">
            Skills & Production Tech Stack
          </h2>
          <p className="text-sm text-gray-600 mt-2 font-medium">
            Battle-tested technologies used to deliver resilient, cost-efficient, and audited LLM systems.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => {
            const Icon = categoryIcons[category] || Cpu;
            const desc = categoryDescriptions[category] || "";

            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-black/10 hover:border-black/25 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-[#111216]">
                      {category}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-500 mb-4 font-medium leading-relaxed">
                    {desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-gray-800 border border-black/10 hover:border-black/30 hover:bg-[#ffd83a]/20 transition-colors shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

