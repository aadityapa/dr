import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "hi", "mr"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type AppLocale = (typeof routing.locales)[number];

export const LOCALE_COOKIE = "NEXT_LOCALE";
export const LOCALE_STORAGE_KEY = "thrive-locale";

export const localeLabels: Record<AppLocale, string> = {
  en: "English",
  hi: "हिंदी",
  mr: "मराठी",
};
