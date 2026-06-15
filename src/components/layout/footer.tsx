"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { getNavLabel } from "@/lib/i18n";
import { locationPages } from "@/lib/locations";
import { conditions, navItems, secondaryNavItems, services, siteConfig } from "@/lib/site-data";

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <h4 className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-sage-dark)]">
        {title}
      </h4>
      <div className="mt-4">{children}</div>
    </div>
  );
}

const exploreHrefs = new Set(navItems.map((item) => item.href));
const exploreExtras = secondaryNavItems.filter((item) => !exploreHrefs.has(item.href));

export function Footer() {
  const { messages } = useLanguage();

  const legalLinks = [
    { label: messages.footer.privacy, href: "/privacy" },
    { label: messages.footer.terms, href: "/terms" },
    { label: messages.footer.medicalDisclaimer, href: "/medical-disclaimer" },
    { label: messages.footer.accessibility, href: "/accessibility" },
  ];

  return (
    <footer className="w-full bg-white/70 shadow-[0_-8px_30px_-20px_rgba(47,77,59,0.12)]" role="contentinfo">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
              {siteConfig.name}
            </h3>
            <p className="mt-1 text-sm text-[color:var(--color-muted)]">{messages.site.title}</p>
            <p className="mt-2 text-sm font-medium italic text-[color:var(--color-terracotta)]">{messages.hero.tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[color:var(--color-muted)]">
              {messages.site.description}
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <FooterColumn title={messages.footer.explore}>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]"
                    >
                      {getNavLabel(messages, item.href)}
                    </Link>
                  </li>
                ))}
                {exploreExtras.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]"
                    >
                      {getNavLabel(messages, item.href)}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>

          {/* Services, Locations, Conditions, Contact — 2×2 grid for aligned section headers */}
          <div className="grid gap-10 sm:col-span-2 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            <FooterColumn title={messages.footer.services}>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title={messages.footer.locations}>
              <ul className="space-y-2">
                {locationPages.slice(0, 4).map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/locations/${l.slug}`}
                      className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]"
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/locations"
                    className="text-sm font-medium text-[color:var(--color-sage-dark)] hover:underline"
                  >
                    {messages.footer.allLocations}
                  </Link>
                </li>
              </ul>
            </FooterColumn>

            <FooterColumn title={messages.footer.conditions}>
              <ul className="space-y-2">
                {conditions.slice(0, 5).map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/conditions/${c.slug}`}
                      className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/conditions"
                    className="text-sm font-medium text-[color:var(--color-sage-dark)] hover:underline"
                  >
                    {messages.footer.viewAll}
                  </Link>
                </li>
              </ul>
            </FooterColumn>

            <FooterColumn title={messages.footer.contact}>
              <ul className="space-y-2 text-sm text-[color:var(--color-muted)]">
                <li>{siteConfig.address.line1}</li>
                <li>
                  {siteConfig.address.line2}, {siteConfig.address.line3}
                </li>
                <li>
                  {siteConfig.address.city} – {siteConfig.address.postalCode}
                </li>
                <li>
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-[color:var(--color-sage-dark)]">
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-[color:var(--color-sage-dark)]">
                    {siteConfig.email}
                  </a>
                </li>
                <li>{siteConfig.timings}</li>
              </ul>
            </FooterColumn>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--color-border)]/50">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 md:px-6 lg:px-8">
          <p className="text-center text-xs leading-relaxed text-[color:var(--color-muted)]">
            <strong className="font-semibold text-[color:var(--color-sage-dark)]">{messages.footer.medicalDisclaimer}:</strong>{" "}
            {messages.footer.disclaimer}{" "}
            <Link href="/medical-disclaimer" className="font-medium text-[color:var(--color-sage-dark)] hover:underline">
              {messages.footer.readDisclaimer}
            </Link>
            .
          </p>
          <nav aria-label="Legal" className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-4 text-center text-xs text-[color:var(--color-muted)]">
            © {new Date().getFullYear()} {siteConfig.name}. {messages.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
