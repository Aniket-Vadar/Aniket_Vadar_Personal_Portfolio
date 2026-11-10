"use client";

import React, { useState, useEffect } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Calibrating Octagon Clock...");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Fast, satisfying progress tick (finishes in ~1.2s)
    const startTime = Date.now();
    const duration = 1200; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawPct = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawPct);

      if (rawPct < 30) {
        setStatusText("Winding the Octagon Clock...");
      } else if (rawPct < 65) {
        setStatusText("Aligning Vector Embeddings & RAG...");
      } else if (rawPct < 90) {
        setStatusText("Initializing Multi-Agent Fleets...");
      } else {
        setStatusText("Setting Local Time · Ready!");
      }

      if (rawPct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(() => {
            setIsRemoved(true);
          }, 600); // Wait for fade-out transition
        }, 200);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (isRemoved) return null;

  return (
    <div
      className={`preloader-overlay ${isLoaded ? "preloader-exit" : ""}`}
      onClick={() => {
        setIsLoaded(true);
        setTimeout(() => setIsRemoved(true), 400);
      }}
      title="Click to enter immediately"
      role="status"
      aria-live="polite"
    >
      <div className="preloader-content">
        {/* Animated Mini Octagon Watch Dial */}
        <div className="preloader-clock">
          <div className="preloader-octagon">
            {/* 8 mini frame bars */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((rot) => (
              <span
                key={rot}
                className="preloader-bar"
                style={{ transform: `translate(-50%, -50%) rotate(${rot}deg) translateY(-36px)` }}
              />
            ))}
            {/* Rapidly Spinning Watch Hands */}
            <div className="preloader-hand preloader-hand-hour" />
            <div className="preloader-hand preloader-hand-minute" />
            <div className="preloader-hand preloader-hand-second" />
            <div className="preloader-cap" />
          </div>
        </div>

        {/* Brand Name with Instrument Serif Italic Accent */}
        <div className="preloader-brand">
          <span className="preloader-title">Aniket Vadar</span>
          <span className="preloader-subtitle">AI ENGINEER · 2+ YEARS PRODUCTION GenAI</span>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="preloader-bar-wrap">
          <div className="preloader-progress-track">
            <div
              className="preloader-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="preloader-status-row">
            <span className="preloader-status-text">{statusText}</span>
            <span className="preloader-percentage">{progress}%</span>
          </div>
        </div>

        {/* Skip hint */}
        <span className="preloader-hint">CLICK TO SKIP</span>
      </div>
    </div>
  );
}

