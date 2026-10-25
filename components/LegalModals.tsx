"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Scale, FileText } from "lucide-react";

export type LegalModalType = "impressum" | "datenschutz" | "agb" | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export default function LegalModals({ activeModal, onClose }: LegalModalsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (activeModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#0b101b] border border-slate-800 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden max-h-[85vh] flex flex-col"
        >
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#ff2a4b] to-transparent shrink-0" />

          {/* Header sa vidljivim X dugmetom */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0b101b]/95 backdrop-blur-md border-b border-slate-800/80">
            <div className="text-xs font-mono uppercase text-[#ff2a4b]">
              Rechtliche Dokumente
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#060a12] border border-slate-800 text-slate-300 hover:text-white hover:border-[#ff2a4b] transition-all cursor-pointer flex items-center justify-center"
              aria-label="Zatvori"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto p-6 space-y-5 text-slate-300 text-xs sm:text-sm leading-relaxed">
            {activeModal === "impressum" && (
              <>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#ff2a4b] mb-1">
                  <Scale className="w-4 h-4" />
                  <span>Rechtliche Angaben // § 5 TMG</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">Impressum</h3>

                <div className="p-4 rounded-xl bg-[#060a12] border border-slate-800/80 space-y-2 text-xs font-mono">
                  <div className="text-white font-bold text-sm">EM-Web Development</div>
                  <div>Inhaber / Vlasnik: Edin Mujanović</div>
                  <div>Standort / Adresa: Bayern / Deutschland & Region</div>
                  <div>E-Mail: contact@em-webdev.com</div>
                  <div>Web: https://em-webdev.com</div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-bold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h4>
                  <p className="text-slate-400 text-xs">
                    EM-Web Development. Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  </p>

                  <h4 className="text-white font-bold pt-2">Urheberrecht (Autorska prava):</h4>
                  <p className="text-slate-400 text-xs">
                    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung bedürfen der schriftlichen Zustimmung.
                  </p>
                </div>
              </>
            )}

            {activeModal === "datenschutz" && (
              <>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#ff2a4b] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>DSGVO / GDPR Compliance</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">Datenschutzerklärung</h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <h4 className="text-white font-bold mb-1">1. Datenschutz auf einen Blick</h4>
                    <p className="text-slate-400 text-xs">
                      Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#060a12] border border-slate-800/80 space-y-2">
                    <h4 className="text-white font-bold mb-1">2. Datenerfassung auf dieser Website (Kontaktformular)</h4>
                    <p className="text-slate-400 text-xs">
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-1">3. SSL- bzw. TLS-Verschlüsselung</h4>
                    <p className="text-slate-400 text-xs">
                      Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-1">4. Ihre Rechte (Auskunft, Löschung, Sperrung)</h4>
                    <p className="text-slate-400 text-xs">
                      Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
                    </p>
                  </div>
                </div>
              </>
            )}

            {activeModal === "agb" && (
              <>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#ff2a4b] mb-1">
                  <FileText className="w-4 h-4" />
                  <span>Geschäftsbedingungen</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">Allgemeine Geschäftsbedingungen (AGB)</h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <h4 className="text-white font-bold mb-1">1. Geltungsbereich</h4>
                    <p className="text-slate-400 text-xs">
                      Für alle Verträge, Beratungen, Webentwicklungs- und E-Commerce-Dienstleistungen zwischen EM-Web Development und dem Auftraggeber gelten ausschließlich die nachfolgenden Bedingungen.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-1">2. Vertragsschluss & Angebote</h4>
                    <p className="text-slate-400 text-xs">
                      Angebote und Kostenvoranschläge sind freibleibend. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung oder Beginn der Entwicklungsarbeiten zustande.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#060a12] border border-slate-800/80 space-y-2">
                    <h4 className="text-white font-bold mb-1">3. Zahlungsbedingungen & Meilensteine</h4>
                    <p className="text-slate-400 text-xs">
                      Zahlungen erfolgen nach vereinbarten Meilensteinen (z.B. Anzahlung bei Projektstart, Restzahlung nach erfolgreichem Launch und Freigabe). Alle Preise verstehen sich transparent ohne versteckte Nebenkosten.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-1">4. Urheber- und Nutzungsrechte</h4>
                    <p className="text-slate-400 text-xs">
                      Nach vollständiger Bezahlung der Vergütung erhält der Auftraggeber die vereinbarten Nutzungsrechte am erstellten Werk (Code, Design, Konfiguration).
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="px-6 py-3.5 bg-[#080d17] border-t border-slate-800/80 flex justify-between items-center text-xs font-mono text-slate-500">
            <span>Pritisnite ESC za izlaz</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#060a12] border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider hover:bg-slate-900 transition-all cursor-pointer"
            >
              Zatvori
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}