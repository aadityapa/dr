import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { articles } from "@/lib/articles";
import { clientConditions } from "@/lib/client-content/conditions";
import { expertiseAreas } from "@/lib/client-content/expertise";
import { locationPages } from "@/lib/locations";
import { siteConfig } from "@/lib/site-data";

type RouteEntry = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  lastModified?: Date;
};

function localizedUrl(locale: string, path: string) {
  return `${siteConfig.url}/${locale}${path === "/" ? "" : path}`;
}

function languageAlternates(path: string) {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, localizedUrl(locale, path)]),
  );
  return {
    ...languages,
    "x-default": localizedUrl(routing.defaultLocale, path),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Public marketing + legal pages. /services* intentionally omitted (301 → /expertise*).
  const staticRoutes: RouteEntry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/expertise", priority: 0.9, changeFrequency: "weekly" },
    { path: "/conditions", priority: 0.9, changeFrequency: "weekly" },
    { path: "/invite-sharuja", priority: 0.8, changeFrequency: "monthly" },
    { path: "/locations", priority: 0.85, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.85, changeFrequency: "weekly" },
    { path: "/library", priority: 0.85, changeFrequency: "weekly" },
    { path: "/faqs", priority: 0.85, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
    { path: "/testimonials-milestones", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/appointment", priority: 0.95, changeFrequency: "monthly" },
    { path: "/therapy-outcomes", priority: 0.85, changeFrequency: "monthly" },
    { path: "/screening", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/medical-disclaimer", priority: 0.4, changeFrequency: "yearly" },
    { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
  ];

  const expertiseRoutes: RouteEntry[] = expertiseAreas.map((s) => ({
    path: `/expertise/${s.slug}`,
    priority: 0.85,
    changeFrequency: "weekly",
  }));

  const conditionRoutes: RouteEntry[] = clientConditions.map((c) => ({
    path: `/conditions/${c.slug}`,
    priority: 0.8,
    changeFrequency: "weekly",
  }));

  const locationRoutes: RouteEntry[] = locationPages.map((l) => ({
    path: `/locations/${l.slug}`,
    priority: 0.85,
    changeFrequency: "monthly",
  }));

  const articleRoutes: RouteEntry[] = articles.map((a) => ({
    path: `/resources/${a.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: new Date(a.updatedAt ?? a.publishedAt),
  }));

  const allRoutes = [
    ...staticRoutes,
    ...expertiseRoutes,
    ...conditionRoutes,
    ...locationRoutes,
    ...articleRoutes,
  ];

  return allRoutes.flatMap(({ path, priority, changeFrequency, lastModified }) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, path),
      lastModified: lastModified ?? now,
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
