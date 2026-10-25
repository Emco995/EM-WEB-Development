"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  business: string;
  projectUrl: string;
  resultMetric: string;
  metricLabel: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Automatizacija narudžbi i online plaćanje torti rasteretili su nas u potpunosti. Klijenti sami biraju veličine i ukuse, a nama stižu gotove narudžbe sa uplatom. Sve je urađeno brzo i profesionalno po njemačkim standardima.",
    author: "Tim Brunchito",
    role: "Osnivač & Glavni Slastičar",
    business: "Brunchito Cakes",
    projectUrl: "https://brunchito.de",
    resultMetric: "+45%",
    metricLabel: "Više online narudžbi",
  },
  {
    quote:
      "Prezentacija stolarske radionice je na potpuno novom nivou. Kupci lako pronalaze naš rad na Google pretrazi, pregledaju galeriju gotovog namještaja i kuhinja na telefonu, te se jednim klikom jave na WhatsApp za ponudu i izmjeru.",
    author: "Hećić Stil Tim",
    role: "Vlasnik firme Hećić Stil",
    business: "Stolarija Hećić Stil",
    projectUrl: "https://hecic-stil.vercel.app/",
    resultMetric: "1-Klik",
    metricLabel: "Upit za izmjeru",
  },
  {
    quote:
      "Showroom za dekoracije izgleda luksuzno i moderno. Slike se učitavaju momentalno, a kupci odmah mogu poslati upit za tačan komad koji žele. Tačnost u rokovima i saradnja za svaku pohvalu.",
    author: "Vintage Charm Tim",
    role: "Showroom Management",
    business: "Vintage Charm Dekoracije",
    projectUrl: "https://vintage-charm-dekoracije.vercel.app/",
    resultMetric: "98/100",
    metricLabel: "Google Speed ocjena",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-[#091326] via-[#0d1d3a] to-[#081020] border-t border-slate-800/80 transition-colors duration-500 overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-600/10 blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff2a4b] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff2a4b]"></span>
              Iskustva klijenata
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Rezultati Koji Govore Sami Za Sebe
            </h2>
          </div>
          <p className="text-slate-300 max-w-md text-sm sm:text-base">
            Poverenje vlasnika malih biznisa i brendova koji su podigli poslovanje na viši nivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.business}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-2xl bg-[#060c18]/90 backdrop-blur-md border border-slate-700/70 hover:border-[#ff2a4b]/60 transition-all duration-300 p-7 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(255,42,75,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700 group-hover:text-[#ff2a4b] transition-colors" />
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="p-3 rounded-xl bg-[#0b162c] border border-slate-800 mb-5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 uppercase font-mono tracking-wider">
                    {t.metricLabel}
                  </span>
                  <span className="text-sm font-black font-mono text-[#ff2a4b]">
                    {t.resultMetric}
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      {t.author}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {t.role} • <span className="text-slate-300 font-semibold">{t.business}</span>
                    </div>
                  </div>

                  <a
                    href={t.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#080d17] border border-slate-800 text-slate-400 hover:text-white hover:border-[#ff2a4b] transition-all"
                    aria-label="Posjeti web stranicu klijenta"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}