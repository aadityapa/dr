"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { getNavLabel } from "@/lib/i18n";
import { locationPages } from "@/lib/locations";
import { conditions, navItems, services, siteConfig } from "@/lib/site-data";

export function Footer() {
  const { messages } = useLanguage();

  const legalLinks = [
    { label: messages.footer.privacy, href: "/privacy" },
    { label: messages.footer.terms, href: "/terms" },
    { label: messages.footer.medicalDisclaimer, href: "/medical-disclaimer" },
    { label: messages.footer.accessibility, href: "/accessibility" },
  ];

  return (
    <footer className="bg-white/70 shadow-[0_-8px_30px_-20px_rgba(47,77,59,0.12)]" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
            {siteConfig.name}
          </h3>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">{messages.site.title}</p>
          <p className="mt-2 text-sm font-medium italic text-[color:var(--color-terracotta)]">{messages.hero.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">{messages.site.description}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-sage-dark)]">
            {messages.footer.explore}
          </h4>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]">
                  {getNavLabel(messages, item.href)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/library" className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]">
                {messages.nav.library}
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]">
                {messages.nav.faqs}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-sage-dark)]">
            {messages.footer.services}
          </h4>
          <ul className="mt-3 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-sage-dark)]">
            {messages.footer.conditions}
          </h4>
          <ul className="mt-3 space-y-2">
            {conditions.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link href={`/conditions/${c.slug}`} className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]">
                  {c.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/conditions" className="text-sm font-medium text-[color:var(--color-sage-dark)] hover:underline">
                {messages.footer.viewAll}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-sage-dark)]">
            {messages.footer.locations}
          </h4>
          <ul className="mt-3 space-y-2">
            {locationPages.slice(0, 4).map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]">
                  {l.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/locations" className="text-sm font-medium text-[color:var(--color-sage-dark)] hover:underline">
                {messages.footer.allLocations}
              </Link>
            </li>
          </ul>
          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-sage-dark)]">
            {messages.footer.contact}
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
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
            <li className="text-xs">Reg. No. {siteConfig.registrationNumber}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--color-border)]/50">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
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
