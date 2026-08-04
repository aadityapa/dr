"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeControls } from "@/components/providers/theme-controls";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { getNavLabel } from "@/lib/i18n";
import { primaryNavItems, secondaryNavItems, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function NavMoreDropdown({
  items,
  pathname,
  onNavigate,
}: {
  items: typeof secondaryNavItems;
  pathname: string;
  onNavigate?: () => void;
}) {
  const { messages } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        ref.current?.querySelector("button")?.focus();
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-0.5 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors",
          items.some((i) => pathname === i.href)
            ? "text-[color:var(--color-sage-dark)]"
            : "text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]",
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {messages.nav.more}
        <ChevronDown className={cn("h-3.5 w-3.5 transition", open && "rotate-180")} aria-hidden="true" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-[11rem] rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-snow)] py-1 shadow-lg shadow-black/5">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              className={cn(
                "block px-4 py-2.5 text-sm transition hover:bg-[color:var(--color-soft-green)]/40",
                pathname === item.href
                  ? "font-semibold text-[color:var(--color-sage-dark)]"
                  : "text-[color:var(--color-muted)]",
              )}
            >
              {getNavLabel(messages, item.href)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { messages } = useLanguage();
  const [open, setOpen] = useState(false);

  const allNavItems = [...primaryNavItems, ...secondaryNavItems];
  // Only 4 top-level items on desktop — the rest live in "More", so the bar
  // can never overflow, in any language, at any width.
  const desktopPrimary = primaryNavItems.slice(0, 4);
  const desktopMore = [...primaryNavItems.slice(4), ...secondaryNavItems];

  return (
    <header className="glass-nav sticky top-0 z-50 border-b border-[color:var(--color-border)]/60 bg-[color:var(--color-snow)]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:h-[4.25rem] sm:gap-4 md:px-6 lg:px-8">
        {/* Logo — fixed width, never overlaps nav */}
        <Link href="/" className="group shrink-0 pr-2 leading-none">
          <span className="block whitespace-nowrap font-[family-name:var(--font-serif)] text-base font-semibold tracking-tight text-[color:var(--color-sage-dark)] transition-colors group-hover:text-[color:var(--color-sage-text)] sm:text-lg">
            {siteConfig.shortName}
          </span>
          <span className="mt-0.5 hidden whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.22em] text-[color:var(--color-muted)] md:block">
            {messages.site.title}
          </span>
        </Link>

        {/* Desktop primary nav */}
        <nav
          className="hidden min-w-0 flex-1 items-center justify-center xl:flex"
          aria-label="Main navigation"
        >
          {desktopPrimary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-full px-2.5 py-1.5 text-[0.8125rem] font-medium transition-colors",
                pathname === item.href
                  ? "bg-[color:var(--color-soft-green)]/50 text-[color:var(--color-sage-dark)]"
                  : "text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]",
              )}
            >
              {getNavLabel(messages, item.href)}
            </Link>
          ))}
          <NavMoreDropdown items={desktopMore} pathname={pathname} />
        </nav>

        {/* Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5">
          <ThemeControls />
          <LanguageSwitcher className="hidden sm:block" />

          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden items-center gap-1.5 whitespace-nowrap text-sm font-medium text-[color:var(--color-sage-dark)] hover:underline 2xl:flex"
            aria-label={`Call ${siteConfig.phoneDisplay}`}
          >
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/appointment">{messages.cta.bookConsultation}</Link>
          </Button>

          {/* Mobile / tablet controls */}
          <LanguageSwitcher className="sm:hidden" />
          <a
            href={`tel:${siteConfig.phone}`}
            className="rounded-xl border border-[color:var(--color-border)] p-2 transition-colors hover:bg-[color:var(--color-soft-green)]/50 2xl:hidden"
            aria-label={`Call ${siteConfig.phoneDisplay}`}
          >
            <Phone className="h-4 w-4 text-[color:var(--color-sage-dark)]" />
          </a>
          <button
            type="button"
            className="rounded-xl border border-[color:var(--color-border)] p-2 xl:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? messages.common.closeMenu : messages.common.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <nav
        aria-label="Mobile navigation"
        inert={!open}
        className={cn(
          "grid overflow-hidden border-t border-[color:var(--color-border)] bg-[color:var(--color-snow)] transition-[grid-template-rows,opacity] duration-300 xl:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 md:px-6">
            {allNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition",
                  pathname === item.href
                    ? "bg-[color:var(--color-soft-green)]/40 text-[color:var(--color-sage-dark)]"
                    : "text-[color:var(--color-muted)] hover:bg-[color:var(--color-soft-green)]/20",
                )}
                onClick={() => setOpen(false)}
              >
                {getNavLabel(messages, item.href)}
              </Link>
            ))}
            <Button asChild className="mt-3 w-full">
              <Link href="/appointment" onClick={() => setOpen(false)}>
                {messages.cta.bookConsultation}
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
