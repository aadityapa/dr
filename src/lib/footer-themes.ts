import { getCardPastelByKey } from "./pastel-palette";
import { getServicePastel } from "./service-colors";

export type FooterTheme = {
  from: string;
  via: string;
  to: string;
  accent: string;
  curve: string;
};

const pageThemes: Record<string, FooterTheme> = {
  home: {
    from: "#2f4d3b",
    via: "#2a4535",
    to: "#1e3328",
    accent: "#f5cf79",
    curve: "#2f4d3b",
  },
  about: {
    from: "#4a3570",
    via: "#3d2d5c",
    to: "#2e2248",
    accent: "#c9bce8",
    curve: "#4a3570",
  },
  services: {
    from: "#1e4a6e",
    via: "#1a3f5e",
    to: "#143047",
    accent: "#a8cce8",
    curve: "#1e4a6e",
  },
  conditions: {
    from: "#2d6047",
    via: "#254f3b",
    to: "#1c3d2e",
    accent: "#b5e0cc",
    curve: "#2d6047",
  },
  gallery: {
    from: "#8b4a2a",
    via: "#743e24",
    to: "#5c311c",
    accent: "#f5c9b0",
    curve: "#8b4a2a",
  },
  resources: {
    from: "#2a5580",
    via: "#234868",
    to: "#1c3a52",
    accent: "#b3d9f2",
    curve: "#2a5580",
  },
  library: {
    from: "#7a6010",
    via: "#664f0d",
    to: "#523f0a",
    accent: "#f5e09a",
    curve: "#7a6010",
  },
  contact: {
    from: "#8b4030",
    via: "#743628",
    to: "#5c2b20",
    accent: "#f0b8a8",
    curve: "#8b4030",
  },
  appointment: {
    from: "#1a5f66",
    via: "#164f55",
    to: "#123f44",
    accent: "#9adee3",
    curve: "#1a5f66",
  },
  faqs: {
    from: "#50308b",
    via: "#432874",
    to: "#36205d",
    accent: "#d8c0f5",
    curve: "#50308b",
  },
  locations: {
    from: "#354a70",
    via: "#2c3d5c",
    to: "#233048",
    accent: "#b8cce8",
    curve: "#354a70",
  },
  outcomes: {
    from: "#3f5e2a",
    via: "#344f23",
    to: "#293f1b",
    accent: "#c8e8b0",
    curve: "#3f5e2a",
  },
  screening: {
    from: "#2a7058",
    via: "#235c49",
    to: "#1c483a",
    accent: "#b8f5d8",
    curve: "#2a7058",
  },
  journey: {
    from: "#5a308b",
    via: "#4b2874",
    to: "#3c205d",
    accent: "#e0c0f5",
    curve: "#5a308b",
  },
  legal: {
    from: "#3a5a3a",
    via: "#304b30",
    to: "#263c26",
    accent: "#bfd4bf",
    curve: "#3a5a3a",
  },
};

function themeFromPastel(text: string, accent: string): FooterTheme {
  return {
    from: text,
    via: text,
    to: text,
    accent,
    curve: text,
  };
}

/** Resolve footer gradient from current route — each page section gets its own colour */
export function getFooterTheme(pathname: string): FooterTheme {
  if (pathname === "/") return pageThemes.home;

  if (pathname.startsWith("/services/")) {
    const slug = pathname.split("/")[2];
    if (slug) {
      const p = getServicePastel(slug);
      return themeFromPastel(p.text, p.accent);
    }
    return pageThemes.services;
  }
  if (pathname === "/services") return pageThemes.services;

  if (pathname.startsWith("/conditions/")) {
    const slug = pathname.split("/")[2];
    if (slug) {
      const p = getCardPastelByKey(slug);
      return themeFromPastel(p.text, p.accent);
    }
    return pageThemes.conditions;
  }
  if (pathname === "/conditions") return pageThemes.conditions;

  if (pathname.startsWith("/locations/")) return pageThemes.locations;
  if (pathname === "/locations") return pageThemes.locations;

  if (pathname.startsWith("/resources/")) return pageThemes.resources;
  if (pathname === "/resources") return pageThemes.resources;

  if (pathname === "/about") return pageThemes.about;
  if (pathname === "/gallery") return pageThemes.gallery;
  if (pathname === "/library") return pageThemes.library;
  if (pathname === "/contact") return pageThemes.contact;
  if (pathname === "/appointment") return pageThemes.appointment;
  if (pathname === "/faqs") return pageThemes.faqs;
  if (pathname === "/therapy-outcomes") return pageThemes.outcomes;
  if (pathname === "/screening") return pageThemes.screening;
  if (pathname === "/therapy-journey") return pageThemes.journey;

  if (
    pathname === "/privacy" ||
    pathname === "/terms" ||
    pathname === "/medical-disclaimer" ||
    pathname === "/accessibility"
  ) {
    return pageThemes.legal;
  }

  return pageThemes.home;
}
