"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Check, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export interface CostEstimatorProps {
  onApplyEstimate?: (summary: string, budgetRange: string) => void;
}

export default function CostEstimator({ onApplyEstimate }: CostEstimatorProps) {
  const { t } = useLanguage();

  const [selectedTypeId, setSelectedTypeId] = useState<string>("ecommerce");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["payments", "dsgvo"]);

  const currentProjectTypes = t.estimator.projectTypes;
  const currentAddOns = t.estimator.addOns;

  const selectedType =
    currentProjectTypes.find((item) => item.id === selectedTypeId) || currentProjectTypes[0];

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const calculateTotal = () => {
    const addOnsTotal = selectedAddOns.reduce((sum, id) => {
      const found = currentAddOns.find((item) => item.id === id);
      return sum + (found ? found.price : 0);
    }, 0);
    return selectedType.price + addOnsTotal;
  };

  const total = calculateTotal();

  const handleTransferToContact = () => {
    const addOnNames = selectedAddOns
      .map((id) => currentAddOns.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    const summary = `${t.estimator.contactSummaryIntro} ${selectedType.label}. ${t.estimator.contactSummaryAddons}: ${
      addOnNames || t.estimator.noAddons
    }. ${t.estimator.contactSummaryCalc}: cca ${total}€.`;

    let budgetCategory = "1.000€ - 2.500€";
    if (total < 1000) budgetCategory = "500€ - 1.000€";
    else if (total > 2500) budgetCategory = "2.500€ - 5.000€";

    if (onApplyEstimate) {
      onApplyEstimate(summary, budgetCategory);
    }

    const contactEl = document.getElementById("kontakt");
    if (contactEl) {
      const navOffset = 80;
      const targetPos = contactEl.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 px-4 bg-[#05070a] border-t border-slate-900 transition-colors duration-500 overflow-hidden">
      {/* Glow efekt */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-red-950/15 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff2a4b] mb-3">
            <Calculator className="w-4 h-4" />
            <span>{t.estimator.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {t.estimator.title}
          </h2>
          <p className="text-slate-400 text-sm">
            {t.estimator.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LIJEVO: Selekcija opcija */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Korak: Tip projekta */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-3 font-semibold">
                {t.estimator.step1Label}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentProjectTypes.map((type) => {
                  const isSelected = selectedType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedTypeId(type.id)}
                      className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? "bg-[#0b162c] border-[#ff2a4b] shadow-[0_0_20px_rgba(255,42,75,0.2)]"
                          : "bg-[#080d17] border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#0c1424]"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-white">{type.label}</span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-[#ff2a4b] shrink-0" />}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                          {type.desc}
                        </p>
                      </div>
                      <div className="text-xs font-mono font-bold text-[#ff2a4b]">
                        {t.estimator.fromPricePrefix} {type.price}€
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Korak: Dodatne funkcionalnosti */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-3 font-semibold">
                {t.estimator.step2Label}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentAddOns.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                        isChecked
                          ? "bg-[#0b162c] border-[#ff2a4b]/80 shadow-[0_0_15px_rgba(255,42,75,0.15)]"
                          : "bg-[#080d17] border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? "bg-[#ff2a4b] text-white"
                            : "border border-slate-700 bg-[#040812]"
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-xs font-bold text-white">{addon.label}</span>
                          <span className="text-[11px] font-mono text-slate-400">+{addon.price}€</span>
                        </div>
                        <p className="text-[11px] text-slate-400">{addon.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* DESNO: Ukupna kalkulacija & CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-6 rounded-2xl bg-[#080d17] border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff2a4b] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.estimator.summaryBadge}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{t.estimator.summaryTitle}</h3>

              <div className="space-y-3 mb-6 pb-6 border-b border-slate-800 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span className="truncate pr-2">{selectedType.label}</span>
                  <span className="font-mono text-white shrink-0">{selectedType.price}€</span>
                </div>
                {selectedAddOns.map((id) => {
                  const item = currentAddOns.find((a) => a.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} className="flex justify-between text-slate-400">
                      <span className="truncate pr-2">+ {item.label}</span>
                      <span className="font-mono text-slate-300 shrink-0">+{item.price}€</span>
                    </div>
                  );
                })}
              </div>

              {/* Ukupno */}
              <div className="mb-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  {t.estimator.priceLabel}
                </div>
                <div className="text-3xl font-black text-white font-mono flex items-baseline gap-1">
                  {t.estimator.approxPrefix} {total}
                  <span className="text-lg text-[#ff2a4b]">€</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">
                  {t.estimator.disclaimer}
                </div>
              </div>

              {/* CTA Dugme */}
              <button
                type="button"
                onClick={handleTransferToContact}
                className="w-full py-3.5 rounded-xl bg-[#ff2a4b] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#dc2626] hover:shadow-[0_0_20px_rgba(255,42,75,0.45)] transition-all flex items-center justify-center gap-2 group active:scale-95 cursor-pointer"
              >
                <span>{t.estimator.ctaBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}