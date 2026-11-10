import React from "react";
import Preloader from "@/components/Preloader";
import TopClockHero from "@/components/TopClockHero";
import MetricsBar from "@/components/MetricsBar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationCertifications from "@/components/EducationCertifications";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#ffd83a] selection:text-[#111216]">
      {/* Interactive Watchmaker Preloader */}
      <Preloader />

      {/* Background Lemon Backdrop */}
      <div className="lemon-backdrop" aria-hidden="true" />

      {/* Top Design: Navbar + Main Octagon Wall Clock Hero */}
      <TopClockHero />

      {/* Main Resume Content Sections for HR & Hiring Managers */}
      <div className="content-wrapper">
        {/* Impact Metrics Bar with Count-Up Animations */}
        <MetricsBar />

        {/* Executive Summary / About Me */}
        <AboutSection />

        {/* Production Work Experience */}
        <ExperienceSection />

        {/* Technical Skills & Stack */}
        <SkillsSection />

        {/* Open Source Projects (Including User's 6 GitHub Repos) */}
        <ProjectsSection />

        {/* Education & Certifications */}
        <EducationCertifications />

        {/* Recruiter & HR Contact Section */}
        <ContactSection />

        {/* Redesigned Animated Footer */}
        <Footer />
      </div>
    </div>
  );
}
