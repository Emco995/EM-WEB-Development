"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

// Definisane početne pozicije za svako slovo tako da doleću iz svih uglova i pravaca
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
    // Malo sporiji i stabilniji korak punjenja do 100%
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatusText("SYSTEM ARMED // LAUNCHING EXPERIENCE");
          
          // Zadržava se dodatnih 1.8 sekundi nakon 100% prije podizanja zavjese
          setTimeout(() => {
            onComplete();
          }, 1800);
          
          return 100;
        }

        const increment = Math.floor(Math.random() * 5) + 2;
        const next = prev + increment;

        if (next > 20 && next < 55) {
          setStatusText("SYNCHRONIZING MODULES & ASSETS...");
        } else if (next >= 55 && next < 85) {
          setStatusText("COMPOSING INTERACTIVE INTERFACES...");
        } else if (next >= 85 && next < 100) {
          setStatusText("SECURING HIGH-SPEED PROTOCOLS...");
        }

        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#03060c] text-white overflow-hidden select-none"
    >
      {/* Pozadinska sci-fi mreža */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Centralni ambijentalni crveni i plavi glow */}
      <div className="absolute w-96 h-96 bg-[#ff2a4b]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-xl w-full px-4 text-center">
        
        {/* LOGO IKONA SA PULSIRAJUĆIM CRVENIM SJAJEM */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#091120] border border-red-500/40 flex items-center justify-center text-[#ff2a4b] shadow-[0_0_35px_rgba(255,42,75,0.45)]">
            <Terminal className="w-8 h-8 animate-pulse" />
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#ff2a4b] animate-ping" />
        </motion.div>

        {/* EKSPLOZIJA I SKLAPANJE SLOVA SA SVIH STRANA */}
        <div className="flex items-center justify-center flex-wrap mb-4 h-12">
          {titleText.split("").map((char, index) => {
            const trajectory = letterTrajectories[index] || {
              x: (Math.random() - 0.5) * 400,
              y: (Math.random() - 0.5) * 400,
              rotate: (Math.random() - 0.5) * 90,
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
                  scale: 1.8,
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
                  delay: 0.15 + index * 0.045, // Svako slovo ulazi sa mikro-razmakom
                  type: "spring",
                  stiffness: 85,
                  damping: 14,
                }}
                className={`text-xl sm:text-3xl font-black tracking-wider inline-block ${
                  isSpace ? "w-2.5 sm:w-3" : ""
                } ${
                  isDash ? "text-[#ff2a4b]" : "text-white"
                }`}
              >
                {char}
              </motion.span>
            );
          })}
        </div>

        {/* PODNASLOV */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-[11px] font-mono tracking-widest uppercase text-slate-400 mb-8"
        >
          High-Performance Web & E-Commerce
        </motion.div>

        {/* PROGRESS BAR & PROCENAT */}
        <div className="w-full max-w-sm space-y-3">
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
        </div>

      </div>

      {/* DONJI VERZIJSKI KOD */}
      <div className="absolute bottom-8 text-[10px] font-mono tracking-widest uppercase text-slate-600">
        CORE // v2.6.0 SYSTEM ONLINE
      </div>
    </motion.div>
  );
}