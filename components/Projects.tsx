"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Hammer,
  ShoppingBag,
  ArrowRight,
  Layers,
  X,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { ProjectData } from "@/lib/translations";

type CategoryFilter = "all" | "ecommerce" | "local";

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Ikone po ID-u projekta
  const iconsMap: Record<string, typeof Sparkles> = {
    brunchito: Sparkles,
    "hecic-stil": Hammer,
    "vintage-charm": ShoppingBag,
  };

  const projectsData = t.projects.items;
  const selectedProject = projectsData.find((p) => p.id === selectedProjectId) || null;

  // Blokiranje skrola pozadine kada je modal otvoren
  useEffect(() => {
    if (selectedProject) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [selectedProject]);

  const handleCloseModal = () => {
    setSelectedProjectId(null);
    const targetEl = document.getElementById("projekti");
    if (targetEl) {
      const navOffset = 80;
      const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.categoryKey === filter);

  const filterTabs: { key: CategoryFilter; label: string }[] = [
    { key: "all", label: t.projects.filterAll },
    { key: "ecommerce", label: t.projects.filterEcommerce },
    { key: "local", label: t.projects.filterLocal },
  ];

  return (
    <section id="projekti" className="relative py-28 px-4 bg-[#05070a] border-t border-slate-900 transition-colors duration-500">
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-red-950/15 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff2a4b] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff2a4b]"></span>
              {t.projects.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {t.projects.title}
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base">
            {t.projects.desc}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-4 border-b border-slate-800/80 font-mono text-xs">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-lg transition-all uppercase tracking-wider cursor-pointer ${
                filter === tab.key
                  ? "bg-[#ff2a4b] text-white font-bold shadow-[0_0_15px_rgba(255,42,75,0.35)]"
                  : "bg-[#0b101b] text-slate-400 hover:text-white hover:bg-[#121a2c] border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <span className="ml-auto text-slate-500 text-xs hidden sm:inline-block">
            {t.projects.shownCount.replace("{count}", filteredProjects.length.toString())}
          </span>
        </div>

        <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project: ProjectData) => {
              const Icon = iconsMap[project.id] || Sparkles;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl bg-[#0b101b] border border-slate-800/80 hover:border-[#ff2a4b]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-[0_0_35px_rgba(255,42,75,0.15)]"
                >
                  <div className="relative border-b border-slate-800/80 bg-[#060a12] overflow-hidden">
                    <div className="flex items-center justify-between px-3.5 py-2 bg-[#080d17] border-b border-slate-800/60 z-20 relative">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 truncate max-w-[170px]">
                        {project.demoUrl.replace("https://", "")}
                      </span>
                      <div className="flex items-center gap-1 text-[9px] font-mono text-[#ff2a4b]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a4b] animate-pulse"></span>
                        LIVE
                      </div>
                    </div>

                    <div className="relative h-64 sm:h-56 lg:h-52 w-full overflow-hidden bg-[#060a12] group/vid">
                      <video
                        src={project.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-top opacity-85 group-hover/vid:opacity-100 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b] via-transparent to-transparent opacity-70 pointer-events-none" />

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/vid:opacity-100 transition-opacity duration-300 cursor-pointer"
                      >
                        <span className="px-3.5 py-1.5 rounded-lg bg-black/90 backdrop-blur-md text-white font-mono text-xs uppercase tracking-wider border border-[#ff2a4b]/40 inline-flex items-center gap-2 shadow-2xl">
                          {t.projects.visitSite} <ExternalLink className="w-3.5 h-3.5 text-[#ff2a4b]" />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#060a12] border border-slate-800 flex items-center justify-center text-[#ff2a4b] group-hover:scale-105 group-hover:border-[#ff2a4b]/40 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-[#060a12] text-[#ff2a4b] border border-red-500/20">
                          {project.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff2a4b] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium mb-4 leading-relaxed line-clamp-2">
                        {project.subtitle}
                      </p>

                      <div className="grid grid-cols-3 gap-1.5 py-2.5 px-2.5 rounded-xl bg-[#060a12] border border-slate-800/70 mb-5">
                        {project.impactMetrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className="text-[11px] font-bold text-slate-200 truncate">
                              {metric.value}
                            </div>
                            <div className="text-[9px] uppercase tracking-wider text-slate-400 truncate">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2 mb-6">
                        {project.highlights.slice(0, 3).map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2a4b] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/80">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#060a12] text-slate-400 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedProjectId(project.id)}
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#060a12] border border-slate-700/80 text-slate-200 text-xs font-semibold uppercase tracking-wider hover:border-[#ff2a4b] hover:text-white transition-all cursor-pointer"
                        >
                          {t.projects.detailsBtn}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#ff2a4b] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#dc2626] hover:shadow-[0_0_15px_rgba(255,42,75,0.4)] transition-all cursor-pointer"
                        >
                          {t.projects.liveBtn}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* MODAL ZA DETALJE PROJEKTA */}
        <AnimatePresence>
          {selectedProject && (
            <div
              onClick={handleCloseModal}
              className="fixed inset-0 z-[110] flex items-start justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md pt-24 sm:pt-28 overflow-y-auto"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-2xl bg-[#0b101b] border border-slate-800 rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.95)] overflow-hidden max-h-[calc(100vh-8rem)] flex flex-col my-auto sm:my-0"
              >
                {/* Crvena linija na vrhu */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#ff2a4b] to-transparent shrink-0" />

                {/* Gornji informativni header */}
                <div className="flex items-center justify-between px-6 py-3 bg-[#080d17] border-b border-slate-800/80 shrink-0">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#ff2a4b]">
                    <Layers className="w-4 h-4" />
                    <span>{t.projects.caseStudyHeader}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest hidden sm:inline-block">
                    {t.projects.escClose}
                  </span>
                </div>

                {/* Scrollabilni unutrašnji prozor */}
                <div className="p-6 overflow-y-auto space-y-6 overscroll-contain">
                  
                  {/* Naslov projekta i X dugme desno */}
                  <div className="flex items-start justify-between gap-4 pb-2 border-b border-slate-800/60">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {selectedProject.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        {selectedProject.subtitle}
                      </p>
                    </div>

                    <button
                      onClick={handleCloseModal}
                      className="shrink-0 p-2.5 rounded-xl bg-[#060a12] border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#ff2a4b] hover:bg-[#ff2a4b]/10 transition-all cursor-pointer flex items-center justify-center group shadow-md"
                      aria-label="Zatvori detalje"
                      title="Zatvori"
                    >
                      <X className="w-5 h-5 group-hover:scale-110 transition-transform text-slate-300 group-hover:text-[#ff2a4b]" />
                    </button>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-slate-800 bg-black">
                    <video
                      src={selectedProject.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="w-full h-48 sm:h-64 object-cover object-top"
                    />
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                    <div className="p-4 rounded-xl bg-[#060a12] border border-slate-800/80">
                      <span className="text-[11px] uppercase font-mono tracking-wider text-slate-400 block mb-1">
                        {t.projects.problemTitle}
                      </span>
                      <p className="text-slate-300">{selectedProject.description}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#060a12] border border-slate-800/80">
                      <span className="text-[11px] uppercase font-mono tracking-wider text-[#ff2a4b] block mb-1">
                        {t.projects.solutionTitle}
                      </span>
                      <p className="text-slate-300">{selectedProject.solution}</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase font-mono tracking-wider text-slate-400 block mb-2.5">
                      {t.projects.highlightsTitle}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#ff2a4b] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer modala sa dugmadima */}
                <div className="px-6 py-3.5 bg-[#080d17] border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 shrink-0">
                  <span className="hidden sm:inline">{t.projects.escClose}</span>
                  <div className="flex items-center gap-3 ml-auto">
                    <button
                      onClick={handleCloseModal}
                      className="px-4 py-2 rounded-xl bg-[#060a12] border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider hover:bg-slate-900 transition-all cursor-pointer"
                    >
                      {t.projects.modalClose}
                    </button>
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#ff2a4b] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#dc2626] transition-all inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      {t.projects.modalOpenSite}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}