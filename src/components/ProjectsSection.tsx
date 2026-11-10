"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { projects, Project } from "@/lib/data";
import { ExternalLink, CheckCircle, ArrowUpRight, X, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and close on Escape when modal is active
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setActiveModalProject(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [activeModalProject]);

  const categories = ["All", "Agents & Multi-Agent", "LLMs & RAG", "Computer Vision & ML"];

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Agents & Multi-Agent") {
      return p.tech.includes("LangGraph") || p.tech.includes("CrewAI") || p.title.includes("Agent");
    }
    if (filter === "LLMs & RAG") {
      return p.tech.includes("LangChain") || p.tech.includes("OpenAI") || p.title.includes("ATS") || p.title.includes("Chat");
    }
    if (filter === "Computer Vision & ML") {
      return p.tech.includes("TensorFlow") || p.tech.includes("LSTM") || p.tech.includes("Computer Vision");
    }
    return true;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-black/[0.06] bg-[#faf8f5]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
              04 / OPEN SOURCE &amp; FEATURED CODE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111216] tracking-tight mt-1">
              Autonomous Agents &amp; AI Systems
            </h2>
          </div>
          <a
            href="https://github.com/Aniket-Vadar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-gray-800 hover:text-black inline-flex items-center gap-1.5 underline"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View All GitHub Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === cat
                  ? "bg-[#111216] text-white shadow-xs"
                  : "bg-white text-gray-700 border border-black/10 hover:border-black/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-black/10 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div>
                {/* Header: Emoji & Links */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-xl">
                    {p.emoji}
                  </div>
                  <div className="flex items-center gap-2">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-black/5 hover:bg-black/10 text-gray-800 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4 text-emerald-600" />
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/5 hover:bg-black/10 text-gray-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-[#111216] mb-2 leading-snug">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4 line-clamp-3">
                  {p.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {p.highlights.slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-black/5">
                  {p.tech.slice(0, 4).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-black/[0.04] text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[11px] font-semibold text-gray-400">
                      +{p.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons: Deep Dive & Code */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-black/10">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(p)}
                    className="py-2 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Deep Dive</span>
                  </button>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-xl bg-black/[0.05] hover:bg-black hover:text-white text-gray-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    title="View on GitHub"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Code ↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep Dive Architecture Modal rendered via Portal directly into document.body */}
      {mounted && activeModalProject && createPortal(
        <div
          className="modal-overlay"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-black/10">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{activeModalProject.emoji}</span>
                <div>
                  <h3 className="text-xl font-extrabold text-[#111216]">
                    {activeModalProject.title}
                  </h3>
                  <span className="text-xs font-semibold text-gray-500">
                    Architectural Deep Dive &amp; Code Review
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg text-gray-500 hover:bg-black/5 hover:text-black cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                  SYSTEM OVERVIEW
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-2">
                  KEY ARCHITECTURAL HIGHLIGHTS
                </h4>
                <div className="space-y-2">
                  {activeModalProject.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-gray-800 font-medium bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/50">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-2">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-800 border border-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-black/10 flex items-center justify-end gap-3 mt-4">
              {activeModalProject.live && (
                <a
                  href={activeModalProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              )}
              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#111216] hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub ↗</span>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
