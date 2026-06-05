"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { AppointmentForm } from "@/components/forms/appointment-form";
import { ContactForm } from "@/components/forms/contact-form";

import type { StitchPageKey } from "./stitch-screen-map";
import { stitchHtmlByPage } from "./html/content";

import "./stitch-theme.css";
import "./html/inline-styles.css";

type StitchHtmlPageProps = {
  page: StitchPageKey;
};

function mountForm(slot: Element) {
  const host = document.createElement("div");
  host.className = "stitch-form-host rounded-[1.5rem] bg-white/90 p-6 shadow-[0_12px_40px_-16px_rgba(47,77,59,0.18)] md:p-8";
  slot.replaceWith(host);
  return host;
}

export function StitchHtmlPage({ page }: StitchHtmlPageProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [formHosts, setFormHosts] = useState<{ contact?: Element; appointment?: Element }>({});

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.08 },
    );

    root.querySelectorAll("section, main > div").forEach((section) => {
      section.classList.add("transition-all", "duration-700");
      observer.observe(section);
    });

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

    return () => observer.disconnect();
  }, [page]);

  return (
    <>
      <div
        ref={rootRef}
        className="stitch-landing bg-background text-on-background font-body-md"
        dangerouslySetInnerHTML={{ __html: stitchHtmlByPage[page] }}
      />
      {formHosts.contact ? createPortal(<ContactForm />, formHosts.contact) : null}
      {formHosts.appointment ? createPortal(<AppointmentForm />, formHosts.appointment) : null}
    </>
  );
}
