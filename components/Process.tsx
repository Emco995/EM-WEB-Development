"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Palette, Code, Rocket, CheckCircle2, ArrowRight } from "lucide-react";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: typeof MessageSquareText;
}

const stepsData: Step[] = [
  {
    number: "01",
    title: "Konsultacije & Strategija",
    subtitle: "Upoznavanje sa vašim ciljevima",
    description:
      "Definišemo šta tačno želite postići web stranicom: više online narudžbi, zakazivanje termina ili jači brend na lokalnom tržištu.",
    deliverables: [
      "Analiza konkurencije i ciljne publike",
      "Plan strukture i potrebnih integracija",
      "Fiksna procjena vremena i budžeta",
    ],
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "UI/UX Dizajn & Prototip",
    subtitle: "Vizuelni koncept prilagođen kupcima",
    description:
      "Kreiramo moderan, estetski usklađen dizajn koji je maksimalno pregledan na mobilnim uređajima i vodi posjetioca direktno do akcije.",
    deliverables: [
      "Mobile-first raspored prilagođen brzom pregledu",
      "Paleta boja, tipografija i vizuelni identitet",
      "Pregled i odobrenje prije početka kodiranja",
    ],
    icon: Palette,
  },
  {
    number: "03",
    title: "Razvoj & Integracije",
    subtitle: "Pisanje čistog i brzog koda",
    description:
      "Pretvaranje dizajna u ultra-brzu web stranicu koristeći Next.js, sa povezanim sistemima plaćanja (Stripe/PayPal) i pravnim stranicama.",
    deliverables: [
      "Integracija online plaćanja ili kontakt formi",
      "DSGVO pravna usklađenost (Impressum, Datenschutz)",
      "Optimizacija brzine učitavanja (Core Web Vitals)",
    ],
    icon: Code,
  },
  {
    number: "04",
    title: "Testiranje & Lansiranje",
    subtitle: "Spremni za prve kupce i klijente",
    description:
      "Temeljno testiranje na svim telefonima i računarima, postavljanje na vašu domenu i kratka obuka za upravljanje sadržajem.",
    deliverables: [
      "Povezivanje domene i SSL sigurnosnog certifikata",
      "Povezivanje sa Google pretragom (Google Search Console)",
      "Podrška i održavanje nakon lansiranja",
    ],
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="proces"
      className="relative py-28 px-4 bg-[#05070a] border-t border-slate-900 transition-colors duration-500 overflow-hidden"
    >
      {/* Ambijentalni Glow Efekat */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-red-950/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-blue-900/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Sekcije */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff2a4b] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff2a4b]"></span>
              Jasni koraci saradnje
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Kako Radimo Zajedno
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base">
            Od ideje do online narudžbi bez stresa i skrivenih troškova.
            Transparentan proces u 4 definisana koraka.
          </p>
        </div>

        {/* Timeline / Grid Koraka */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-16">
          {stepsData.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group relative rounded-2xl bg-[#0b101b] border border-slate-800/80 hover:border-[#ff2a4b]/50 transition-all duration-300 p-7 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(255,42,75,0.12)]"
              >
                <div>
                  {/* Zaglavlje kartice: Broj i Ikona */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-slate-700 group-hover:text-[#ff2a4b] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#060a12] border border-slate-800 flex items-center justify-center text-[#ff2a4b] group-hover:scale-105 group-hover:border-[#ff2a4b]/40 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Naslov i podnaslov */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#ff2a4b] transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-4">
                    {step.subtitle}
                  </div>

                  {/* Opis */}
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Šta dobijate u ovom koraku */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    Isporučeno:
                  </div>
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2a4b] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner unutar procesa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-[#0b101b] via-[#0d1629] to-[#0b101b] border border-slate-800 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Imate ideju ili želite unaprijediti postojeću stranicu?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
              Besplatno ćemo proći kroz vaš projekat, definisati prioritete i napraviti tačan plan bez ikakvih obaveza.
            </p>
          </div>

          <a
            href="#kontakt"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#ff2a4b] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#dc2626] hover:shadow-[0_0_20px_rgba(255,42,75,0.45)] transition-all active:scale-95"
          >
            Dogovori Besplatan Poziv
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}