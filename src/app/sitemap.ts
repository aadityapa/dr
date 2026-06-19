import type { MetadataRoute } from "next";

import { articles } from "@/lib/articles";
import { clientConditions } from "@/lib/client-content/conditions";
import { expertiseAreas } from "@/lib/client-content/expertise";
import { locationPages } from "@/lib/locations";
import { siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/expertise", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/conditions", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/invite-sharuja", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/locations", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/resources", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/library", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/faqs", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/testimonials-milestones", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/appointment", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/therapy-outcomes", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/screening", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/medical-disclaimer", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const expertiseRoutes = expertiseAreas.map((s) => ({
    path: `/expertise/${s.slug}`,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  }));

  const conditionRoutes = clientConditions.map((c) => ({
    path: `/conditions/${c.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  const locationRoutes = locationPages.map((l) => ({
    path: `/locations/${l.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const articleRoutes = articles.map((a) => ({
    path: `/resources/${a.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const allRoutes = [...staticRoutes, ...expertiseRoutes, ...conditionRoutes, ...locationRoutes, ...articleRoutes];

  return allRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
