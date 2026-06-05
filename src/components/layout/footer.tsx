import Link from "next/link";

import { navItems, siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-white/70 shadow-[0_-8px_30px_-20px_rgba(47,77,59,0.12)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
            {siteConfig.shortName}
          </h3>
          <p className="mt-2 text-sm font-medium text-[color:var(--color-sage-dark)]">{siteConfig.tagline}</p>
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
            <li>{siteConfig.address}</li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.timings}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
