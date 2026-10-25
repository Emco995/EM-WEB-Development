"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-gradient-to-b from-[#091326] via-[#0d1d3a] to-[#081020]">
      {/* Centralni svjetlosni naglasak */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-500/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[220px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Suptilna mrežica */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        
        {/* Terminal Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#050b14]/80 backdrop-blur-md border border-slate-700/60 text-white text-xs font-mono tracking-widest uppercase mb-8 shadow-lg shadow-black/30"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#ff2a4b]" />
          <span>Full-Stack & E-Commerce Developer</span>
        </motion.div>

        {/* Glavni Naslov */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]"
        >
          Gradim brze, profitabilne <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-[#ff2a4b]">
            web stranice i e-trgovine.
          </span>
        </motion.h1>

        {/* Podnaslov */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-normal"
        >
          Od online narudžbi do Stripe/PayPal plaćanja i pravnih standarda (DSGVO). 
          Pretvaram posjetioce u kupce kroz moderan dizajn i optimizovan kod.
        </motion.p>

        {/* Akciona Dugmad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projekti"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#ff2a4b] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#dc2626] hover:shadow-[0_0_25px_rgba(255,42,75,0.45)] transition-all flex items-center justify-center gap-2 group"
          >
            Pogledaj Uživo Radove
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#kontakt"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#050b14]/80 backdrop-blur-sm border border-slate-700/80 hover:border-[#ff2a4b]/60 text-slate-200 font-medium text-sm transition-all hover:bg-[#0e1726]"
          >
            Besplatne Konsultacije
          </a>
        </motion.div>

        {/* 3 Kartice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/60"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 text-slate-200 bg-[#050b14]/70 backdrop-blur-sm p-4 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all">
            <Zap className="w-5 h-5 text-[#ff2a4b]" />
            <span className="text-xs uppercase font-mono tracking-wider">Ultra-brz odziv & SEO</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 text-slate-200 bg-[#050b14]/70 backdrop-blur-sm p-4 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all">
            <ShieldCheck className="w-5 h-5 text-[#ff2a4b]" />
            <span className="text-xs uppercase font-mono tracking-wider">DSGVO & EU Pravila</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 text-slate-200 bg-[#050b14]/70 backdrop-blur-sm p-4 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all">
            <Code2 className="w-5 h-5 text-[#ff2a4b]" />
            <span className="text-xs uppercase font-mono tracking-wider">Next.js & Čist Kod</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}