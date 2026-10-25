"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Store,
  ShieldCheck,
  Zap,
  CreditCard,
  Search,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  icon: typeof ShoppingBag;
  highlight: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "ecommerce",
    badge: "Visoka Konverzija",
    title: "E-Commerce & Online Prodavnice",
    description:
      "Izrada prilagođenih internet prodavnica sa fokusom na jednostavno naručivanje, moderan dizajn i maksimalnu stopu završenih kupovina.",
    features: [
      "Integracija Stripe i PayPal checkout sistema",
      "Prilagođeni kalkulatori i konfiguratori artikala",
      "Automatska e-mail obavještenja za kupca i vlasnika",
      "Pregledna i responzivna korpa za mobitele",
    ],
    icon: ShoppingBag,
    highlight: "Spremno za primanje uplata od prvog dana",
  },
  {
    id: "local-business",
    badge: "Lokalni Rast",
    title: "Web Stranice za Lokalne Biznise",
    description:
      "Reprezentativne web prezentacije za frizerske salone, restorane, radionice i uslužne djelatnosti koje privlače nove kupce iz vašeg grada.",
    features: [
      "Optimizacija za Google pretragu i Google Maps (Local SEO)",
      "Interaktivni cjenovnici i galerije radova",
      "1-klik zakazivanje termina (WhatsApp i telefonski poziv)",
      "Brzo učitavanje ispod 1 sekunde na mobilnim mrežama",
    ],
    icon: Store,
    highlight: "Pretvara posjetioce u stvarne klijente",
  },
  {
    id: "legal-performance",
    badge: "Sigurnost & Zakon",
    title: "DSGVO Usklađenost & Optimizacija",
    description:
      "Pravna usklađenost sa strogim EU i njemačkim propisima, uz maksimalnu brzinu koja garantuje visoke pozicije na pretraživačima.",
    features: [
      "Pravne stranice (Impressum, Datenschutzerklärung, AGB)",
      "Cookie consent banner po njemačkim standardima",
      "Core Web Vitals optimizacija (ocjena 95+ na Google PageSpeed)",
      "SSL enkripcija i zaštita podataka korisnika",
    ],
    icon: ShieldCheck,
    highlight: "100% miran san pred EU i njemačkim zakonima",
  },
];

export default function Services() {
  return (
    <section
      id="usluge"
      className="relative py-28 px-4 bg-gradient-to-b from-[#091326] via-[#0d1d3a] to-[#081020] border-t border-slate-800/80 transition-colors duration-500 overflow-hidden"
    >
      {/* Plavi i crveni ambijentalni glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-red-600/10 blur-[150px] pointer-events-none" />

      {/* Suptilna mrežica */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Sekcije */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff2a4b] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff2a4b]"></span>
              Šta nudim vašem biznisu
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Usluge & Rješenja
            </h2>
          </div>
          <p className="text-slate-300 max-w-md text-sm sm:text-base">
            Ne prodajem samo linije koda, već digitalna rješenja koja donose narudžbe,
            nove klijente i rasterećuju vaše svakodnevno poslovanje.
          </p>
        </div>

        {/* 3 Glavne Kartice Usluga */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-2xl bg-[#060c18]/85 backdrop-blur-md border border-slate-700/70 hover:border-[#ff2a4b]/60 transition-all duration-300 p-8 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(255,42,75,0.15)]"
              >
                <div>
                  {/* Zaglavlje kartice */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0b162c] border border-slate-700 flex items-center justify-center text-[#ff2a4b] group-hover:scale-105 group-hover:border-[#ff2a4b]/40 transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-[#0b162c] text-[#ff2a4b] border border-red-500/20">
                      {service.badge}
                    </span>
                  </div>

                  {/* Naslov i opis */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff2a4b] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Lista mogućnosti */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-slate-800/80">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#ff2a4b] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Istaknuti rezultat & CTA */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 mb-4 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff2a4b]" />
                    <span className="text-slate-300 font-semibold">{service.highlight}</span>
                  </div>

                  <a
                    href="#kontakt"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0b162c] border border-slate-700/80 text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#ff2a4b] hover:border-[#ff2a4b] transition-all group/btn"
                  >
                    <span>Zatraži Ponudu za Ovo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dodatni Bar Garancija i Standarda */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#060c18]/90 border border-slate-700/70 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Zap className="w-7 h-7 text-[#ff2a4b] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Top Brzina</div>
              <div className="text-[11px] text-slate-400">Core Web Vitals 95+</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <CreditCard className="w-7 h-7 text-[#ff2a4b] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Online Plaćanja</div>
              <div className="text-[11px] text-slate-400">Stripe & PayPal ready</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Search className="w-7 h-7 text-[#ff2a4b] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Lokalni SEO</div>
              <div className="text-[11px] text-slate-400">Vidljivost na Google-u</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <ShieldCheck className="w-7 h-7 text-[#ff2a4b] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">DSGVO Spreman</div>
              <div className="text-[11px] text-slate-400">Njemačka & EU pravila</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}