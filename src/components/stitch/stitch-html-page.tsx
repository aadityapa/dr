"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { AppointmentForm } from "@/components/forms/appointment-form";
import { ContactForm } from "@/components/forms/contact-form";

import type { StitchPageKey } from "./stitch-screen-map";
import { stitchHtmlByPage } from "./html/content";

import "./stitch-theme.css";
import "./html/inline-styles.css";
import "./html/home-styles.css";

type StitchHtmlPageProps = {
  page: StitchPageKey;
  fullPage?: boolean;
};

function mountForm(slot: Element) {
  const host = document.createElement("div");
  host.className = "stitch-form-host rounded-[1.5rem] bg-white/90 p-6 shadow-[0_12px_40px_-16px_rgba(47,77,59,0.18)] md:p-8";
  slot.replaceWith(host);
  return host;
}

export function StitchHtmlPage({ page, fullPage = page === "home" }: StitchHtmlPageProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [formHosts, setFormHosts] = useState<{ contact?: Element; appointment?: Element }>({});

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    root.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    if (fullPage) {
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

      const nav = root.querySelector("#top-nav");
      const onScroll = () => {
        if (!nav) return;
        if (window.scrollY > 20) {
          nav.classList.add("py-xs", "shadow-lg");
          nav.classList.remove("py-sm", "shadow-sm");
        } else {
          nav.classList.add("py-sm", "shadow-sm");
          nav.classList.remove("py-xs", "shadow-lg");
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      window.addEventListener("scroll", onScroll);
      onScroll();

      const hosts: { contact?: Element; appointment?: Element } = {};
      const contactSlot = root.querySelector('[data-stitch-form-slot="contact"]');
      const appointmentSlot = root.querySelector('[data-stitch-form-slot="appointment"]');
      if (contactSlot) hosts.contact = mountForm(contactSlot);
      if (appointmentSlot) hosts.appointment = mountForm(appointmentSlot);
      setFormHosts(hosts);

      root.querySelectorAll("a, button").forEach((el) => {
        const text = el.textContent?.toLowerCase() ?? "";
        if (
          text.includes("book") ||
          text.includes("schedule") ||
          text.includes("start the journey") ||
          text.includes("consultation")
        ) {
          el.addEventListener("click", (event) => {
            if (el.closest("form")) return;
            if (el.tagName === "A" && (el as HTMLAnchorElement).getAttribute("href")?.startsWith("/")) return;
            event.preventDefault();
            window.location.href = "/appointment";
          });
        }
        if (text.includes("view our services") || text.includes("all services")) {
          el.addEventListener("click", (event) => {
            if ((el as HTMLAnchorElement).getAttribute("href")?.startsWith("/")) return;
            event.preventDefault();
            window.location.href = "/services";
          });
        }
        if (text.includes("contact support")) {
          el.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "/contact";
          });
        }
      });

      return () => {
        revealObserver.disconnect();
        document.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("scroll", onScroll);
      };
    }

    const hosts: { contact?: Element; appointment?: Element } = {};
    const contactSlot = root.querySelector('[data-stitch-form-slot="contact"]');
    const appointmentSlot = root.querySelector('[data-stitch-form-slot="appointment"]');
    if (contactSlot) hosts.contact = mountForm(contactSlot);
    if (appointmentSlot) hosts.appointment = mountForm(appointmentSlot);
    setFormHosts(hosts);

    root.querySelectorAll("button").forEach((btn) => {
      const text = btn.textContent?.toLowerCase() ?? "";
      if (text.includes("book") || text.includes("get started") || text.includes("consultation")) {
        btn.addEventListener("click", (e) => {
          if (btn.closest("form")) return;
          e.preventDefault();
          window.location.href = "/appointment";
        });
      }
    });

    return () => revealObserver.disconnect();
  }, [page, fullPage]);

  return (
    <>
      <div
        ref={rootRef}
        className={`stitch-landing bg-background text-on-background font-body-md ${fullPage ? "stitch-home" : ""}`}
        dangerouslySetInnerHTML={{ __html: stitchHtmlByPage[page] }}
      />
      {formHosts.contact ? createPortal(<ContactForm />, formHosts.contact) : null}
      {formHosts.appointment ? createPortal(<AppointmentForm />, formHosts.appointment) : null}
    </>
  );
}
