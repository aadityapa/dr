import Link from "next/link";

import { navItems, siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-white/70 shadow-[0_-8px_30px_-20px_rgba(47,77,59,0.12)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
            {siteConfig.name}
          </h3>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">{siteConfig.title}</p>
          <p className="mt-2 text-sm font-medium italic text-[color:var(--color-terracotta)]">{siteConfig.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">{siteConfig.description}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-sage-dark)]">Explore</h4>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-sage-dark)]">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
            <li>{siteConfig.address.line1}</li>
            <li>{siteConfig.address.line2}, {siteConfig.address.line3}</li>
            <li>{siteConfig.address.city} – {siteConfig.address.postalCode}</li>
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
      <div className="border-t border-[color:var(--color-border)]/50 py-4 text-center text-xs text-[color:var(--color-muted)]">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
