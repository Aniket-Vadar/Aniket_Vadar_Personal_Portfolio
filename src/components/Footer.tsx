"use client";

import React from "react";
import { ArrowUp, Mail, FileText, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tickerItems = [
    "⚡ Immediate Joiner",
    "📍 Open to Relocate",
    "AI Engineer",
    "Production LLMs",
    "10K+ Req/Day",
    "83% Latency Cut",
    "80% Cost Reduction",
    "Multi-Agent Systems",
    "Enterprise RAG (90% Recall)",
    "LangGraph & Gemini",
    "Azure Cloud Serverless",
    "CI/CD Evaluation Gates",
    "Pune, India",
  ];

  return (
    <footer className="site-footer" id="siteFooter">
      {/* Subtle gold ambient glow */}
      <div className="footer-ambient-glow" aria-hidden="true" />

      {/* Animated Infinite Ticker / Marquee Band */}
      <div className="footer-ticker-bar" aria-hidden="true">
        <div className="footer-ticker-track">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <span key={idx} className="ticker-item">
              <span>{item}</span>
              <span className="ticker-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="footer-container">
        {/* Top Callout Box: Headline, Live Pulse Beacon & Keycap Back-to-Top Button */}
        <div className="footer-callout">
          <div className="space-y-3">
            <div className="pulse-badge">
              <span className="pulse-dot" />
              <span>⚡ Immediate Joiner · 📍 Open to Relocate · Available for AI Engineer Roles</span>
            </div>
            <h2 className="footer-heading">
              Let&apos;s build something <span className="italic-word">curious</span> together.
            </h2>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="keycap-btn btn-white footer-top-btn"
            title="Return smoothly to top"
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
            <span className="legend">↑</span>
          </button>
        </div>

        {/* Mid Grid: Brand, Navigation Matrix & Direct Connect */}
        <div className="footer-mid-grid">
          {/* Brand Info */}
          <div className="footer-brand-wrap">
            <div className="footer-brand-title">
              <div className="footer-avatar" aria-hidden="true">
                AV
              </div>
              <span>Aniket Vadar</span>
            </div>
            <p className="footer-brand-desc">
              AI Engineer with 2+ years scaling production GenAI, multimodal asset verification, and multi-agent fleets on Azure.
            </p>
            <div style={{ marginTop: "4px" }}>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-btn"
                style={{ width: "fit-content" }}
              >
                <Mail className="w-4 h-4 text-[#ffd83a]" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-wrap">
            <span className="footer-column-label">PORTFOLIO SITEMAP</span>
            <div className="footer-nav-pills">
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="footer-nav-link">
                <span>00 Clock Dial</span>
              </a>
              <a href="#about" className="footer-nav-link">
                <span>01 About Me</span>
              </a>
              <a href="#experience" className="footer-nav-link">
                <span>02 Experience</span>
              </a>
              <a href="#skills" className="footer-nav-link">
                <span>03 Skills Stack</span>
              </a>
              <a href="#projects" className="footer-nav-link">
                <span>04 Projects (6)</span>
              </a>
              <a href="#credentials" className="footer-nav-link">
                <span>05 Credentials</span>
              </a>
              <a href="#contact" className="footer-nav-link">
                <span>06 Contact ↗</span>
              </a>
            </div>
          </div>

          {/* Social Profiles & Resume */}
          <div className="footer-social-wrap">
            <span className="footer-column-label">CONNECT &amp; VERIFY</span>
            <div className="footer-social-pills">
              <a
                href="https://linkedin.com/in/aniket-vadar"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <LinkedinIcon className="w-4 h-4 text-[#38bdf8]" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 opacity-60" style={{ marginLeft: "auto" }} />
              </a>

              <a
                href="https://github.com/Aniket-Vadar"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <GithubIcon className="w-4 h-4 text-[#ffd83a]" />
                <span>GitHub Repositories</span>
                <ExternalLink className="w-3 h-3 opacity-60" style={{ marginLeft: "auto" }} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <FileText className="w-4 h-4 text-[#34d399]" />
                <span>Download Resume (PDF)</span>
                <ExternalLink className="w-3 h-3 opacity-60" style={{ marginLeft: "auto" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Badge */}
        <div className="footer-bottom-row">
          <p>
            © {new Date().getFullYear()} Aniket Vadar
          </p>
          <p>
            <span className="footer-star-spin">★</span>
            <span>Made with curiosity in Pune, India · Active Production Runtime</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
