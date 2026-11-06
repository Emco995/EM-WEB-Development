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
  const [language, setLanguageState] = useState<Language>("en"); // Početni siguran fallback

  useEffect(() => {
    // 1. Ako je korisnik već nekad ručno odabrao jezik, koristi taj izbor
    const saved = localStorage.getItem("preferred_lang") as Language | null;
    if (saved && (saved === "bs" || saved === "de" || saved === "en")) {
      setLanguageState(saved);
      return;
    }

    // 2. Brzi fallback prema jeziku browsera dok čekamo geo-IP
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

    // 3. Detekcija lokacije preko države (GeoIP)
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
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
        // U slučaju mrežnog bloka, ostaje jezik prepoznat iz browsera
      });
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred_lang", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language] || translations.en,
      }}
    >
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