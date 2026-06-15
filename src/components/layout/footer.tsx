"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { getNavLabel } from "@/lib/i18n";
import { locationPages } from "@/lib/locations";
import { conditions, navItems, secondaryNavItems, services, siteConfig } from "@/lib/site-data";

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">{title}</h4>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-sm text-white/65 transition hover:text-white hover:underline underline-offset-4">
      {children}
    </Link>
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
    <footer className="relative mt-20 w-full" role="contentinfo">
      {/* Curved transition from page content */}
      <div
        className="pointer-events-none absolute -top-12 left-0 right-0 h-12 bg-[color:var(--color-sage-dark)]"
        style={{ clipPath: "ellipse(75% 100% at 50% 100%)" }}
        aria-hidden
      />

      <div className="bg-gradient-to-b from-[color:var(--color-sage-dark)] via-[#2a4535] to-[#1e3328] text-white">
        {/* Main footer */}
        <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-16 md:px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:items-start lg:gap-x-10 lg:gap-y-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-4">
              <h3 className="font-[family-name:var(--font-serif)] text-2xl font-semibold text-white">
                {siteConfig.name}
              </h3>
              <p className="mt-1 text-sm text-white/60">{messages.site.title}</p>
              <p className="mt-3 font-[family-name:var(--font-serif)] text-base italic text-[color:var(--color-sun)]/90">
                {messages.hero.tagline}
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">{messages.site.description}</p>
              <div className="mt-6">
                <Button asChild size="sm" className="bg-white text-[color:var(--color-sage-dark)] hover:bg-white/90">
                  <Link href="/appointment">{messages.cta.bookConsultation}</Link>
                </Button>
              </div>
            </div>

            {/* Explore */}
            <div className="lg:col-span-2">
              <FooterColumn title={messages.footer.explore}>
                <ul className="space-y-2.5">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <FooterLink href={item.href}>{getNavLabel(messages, item.href)}</FooterLink>
                    </li>
                  ))}
                  {exploreExtras.map((item) => (
                    <li key={item.href}>
                      <FooterLink href={item.href}>{getNavLabel(messages, item.href)}</FooterLink>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            {/* 2×2 link grid */}
            <div className="grid gap-10 sm:col-span-2 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
              <FooterColumn title={messages.footer.services}>
                <ul className="space-y-2.5">
                  {services.slice(0, 6).map((s) => (
                    <li key={s.slug}>
                      <FooterLink href={`/services/${s.slug}`}>{s.title}</FooterLink>
                    </li>
                  ))}
                  <li>
                    <FooterLink href="/services">{messages.footer.viewAll}</FooterLink>
                  </li>
                </ul>
              </FooterColumn>

              <FooterColumn title={messages.footer.locations}>
                <ul className="space-y-2.5">
                  {locationPages.slice(0, 4).map((l) => (
                    <li key={l.slug}>
                      <FooterLink href={`/locations/${l.slug}`}>{l.title}</FooterLink>
                    </li>
                  ))}
                  <li>
                    <FooterLink href="/locations">{messages.footer.allLocations}</FooterLink>
                  </li>
                </ul>
              </FooterColumn>

              <FooterColumn title={messages.footer.conditions}>
                <ul className="space-y-2.5">
                  {conditions.slice(0, 5).map((c) => (
                    <li key={c.slug}>
                      <FooterLink href={`/conditions/${c.slug}`}>{c.title}</FooterLink>
                    </li>
                  ))}
                  <li>
                    <FooterLink href="/conditions">{messages.footer.viewAll}</FooterLink>
                  </li>
                </ul>
              </FooterColumn>

              <FooterColumn title={messages.footer.contact}>
                <ul className="space-y-3 text-sm text-white/65">
                  <li className="flex gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-sun)]/80" aria-hidden />
                    <span>
                      {siteConfig.address.line1}
                      <br />
                      {siteConfig.address.line2}, {siteConfig.address.line3}
                      <br />
                      {siteConfig.address.city} – {siteConfig.address.postalCode}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-[color:var(--color-sun)]/80" aria-hidden />
                    <a href={`tel:${siteConfig.phone}`} className="transition hover:text-white hover:underline">
                      {siteConfig.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 shrink-0 text-[color:var(--color-sun)]/80" aria-hidden />
                    <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white hover:underline">
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 shrink-0 text-[color:var(--color-sun)]/80" aria-hidden />
                    <span>{siteConfig.timings}</span>
                  </li>
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 lg:px-8">
            <p className="text-center text-xs leading-relaxed text-white/55">
              <strong className="font-semibold text-white/75">{messages.footer.medicalDisclaimer}:</strong>{" "}
              {messages.footer.disclaimer}{" "}
              <Link href="/medical-disclaimer" className="font-medium text-white/75 underline-offset-4 hover:text-white hover:underline">
                {messages.footer.readDisclaimer}
              </Link>
              .
            </p>
            <nav aria-label="Legal" className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/55 transition hover:text-white hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="mt-4 text-center text-xs text-white/45">
              © {new Date().getFullYear()} {siteConfig.name}. {messages.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
