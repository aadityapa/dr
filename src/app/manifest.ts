import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#2F4D3B",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/logo-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/logo-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      // Maskable icons carry a ~10% safe zone on the brand ground so Android
      // can crop them to any shape without clipping the logo.
      {
        src: "/images/icon-maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
