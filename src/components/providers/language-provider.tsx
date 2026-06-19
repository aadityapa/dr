"use client";

import { AnimatePresence, motion } from "framer-motion";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLocale, useMessages } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import {
  LOCALE_COOKIE,
  LOCALE_STORAGE_KEY,
  localeLabels,
  type AppLocale,
} from "@/i18n/routing";
import type { LocaleContent } from "@/lib/i18n/content/types";
import type { Messages } from "@/lib/i18n/types";

type LocaleMessages = Messages & { content: LocaleContent };

type LanguageContextValue = {
  locale: AppLocale;
  messages: Messages;
  content: LocaleContent;
  setLocale: (locale: AppLocale) => void;
  isTransitioning: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function setLocaleCookie(locale: AppLocale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;SameSite=Lax`;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale() as AppLocale;
  const allMessages = useMessages() as LocaleMessages;
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionLabel, setTransitionLabel] = useState<{ from: string; to: string } | null>(null);
  const [displayLocale, setDisplayLocale] = useState(locale);

  const { content, ...messages } = allMessages;

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    setLocaleCookie(locale);
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (!isTransitioning) {
      setDisplayLocale(locale);
    }
  }, [locale, isTransitioning]);

  const setLocale = useCallback(
    (next: AppLocale) => {
      if (next === locale) return;

      setTransitionLabel({ from: localeLabels[locale], to: localeLabels[next] });
      setIsTransitioning(true);

      window.setTimeout(() => {
        localStorage.setItem(LOCALE_STORAGE_KEY, next);
        setLocaleCookie(next);
        router.replace(pathname, { locale: next });
        setDisplayLocale(next);
      }, 500);

      window.setTimeout(() => {
        setIsTransitioning(false);
        setTransitionLabel(null);
      }, 1100);
    },
    [locale, pathname, router],
  );

  const value = useMemo(
    () => ({ locale: displayLocale, messages, content, setLocale, isTransitioning }),
    [displayLocale, messages, content, setLocale, isTransitioning],
  );

  return (
    <LanguageContext.Provider value={value}>
      <AnimatePresence mode="wait">
        {!isTransitioning ? (
          <motion.div
            key={displayLocale}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        ) : (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[color:var(--color-snow)]/95 backdrop-blur-sm"
            role="status"
            aria-live="polite"
            aria-label={messages.languageTransition.switching}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-full border border-[color:var(--color-border)] bg-white px-8 py-4 shadow-xl"
            >
              <p className="text-center text-sm font-medium text-[color:var(--color-muted)]">
                {transitionLabel?.from}
                <span className="mx-3 text-[color:var(--color-terracotta)]" aria-hidden="true">
                  →
                </span>
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className={
                    transitionLabel?.to === "मराठी"
                      ? "font-[family-name:var(--font-devanagari)] text-[color:var(--color-sage-dark)]"
                      : "text-[color:var(--color-sage-dark)]"
                  }
                >
                  {transitionLabel?.to}
                </motion.span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
