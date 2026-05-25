import type { MetadataRoute } from "next";

import { services, siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/services",
    "/conditions",
    "/gallery",
    "/testimonials",
    "/testimonials-milestones",
    "/contact",
    "/appointment",
  ];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  return [...routes, ...serviceRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
