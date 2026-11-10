"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";

interface ClockItem {
  index: number | string;
  letter: string;
  angle: number;
  shapeType: "roundedSquare" | "triangleUp" | "circle" | "triangleDown" | "parallelogram" | "wideOval" | "starSquare";
  faceColor: string;
  faceGradColor: string;
  sideColor: string;
  textColor: string;
  fontFamily: string;
  fontWeight: number;
  fontStyle?: string;
  kicker: string;
  title: string;
  text: string;
  tech: string[];
  ctaText: string;
  ctaHref: string;
}

const CLOCK_ITEMS: ClockItem[] = [
  {
    index: 0,
    letter: "P",
    angle: 0,
    shapeType: "roundedSquare",
    faceColor: "#ffd23f",
    faceGradColor: "#ffe580",
    sideColor: "#c99a00",
    textColor: "#111216",
    fontFamily: "'Clash Display', sans-serif",
    fontWeight: 600,
    kicker: "P · HELLO / AI ENGINEER",
    title: "Hi, I'm Aniket.",
    text: "AI Engineer with 2+ years scaling production GenAI & LLM architectures at AssetCues. I turn ideas into resilient systems handling 10K+ req/day.",
    tech: ["Python", "LangChain", "Gemini 3.1", "FastAPI", "Azure Function Apps"],
    ctaText: "Let's connect ↗",
    ctaHref: "mailto:aniketvadar18@gmail.com",
  },
  {
    index: 1,
    letter: "O",
    angle: 36,
    shapeType: "triangleUp",
    faceColor: "#ff5fa8",
    faceGradColor: "#ff8fc4",
    sideColor: "#c42d74",
    textColor: "#ffffff",
    fontFamily: "'Clash Display', sans-serif",
    fontWeight: 600,
    kicker: "O · PROJECT 01 / AZURE GENAI",
    title: "Asset Validation AI",
    text: "Multimodal AI verification system on Azure handling 4K–10K req/day; cut latency by 83% (60s to 10s) and inference cost by 80% with ZXing fallback for 100% barcode accuracy.",
    tech: ["Gemini", "LangChain", "ZXing", "Pinecone", "Azure Serverless", "CI/CD Gates"],
    ctaText: "Discuss Architecture ↗",
    ctaHref: "mailto:aniketvadar18@gmail.com?subject=Asset%20Validation%20System",
  },
  {
    index: 2,
    letter: "R",
    angle: 72,
    shapeType: "circle",
    faceColor: "#3f6bff",
    faceGradColor: "#7093ff",
    sideColor: "#2140b8",
    textColor: "#ffffff",
    fontFamily: "'Instrument Serif', serif",
    fontWeight: 400,
    fontStyle: "italic",
    kicker: "R · PROJECT 02 / ENTERPRISE RAG",
    title: "Enterprise RAG Chatbot",
    text: "Multi-tenant RAG with SHA-256 deterministic vector IDs, Pinecone RBAC filters for 6 teams, Cohere Rerank, Redis session memory & 90% Context Recall evaluated with Ragas.",
    tech: ["OpenAI", "Pinecone", "Cohere Rerank", "Redis", "FastAPI", "Ragas Eval"],
    ctaText: "Inquire About RAG ↗",
    ctaHref: "mailto:aniketvadar18@gmail.com?subject=Enterprise%20RAG%20Chatbot",
  },
  {
    index: 3,
    letter: "T",
    angle: 108,
    shapeType: "roundedSquare",
    faceColor: "#ffb21f",
    faceGradColor: "#ffcc66",
    sideColor: "#c47800",
    textColor: "#111216",
    fontFamily: "'Clash Display', sans-serif",
    fontWeight: 400,
    kicker: "T · PROJECT 03 / VISION-LLM",
    title: "Vision-LLM Invoicing",
    text: "End-to-end zero-OCR invoice parser with Gemini 3.1 Flash Lite classifying POs and dynamic GST/PAN tax fields with 90% less manual processing time and prompt caching.",
    tech: ["Gemini 3.1 Flash Lite", "Prompt Caching", "Pinecone", "Guardrails", "Python"],
    ctaText: "View Pipeline Details ↗",
    ctaHref: "mailto:aniketvadar18@gmail.com?subject=Vision%20LLM%20Invoice%20Extraction",
  },
  {
    index: 4,
    letter: "F",
    angle: 144,
    shapeType: "triangleDown",
    faceColor: "#22a06b",
    faceGradColor: "#3ad493",
    sideColor: "#11683f",
    textColor: "#ffeef5",
    fontFamily: "'Instrument Serif', serif",
    fontWeight: 400,
    fontStyle: "italic",
    kicker: "F · PROJECT 04 / MULTI-AGENT",
    title: "Socialix Multi-Agent",
    text: "LangGraph supervisor coordinating Researcher, Creator, Scheduler & Analytics agents with human-in-the-loop Postgres checkpoints and real-time Server-Sent Events (SSE).",
    tech: ["LangGraph", "Supabase pgvector", "Server-Sent Events", "FastAPI", "Next.js"],
    ctaText: "Explore Socialix on GitHub ↗",
    ctaHref: "https://github.com/Aniket-Vadar/Social-Media-AI-Agent-Team-Backend",
  },
  {
    index: 5,
    letter: "O",
    angle: 180,
    shapeType: "circle",
    faceColor: "#ff6a1f",
    faceGradColor: "#ff9054",
    sideColor: "#b93f00",
    textColor: "#ffffff",
    fontFamily: "'Clash Display', sans-serif",
    fontWeight: 600,
    kicker: "O · PROJECT 05 / OBSERVABILITY",
    title: "Evaluation & CI/CD Gates",
    text: "Automated testing with Gemini 3.1 Pro LLM-as-a-Judge over 200+ golden edge cases, SigNoz distributed tracing for live anomalies, and LangSmith prompt refinement.",
    tech: ["LLM-as-a-Judge", "SigNoz Tracing", "LangSmith", "Golden Datasets", "Docker"],
    ctaText: "Talk AI Observability ↗",
    ctaHref: "mailto:aniketvadar18@gmail.com?subject=LLM%20Evaluation%20Gates",
  },
  {
    index: 6,
    letter: "L",
    angle: 216,
    shapeType: "parallelogram",
    faceColor: "#c2361b",
    faceGradColor: "#e04c2e",
    sideColor: "#7c1a08",
    textColor: "#ffeef5",
    fontFamily: "'Clash Display', sans-serif",
    fontWeight: 600,
    kicker: "L · PROJECT 06 / AGENTIC SYSTEM",
    title: "Agentic Travel Audio Guide",
    text: "Autonomous multi-agent system: Wikipedia API researcher, place-specific storyteller, manager approval gate, and Google AI Voice API audio synthesis deployed to Vercel.",
    tech: ["LangGraph", "CrewAI", "Google AI Voice", "Docker", "Vercel CI/CD"],
    ctaText: "View Travel Guide on GitHub ↗",
    ctaHref: "https://github.com/Aniket-Vadar/AI-Agent-Travel-Guide-Backend",
  },
  {
    index: 7,
    letter: "I",
    angle: 252,
    shapeType: "triangleUp",
    faceColor: "#f2ec3c",
    faceGradColor: "#f7f276",
    sideColor: "#b3a800",
    textColor: "#111216",
    fontFamily: "'Instrument Serif', serif",
    fontWeight: 400,
    fontStyle: "italic",
    kicker: "I · PROJECT 07 / TEXT-TO-SQL",
    title: "Text-to-SQL & Asset Audit",
    text: "Safe parameterized SELECT-only SQL assistant powered by Llama 3.3 on Groq with regex protection + two-stage visual damage detection on Azure comparing image changes over 6 months.",
    tech: ["Groq Llama 3.3", "GPT-4o mini", "Google Vision API", "Redis Multi-Turn"],
    ctaText: "Review SQL Security ↗",
    ctaHref: "mailto:aniketvadar18@gmail.com?subject=Text-to-SQL%20Security",
  },
  {
    index: 8,
    letter: "O",
    angle: 288,
    shapeType: "wideOval",
    faceColor: "#8fd0ff",
    faceGradColor: "#bde3ff",
    sideColor: "#3f8fc9",
    textColor: "#0a1c3d",
    fontFamily: "'Clash Display', sans-serif",
    fontWeight: 600,
    kicker: "O · PROJECT 08 / SECURITY & SPEED",
    title: "Hardened AI Guardrails",
    text: "Production security engineering: adversarial PDF prompt injection guards, multi-tenant session isolation with Redis TTL, and Linux Foundation certified secure software (LFD121).",
    tech: ["Adversarial Defense", "Redis Session TTL", "Supabase RLS", "LFD121 Certified"],
    ctaText: "Discuss AI Security ↗",
    ctaHref: "mailto:aniketvadar18@gmail.com?subject=Production%20AI%20Security",
  },
  {
    index: 9,
    letter: "★",
    angle: 324,
    shapeType: "starSquare",
    faceColor: "#ffa8d8",
    faceGradColor: "#ffcde8",
    sideColor: "#d1679f",
    textColor: "#111216",
    fontFamily: "'Clash Display', sans-serif",
    fontWeight: 700,
    kicker: "★ · CONTACT / HIRE ANIKET",
    title: "Let's Build Together",
    text: "10K+ daily AI requests in prod, 83% latency cuts, enterprise RAG & autonomous multi-agent systems shipped. Immediate joiner, open to relocate for AI Engineer roles.",
    tech: [
      "Immediate Joiner (0 Days)",
      "Open to Relocate",
      "Email: aniketvadar18@gmail.com",
      "Phone: +91-9284884457",
    ],
    ctaText: "Send Email Now ↗",
    ctaHref: "mailto:aniketvadar18@gmail.com?subject=Opportunity%20for%20Aniket%20Vadar",
  },
];

const PROCESS_DATA: ClockItem = {
  index: "process",
  letter: "✦",
  angle: 228,
  shapeType: "roundedSquare",
  faceColor: "#ffd83a",
  faceGradColor: "#ffe580",
  sideColor: "#cba300",
  textColor: "#111216",
  fontFamily: "'Clash Display', sans-serif",
  fontWeight: 700,
  kicker: "✦ · PROCESS / HOW I BUILD",
  title: "Time 2 Build ✦",
  text: "1. Golden dataset evaluation first. 2. Lean multimodal architectures. 3. Aggressive prompt caching & fallback gates. 4. SigNoz observability and CI/CD pre-release scoring.",
  tech: ["Golden Datasets", "Prompt Caching", "Fallback Gates", "CI/CD Thresholds", "SigNoz Tracing"],
  ctaText: "Hire Aniket ↗",
  ctaHref: "mailto:aniketvadar18@gmail.com?subject=Engineering%20Process",
};

// SVG Shape Generator Helper
function renderShapeGeometry(item: ClockItem, isMini = false) {
  const { shapeType, faceColor, faceGradColor, sideColor, textColor, letter, fontFamily, fontWeight, fontStyle } = item;
  const gradId = `top_grad_${item.letter}_${item.index}_${isMini ? "mini" : "full"}`;
  const fontStyleAttr = fontStyle ? { fontStyle } : {};

  let shapeSide: React.ReactNode = null;
  let shapeFace: React.ReactNode = null;
  let textY = 27;
  let textSize = 22;

  if (shapeType === "roundedSquare" || shapeType === "starSquare") {
    shapeSide = <rect x="6" y="6" width="44" height="44" rx="10" fill={sideColor} />;
    shapeFace = <rect x="6" y="6" width="44" height="44" rx="10" fill={`url(#${gradId})`} stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />;
  } else if (shapeType === "triangleUp") {
    shapeSide = <polygon points="28,5 50,47 6,47" fill={sideColor} strokeLinejoin="round" strokeWidth="4" stroke={sideColor} />;
    shapeFace = <polygon points="28,5 50,47 6,47" fill={`url(#${gradId})`} strokeLinejoin="round" strokeWidth="3" stroke={`url(#${gradId})`} />;
    textY = 33;
    textSize = 20;
  } else if (shapeType === "circle") {
    shapeSide = <circle cx="28" cy="27" r="22" fill={sideColor} />;
    shapeFace = <circle cx="28" cy="27" r="22" fill={`url(#${gradId})`} stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />;
  } else if (shapeType === "triangleDown") {
    shapeSide = <polygon points="6,9 50,9 28,51" fill={sideColor} strokeLinejoin="round" strokeWidth="4" stroke={sideColor} />;
    shapeFace = <polygon points="6,9 50,9 28,51" fill={`url(#${gradId})`} strokeLinejoin="round" strokeWidth="3" stroke={`url(#${gradId})`} />;
    textY = 23;
    textSize = 20;
  } else if (shapeType === "parallelogram") {
    shapeSide = <polygon points="16,8 52,8 40,46 4,46" fill={sideColor} strokeLinejoin="round" strokeWidth="3" stroke={sideColor} />;
    shapeFace = <polygon points="16,8 52,8 40,46 4,46" fill={`url(#${gradId})`} strokeLinejoin="round" strokeWidth="2" stroke={`url(#${gradId})`} />;
    textY = 28;
  } else if (shapeType === "wideOval") {
    shapeSide = <ellipse cx="28" cy="27" rx="25" ry="19" fill={sideColor} />;
    shapeFace = <ellipse cx="28" cy="27" rx="25" ry="19" fill={`url(#${gradId})`} stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />;
  }

  return (
    <svg className="shape-svg" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={faceGradColor} />
          <stop offset="100%" stopColor={faceColor} />
        </linearGradient>
      </defs>
      {/* 3D Extrusion Side (Offset 7px Down) */}
      <g className="shape-side-group" transform="translate(0, 7)">
        {shapeSide}
      </g>
      {/* Intermediate Depth Layer */}
      <g className="shape-side-mid" transform="translate(0, 3.5)">
        {shapeSide}
      </g>
      {/* Front Face */}
      <g className="shape-face-group">
        {shapeFace}
        {shapeType === "starSquare" ? (
          <polygon points="28,17 31.5,24 39,25.2 33.6,30.5 35,38 28,34.4 21,38 22.4,30.5 17,25.2 24.5,24" fill={textColor} />
        ) : (
          <text
            x="28"
            y={textY}
            textAnchor="middle"
            dominantBaseline="central"
            fill={textColor}
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            fontSize={textSize}
            {...fontStyleAttr}
            style={{
              letterSpacing: "-0.02em",
              filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.18))",
            }}
          >
            {letter}
          </text>
        )}
      </g>
    </svg>
  );
}

export default function TopClockHero() {
  const [mounted, setMounted] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ClockItem>(CLOCK_ITEMS[0]);
  const [visitedIndices, setVisitedIndices] = useState<Set<number>>(new Set([0]));
  const [isSpinning, setIsSpinning] = useState(false);
  const [isPointingMode, setIsPointingMode] = useState(false);
  const [digitalTime, setDigitalTime] = useState("12:00");
  const [isCardSpringing, setIsCardSpringing] = useState(false);

  // Angles & Physics Refs
  const hourAngleRef = useRef(0);
  const minuteAngleRef = useRef(0);
  const secondAngleRef = useRef(0);

  const targetHourAngleRef = useRef(0);
  const targetMinuteAngleRef = useRef(0);

  const hourVelRef = useRef(0);
  const minuteVelRef = useRef(0);

  const isDraggingRef = useRef(false);
  const clockFaceRef = useRef<HTMLDivElement>(null);
  const clockBodyRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const spinIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 3D Tilt Refs
  const tiltRef = useRef({
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    vx: 0,
    vy: 0,
  });

  // Hydration safety mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Selection handler
  const selectShapeByIndex = useCallback((idx: number) => {
    const item = CLOCK_ITEMS[idx];
    if (!item) return;

    setIsPointingMode(true);
    targetHourAngleRef.current = item.angle;
    targetMinuteAngleRef.current = item.angle;

    setSelectedItem(item);
    setVisitedIndices((prev) => new Set(prev).add(idx));

    setIsCardSpringing(true);
    setTimeout(() => setIsCardSpringing(false), 400);
  }, []);

  // Process handler (Time 2 build)
  const selectProcess = useCallback(() => {
    setIsPointingMode(true);
    if (isSpinning) {
      setIsSpinning(false);
      if (spinIntervalRef.current) clearInterval(spinIntervalRef.current);
    }
    targetHourAngleRef.current = 228;
    targetMinuteAngleRef.current = 228;

    setSelectedItem(PROCESS_DATA);
    setIsCardSpringing(true);
    setTimeout(() => setIsCardSpringing(false), 400);
  }, [isSpinning]);

  // Return to real time
  const returnToRealTime = useCallback(() => {
    setIsPointingMode(false);
    if (isSpinning) {
      setIsSpinning(false);
      if (spinIntervalRef.current) clearInterval(spinIntervalRef.current);
    }
    const now = new Date();
    const hrs = now.getHours() % 12;
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    targetMinuteAngleRef.current = (mins + secs / 60) * 6;
    targetHourAngleRef.current = (hrs + mins / 60) * 30;
  }, [isSpinning]);

  // Spin the clock automation
  const toggleSpin = useCallback(() => {
    if (isSpinning) {
      setIsSpinning(false);
      if (spinIntervalRef.current) clearInterval(spinIntervalRef.current);
    } else {
      setIsSpinning(true);
      let step = 0;
      selectShapeByIndex(step);

      spinIntervalRef.current = setInterval(() => {
        step = (step + 1) % CLOCK_ITEMS.length;
        selectShapeByIndex(step);
        if (step === CLOCK_ITEMS.length - 1) {
          setTimeout(() => {
            setIsSpinning(false);
            if (spinIntervalRef.current) clearInterval(spinIntervalRef.current);
          }, 900);
        }
      }, 900);
    }
  }, [isSpinning, selectShapeByIndex]);

  // Clean up spin on unmount
  useEffect(() => {
    return () => {
      if (spinIntervalRef.current) clearInterval(spinIntervalRef.current);
    };
  }, []);

  // Main Animation Frame loop (Spring inertia physics)
  useEffect(() => {
    if (!mounted) return;

    let lastTickSecond = -1;

    const animate = () => {
      const now = new Date();

      if (!isPointingMode && !isDraggingRef.current) {
        const hrs = now.getHours() % 12;
        const mins = now.getMinutes();
        const secs = now.getSeconds();
        const ms = now.getMilliseconds();

        targetMinuteAngleRef.current = (mins + secs / 60) * 6;
        targetHourAngleRef.current = (hrs + mins / 60) * 30;

        // Quick mechanical tick on second hand
        secondAngleRef.current = secs * 6 + (ms < 150 ? (ms / 150) * 6 : 6);

        // Update digital display
        const displayHrs = String(now.getHours()).padStart(2, "0");
        const displayMins = String(mins).padStart(2, "0");
        const timeStr = `${displayHrs}:${displayMins}`;
        if (secs !== lastTickSecond) {
          lastTickSecond = secs;
          setDigitalTime(timeStr);
        }
      }

      // Spring physics: shortest distance
      const updateSpring = (
        currentRef: React.MutableRefObject<number>,
        targetRef: React.MutableRefObject<number>,
        velRef: React.MutableRefObject<number>
      ) => {
        let diff = (targetRef.current - currentRef.current) % 360;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        velRef.current = (velRef.current + diff * 0.07) * 0.76;
        currentRef.current += velRef.current;
      };

      updateSpring(hourAngleRef, targetHourAngleRef, hourVelRef);
      updateSpring(minuteAngleRef, targetMinuteAngleRef, minuteVelRef);

      // Apply transforms directly to hand DOM nodes
      const handHour = document.getElementById("handHour");
      const handMinute = document.getElementById("handMinute");
      const handSecond = document.getElementById("handSecond");

      if (handHour) handHour.style.transform = `rotate(${hourAngleRef.current}deg)`;
      if (handMinute) handMinute.style.transform = `rotate(${minuteAngleRef.current}deg)`;
      if (handSecond) handSecond.style.transform = `rotate(${secondAngleRef.current}deg)`;

      // Apply 3D tilt spring
      const tilt = tiltRef.current;
      const dx = tilt.targetX - tilt.currentX;
      const dy = tilt.targetY - tilt.currentY;
      tilt.vx = (tilt.vx + dx * 0.06) * 0.75;
      tilt.vy = (tilt.vy + dy * 0.06) * 0.75;
      tilt.currentX += tilt.vx;
      tilt.currentY += tilt.vy;

      if (clockBodyRef.current) {
        const rotY = (tilt.currentX * 7).toFixed(2);
        const rotX = (-tilt.currentY * 7).toFixed(2);
        clockBodyRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [mounted, isPointingMode]);

  // Pointer drag on clock face
  const getPointerAngle = (clientX: number, clientY: number) => {
    if (!clockFaceRef.current) return 0;
    const rect = clockFaceRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;

    let angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    if (angle < 0) angle += 360;
    return angle;
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest(".clock-shape-btn") || (e.target as HTMLElement).closest(".time2build-sticker")) {
      return;
    }
    isDraggingRef.current = true;
    setIsPointingMode(true);
    if (isSpinning) {
      setIsSpinning(false);
      if (spinIntervalRef.current) clearInterval(spinIntervalRef.current);
    }

    const angle = getPointerAngle(e.clientX, e.clientY);
    targetMinuteAngleRef.current = angle;
    targetHourAngleRef.current = angle;

    // Proximity check (within 11°)
    CLOCK_ITEMS.forEach((shape, i) => {
      let diff = Math.abs(angle - shape.angle) % 360;
      if (diff > 180) diff = 360 - diff;
      if (diff <= 11) {
        selectShapeByIndex(i);
      }
    });
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const angle = getPointerAngle(e.clientX, e.clientY);
    targetMinuteAngleRef.current = angle;
    targetHourAngleRef.current = angle;

    CLOCK_ITEMS.forEach((shape, i) => {
      let diff = Math.abs(angle - shape.angle) % 360;
      if (diff > 180) diff = 360 - diff;
      if (diff <= 11) {
        selectShapeByIndex(i);
      }
    });
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // 3D perspective tracking
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    tiltRef.current.targetX = (clientX / innerWidth - 0.5) * 2;
    tiltRef.current.targetY = (clientY / innerHeight - 0.5) * 2;
  };

  // 60 Tick Mark SVG elements with .toFixed(2) for zero hydration drift
  const tickMarks = React.useMemo(() => {
    const ticks = [];
    const cx = 250;
    const cy = 250;
    const rOuter = 238;

    for (let i = 0; i < 60; i++) {
      const angle = (i * 6 * Math.PI) / 180;
      const isHour = i % 5 === 0;
      const rInner = isHour ? 220 : 229;

      const x1 = (cx + rInner * Math.sin(angle)).toFixed(2);
      const y1 = (cy - rInner * Math.cos(angle)).toFixed(2);
      const x2 = (cx + rOuter * Math.sin(angle)).toFixed(2);
      const y2 = (cy - rOuter * Math.cos(angle)).toFixed(2);

      const is12 = i === 0;
      const strokeColor = is12 ? "#e63946" : isHour ? "#111216" : "#a0a5b2";
      const strokeWidth = is12 ? "3.5" : isHour ? "2.5" : "1";

      ticks.push(
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      );
    }
    return ticks;
  }, []);

  return (
    <div onMouseMove={handleMouseMove} className="w-full">
      {/* ==========================================================================
          02 / NAVIGATION BAR (Exact B:\Aniket\index.html Structure & Classes)
          ========================================================================== */}
      <header className="site-header">
        <div className="nav-container">
          {/* Logo Left: Aniket Vadar */}
          <a href="#" className="brand-link" aria-label="Aniket Vadar Home">
            <span className="brand-wordmark">
              Aniket Vadar<span className="brand-dot">.</span>
            </span>
          </a>

          {/* Center Links: Work, About, Process, Contact */}
          <nav className="nav-links" aria-label="Main Navigation">
            <button
              type="button"
              className={`nav-btn ${selectedItem.index === 1 ? "active-nav" : ""}`}
              onClick={() => selectShapeByIndex(1)}
              id="navWork"
            >
              Work
            </button>
            <button
              type="button"
              className={`nav-btn ${selectedItem.index === 0 ? "active-nav" : ""}`}
              onClick={() => selectShapeByIndex(0)}
              id="navAbout"
            >
              About
            </button>
            <button
              type="button"
              className={`nav-btn ${selectedItem.index === "process" ? "active-nav" : ""}`}
              onClick={selectProcess}
              id="navProcess"
            >
              Process
            </button>
            <button
              type="button"
              className={`nav-btn ${selectedItem.index === 9 ? "active-nav" : ""}`}
              onClick={() => selectShapeByIndex(9)}
              id="navContact"
            >
              Contact
            </button>
          </nav>

          {/* Right Keycap Button: Let's Talk */}
          <div className="nav-action">
            <a href="mailto:aniketvadar18@gmail.com" className="keycap-btn btn-white nav-talk-btn">
              <span>Let&apos;s Talk ↗</span>
              <span className="legend">@</span>
            </a>
          </div>
        </div>
      </header>

      {/* ==========================================================================
          MAIN HERO SECTION (Exact B:\Aniket\index.html Top Layout & Three Columns)
          ========================================================================== */}
      <main className="hero-section">
        {/* Top Centred Heading */}
        <div className="hero-heading-wrap">
          <div className="heading-tag">
            <span className="tag-dot" aria-hidden="true" />
            <span>PORTFOLIO · EVERY HOUR IS A PROJECT</span>
          </div>
          <h1 className="main-heading">
            Hi, I&apos;m <span className="accent-name">Aniket,</span> an AI Engineer
            <br />
            with a curious mind.
          </h1>

          {/* Availability & Relocation Status Badges */}
          <div className="status-badges-row">
            <span className="status-badge-chip immediate-chip">
              <span className="chip-indicator" />
              Immediate Joiner
            </span>
            <span className="status-badge-chip relocate-chip">
              <span className="chip-pin">📍</span>
              Open to Relocate
            </span>
          </div>

          <p className="heading-sub-tag">
            PRODUCTION LLMs · MULTIMODAL &amp; MULTI-AGENT ARCHITECTURES · 10K+ REQ/DAY
          </p>
        </div>

        {/* Layout Under Heading: Left Panel | Clock | Right Detail Card */}
        <div className="hero-layout">
          
          {/* LEFT FROSTED PANEL */}
          <aside className="frosted-card left-panel" aria-label="Portfolio Introduction & Controls">
            <p className="panel-intro-text">
              My clock spells <strong>PORTFOLIO</strong>, and every letter is a piece of my work. Click a letter and the hands point to it, or grab the face and spin the time yourself.
            </p>

            {/* Two Keycap Buttons */}
            <div className="left-actions">
              <button
                type="button"
                className="keycap-btn btn-black"
                onClick={toggleSpin}
                id="btnSpinClock"
              >
                <span>{isSpinning ? "Stop" : "Spin the clock"}</span>
                <span className="legend">⏎</span>
              </button>
              <a href="mailto:aniketvadar18@gmail.com" className="keycap-btn btn-white">
                <span>Let&apos;s talk ↗</span>
                <span className="legend">@</span>
              </a>
            </div>

            {/* Dashed Divider */}
            <div className="dashed-divider" />

            {/* Local Time Display & Back to Now */}
            <div className="local-time-card">
              <div className="local-time-header">
                <span className="local-time-title">LOCAL TIME</span>
                <button
                  type="button"
                  className={`back-to-now-btn ${isPointingMode ? "visible" : ""}`}
                  onClick={returnToRealTime}
                  aria-label="Return clock to real time"
                >
                  Back to now
                </button>
              </div>
              <div className="digital-clock" suppressHydrationWarning>
                {digitalTime}
              </div>
              <div className="clock-city-label">
                PUNE, INDIA (GMT+5:30) · IMMEDIATE JOINER · OPEN TO RELOCATE
              </div>
            </div>

            {/* Quick Resume Download for HR */}
            <div className="resume-pill-wrap">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-badge-link"
                title="Open Aniket Vadar's PDF Resume"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span>View Resume (PDF)</span>
              </a>
            </div>
          </aside>

          {/* CENTRE: THE OCTAGON WALL CLOCK */}
          <div className="clock-wrapper" id="clockWrapper">
            {/* Soft Glow Behind & Oval Shadow Below */}
            <div className="clock-glow" aria-hidden="true" />
            <div className="clock-shadow-oval" aria-hidden="true" />

            {/* Clock Root with 3D Tilt Spring */}
            <div
              className="clock-body"
              ref={clockBodyRef}
              role="region"
              aria-label="Interactive Octagon Wall Clock"
            >
              {/* 8 Chunky Moulded Glossy Black Frame Bars */}
              <div className="clock-frame-bars" aria-hidden="true">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((rot) => (
                  <div
                    key={rot}
                    className="frame-bar"
                    style={{ "--rot": `${rot}deg` } as React.CSSProperties}
                  />
                ))}
              </div>

              {/* White Octagon Face */}
              <div
                className="clock-face"
                ref={clockFaceRef}
                tabIndex={0}
                role="application"
                aria-label="Clock face dial. Drag to rotate hands, click letters to view projects."
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
              >
                {/* Dial Markings: SVG Concentric Rings, 60 Minute Ticks, 12 Hour Marks */}
                <svg className="dial-svg" viewBox="0 0 500 500" aria-hidden="true">
                  <circle cx="250" cy="250" r="236" fill="none" stroke="#d5d9e2" strokeWidth="0.8" opacity="0.6" />
                  <circle cx="250" cy="250" r="186" fill="none" stroke="#d5d9e2" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.45" />
                  <circle cx="250" cy="250" r="128" fill="none" stroke="#d5d9e2" strokeWidth="0.6" opacity="0.35" />
                  <circle cx="250" cy="250" r="62" fill="none" stroke="#d5d9e2" strokeWidth="0.5" opacity="0.25" />
                  <g>{tickMarks}</g>
                </svg>

                {/* Dial Printed Typography (Watch Brand Style) */}
                <div className="dial-brand-print" aria-hidden="true">
                  <div className="dial-logo-wrap">
                    <span className="dial-logo-text">ANIKET VADAR</span>
                    <span className="dial-logo-sub">AI ENGINEER · IMMEDIATE JOINER</span>
                  </div>
                  <div className="dial-footer-wrap">
                    <span className="dial-footer-main">PORTFOLIO · 2026</span>
                    <span className="dial-footer-sub">OPEN TO RELOCATE</span>
                  </div>
                </div>

                {/* 10 Chunky 3D Shapes (P O R T F O L I O ★) */}
                <div className="shapes-container">
                  {CLOCK_ITEMS.map((shape) => {
                    const radiusPercent = 38;
                    const angleRad = ((shape.angle - 90) * Math.PI) / 180;
                    const left = `${(50 + radiusPercent * Math.cos(angleRad)).toFixed(2)}%`;
                    const top = `${(50 + radiusPercent * Math.sin(angleRad)).toFixed(2)}%`;
                    const isSelected = selectedItem.index === shape.index;

                    return (
                      <button
                        key={shape.index}
                        type="button"
                        className={`clock-shape-btn ${isSelected ? "selected" : ""}`}
                        style={{ left, top }}
                        onClick={() => selectShapeByIndex(shape.index as number)}
                        aria-label={`Letter ${shape.letter}`}
                      >
                        {/* Spinning dashed active ring */}
                        <svg className="shape-ring" viewBox="0 0 70 70" aria-hidden="true">
                          <circle cx="35" cy="35" r="31" fill="none" stroke="#111216" strokeWidth="2" strokeDasharray="5 5" />
                        </svg>
                        {renderShapeGeometry(shape)}
                      </button>
                    );
                  })}
                </div>

                {/* "Time 2 build ✦" Sticker on Lower-Left */}
                <button
                  type="button"
                  className="time2build-sticker"
                  onClick={selectProcess}
                  title="Click to view Process & How I Build"
                >
                  <span className="sticker-text">Time 2 build ✦</span>
                </button>

                {/* Hands Layer */}
                <div className="hands-layer" aria-hidden="true">
                  {/* Hour Hand */}
                  <div className="clock-hand hand-hour" id="handHour">
                    <div className="hand-shape-hour" />
                  </div>

                  {/* Minute Hand */}
                  <div className="clock-hand hand-minute" id="handMinute">
                    <div className="hand-shape-minute" />
                  </div>

                  {/* Second Hand with Counterweight */}
                  <div className="clock-hand hand-second" id="handSecond">
                    <div className="hand-shape-second">
                      <div className="second-counterweight" />
                    </div>
                  </div>

                  {/* Centre Cap */}
                  <div className="hand-center-cap">
                    <div className="cap-red-dot" />
                  </div>
                </div>

                {/* Diagonal Faint Glass Reflection Overlay */}
                <div className="glass-reflection" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* RIGHT DETAIL CARD */}
          <aside
            className="frosted-card right-panel"
            id="detailCard"
            aria-label="Project Details"
          >
            <div className={`card-inner-content ${isCardSpringing ? "card-spring-in" : ""}`}>
              {/* Top Row: Kicker & Miniature Shape */}
              <div className="card-top-row">
                <span className="card-kicker">{selectedItem.kicker}</span>
                <div className="card-mini-shape" aria-hidden="true">
                  {renderShapeGeometry(selectedItem, true)}
                </div>
              </div>

              {/* Big Title */}
              <h2 className="card-title">{selectedItem.title}</h2>

              {/* Narrative / Description */}
              <p className="card-text">{selectedItem.text}</p>

              {/* Tech Badges */}
              <div className="card-tech-wrap">
                {selectedItem.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Interactive Action Link */}
              <div className="card-action-wrap">
                <a
                  href={selectedItem.ctaHref}
                  target={selectedItem.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={selectedItem.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card-action-link"
                >
                  <span>{selectedItem.ctaText}</span>
                </a>
              </div>

              {/* 10 Visited Progress Squares */}
              <div className="progress-section">
                <div className="progress-label">
                  EXPLORATION PROGRESS ({visitedIndices.size}/10)
                </div>
                <div className="progress-dots" aria-label={`Letters visited: ${visitedIndices.size} of 10`}>
                  {CLOCK_ITEMS.map((item, idx) => {
                    const isVisited = visitedIndices.has(idx);
                    return (
                      <span
                        key={idx}
                        className={`dot-square ${isVisited ? "visited" : ""}`}
                        style={{ "--dot-color": item.faceColor } as React.CSSProperties}
                        title={`${item.letter} · ${item.title}`}
                      />
                    );
                  })}
                </div>

                {/* All Seen Congratulation Message */}
                {visitedIndices.size === 10 && (
                  <div className="all-seen-banner">
                    <span>You&apos;ve seen them all. Now it&apos;s time to talk ↗</span>
                    <a href="mailto:aniketvadar18@gmail.com" className="banner-link">
                      aniketvadar18@gmail.com
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* HR Quick Contacts Row */}
            <div className="card-hr-contacts">
              <a
                href="https://linkedin.com/in/aniket-vadar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
                title="LinkedIn Profile"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Aniket-Vadar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
                title="GitHub Profile"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="tel:+919284884457"
                className="contact-pill"
                title="Call Aniket"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call</span>
              </a>
            </div>
          </aside>

        </div>

        {/* Bottom Hint */}
        <footer className="bottom-hint" aria-hidden="true">
          READ IT CLOCKWISE FROM THE TOP · CLICK A LETTER · DRAG THE FACE
        </footer>

        {/* Quick Section Jump Pills for Recruiters & HR */}
        <nav className="section-jump-bar" aria-label="Quick Resume Sections">
          <a href="#about" className="jump-pill">
            <span>01 About</span>
          </a>
          <a href="#experience" className="jump-pill">
            <span>02 Experience</span>
          </a>
          <a href="#skills" className="jump-pill">
            <span>03 Skills</span>
          </a>
          <a href="#projects" className="jump-pill">
            <span>04 Projects ({projects.length})</span>
          </a>
          <a href="#credentials" className="jump-pill">
            <span>05 Credentials</span>
          </a>
          <a href="#contact" className="jump-pill">
            <span>06 Contact ↗</span>
          </a>
        </nav>
      </main>
    </div>
  );
}

