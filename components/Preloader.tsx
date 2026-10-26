"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

const letterTrajectories = [
  { x: -350, y: -250, rotate: -45 }, // E
  { x: 300, y: -280, rotate: 30 },   // M
  { x: 0, y: -300, rotate: -20 },     // -
  { x: -400, y: 150, rotate: 45 },    // W
  { x: 250, y: 220, rotate: -35 },    // E
  { x: -280, y: -180, rotate: 25 },   // B
  { x: 0, y: 0, rotate: 0 },          // razmak
  { x: -320, y: 300, rotate: -50 },   // D
  { x: 380, y: -120, rotate: 40 },    // E
  { x: -200, y: -320, rotate: -15 },  // V
  { x: 280, y: 310, rotate: 35 },     // E
  { x: -350, y: 50, rotate: -30 },    // L
  { x: 320, y: -220, rotate: 20 },    // O
  { x: -150, y: 350, rotate: -40 },   // P
  { x: 400, y: 180, rotate: 50 },     // M
  { x: -250, y: -220, rotate: -25 },  // E
  { x: 180, y: -340, rotate: 30 },    // N
  { x: 220, y: 350, rotate: -45 },    // T
];

const titleText = "EM-WEB DEVELOPMENT";

export default function Preloader({ onComplete }: PreloaderProps) {
  const [percent, setPercent] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING CORE SYSTEMS...");

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatusText("HUMAN & AI SYNERGY ONLINE");
          setTimeout(() => {
            onComplete();
          }, 1800);
          return 100;
        }

        const increment = Math.floor(Math.random() * 4) + 2;
        const next = prev + increment;

        if (next > 20 && next < 50) {
          setStatusText("CONNECTING NEURAL PROTOCOLS...");
        } else if (next >= 50 && next < 80) {
          setStatusText("SYNCHRONIZING HUMAN & DIGITAL CORE...");
        } else if (next >= 80 && next < 100) {
          setStatusText("BRIDGING INTELLIGENCE MATRIX...");
        }

        return next > 100 ? 100 : next;
      });
    }, 65);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[120] flex flex-col items-center justify-between py-6 px-4 bg-[#03060c] text-white overflow-hidden select-none"
    >
      {/* Sci-Fi mrežasta pozadina */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Ambijentalni glow efekti */}
      <div className="absolute w-[320px] sm:w-[520px] h-[320px] sm:h-[520px] bg-[#ff2a4b]/15 blur-[140px] sm:blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] bg-blue-600/10 blur-[150px] sm:blur-[190px] rounded-full pointer-events-none" />

      {/* GORNJI DIO: LOGO I SKLAPANJE SLOVA */}
      <div className="relative z-20 flex flex-col items-center max-w-xl w-full text-center mt-2">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-3"
        >
          <div className="w-12 sm:w-13 h-12 sm:h-13 rounded-2xl bg-[#091120] border border-red-500/40 flex items-center justify-center text-[#ff2a4b] shadow-[0_0_30px_rgba(255,42,75,0.4)]">
            <Terminal className="w-5 sm:w-6 h-5 sm:h-6 animate-pulse" />
          </div>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#ff2a4b] animate-ping" />
        </motion.div>

        {/* SKLAPANJE SLOVA */}
        <div className="flex items-center justify-center flex-wrap h-9 mb-1">
          {titleText.split("").map((char, index) => {
            const trajectory = letterTrajectories[index] || {
              x: (Math.random() - 0.5) * 350,
              y: (Math.random() - 0.5) * 350,
              rotate: 0,
            };

            const isSpace = char === " ";
            const isDash = char === "-";

            return (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  x: trajectory.x,
                  y: trajectory.y,
                  rotate: trajectory.rotate,
                  filter: "blur(8px)",
                  scale: 1.6,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  filter: "blur(0px)",
                  scale: 1,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.1 + index * 0.04,
                  type: "spring",
                  stiffness: 85,
                  damping: 14,
                }}
                className={`text-sm sm:text-xl font-black tracking-wider inline-block ${
                  isSpace ? "w-1.5 sm:w-2.5" : ""
                } ${
                  isDash ? "text-[#ff2a4b]" : "text-white"
                }`}
              >
                {char}
              </motion.span>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-[9px] sm:text-[11px] font-mono tracking-widest uppercase text-slate-400"
        >
          Human Vision × Machine Precision
        </motion.div>
      </div>

      {/* SREDNJI DIO: RUKE I DODATNO PODIGNUTA TAČKA */}
      <div className="relative w-full max-w-5xl h-64 sm:h-96 flex items-center justify-center my-auto pointer-events-none">
        
        {/* LIJEVA: ROBOTSKA RUKA */}
        <motion.div
          initial={{ x: -160, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2.0,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
          className="absolute -left-2 sm:left-14 top-1/2 -translate-y-1/2 sm:top-4 sm:translate-y-0 w-44 sm:w-[420px] h-32 sm:h-72"
        >
          <div className="relative w-full h-full drop-shadow-[0_0_20px_rgba(255,42,75,0.45)]">
            <Image
              src="/images/robot-hand.png"
              alt="Robot Cyber Hand"
              fill
              sizes="(max-width: 640px) 176px, 420px"
              className="object-contain object-right"
              priority
            />
          </div>
        </motion.div>

        {/* TOČKA SUSRETA - DODATNO PODIGNUTA VERTIKALNO */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.6, 1], opacity: [0, 1, 0.95] }}
          transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
          className="relative flex items-center justify-center z-30 -translate-y-6 sm:-translate-y-12"
        >
          <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-[#ff2a4b] blur-[10px] sm:blur-[14px] animate-pulse" />
          <div className="absolute w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-white shadow-[0_0_18px_#ffffff]" />
          <motion.div
            animate={{ scale: [1, 2.4, 1], opacity: [0.75, 0.1, 0.75] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="absolute w-14 sm:w-20 h-14 sm:h-20 rounded-full border border-red-500/80"
          />
        </motion.div>

        {/* DESNA: LJUDSKA RUKA */}
        <motion.div
          initial={{ x: 160, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2.0,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
          className="absolute -right-2 sm:right-14 top-1/2 -translate-y-1/2 sm:top-auto sm:bottom-4 sm:translate-y-0 w-44 sm:w-[420px] h-32 sm:h-72"
        >
          <div className="relative w-full h-full drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
            <Image
              src="/images/human-hand.png"
              alt="Human Hand"
              fill
              sizes="(max-width: 640px) 176px, 420px"
              className="object-contain object-left"
              priority
            />
          </div>
        </motion.div>

      </div>

      {/* DONJI DIO: STATUS I PROGRESS BAR */}
      <div className="relative z-20 w-full max-w-sm space-y-3 mb-2 px-2 sm:px-0">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="truncate pr-2 text-slate-400">{statusText}</span>
          <span className="text-[#ff2a4b] font-bold shrink-0">{percent}%</span>
        </div>

        <div className="h-1.5 w-full bg-[#0d1627] rounded-full overflow-hidden border border-slate-800">
          <motion.div
            className="h-full bg-gradient-to-r from-red-600 via-[#ff2a4b] to-red-400 shadow-[0_0_15px_rgba(255,42,75,0.85)] rounded-full"
            style={{ width: `${percent}%` }}
            transition={{ ease: "easeOut", duration: 0.1 }}
          />
        </div>

        <div className="text-center text-[10px] font-mono tracking-widest uppercase text-slate-600 pt-1">
          SYNERGY // v2.7.0 ONLINE
        </div>
      </div>
    </motion.div>
  );
}