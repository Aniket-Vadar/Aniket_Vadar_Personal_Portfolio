"use client";

import React, { useState } from "react";
import { personalInfo } from "@/lib/data";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Clock Dial", href: "#clock" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#fffdfa]/85 border-b border-black/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-xl bg-[#ffd83a] flex items-center justify-center font-bold text-lg text-[#111216] shadow-sm border border-black/10 group-hover:scale-105 transition-transform">
            AV
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-[#111216] leading-none">
              aniket<span className="text-[#c2361b]">.</span>
            </span>
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
              AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-black/[0.04] p-1.5 rounded-full border border-black/[0.06]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-700 hover:text-black hover:bg-white hover:shadow-xs transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions Right */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white text-gray-900 border border-black/10 hover:border-black/25 shadow-xs hover:shadow-sm transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-[#c2361b]" />
            <span>Resume</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="keycap-3d-black inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-black/5"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-black/10 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-black/5"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-black/10 flex flex-col gap-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-gray-100 text-gray-900"
            >
              <FileText className="w-4 h-4 text-[#c2361b]" />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-[#111216] text-white"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
