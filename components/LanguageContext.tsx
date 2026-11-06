"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations["bs"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Sigurna funkcija za čitanje skladišta bez rušenja Messenger WebViewa
function getSafeStorage(key: string): string | null {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      return window.localStorage.getItem(key);
    }
  } catch {
    // Messenger baca SecurityError ako je uključena striktna zaštita kolačića
    return null;
  }
  return null;
}

function setSafeStorage(key: string, value: string) {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  } catch {
    // Tiho ignoriši ako WebView zabranjuje trajno čuvanje
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // 1. Provjeri da li postoji ranije sačuvan izbor
    const saved = getSafeStorage("preferred_lang") as Language | null;
    if (saved && (saved === "bs" || saved === "de" || saved === "en")) {
      setLanguageState(saved);
      return;
    }

    // 2. Detekcija preko browser jezika (trenutno i 100% sigurno unutar Messengera)
    try {
      if (typeof navigator !== "undefined" && navigator.language) {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith("de")) {
          setLanguageState("de");
        } else if (
          browserLang.startsWith("bs") ||
          browserLang.startsWith("hr") ||
          browserLang.startsWith("sr") ||
          browserLang.startsWith("me")
        ) {
          setLanguageState("bs");
        } else {
          setLanguageState("en");
        }
      }
    } catch {
      setLanguageState("en");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setSafeStorage("preferred_lang", lang);
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