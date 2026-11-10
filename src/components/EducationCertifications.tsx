"use client";

import React from "react";
import { education, certifications } from "@/lib/data";
import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";

export default function EducationCertifications() {
  return (
    <section id="credentials" className="py-16 sm:py-24 border-t border-black/[0.06] bg-[#fffdfa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
            05 / CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111216] tracking-tight mt-1">
            Education & Industry Certifications
          </h2>
          <p className="text-sm text-gray-600 mt-2 font-medium">
            Academic grounding in Information Technology with specialized certifications in security and GenAI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-black/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center mb-5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500">
                UNDERGRADUATE DEGREE
              </span>
              <h3 className="text-xl font-extrabold text-[#111216] mt-1 mb-2">
                {education.degree}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                {education.institution}
              </p>
            </div>

            <div className="pt-6 border-t border-black/10 mt-6 flex items-center justify-between text-xs text-gray-600 font-mono-custom">
              <span className="font-bold text-black">{education.location}</span>
              <span className="px-2.5 py-1 rounded-md bg-black/5 font-bold">Graduated {education.graduated}</span>
            </div>
          </div>

          {/* Certifications Cards */}
          <div className="lg:col-span-7 space-y-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-black/10 flex items-center justify-between hover:border-black/25 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#111216]">
                      {cert.name}
                    </h4>
                    <span className="text-xs text-gray-600 font-medium">
                      Issued by <strong className="text-black">{cert.issuer}</strong>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/5 text-xs font-mono-custom font-bold text-gray-700 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}

            {/* Note for Recruiters */}
            <div className="rounded-2xl p-4 bg-emerald-50/70 border border-emerald-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
              <p className="text-xs text-emerald-900 font-medium">
                Certified in <strong>Developing Secure Software (LFD121)</strong> by the Linux Foundation — bringing security by design to production AI applications.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

