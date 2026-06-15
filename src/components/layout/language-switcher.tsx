"use client";

import { ChevronDown, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/components/providers/language-provider";
import { localeLabels, locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, messages } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function select(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-xl border border-[color:var(--color-border)] bg-white/80 px-2.5 py-2 text-xs font-medium text-[color:var(--color-sage-dark)] transition hover:bg-white"
        aria-label={messages.common.selectLanguage}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Globe className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline">{localeLabels[locale]}</span>
        <span className="sm:hidden uppercase">{locale}</span>
        <ChevronDown className={cn("h-3 w-3 transition", open && "rotate-180")} aria-hidden="true" />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={messages.common.selectLanguage}
          className="absolute right-0 top-full z-50 mt-1 min-w-[8rem] overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-white py-1 shadow-lg"
        >
          {locales.map((code) => (
            <li key={code} role="option" aria-selected={locale === code}>
              <button
                type="button"
                onClick={() => select(code)}
                className={cn(
                  "w-full px-3 py-2 text-left text-sm transition hover:bg-[color:var(--color-soft-green)]/40",
                  locale === code
                    ? "font-semibold text-[color:var(--color-sage-dark)]"
                    : "text-[color:var(--color-muted)]",
                )}
              >
                {localeLabels[code]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
