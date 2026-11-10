"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, RotateCw, Clock, Sparkles } from "lucide-react";

interface ClockShape {
  index: number;
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

const CLOCK_ITEMS: ClockShape[] = [
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
    text: "10K+ daily AI requests in prod, 83% latency cuts, enterprise RAG & autonomous multi-agent systems shipped. Open to AI Engineer roles and high-impact GenAI collaborations.",
    tech: ["Email: aniketvadar18@gmail.com", "Phone: +91-9284884457", "Pune, India", "Active to Join"],
    ctaText: "Send Email Now ↗",
    ctaHref: "mailto:aniketvadar18@gmail.com?subject=Opportunity%20for%20Aniket%20Vadar",
  },
];

function Svg3DShape({ item }: { item: ClockShape }) {
  const { shapeType, faceColor, faceGradColor, sideColor, textColor, letter, fontFamily, fontWeight, fontStyle } = item;
  const gradId = `clk_grad_${item.index}_${item.letter}`;

  let shapeSide = null;
  let shapeFace = null;
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
    <svg className="w-full h-full overflow-visible drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]" viewBox="0 0 56 64">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={faceGradColor} />
          <stop offset="100%" stopColor={faceColor} />
        </linearGradient>
      </defs>
      {/* 3D Extrusion Side (Offset 6px Down) */}
      <g transform="translate(0, 6)">{shapeSide}</g>
      <g transform="translate(0, 3)">{shapeSide}</g>
      {/* Front Face */}
      <g>
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
            fontStyle={fontStyle || "normal"}
            style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.2))" }}
          >
            {letter}
          </text>
        )}
      </g>
    </svg>
  );
}

export default function InteractiveClockSection() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));
  const [digitalTime, setDigitalTime] = useState<string>("12:00");
  const [isPointingMode, setIsPointingMode] = useState<boolean>(true);

  // References for animation
  const handHourRef = useRef<HTMLDivElement>(null);
  const handMinuteRef = useRef<HTMLDivElement>(null);
  const handSecondRef = useRef<HTMLDivElement>(null);
  const clockBodyRef = useRef<HTMLDivElement>(null);
  const clockFaceRef = useRef<HTMLDivElement>(null);

  // State refs for animation loop
  const currentAngles = useRef({ hour: 0, minute: 0 });
  const targetAngles = useRef({ hour: 0, minute: 0 });
  const velocities = useRef({ hour: 0, minute: 0 });
  const tiltRef = useRef({ targetX: 0, targetY: 0, posX: 0, posY: 0, vx: 0, vy: 0 });
  const isDraggingRef = useRef(false);

  // Active shape
  const activeShape = CLOCK_ITEMS[selectedIdx] || CLOCK_ITEMS[0];

  // Helper for shortest angle diff (-180 to 180)
  const getShortAngleDiff = (target: number, current: number) => {
    let diff = (target - current) % 360;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    return diff;
  };

  // Select shape function
  const selectShape = useCallback((idx: number) => {
    setSelectedIdx(idx);
    setIsPointingMode(true);
    setVisited((prev) => new Set([...prev, idx]));
    const targetAngle = CLOCK_ITEMS[idx].angle;
    targetAngles.current.hour = targetAngle;
    targetAngles.current.minute = targetAngle;
  }, []);

  // Update digital time on client mount
  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setDigitalTime(
        `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Reset to real time
  const returnToRealTime = useCallback(() => {
    setIsPointingMode(false);
    setIsSpinning(false);
  }, []);

  // Spin the clock automation
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isSpinning) {
      let current = 0;
      interval = setInterval(() => {
        selectShape(current);
        current = (current + 1) % CLOCK_ITEMS.length;
        if (current === 0) {
          setIsSpinning(false);
        }
      }, 900);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isSpinning, selectShape]);

  // Main animation frame for Spring Physics
  useEffect(() => {
    let animId: number;

    const animate = () => {
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds() + now.getMilliseconds() / 1000;

      // Real time targets
      if (!isPointingMode) {
        targetAngles.current.hour = (hours + minutes / 60 + seconds / 3600) * 30;
        targetAngles.current.minute = (minutes + seconds / 60) * 6;
      }

      // Spring physics for hands
      const hourDiff = getShortAngleDiff(targetAngles.current.hour, currentAngles.current.hour);
      const minDiff = getShortAngleDiff(targetAngles.current.minute, currentAngles.current.minute);

      velocities.current.hour = (velocities.current.hour + hourDiff * 0.07) * 0.76;
      currentAngles.current.hour += velocities.current.hour;

      velocities.current.minute = (velocities.current.minute + minDiff * 0.07) * 0.76;
      currentAngles.current.minute += velocities.current.minute;

      if (handHourRef.current) {
        handHourRef.current.style.transform = `rotate(${currentAngles.current.hour}deg)`;
      }
      if (handMinuteRef.current) {
        handMinuteRef.current.style.transform = `rotate(${currentAngles.current.minute}deg)`;
      }
      if (handSecondRef.current) {
        handSecondRef.current.style.transform = `rotate(${now.getSeconds() * 6}deg)`;
      }

      // 3D Tilt Spring
      const t = tiltRef.current;
      t.vx = (t.vx + (t.targetX - t.posX) * 0.045) * 0.86;
      t.posX += t.vx;
      t.vy = (t.vy + (t.targetY - t.posY) * 0.045) * 0.86;
      t.posY += t.vy;

      if (clockBodyRef.current) {
        const rotY = t.posX * 8;
        const rotX = 3 - t.posY * 5;
        const rotZ = t.posX * 1;
        clockBodyRef.current.style.transform = `perspective(1000px) rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg) rotateZ(${rotZ.toFixed(2)}deg)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isPointingMode]);

  // Pointer drag on dial
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    isDraggingRef.current = true;
    setIsPointingMode(true);
    setIsSpinning(false);
    updatePointerAngle(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    updatePointerAngle(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const updatePointerAngle = (clientX: number, clientY: number) => {
    if (!clockFaceRef.current) return;
    const rect = clockFaceRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    let angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    if (angle < 0) angle += 360;

    targetAngles.current.minute = angle;
    targetAngles.current.hour = angle;

    // Check proximity to letters (within 12°)
    CLOCK_ITEMS.forEach((shape) => {
      let diff = Math.abs(angle - shape.angle) % 360;
      if (diff > 180) diff = 360 - diff;
      if (diff <= 12) {
        selectShape(shape.index);
      }
    });
  };

  // Mouse move for 3D tilt
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    tiltRef.current.targetX = (clientX / innerWidth - 0.5) * 2;
    tiltRef.current.targetY = (clientY / innerHeight - 0.5) * 2;
  };

  return (
    <section
      id="clock"
      onMouseMove={handleMouseMove}
      className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-[#fffdfa] via-[#fff8dc]/50 to-[#fffdfa]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd83a]/30 border border-[#ffd83a] text-xs font-bold text-gray-900 mb-3">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>PORTFOLIO DIAL · EVERY HOUR IS A PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111216] tracking-tight">
            The Interactive Vibe Clock
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 font-medium">
            Spells <strong className="text-black">P-O-R-T-F-O-L-I-O ★</strong> clockwise. Click any letter to swing the hands and explore that production milestone.
          </p>
        </div>

        {/* Clock + Two Panels Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(320px,560px)_340px] items-center justify-center gap-8">
          
          {/* LEFT PANEL */}
          <div className="glass-card rounded-3xl p-6 flex flex-col justify-between space-y-6 order-2 lg:order-1 border border-black/10">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 block mb-2">
                HOW TO EXPLORE
              </span>
              <p className="text-sm text-gray-800 leading-relaxed font-medium">
                My clock spells <strong>PORTFOLIO</strong>, and every letter represents a production LLM system I shipped. Click a shape, or drag the face to steer the time.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => setIsSpinning(!isSpinning)}
                className="keycap-3d-black w-full py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-between cursor-pointer"
              >
                <span>{isSpinning ? "Stop Spinning" : "Spin the clock"}</span>
                <span className="text-gray-400 font-mono text-[10px]">⏎</span>
              </button>

              <a
                href="mailto:aniketvadar18@gmail.com"
                className="keycap-3d-white w-full py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-between text-gray-900 border border-black/10"
              >
                <span>Let&apos;s talk ↗</span>
                <span className="text-gray-400 font-mono text-[10px]">@</span>
              </a>
            </div>

            {/* Local Time Display */}
            <div className="pt-4 border-t border-dashed border-gray-300">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  LOCAL RUNTIME
                </span>
                <button
                  type="button"
                  onClick={returnToRealTime}
                  className="text-[11px] font-bold text-[#c2361b] hover:underline cursor-pointer"
                >
                  Back to now
                </button>
              </div>
              <div
                className="text-3xl font-extrabold text-[#111216] tracking-tight font-mono-custom"
                suppressHydrationWarning
              >
                {digitalTime}
              </div>
              <span className="text-[9.5px] font-semibold text-gray-500 block mt-0.5">
                PUNE, INDIA (GMT+5:30) · 10K+ DAILY REQS
              </span>
            </div>
          </div>

          {/* CENTRE: THE OCTAGON WALL CLOCK */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div
              className="relative w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] select-none flex items-center justify-center"
              style={{ perspective: "1200px" }}
            >
              {/* Glow Behind */}
              <div className="absolute inset-[-10%] rounded-full bg-radial from-amber-200/50 via-yellow-100/30 to-transparent blur-2xl pointer-events-none -z-10" />

              {/* Clock Body with 3D Tilt */}
              <div
                ref={clockBodyRef}
                className="relative w-full h-full flex items-center justify-center transition-transform duration-75"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 8 Glossy Black Moulded Frame Bars */}
                <div className="absolute inset-0 pointer-events-none z-30">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((rot) => (
                    <div
                      key={rot}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      style={{
                        width: "37.5%",
                        height: "6.8%",
                        background:
                          "linear-gradient(180deg, #5a5c64 0%, #26272d 30%, #111216 70%, #000000 100%)",
                        boxShadow:
                          "0 8px 18px rgba(0,0,0,0.5), inset 0 1.5px 1px rgba(255,255,255,0.4), inset 0 -2px 3px rgba(0,0,0,0.8)",
                        transform: `translate(-50%, -50%) rotate(${rot}deg) translateY(-670%)`,
                      }}
                    />
                  ))}
                </div>

                {/* Octagon Clock Face */}
                <div
                  ref={clockFaceRef}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  className="relative w-[92%] h-[92%] cursor-grab active:cursor-grabbing overflow-hidden shadow-inner flex items-center justify-center z-10"
                  style={{
                    clipPath:
                      "polygon(29.29% 0%, 70.71% 0%, 100% 29.29%, 100% 70.71%, 70.71% 100%, 29.29% 100%, 0% 70.71%, 0% 29.29%)",
                    background:
                      "radial-gradient(circle at center, #ffffff 0%, #f6f7f9 60%, #e7eaee 100%)",
                  }}
                >
                  {/* Concentric Dial Rings & Ticks */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500">
                    <circle cx="250" cy="250" r="236" fill="none" stroke="#d5d9e2" strokeWidth="1" opacity="0.6" />
                    <circle cx="250" cy="250" r="186" fill="none" stroke="#d5d9e2" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.4" />
                    <circle cx="250" cy="250" r="128" fill="none" stroke="#d5d9e2" strokeWidth="0.7" opacity="0.3" />

                    {/* 60 Minute & 12 Hour Ticks */}
                    {Array.from({ length: 60 }).map((_, i) => {
                      const angle = i * 6;
                      const isHour = i % 5 === 0;
                      const isTwelve = i === 0;
                      const rOuter = 238;
                      const rInner = isHour ? 220 : 230;
                      const strokeColor = isTwelve ? "#e63946" : isHour ? "#111216" : "#a0a5b2";
                      const strokeWidth = isHour ? (isTwelve ? 3.5 : 2.5) : 1;

                      const rad = ((angle - 90) * Math.PI) / 180;
                      const x1 = Number((250 + rInner * Math.cos(rad)).toFixed(2));
                      const y1 = Number((250 + rInner * Math.sin(rad)).toFixed(2));
                      const x2 = Number((250 + rOuter * Math.cos(rad)).toFixed(2));
                      const y2 = Number((250 + rOuter * Math.sin(rad)).toFixed(2));

                      return (
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
                    })}
                  </svg>

                  {/* Dial Printed Brand Mark */}
                  <div className="absolute inset-0 flex flex-col items-center justify-between py-16 pointer-events-none z-10 text-center">
                    <div className="flex flex-col items-center mt-2">
                      <span className="font-extrabold text-[11px] sm:text-xs tracking-[0.25em] text-[#111216]">
                        ANIKET VADAR
                      </span>
                      <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] text-gray-500">
                        AI SYSTEMS · AZURE
                      </span>
                    </div>

                    <div className="flex flex-col items-center mb-2">
                      <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] text-gray-700">
                        PORTFOLIO · 2026
                      </span>
                      <span className="text-[7px] sm:text-[8px] font-bold tracking-[0.2em] text-gray-400">
                        MADE WITH CURIOSITY
                      </span>
                    </div>
                  </div>

                  {/* 10 Chunky 3D Shapes (P O R T F O L I O ★) */}
                  <div className="absolute inset-0 pointer-events-none z-20">
                    {CLOCK_ITEMS.map((item) => {
                      const isSelected = selectedIdx === item.index;
                      const rad = ((item.angle - 90) * Math.PI) / 180;
                      const orbitRadiusPercent = 35.8;
                      const left = Number((50 + orbitRadiusPercent * Math.cos(rad)).toFixed(2));
                      const top = Number((50 + orbitRadiusPercent * Math.sin(rad)).toFixed(2));

                      return (
                        <button
                          key={item.index}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            selectShape(item.index);
                          }}
                          className={`absolute w-9 h-9 sm:w-11 sm:h-11 -translate-x-1/2 -translate-y-1/2 pointer-events-auto rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
                            isSelected ? "scale-115 z-20" : "hover:scale-110 hover:-translate-y-1 z-10"
                          }`}
                          style={{ left: `${left}%`, top: `${top}%` }}
                          aria-label={`Letter ${item.letter}`}
                        >
                          {/* Spinning Dashed Ring on Selected */}
                          {isSelected && (
                            <svg className="absolute inset-[-25%] w-[150%] h-[150%] animate-spin pointer-events-none" style={{ animationDuration: "8s" }} viewBox="0 0 70 70">
                              <circle cx="35" cy="35" r="31" fill="none" stroke="#111216" strokeWidth="2" strokeDasharray="5 5" />
                            </svg>
                          )}

                          {/* 3D Shape Component */}
                          <div className="w-full h-full flex items-center justify-center transition-transform">
                            <Svg3DShape item={item} />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* "Time 2 build ✦" Sticker */}
                  <button
                    type="button"
                    onClick={() => selectShape(1)}
                    className="absolute bottom-[23%] left-[18%] -rotate-12 px-2.5 py-1 rounded-md bg-[#111216] text-[#ffd83a] text-[10px] font-bold tracking-wider shadow-md hover:scale-105 active:scale-95 transition-transform z-20 cursor-pointer"
                  >
                    Time 2 build ✦
                  </button>

                  {/* Hands Layer */}
                  <div className="absolute inset-0 pointer-events-none z-25">
                    {/* Hour Hand */}
                    <div
                      ref={handHourRef}
                      className="absolute top-1/2 left-1/2 origin-bottom -translate-x-1/2"
                      style={{
                        width: "10px",
                        height: "22%",
                        marginTop: "-22%",
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.35))",
                      }}
                    >
                      <div
                        className="w-full h-full rounded-t-sm"
                        style={{
                          background: "linear-gradient(90deg, #18191e 0%, #353842 50%, #0d0e12 100%)",
                          clipPath: "polygon(50% 0%, 100% 12%, 82% 100%, 18% 100%, 0% 12%)",
                        }}
                      />
                    </div>

                    {/* Minute Hand */}
                    <div
                      ref={handMinuteRef}
                      className="absolute top-1/2 left-1/2 origin-bottom -translate-x-1/2"
                      style={{
                        width: "7px",
                        height: "34%",
                        marginTop: "-34%",
                        filter: "drop-shadow(0 5px 8px rgba(0,0,0,0.35))",
                      }}
                    >
                      <div
                        className="w-full h-full rounded-t-sm"
                        style={{
                          background: "linear-gradient(90deg, #18191e 0%, #3a3d48 50%, #0c0d10 100%)",
                          clipPath: "polygon(50% 0%, 100% 8%, 80% 100%, 20% 100%, 0% 8%)",
                        }}
                      />
                    </div>

                    {/* Second Hand */}
                    <div
                      ref={handSecondRef}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2"
                      style={{
                        width: "2px",
                        height: "46%",
                        marginTop: "-36%",
                        transformOrigin: "50% 78%",
                      }}
                    >
                      <div className="w-full h-full bg-[#e63946] relative">
                        <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#e63946] border border-black" />
                      </div>
                    </div>

                    {/* Centre Cap */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#111216] border border-white/20 shadow-md flex items-center justify-center z-30">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e63946]" />
                    </div>
                  </div>

                  {/* Diagonal Glass Reflection */}
                  <div
                    className="absolute inset-0 pointer-events-none z-30 opacity-70"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 38%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.04) 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT DETAIL CARD */}
          <div className="glass-card rounded-3xl p-6 flex flex-col justify-between space-y-6 order-3 border border-black/10 min-h-[340px]">
            <div>
              {/* Top Row: Kicker & Miniature Shape */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500">
                  {activeShape.kicker}
                </span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Svg3DShape item={activeShape} />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-extrabold text-[#111216] tracking-tight leading-snug mb-2">
                {activeShape.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                {activeShape.text}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {activeShape.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/[0.05] text-gray-800 border border-black/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Progress & CTA */}
            <div className="pt-4 border-t border-black/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">
                  Explored ({visited.size}/10)
                </span>
                <a
                  href={activeShape.ctaHref}
                  className="text-xs font-bold text-gray-900 hover:text-[#c2361b] inline-flex items-center gap-1 underline transition-colors"
                >
                  <span>{activeShape.ctaText}</span>
                </a>
              </div>

              {/* 10 Visited Progress Squares */}
              <div className="flex gap-1.5">
                {CLOCK_ITEMS.map((item) => (
                  <button
                    key={item.index}
                    type="button"
                    onClick={() => selectShape(item.index)}
                    className={`flex-1 h-2 rounded-xs transition-all cursor-pointer ${
                      visited.has(item.index)
                        ? "bg-black opacity-100 scale-y-110"
                        : "bg-gray-200 opacity-60"
                    }`}
                    style={
                      visited.has(item.index)
                        ? { backgroundColor: item.faceColor }
                        : {}
                    }
                    title={`${item.letter} · ${item.title}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
