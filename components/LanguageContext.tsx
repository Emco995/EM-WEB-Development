"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations["bs"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      // 1. Provjera da li korisnik već ima sačuvan izbor
      const saved = typeof window !== "undefined" ? (localStorage.getItem("preferred_lang") as Language | null) : null;
      if (saved && (saved === "bs" || saved === "de" || saved === "en")) {
        setLanguageState(saved);
        return;
      }

      // 2. Fallback na jezik browsera
      if (typeof navigator !== "undefined" && navigator.language) {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith("de")) {
          setLanguageState("de");
        } else if (
          browserLang.startsWith("bs") ||
          browserLang.startsWith("hr") ||
          browserLang.startsWith("sr")
        ) {
          setLanguageState("bs");
        }
      }

      // 3. Sigurna geo-IP detekcija sa timeoutom
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      fetch("https://ipapi.co/json/", { signal: controller.signal })
        .then((res) => {
          if (!res.ok) throw new Error("Network response not ok");
          return res.json();
        })
        .then((data) => {
          clearTimeout(timeoutId);
          const country = data?.country_code?.toUpperCase();
          if (["BA", "HR", "RS", "ME"].includes(country)) {
            setLanguageState("bs");
          } else if (["DE", "AT", "CH"].includes(country)) {
            setLanguageState("de");
          } else {
            setLanguageState("en");
          }
        })
        .catch(() => {
          // Tihi fallback ako mreža blokira ipapi - ne ruši aplikaciju
        });
    } catch {
      // Ignoriši ako je pristup skladištu zabranjen
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("preferred_lang", lang);
      }
    } catch {
      // Privatni modovi koji blokiraju localStorage
    }
  };

  const activeTranslations = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: activeTranslations,
      }}
    >
      {/* Prikazujemo layout odmah; unutrašnji tekstovi se reaktivno ažuriraju bez bijelog ekrana */}
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}