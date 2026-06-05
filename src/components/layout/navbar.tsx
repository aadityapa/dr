"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[color:var(--color-cream)]/90 shadow-[0_8px_30px_-20px_rgba(47,77,59,0.15)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)]">
          {siteConfig.shortName}
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-[color:var(--color-sage-dark)]"
                  : "text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/appointment">Book Consultation</Link>
          </Button>
        </div>
        <button
          type="button"
          className="rounded-xl border border-[color:var(--color-border)] p-2 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <nav
        className={cn(
          "grid overflow-hidden border-t border-[color:var(--color-border)] bg-white transition-[grid-template-rows,opacity] duration-300 lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 md:px-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[color:var(--color-sage-dark)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
