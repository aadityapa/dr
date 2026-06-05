"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { AppointmentForm } from "@/components/forms/appointment-form";
import { ContactForm } from "@/components/forms/contact-form";

import type { StitchPageKey } from "./stitch-screen-map";

type StitchHtmlEnhancerProps = {
  page: StitchPageKey;
  fullPage?: boolean;
};

const ROUTE_MAP: Record<string, string> = {
  "/": "/",
  "/about": "/about",
  "/services": "/services",
  "/conditions": "/conditions",
  "/gallery": "/gallery",
  "/milestones": "/testimonials-milestones",
  "/testimonials": "/testimonials-milestones",
  "/testimonials-milestones": "/testimonials-milestones",
  "/contact": "/contact",
  "/appointment": "/appointment",
  "#services": "/services",
  "#about": "/about",
  "#pricing": "/appointment",
  "#how-it-works": "/about",
  "#contact": "/contact",
  "#gallery": "/gallery",
  "#conditions": "/conditions",
  "#milestones": "/testimonials-milestones",
};

const TEXT_ROUTES: [string, string][] = [
  ["book", "/appointment"],
  ["schedule", "/appointment"],
  ["consultation", "/appointment"],
  ["start the journey", "/appointment"],
  ["discovery call", "/appointment"],
  ["sign up", "/appointment"],
  ["screening", "/appointment"],
  ["view our services", "/services"],
  ["all services", "/services"],
  ["view all programs", "/services"],
  ["contact support", "/contact"],
  ["send us a message", "/contact"],
  ["parent resources", "/contact"],
  ["view demo", "/contact"],
  ["download guide", "/contact"],
  ["start tracking", "/testimonials-milestones"],
  ["milestone guide", "/testimonials-milestones"],
  ["explore conditions", "/conditions"],
  ["meet our team", "/about"],
  ["watch our story", "/about"],
  ["start viewing", "/gallery"],
];

function mountForm(slot: Element) {
  const host = document.createElement("div");
  host.className =
    "stitch-form-host rounded-[1.5rem] bg-white/90 p-6 shadow-[0_12px_40px_-16px_rgba(47,77,59,0.18)] md:p-8";
  slot.replaceWith(host);
  return host;
}

function normalizeHref(href: string | null) {
  if (!href) return null;
  const trimmed = href.trim();
  if (ROUTE_MAP[trimmed]) return ROUTE_MAP[trimmed];
  if (trimmed === "#" || trimmed === "") return null;
  return trimmed;
}

function resolveTextRoute(text: string) {
  const lower = text.toLowerCase();
  for (const [needle, route] of TEXT_ROUTES) {
    if (lower.includes(needle)) return route;
  }
  return null;
}

function wireStitchLinks(root: HTMLElement) {
  root.querySelectorAll("a[href]").forEach((el) => {
    const anchor = el as HTMLAnchorElement;
    const normalized = normalizeHref(anchor.getAttribute("href"));
    if (!normalized) return;
    if (normalized !== anchor.getAttribute("href")) {
      anchor.setAttribute("href", normalized);
    }
  });

  root.querySelectorAll("a, button").forEach((el) => {
    if (el.closest("form")) return;

    const anchor = el as HTMLAnchorElement;
    if (el.tagName === "A") {
      const href = normalizeHref(anchor.getAttribute("href"));
      if (href?.startsWith("/")) return;
    }

    const text = el.textContent?.toLowerCase() ?? "";
    const route = resolveTextRoute(text);
    if (!route) return;

    el.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = route;
    });
  });
}

function wireGalleryFilters(root: HTMLElement) {
  const buttons = [...root.querySelectorAll<HTMLButtonElement>(".filter-btn")];
  const items = [...root.querySelectorAll<HTMLElement>(".gallery-item")];
  if (!buttons.length || !items.length) return;

  const setActive = (active: HTMLButtonElement) => {
    buttons.forEach((btn) => {
      btn.classList.remove("active", "bg-primary-container", "text-on-primary-container", "shadow-md");
      btn.classList.add("bg-surface-container", "text-on-surface-variant");
    });
    active.classList.add("active", "bg-primary-container", "text-on-primary-container", "shadow-md");
    active.classList.remove("bg-surface-container", "text-on-surface-variant");
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const label = btn.textContent?.trim() ?? "";
      const category = label === "All Moments" ? "all" : label;
      setActive(btn);
      items.forEach((item) => {
        const cat = item.getAttribute("data-category");
        item.style.display = category === "all" || cat === category ? "" : "none";
      });
    });
  });
}

function wireConditionBubbles(root: HTMLElement) {
  root.querySelectorAll<HTMLButtonElement>("button.bubble-float").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const popup = btn.querySelector<HTMLElement>("[id^='bubble-']");
      if (!popup) return;
      const isHidden = popup.classList.contains("hidden");
      root.querySelectorAll<HTMLElement>("[id^='bubble-']").forEach((el) => el.classList.add("hidden"));
      if (isHidden) popup.classList.remove("hidden");
    });
  });
}

function setupRevealAnimations(root: HTMLElement) {
  root.querySelectorAll(".reveal").forEach((el) => {
    el.classList.add("active");
  });
}

export function StitchHtmlEnhancer({ page, fullPage = page === "home" }: StitchHtmlEnhancerProps) {
  const [formHosts, setFormHosts] = useState<{ contact?: Element; appointment?: Element }>({});

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(`[data-stitch-page="${page}"]`);
    if (!root) return;

    setupRevealAnimations(root);

    const hosts: { contact?: Element; appointment?: Element } = {};
    const contactSlot = root.querySelector('[data-stitch-form-slot="contact"]');
    const appointmentSlot = root.querySelector('[data-stitch-form-slot="appointment"]');
    if (contactSlot) hosts.contact = mountForm(contactSlot);
    if (appointmentSlot) hosts.appointment = mountForm(appointmentSlot);
    setFormHosts(hosts);

    wireStitchLinks(root);
    wireGalleryFilters(root);
    wireConditionBubbles(root);

    if (!fullPage) return;

    const elements = root.querySelectorAll(".floating-element");
    const onMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      elements.forEach((el) => {
        const speed = Number(el.getAttribute("data-speed") ?? 1);
        const x = ((centerX - e.clientX) * speed) / 100;
        const y = ((centerY - e.clientY) * speed) / 100;
        (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [page, fullPage]);

  return (
    <>
      {formHosts.contact ? createPortal(<ContactForm />, formHosts.contact) : null}
      {formHosts.appointment ? createPortal(<AppointmentForm />, formHosts.appointment) : null}
    </>
  );
}
