"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import {
  getContent,
  getMessages,
  isValidLocale,
  LOCALE_STORAGE_KEY,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import type { LocaleContent } from "@/lib/i18n/content";

type LanguageContextValue = {
  locale: Locale;
  messages: Messages;
  content: LocaleContent;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && isValidLocale(stored)) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const messages = useMemo(() => getMessages(locale), [locale]);
  const content = useMemo(() => getContent(locale), [locale]);

  const value = useMemo(() => ({ locale, messages, content, setLocale }), [locale, messages, content, setLocale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
