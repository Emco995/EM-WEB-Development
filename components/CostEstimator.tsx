"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Check, ArrowRight, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

interface CostEstimatorProps {
  onEstimateSelect?: (data: { summary: string; budget: string }) => void;
}

export default function CostEstimator({ onEstimateSelect }: CostEstimatorProps) {
  const { t } = useLanguage();

  const [projectType, setProjectType] = useState<"business" | "ecommerce" | "custom">("business");
  const [scope, setScope] = useState<"small" | "medium" | "large">("medium");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["dsgvo", "i18n"]);

  const basePrices: Record<string, number> = {
    business: 600,
    ecommerce: 1100,
    custom: 1600,
  };

  const scopeMultipliers: Record<string, { multiplier: number; weeks: string }> = {
    small: { multiplier: 1, weeks: "1-2" },
    medium: { multiplier: 1.4, weeks: "2-3" },
    large: { multiplier: 2, weeks: "3-5" },
  };

  const featureCosts: Record<string, number> = {
    payments: 350,
    dsgvo: 200,
    i18n: 250,
    seo: 150,
  };

  const calculatedBase = (basePrices[projectType] || 600) * (scopeMultipliers[scope]?.multiplier || 1.4);
  const calculatedAddons = selectedFeatures.reduce((acc, f) => acc + (featureCosts[f] || 0), 0);
  const totalMin = Math.round((calculatedBase + calculatedAddons) / 50) * 50;
  const totalMax = Math.round(totalMin * 1.25 / 50) * 50;

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleApplyEstimate = () => {
    const typeObj = t.estimator.types.find((item) => item.id === projectType);
    const scopeObj = t.estimator.scopes.find((item) => item.id === scope);
    const featureLabels = selectedFeatures
      .map((fid) => t.estimator.features.find((f) => f.id === fid)?.label)
      .filter(Boolean)
      .join(", ");

    const budgetString = `${totalMin}€ - ${totalMax}€`;
    const summaryText = `[Automatska procjena]: ${typeObj?.title} | ${scopeObj?.label} | Funkcionalnosti: ${
      featureLabels || "Standardne"
    }`;

    if (onEstimateSelect) {
      onEstimateSelect({ summary: summaryText, budget: budgetString });
    }

    const contactEl = document.getElementById("kontakt");
    if (contactEl) {
      const navOffset = 80;
      const targetPos = contactEl.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
  };

  return (
    <section
      id="procjena"
      className="relative py-28 px-4 bg-[#05070a] border-t border-slate-900 transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-red-950/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-950/15 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff2a4b] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff2a4b] animate-ping" />
            <Calculator className="w-3.5 h-3.5" />
            {t.estimator.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.estimator.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.estimator.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0b101b] border border-slate-800">
              <span className="text-xs font-mono text-[#ff2a4b] uppercase tracking-wider block mb-4">
                {t.estimator.typeLabel}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {t.estimator.types.map((type) => {
                  const active = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.id as typeof projectType)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        active
                          ? "bg-red-950/20 border-[#ff2a4b] shadow-[0_0_20px_rgba(255,42,75,0.2)]"
                          : "bg-[#060a12] border-slate-800 hover:border-slate-700 text-slate-300"
                      }`}
                    >
                      <div className="font-bold text-white text-sm mb-1.5">{type.title}</div>
                      <div className="text-[11px] text-slate-400 leading-snug">{type.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#0b101b] border border-slate-800">
              <span className="text-xs font-mono text-[#ff2a4b] uppercase tracking-wider block mb-4">
                {t.estimator.scopeLabel}
              </span>
              <div className="space-y-2.5">
                {t.estimator.scopes.map((item) => {
                  const active = scope === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setScope(item.id as typeof scope)}
                      className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        active
                          ? "bg-red-950/20 border-[#ff2a4b] text-white"
                          : "bg-[#060a12] border-slate-800 hover:border-slate-700 text-slate-300"
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-sm text-white">{item.label}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          active ? "border-[#ff2a4b] bg-[#ff2a4b] text-white" : "border-slate-700"
                        }`}
                      >
                        {active && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#0b101b] border border-slate-800">
              <span className="text-xs font-mono text-[#ff2a4b] uppercase tracking-wider block mb-4">
                {t.estimator.featuresLabel}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.estimator.features.map((feat) => {
                  const active = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        active
                          ? "bg-red-950/20 border-[#ff2a4b] text-white"
                          : "bg-[#060a12] border-slate-800 hover:border-slate-700 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            active ? "border-[#ff2a4b] bg-[#ff2a4b] text-white" : "border-slate-700"
                          }`}
                        >
                          {active && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-medium text-slate-200">{feat.label}</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#ff2a4b] shrink-0">
                        {feat.priceText}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              layout
              className="p-8 rounded-2xl bg-[#060c18]/95 backdrop-blur-xl border border-slate-700/80 shadow-[0_0_50px_rgba(0,0,0,0.85)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 blur-[90px] pointer-events-none" />

              <div className="flex items-center gap-2 text-xs font-mono text-[#ff2a4b] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{t.estimator.summaryTitle}</span>
              </div>

              <div className="mt-4 mb-6">
                <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                  {totalMin.toLocaleString()}€ - {totalMax.toLocaleString()}€
                </div>
                <div className="flex items-center gap-2 mt-3 text-xs font-mono text-slate-400">
                  <Clock className="w-4 h-4 text-[#ff2a4b]" />
                  <span>
                    {t.estimator.estTime}{" "}
                    <strong className="text-white">
                      {scopeMultipliers[scope]?.weeks} {t.estimator.weeksSuffix}
                    </strong>
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-800 text-xs text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.estimator.includedNote}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleApplyEstimate}
                className="w-full py-4 rounded-xl bg-[#ff2a4b] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#dc2626] hover:shadow-[0_0_25px_rgba(255,42,75,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer group active:scale-98"
              >
                <span>{t.estimator.transferBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}