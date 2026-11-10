"use client";

import React, { useState } from "react";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin, FileText, Check, Copy, ArrowUpRight, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-black/[0.06] bg-[#faf8f5]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
            06 / GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111216] tracking-tight mt-1">
            Let&apos;s Build Your Next Production AI Breakthrough
          </h2>
          <p className="text-sm text-gray-700 mt-2 font-medium">
            Available as an <strong className="text-emerald-700">Immediate Joiner (0 days notice)</strong> and <strong className="text-blue-700">Open to Relocate</strong> (Bangalore, Pune, Mumbai, Hyderabad, Gurgaon &amp; Remote) for AI Engineer &amp; LLM Scaling roles.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Direct Channels (Left) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Email Card with 1-click copy */}
            <div className="glass-card rounded-2xl p-6 border border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold text-gray-500 uppercase tracking-wider block">
                    PRIMARY EMAIL
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-base font-extrabold text-[#111216] hover:text-[#c2361b] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.email, "email")}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-white text-gray-800 border border-black/10 hover:border-black/30 flex items-center gap-1.5 shadow-2xs"
                >
                  {copied === "email" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-gray-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#111216] text-white hover:bg-black flex items-center gap-1.5 shadow-xs"
                >
                  <span>Compose</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6 border border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold text-gray-500 uppercase tracking-wider block">
                    PHONE & WHATSAPP
                  </span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-base font-extrabold text-[#111216] hover:text-[#c2361b] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-white text-gray-800 border border-black/10 hover:border-black/30 flex items-center gap-1.5 shadow-2xs"
                >
                  {copied === "phone" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-gray-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#111216] border border-black/10 hover:border-black flex items-center gap-1.5 shadow-2xs"
                >
                  <span>Call</span>
                </a>
              </div>
            </div>

            {/* Location & Response Time */}
            <div className="glass-card rounded-2xl p-5 border border-black/10 flex items-center justify-between text-xs font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Based in <strong>Pune, India</strong> (Open to Relocation & Remote)</span>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-bold font-mono-custom text-[11px]">
                Typical reply: &lt; 2 hrs
              </span>
            </div>

          </div>

          {/* HR & Recruiter Quick Actions (Right) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-black/10">
              <h3 className="text-base font-extrabold text-[#111216] mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-600" />
                <span>Quick Inquiry for Recruiters</span>
              </h3>
              <p className="text-xs text-gray-600 font-medium mb-5 leading-relaxed">
                Click any subject below to open your default email client with a pre-configured conversation starter:
              </p>

              <div className="space-y-2.5">
                <a
                  href={`mailto:${personalInfo.email}?subject=Interview%20Invitation%20for%20AI%20Engineer%20Role%20-%20Aniket%20Vadar`}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-white hover:bg-black hover:text-white border border-black/10 text-xs font-bold text-gray-800 flex items-center justify-between transition-all"
                >
                  <span>📅 Schedule an Interview / Technical Screen</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}?subject=Production%20GenAI%20Consultation%20Inquiry`}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-white hover:bg-black hover:text-white border border-black/10 text-xs font-bold text-gray-800 flex items-center justify-between transition-all"
                >
                  <span>⚡ Discuss AI Architecture & Cost Optimization</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}?subject=General%20Inquiry%20for%20Aniket%20Vadar`}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-white hover:bg-black hover:text-white border border-black/10 text-xs font-bold text-gray-800 flex items-center justify-between transition-all"
                >
                  <span>💬 General Inquiries & Collaboration</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Direct Resume Download */}
              <div className="mt-5 pt-4 border-t border-black/10">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="keycap-3d-yellow w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 text-gray-900 transition-all"
                >
                  <FileText className="w-4 h-4 text-[#c2361b]" />
                  <span>Download Full PDF Resume</span>
                </a>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 flex items-center justify-center gap-2 text-xs font-bold text-gray-800 shadow-2xs hover:shadow-sm transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 flex items-center justify-center gap-2 text-xs font-bold text-gray-800 shadow-2xs hover:shadow-sm transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
