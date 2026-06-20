"use client";

import { useLocale } from "next-intl";

import type { AppLocale } from "@/i18n/routing";
import { getPhase3Content } from "@/lib/i18n/content/phase3-locale";

export function useLocaleContent() {
  const locale = useLocale() as AppLocale;
  return getPhase3Content(locale);
}
