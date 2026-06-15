# Site Audit Report — Thrive with sharuja

**Project:** Pediatric Occupational Therapy clinic (Dr. Sharuja Sarap) · Kandivali West, Mumbai
**Stack:** Next.js 15.5 (App Router, Turbopack) · React 19 · TypeScript · Tailwind v4 · Framer Motion · GSAP · Lenis · react-hook-form · Zod · Resend
**Live:** https://drsharujasarap.vercel.app/ · **Audited commit base:** `ecd67e1`
**Date:** 2026-06-15

> Overall the codebase is mature and high quality: strong SEO/metadata helpers, rich JSON-LD (Organization, WebSite, MedicalClinic, LocalBusiness, Physician, FAQPage, Breadcrumb, Article, AggregateRating, Review), `next/image` everywhere, focus-visible rings on inputs/buttons, skip-link, `prefers-reduced-motion` handling, sitemap + robots + manifest. The findings below are mostly hardening, legal/trust gaps, and contrast tightening — not structural problems.

Severity legend: **Critical** (legal/security/blocking) · **High** · **Medium** · **Low**

---

## 1. Performance

| # | Severity | File | Issue | Fix |
|---|----------|------|-------|-----|
| P1 | Medium | `next.config.ts` | No `Cache-Control` / immutable headers for static assets; relies on Vercel defaults | Acceptable on Vercel; add security headers (see S1) — covered |
| P2 | Low | `src/components/home/hero-section.tsx`, `gallery-grid.tsx`, `about/page.tsx` | Remote images (`lh3.googleusercontent.com`) lack `sizes` attribute, so responsive `srcset` is not optimally selected | Add `sizes` to non-`fill` responsive images |
| P3 | Low | `src/app/layout.tsx` | Google Fonts (Inter, Playfair) loaded without explicit `display: "swap"` (Next defaults to swap, but not pinned) | Pin `display: "swap"` to guarantee no FOIT |
| P4 | Low | All remote images | Images served from Google user-content CDN (placeholders); not in repo, cannot be re-encoded to AVIF/WebP locally | Manual: migrate to Cloudinary (already whitelisted) or `/public` for real photos |
| P5 | Low | `package.json` | `@google/stitch-sdk` dependency only used by `scripts/stitch-*.mjs` build tooling, not app runtime | Acceptable (dev tooling); leave |
| P6 | Manual | Live URL | Lighthouse not run in CI here | `npx lighthouse https://drsharujasarap.vercel.app --view` — run manually |

## 2. SEO

| # | Severity | File | Issue | Fix |
|---|----------|------|-------|-----|
| SE1 | — | `src/lib/metadata.ts`, `layout.tsx` | Per-page `title`/`description`/`canonical`/OG/Twitter all present via `buildPageMetadata` | ✅ Good, no change |
| SE2 | — | `src/lib/schema.ts` | MedicalClinic + Physician + LocalBusiness + Organization + FAQPage + Breadcrumb present and valid | ✅ Good |
| SE3 | Medium | `src/app/sitemap.ts` | New legal pages (privacy, terms, disclaimer, accessibility) not in sitemap | Add once pages exist |
| SE4 | Low | `src/app/robots.ts` | `disallow: ["/api/"]` correct; `host` set | ✅ Good |
| SE5 | Low | `src/lib/schema.ts` (`organizationSchema`) | `logo` points to dynamic `/opengraph-image` (1200×630, not square) — Google prefers a square logo | Manual: add square logo asset later |
| SE6 | Low | Headings | Single `<h1>` per page via `PageHero`/`HeroSection`; section titles are `<h2>` — hierarchy clean | ✅ Good |

## 3. Accessibility (WCAG 2.1 AA)

| # | Severity | File | Issue | Fix |
|---|----------|------|-------|-----|
| A1 | High | `src/app/globals.css` (`--color-muted: #67766d`) | ~4.35:1 on cream gradient — below 4.5:1 for normal body text | Darken to AA-compliant variant (closest accessible) |
| A2 | High | `--color-sage: #7d927f` used as small text (gallery category labels, icons-as-text) | ~3.3:1 on white — fails AA for normal text | Introduce darker `--color-sage-text` token for text usage; keep `--color-sage` for fills/large UI |
| A3 | Medium | `--color-terracotta: #be7a62` small italic text (footer tagline ~`text-sm`) | ~3.0:1 — fails for normal text | Use darker terracotta token for small text; large hero tagline (≥24px) is borderline-OK |
| A4 | — | `button.tsx`, `input.tsx`, `textarea.tsx` | `focus-visible:ring-2` present | ✅ Good (add explicit ring color for clarity) |
| A5 | — | `layout.tsx` | Skip-to-content link present | ✅ Good |
| A6 | — | `navbar.tsx` | `aria-expanded`, `aria-label` on menu toggle; nav landmarks labelled | ✅ Good |
| A7 | Low | `gallery-grid.tsx` lightbox | `role="dialog" aria-modal` but no focus trap / labelledby | Note as enhancement (low risk) |
| A8 | Medium | Images alt text | Hero/gallery alts are generic ("Warm Therapy Room"); should be descriptive & medically appropriate | Improve gallery alt text in `site-data.ts` |

## 4. Code Quality

| # | Severity | File | Issue | Fix |
|---|----------|------|-------|-----|
| C1 | Medium | `src/components/stitch/**` (24 files incl. `html/*.html`, `*.css`) | Entire Stitch legacy directory is **dead code** — no import anywhere in `src/app` or active components | Remove the directory |
| C2 | Medium | `src/app/` | No `error.tsx` / `global-error.tsx` error boundary | Add a styled global error boundary |
| C3 | Low | `src/app/loading.tsx` | Root loading state exists | ✅ Good |
| C4 | Low | `next.config.ts` `allowedDevOrigins: ["192.168.1.87"]` | Dev-only LAN IP hardcoded | Harmless (dev only); leave |
| C5 | Low | Internal links | All nav/footer links resolve to existing routes | ✅ Good |

## 5. Content & Trust

| # | Severity | File | Issue | Fix |
|---|----------|------|-------|-----|
| T1 | **Critical** | (missing) `/privacy` | No Privacy Policy — required for a site collecting names/emails/phone via forms | Create page |
| T2 | **Critical** | (missing) `/medical-disclaimer` | No Medical Disclaimer — essential for a health/medical website | Create page + link in footer |
| T3 | High | (missing) `/terms` | No Terms of Service | Create page |
| T4 | High | (missing) `/accessibility` | No Accessibility Statement | Create page |
| T5 | Medium | Footer | No links to legal pages; no global medical disclaimer line | Add legal nav + disclaimer line in footer |
| T6 | — | `manifest.ts`, `favicon.ico`, `opengraph-image.tsx` | PWA manifest + favicon + dynamic OG present | ✅ Good (icon set thin — see T7) |
| T7 | Low | `manifest.ts` | Only `favicon.ico` icon; no 192/512 maskable PNG | Note: add real PNG icons (needs binary asset — manual) |
| T8 | — | About/contact/credentials | Credentials, address, phone, email, map, hours all present | ✅ Good |

## 6. Security

| # | Severity | File | Issue | Fix |
|---|----------|------|-------|-----|
| S1 | High | `next.config.ts` | No security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS) | Add `async headers()` |
| S2 | — | API routes / client | `RESEND_API_KEY` read only server-side in route handlers; no secrets in client bundle | ✅ Good |
| S3 | Medium | `npm audit` | 2 **moderate** advisories: `postcss <8.5.10` pulled transitively by `next`. `npm audit fix --force` would downgrade Next to 9.x (**breaking**) | Do NOT force; build-time only, low real risk. Resolve via future Next minor upgrade — **manual** |
| S4 | Low | External `<Link target="_blank">` | `rel="noopener noreferrer"` already used | ✅ Good |

---

## Summary of actions taken in this pass
- **Security:** add full security-header set in `next.config.ts`.
- **Accessibility:** AA contrast tokens (`--color-muted`, new `--color-sage-text`/`--color-terracotta-text`), explicit focus ring color, descriptive gallery alt text, font `display: swap`, responsive `sizes`.
- **Trust/Legal (Critical):** add Privacy Policy, Medical Disclaimer, Terms, Accessibility Statement pages + footer legal nav + disclaimer line; add to sitemap.
- **Feature gap:** Newsletter signup (component + `/api/newsletter`).
- **Code quality:** add `error.tsx` global error boundary; remove dead `src/components/stitch` directory.

## Remaining manual tasks
- Run Lighthouse against live URL (before/after).
- Replace placeholder Google-CDN images with real, optimized clinic photos (Cloudinary already whitelisted); add square logo + 192/512 maskable PWA icons.
- Wire booking form to a real calendar (Cal.com / Calendly) and connect newsletter to a real ESP (Resend Audiences / Mailchimp).
- Use real Google Reviews API instead of static review data.
- Resolve `postcss` advisory via a future Next.js minor upgrade.
