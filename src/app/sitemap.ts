import type { MetadataRoute } from "next";

import { articles } from "@/lib/articles";
import { conditionsContent } from "@/lib/conditions-content";
import { locationPages } from "@/lib/locations";
import { services, siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/conditions", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/locations", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/resources", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/therapy-journey", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/testimonials-milestones", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/appointment", priority: 0.95, changeFrequency: "monthly" as const },
  ];

  const serviceRoutes = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  }));

  const conditionRoutes = conditionsContent.map((c) => ({
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

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...conditionRoutes, ...locationRoutes, ...articleRoutes];

  return allRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
