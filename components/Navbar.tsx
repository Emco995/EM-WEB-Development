"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<"dark" | "blue">("dark");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      const projectsEl = document.getElementById("projekti");
      const servicesEl = document.getElementById("usluge");
      const processEl = document.getElementById("proces");
      const contactEl = document.getElementById("kontakt");

      const projectsTop = projectsEl ? projectsEl.offsetTop : 99999;
      const servicesTop = servicesEl ? servicesEl.offsetTop : 99999;
      const processTop = processEl ? processEl.offsetTop : 99999;
      const contactTop = contactEl ? contactEl.offsetTop : 99999;

      if (scrollPos >= contactTop) {
        setActiveTheme("dark");
      } else if (scrollPos >= processTop) {
        setActiveTheme("blue");
      } else if (scrollPos >= servicesTop) {
        setActiveTheme("dark");
      } else if (scrollPos >= projectsTop) {
        setActiveTheme("blue");
      } else {
        setActiveTheme("dark");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetEl = document.getElementById(id);
    if (targetEl) {
      const navOffset = 80;
      const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const navBgClass =
    activeTheme === "blue"
      ? "bg-[#0b162c]/90 border-b border-blue-500/25 shadow-xl shadow-black/40"
      : "bg-black/80 border-b border-slate-800/80 shadow-lg shadow-black/30";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ease-in-out ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <a
          href="#"
          onClick={(e) => scrollToSection(e, "top")}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#091120] border border-red-500/30 flex items-center justify-center text-[#ff2a4b] group-hover:border-[#ff2a4b] group-hover:shadow-[0_0_18px_rgba(255,42,75,0.4)] transition-all">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-base tracking-wider text-white flex items-center gap-1">
              EM<span className="text-[#ff2a4b] font-black">-</span>DEV
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ff2a4b] animate-ping"></span>
              Online / Available
            </div>
          </div>
        </a>

        {/* DESKTOP NAVIGACIJA */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-mono text-slate-300">
          <a
            href="#projekti"
            onClick={(e) => scrollToSection(e, "projekti")}
            className="hover:text-[#ff2a4b] transition-colors"
          >
            Projekti
          </a>
          <a
            href="#usluge"
            onClick={(e) => scrollToSection(e, "usluge")}
            className="hover:text-[#ff2a4b] transition-colors"
          >
            Usluge
          </a>
          <a
            href="#proces"
            onClick={(e) => scrollToSection(e, "proces")}
            className="hover:text-[#ff2a4b] transition-colors"
          >
            Proces
          </a>
          <a
            href="#kontakt"
            onClick={(e) => scrollToSection(e, "kontakt")}
            className="hover:text-[#ff2a4b] transition-colors"
          >
            Kontakt
          </a>
        </nav>

        {/* CTA DUGME */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#kontakt"
            onClick={(e) => scrollToSection(e, "kontakt")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#ff2a4b] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#dc2626] hover:shadow-[0_0_20px_rgba(255,42,75,0.45)] transition-all active:scale-95"
          >
            Pokreni Projekat
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* ANIMIRANI HAMBURGER U "X" */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 rounded-lg bg-black/60 border border-slate-800 flex flex-col items-center justify-center gap-1.5 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="w-5 h-0.5 bg-current rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-5 h-0.5 bg-current rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="w-5 h-0.5 bg-current rounded-full"
          />
        </button>
      </div>

      {/* MOBILNI MENI */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-red-500/20 px-6 py-6 flex flex-col gap-4 font-mono text-xs uppercase tracking-wider">
          <a
            href="#projekti"
            onClick={(e) => scrollToSection(e, "projekti")}
            className="text-slate-300 hover:text-[#ff2a4b] py-1"
          >
            Projekti
          </a>
          <a
            href="#usluge"
            onClick={(e) => scrollToSection(e, "usluge")}
            className="text-slate-300 hover:text-[#ff2a4b] py-1"
          >
            Usluge
          </a>
          <a
            href="#proces"
            onClick={(e) => scrollToSection(e, "proces")}
            className="text-slate-300 hover:text-[#ff2a4b] py-1"
          >
            Proces
          </a>
          <a
            href="#kontakt"
            onClick={(e) => scrollToSection(e, "kontakt")}
            className="text-slate-300 hover:text-[#ff2a4b] py-1"
          >
            Kontakt
          </a>
          <a
            href="#kontakt"
            onClick={(e) => scrollToSection(e, "kontakt")}
            className="w-full text-center py-3 mt-2 rounded-lg bg-[#ff2a4b] text-white font-bold"
          >
            Pokreni Projekat
          </a>
        </div>
      )}
    </header>
  );
}