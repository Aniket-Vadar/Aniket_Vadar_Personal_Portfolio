"use client";

import React from "react";
import { experience } from "@/lib/data";
import { Briefcase, Calendar, MapPin, CheckCircle, Tag, Sparkles } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-black/[0.06] bg-[#faf8f5]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
            02 / PRODUCTION EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111216] tracking-tight mt-1">
            Where I Built & Scaled GenAI in Production
          </h2>
          <p className="text-sm text-gray-600 mt-2 font-medium">
            Real systems deployed on Azure, serving enterprise clients and thousands of daily automated requests.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-10">
          {experience.map((exp, expIdx) => (
            <div
              key={expIdx}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-black/10 relative"
            >
              {/* Company & Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-black/10 gap-3">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 text-[11px] font-extrabold tracking-wide uppercase mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#111216]">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-semibold text-gray-500 gap-1">
                  <div className="flex items-center gap-1.5 font-mono-custom text-gray-700 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Projects Breakdown */}
              <div className="pt-6 space-y-8">
                {exp.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-bold text-[#111216] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span>{proj.name}</span>
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-black/5 text-gray-700 border border-black/10 font-mono-custom">
                        {proj.tag}
                      </span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white text-gray-800 border border-black/10 shadow-2xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

