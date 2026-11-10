"use client";

import React, { useState, useEffect } from "react";
import { Zap, TrendingDown, DollarSign, Target } from "lucide-react";

export default function MetricsBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    {
      targetNumber: 10,
      suffix: "K+",
      unit: "req/day",
      label: "Production Scale",
      sub: "Multimodal Azure Function Apps handling high-throughput asset checks",
      icon: Zap,
      accent: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      targetNumber: 83,
      suffix: "%",
      unit: "faster",
      label: "Latency Reduction",
      sub: "Cut response time from 60s down to 10s with prompt caching & parallel execution",
      icon: TrendingDown,
      accent: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      targetNumber: 80,
      suffix: "%",
      unit: "savings",
      label: "Inference Cost Cut",
      sub: "Slashed unit cost from ₹1.50 to ₹0.30 with lean models & reasoning optimization",
      icon: DollarSign,
      accent: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      targetNumber: 90,
      suffix: "%",
      unit: "score",
      label: "Context Recall",
      sub: "Evaluated on golden datasets with Ragas (Faithfulness & Answer Relevancy)",
      icon: Target,
      accent: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="metrics">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-black/[0.08] flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  {stat.label}
                </span>
                <div className={`p-2 rounded-xl ${stat.bg} ${stat.accent} transition-transform duration-300 hover:scale-110`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#111216] tracking-tight font-variant-numeric tabular-nums">
                    <CounterValue target={stat.targetNumber} suffix={stat.suffix} active={mounted} />
                  </span>
                  <span className="text-xs font-bold text-gray-500 uppercase">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  {stat.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CounterValue({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1200; // ms
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);
      setVal(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setVal(target);
      }
    };

    requestAnimationFrame(animate);
  }, [active, target]);

  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}
