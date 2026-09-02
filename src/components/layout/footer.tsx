"use client";

import type { ReactNode } from "react";

import { Link, usePathname } from "@/i18n/navigation";
import { Mail, Phone } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { expertiseClusters } from "@/lib/client-content/expertise-clusters";
import { clientConditions } from "@/lib/client-content/conditions";
import { getFooterTheme } from "@/lib/footer-themes";
import { getNavLabel } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-data";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="text-xs text-white/70 transition hover:text-white hover:underline underline-offset-2"
    >
      {children}
    </Link>
  );
}

const quickExploreHrefs = [
  "/",
  "/about",
  "/expertise",
  "/conditions",
  "/resources",
  "/invite-sharuja",
  "/contact",
] as const;

export function Footer() {
  const pathname = usePathname();
  const { messages, content } = useLanguage();
  const theme = getFooterTheme(pathname);

  const legalLinks = [
    { label: messages.footer.privacy, href: "/privacy" },
    { label: messages.footer.terms, href: "/terms" },
    { label: messages.footer.medicalDisclaimer, href: "/medical-disclaimer" },
    { label: messages.footer.accessibility, href: "/accessibility" },
  ];

  return (
    <footer className="relative mt-10 w-full transition-colors duration-500" role="contentinfo">
      <div
        className="pointer-events-none absolute -top-6 left-0 right-0 h-6"
        style={{ background: theme.curve, clipPath: "ellipse(80% 100% at 50% 100%)" }}
        aria-hidden
      />

      <div
        className="text-white"
        style={{
          background: `linear-gradient(180deg, ${theme.from} 0%, ${theme.via} 55%, ${theme.to} 100%)`,
        }}
      >
        {/* Compact main row */}
        <div className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:items-start lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-3">
              <h3 className="font-[family-name:var(--font-serif)] text-lg font-semibold text-white">
                {siteConfig.name}
              </h3>
              <p className="mt-0.5 text-xs text-white/60">{messages.site.title}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Button
                  asChild
                  size="sm"
                  className="h-8 px-3 text-xs font-semibold !bg-none bg-white text-[#1f3a2b] shadow-md hover:bg-white/90"
                >
                  <Link href="/appointment">{messages.cta.book}</Link>
                </Button>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-1 text-xs text-white/75 hover:text-white"
                >
                  <Phone className="h-3 w-3" style={{ color: theme.accent }} aria-hidden />
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Explore */}
            <div className="lg:col-span-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
                {messages.footer.explore}
              </p>
              <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1">
                {quickExploreHrefs.map((href) => (
                  <li key={href}>
                    <FooterLink href={href}>{getNavLabel(messages, href)}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services + Conditions */}
            <div className="lg:col-span-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
                {messages.footer.services}
              </p>
              <ul className="mt-2 space-y-1">
                {expertiseClusters.slice(0, 4).map((s) => {
                  const localized = content.home.expertiseEcosystem.clusters[s.slug];
                  return (
                    <li key={s.slug}>
                      <FooterLink href={s.learnMoreHref}>{localized?.title ?? s.title}</FooterLink>
                    </li>
                  );
                })}
                <li>
                  <FooterLink href="/expertise">{messages.footer.viewAll}</FooterLink>
                </li>
              </ul>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-white/80">
                {messages.footer.conditions}
              </p>
              <ul className="mt-2 space-y-1">
                {clientConditions.slice(0, 3).map((c) => {
                  const localized = content.conditions[c.slug];
                  return (
                    <li key={c.slug}>
                      <FooterLink href={`/conditions/${c.slug}`}>{localized?.title ?? c.title}</FooterLink>
                    </li>
                  );
                })}
                <li>
                  <FooterLink href="/conditions">{messages.footer.viewAll}</FooterLink>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
                {messages.footer.contact}
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-white/70">
                <li>
                  {siteConfig.address.line1}, {siteConfig.address.city} – {siteConfig.address.postalCode}
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-white hover:underline"
                  >
                    <Mail className="h-3 w-3 shrink-0" style={{ color: theme.accent }} aria-hidden />
                    {siteConfig.email}
                  </a>
                </li>
                <li>{siteConfig.timings}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slim legal bar */}
        <div className="border-t border-white/10 bg-black/15">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-3 text-[10px] text-white/50 md:flex-row md:px-6 lg:px-8">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} {siteConfig.name}. {messages.footer.rights}
            </p>
            <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white hover:underline underline-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
