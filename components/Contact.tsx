"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  ArrowUpRight,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

interface ContactProps {
  prefilledData?: { summary: string; budget: string } | null;
}

export default function Contact({ prefilledData }: ContactProps) {
  const { t } = useLanguage();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentYear, setCurrentYear] = useState<string>("2026");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "E-Commerce Web Shop",
    budget: "1.000€ - 2.500€",
    message: "",
  });

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        budget: prefilledData.budget || prev.budget,
        message: prefilledData.summary || prev.message,
      }));
    }
  }, [prefilledData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      process.env.WEB3FORMS_ACCESS_KEY ||
      "";

    if (!accessKey) {
      setErrorMessage(
        "Access ključ nije pronađen u .env.local fajlu. Provjerite NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY."
      );
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[EM-DEV Upit] ${formData.name} - ${formData.serviceType}`,
          from_name: "EM-Web Development",
          name: formData.name,
          email: formData.email,
          service_type: formData.serviceType,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Došlo je do greške pri slanju upita.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        serviceType: "E-Commerce Web Shop",
        budget: "1.000€ - 2.500€",
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Nešto je pošlo po zlu. Pokušajte ponovo ili nam se javite na WhatsApp.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="kontakt"
      className="relative py-28 px-4 bg-gradient-to-b from-[#091326] via-[#0b1730] to-[#040812] border-t border-slate-800/80 transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-600/10 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] bg-blue-600/15 blur-[160px] pointer-events-none" />

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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff2a4b] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff2a4b] animate-ping"></span>
            {t.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* LIJEVA STRANA */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp kartica */}
            <a
              href="https://wa.me/4915123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-[#060c18]/85 backdrop-blur-md border border-slate-700/70 hover:border-emerald-500/60 transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {t.contact.waBadge}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                {t.contact.waTitle}
              </h4>
              <p className="text-xs text-slate-300 mb-3">
                {t.contact.waSub}
              </p>
              <span className="text-xs font-mono text-emerald-400 inline-flex items-center gap-1">
                {t.contact.waAction} <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Email info */}
            <div className="p-6 rounded-2xl bg-[#060c18]/85 backdrop-blur-md border border-slate-700/70">
              <div className="w-11 h-11 rounded-xl bg-[#0b162c] border border-slate-700 flex items-center justify-center text-[#ff2a4b] mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">{t.contact.emailTitle}</h4>
              <p className="text-xs text-slate-400 mb-3">
                {t.contact.emailSub}
              </p>
              <a
                href="mailto:contact@em-webdev.com"
                className="text-xs font-mono text-slate-200 hover:text-[#ff2a4b] transition-colors"
              >
                contact@em-webdev.com
              </a>
            </div>

            {/* Tržište & Garancija */}
            <div className="p-6 rounded-2xl bg-[#060c18]/85 backdrop-blur-md border border-slate-700/70 space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#ff2a4b] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">{t.contact.marketFocus}</div>
                  <div className="text-[11px] text-slate-400">{t.contact.marketSub}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">{t.contact.securityTitle}</div>
                  <div className="text-[11px] text-slate-400">{t.contact.securitySub}</div>
                </div>
              </div>
            </div>

          </div>

          {/* DESNA STRANA: Forma */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#060c18]/90 backdrop-blur-md border border-slate-700/80 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.contact.successTitle}</h3>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#0b162c] text-xs font-mono uppercase text-slate-300 border border-slate-700 hover:text-white transition-colors cursor-pointer"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-[#ff2a4b]" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                        {t.contact.formName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="npr. Adnan Hecic"
                        className="w-full px-4 py-3 rounded-xl bg-[#0b162c] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#ff2a4b] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                        {t.contact.formEmail}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ime@primjer.de"
                        className="w-full px-4 py-3 rounded-xl bg-[#0b162c] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#ff2a4b] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                        {t.contact.formService}
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b162c] border border-slate-700/80 text-slate-200 text-sm focus:outline-none focus:border-[#ff2a4b] transition-colors"
                      >
                        <option>E-Commerce Web Shop</option>
                        <option>Web Stranica za Lokalni Biznis</option>
                        <option>Redizajn & Brzina</option>
                        <option>Pravno Usklađivanje (DSGVO)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                        {t.contact.formBudget}
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b162c] border border-slate-700/80 text-slate-200 text-sm focus:outline-none focus:border-[#ff2a4b] transition-colors"
                      >
                        <option>500€ - 1.000€</option>
                        <option>1.000€ - 2.500€</option>
                        <option>2.500€ - 5.000€</option>
                        <option>Preko 5.000€</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                      {t.contact.formDesc}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.formDescPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b162c] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#ff2a4b] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#ff2a4b] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#dc2626] hover:shadow-[0_0_25px_rgba(255,42,75,0.45)] transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{t.contact.sending}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.contact.submitBtn}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* CENTRIRANI FOOTER */}
        <div className="pt-10 border-t border-slate-800 flex flex-col items-center justify-center gap-2 text-center text-xs font-mono text-slate-400">
          <div className="flex items-center justify-center gap-2 text-white font-bold text-sm">
            <Terminal className="w-4 h-4 text-[#ff2a4b]" />
            <span>EM-Web Development</span>
          </div>

          <p className="text-slate-500 text-[11px] sm:text-xs">
            © {currentYear} {t.contact.footerRights}
          </p>
        </div>

      </div>
    </section>
  );
}