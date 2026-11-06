"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowUpRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { Language } from "@/lib/translations";

// SVG Vektorske zastave - 100% vidljive na svim Windows, Mac i mobilnim uređajima
const FlagBA = () => (
  <svg className="w-4 h-3 rounded-[2px] shrink-0" viewBox="0 0 640 480" aria-label="Bosanski">
    <path fill="#002395" d="M0 0h640v480H0z" />
    <path fill="#fecb00" d="m146.7 0 280 480h146.6V0z" />
    <g fill="#fff">
      <path d="m116.7 53.3 5.4 16.5h17.3l-14 10.2 5.3 16.5-14-10.2-14 10.2 5.3-16.5-14-10.2h17.3zm40 60 5.4 16.5h17.3l-14 10.2 5.3 16.5-14-10.2-14 10.2 5.3-16.5-14-10.2h17.3zm40 60 5.4 16.5h17.3l-14 10.2 5.3 16.5-14-10.2-14 10.2 5.3-16.5-14-10.2h17.3zm40 60 5.4 16.5h17.3l-14 10.2 5.3 16.5-14-10.2-14 10.2 5.3-16.5-14-10.2h17.3zm40 60 5.4 16.5h17.3l-14 10.2 5.3 16.5-14-10.2-14 10.2 5.3-16.5-14-10.2h17.3zm40 60 5.4 16.5h17.3l-14 10.2 5.3 16.5-14-10.2-14 10.2 5.3-16.5-14-10.2h17.3zm40 60 5.4 16.5h17.3l-14 10.2 5.3 16.5-14-10.2-14 10.2 5.3-16.5-14-10.2h17.3z" />
    </g>
  </svg>
);

const FlagDE = () => (
  <svg className="w-4 h-3 rounded-[2px] shrink-0" viewBox="0 0 640 480" aria-label="Deutsch">
    <path fill="#000" d="M0 0h640v160H0z" />
    <path fill="#d00" d="M0 160h640v160H0z" />
    <path fill="#ffce00" d="M0 320h640v160H0z" />
  </svg>
);

const FlagGB = () => (
  <svg className="w-4 h-3 rounded-[2px] shrink-0" viewBox="0 0 640 480" aria-label="English">
    <path fill="#012169" d="M0 0h640v480H0z" />
    <path fill="#FFF" d="m75 0 245 184L565 0h75v56L404 233l236 177v70h-75L320 296 75 480H0v-56l236-177L0 70V0z" />
    <path fill="#C8102E" d="m424 288 216 162v30h-35L389 318zM640 0v10L448 154l25 34L640 47zM0 480v-10l192-144-25-34L0 433zM216 192 0 30V0h35l216 162z" />
    <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z" />
    <path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<"dark" | "blue">("dark");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string; icon: React.ReactNode }[] = [
    { code: "bs", label: "BS", icon: <FlagBA /> },
    { code: "de", label: "DE", icon: <FlagDE /> },
    { code: "en", label: "EN", icon: <FlagGB /> },
  ];

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
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  const navBgClass =
    activeTheme === "blue"
      ? "bg-[#0b162c]/90 border-b border-blue-500/25 shadow-xl shadow-black/40"
      : "bg-black/80 border-b border-slate-800/80 shadow-lg shadow-black/30";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ease-in-out ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        
        {/* LOGO */}
        <a
          href="#"
          onClick={(e) => scrollToSection(e, "top")}
          className="flex items-center gap-3 group cursor-pointer"
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
              {t.nav.status}
            </div>
          </div>
        </a>

        {/* DESKTOP NAVIGACIJA */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-mono text-slate-300">
          <a
            href="#projekti"
            onClick={(e) => scrollToSection(e, "projekti")}
            className="hover:text-[#ff2a4b] transition-colors cursor-pointer"
          >
            {t.nav.projects}
          </a>
          <a
            href="#usluge"
            onClick={(e) => scrollToSection(e, "usluge")}
            className="hover:text-[#ff2a4b] transition-colors cursor-pointer"
          >
            {t.nav.services}
          </a>
          <a
            href="#proces"
            onClick={(e) => scrollToSection(e, "proces")}
            className="hover:text-[#ff2a4b] transition-colors cursor-pointer"
          >
            {t.nav.process}
          </a>
          <a
            href="#kontakt"
            onClick={(e) => scrollToSection(e, "kontakt")}
            className="hover:text-[#ff2a4b] transition-colors cursor-pointer"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* DESKTOP: BIRAČ JEZIKA & CTA */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* LANGUAGE SWITCHER DROPDOWN */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#091120] border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-[#ff2a4b]/50 transition-all cursor-pointer"
            >
              {currentLangObj.icon}
              <span className="font-bold">{currentLangObj.label}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                  langDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {langDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 py-1.5 w-32 bg-[#091120] border border-slate-800 rounded-xl shadow-2xl z-50 backdrop-blur-md">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-mono text-left transition-colors cursor-pointer ${
                        language === l.code
                          ? "text-[#ff2a4b] bg-red-950/20 font-bold"
                          : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                      }`}
                    >
                      {l.icon}
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* CTA DUGME */}
          <a
            href="#kontakt"
            onClick={(e) => scrollToSection(e, "kontakt")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#ff2a4b] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#dc2626] hover:shadow-[0_0_20px_rgba(255,42,75,0.45)] transition-all active:scale-95 cursor-pointer"
          >
            {t.nav.cta}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* ANIMIRANI HAMBURGER U "X" */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 rounded-lg bg-black/60 border border-slate-800 flex flex-col items-center justify-center gap-1.5 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="md:hidden absolute top-full left-0 w-full bg-[#040812]/98 backdrop-blur-2xl border-b border-red-500/20 shadow-[0_20px_40px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col items-center justify-center gap-5 font-mono text-xs uppercase tracking-wider text-center">
              
              {/* BIRAČ JEZIKA ZA MOBITEL (SVG ZASTAVICE) */}
              <div className="flex items-center justify-center gap-3 pb-4 border-b border-slate-800/80 w-full max-w-xs">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                      language === l.code
                        ? "border-[#ff2a4b] bg-red-950/30 text-white font-bold"
                        : "border-slate-800 bg-[#091120] text-slate-400 hover:text-white"
                    }`}
                  >
                    {l.icon}
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>

              {/* LINKOVI */}
              <a
                href="#projekti"
                onClick={(e) => scrollToSection(e, "projekti")}
                className="w-full text-center text-slate-300 hover:text-[#ff2a4b] py-2 transition-colors cursor-pointer"
              >
                {t.nav.projects}
              </a>
              <a
                href="#usluge"
                onClick={(e) => scrollToSection(e, "usluge")}
                className="w-full text-center text-slate-300 hover:text-[#ff2a4b] py-2 transition-colors cursor-pointer"
              >
                {t.nav.services}
              </a>
              <a
                href="#proces"
                onClick={(e) => scrollToSection(e, "proces")}
                className="w-full text-center text-slate-300 hover:text-[#ff2a4b] py-2 transition-colors cursor-pointer"
              >
                {t.nav.process}
              </a>
              <a
                href="#kontakt"
                onClick={(e) => scrollToSection(e, "kontakt")}
                className="w-full text-center text-slate-300 hover:text-[#ff2a4b] py-2 transition-colors cursor-pointer"
              >
                {t.nav.contact}
              </a>

              {/* CTA DUGME ZA MOBITEL */}
              <a
                href="#kontakt"
                onClick={(e) => scrollToSection(e, "kontakt")}
                className="w-full max-w-xs text-center py-3.5 mt-2 rounded-xl bg-[#ff2a4b] text-white font-bold tracking-widest shadow-[0_0_20px_rgba(255,42,75,0.4)] hover:bg-[#dc2626] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.nav.cta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}