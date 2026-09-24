# Thrive with sharuja

Production website for **Thrive with sharuja** — pediatric occupational therapy built with Next.js 15, React 19, and Tailwind CSS v4. Page designs are sourced from [Google Stitch](https://stitch.withgoogle.com) and rendered as optimized Stitch HTML integrated with React forms and site navigation.

**Live:** [thrivewithsharuja.com](https://thrivewithsharuja.com)

## Stack

- Next.js 15 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- React Hook Form + Zod validation
- Resend (contact & appointment emails)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm run start
```

Set environment variables (see `.env.example`):

- `RESEND_API_KEY` — email delivery
- `NEXT_PUBLIC_SITE_URL` — canonical site URL for SEO

## Stitch design sync (optional)

To refresh page HTML from the Stitch project:

```bash
npm run stitch:fetch   # download latest screens
npm run stitch:sync    # generate src/components/stitch/html/content.ts
```

Source HTML is stored in `stitch-source/fetched/`.

## Project structure

```
src/app/              # Routes (home, about, services, contact, etc.)
src/components/stitch/  # Stitch page renderer + synced HTML
src/components/layout/ # Navbar, footer, site chrome
src/components/forms/  # Contact & appointment forms
stitch-source/        # Raw Stitch HTML (dev/sync only)
scripts/              # Stitch fetch & sync utilities
```

## Deploy

Deploy to [Vercel](https://vercel.com) or any Node.js host that supports Next.js 15.

Repository: [github.com/aadityapa/dr](https://github.com/aadityapa/dr)

### How deploys work

Vercel is connected to the GitHub repo. Nothing is uploaded by hand:

```bash
npm run build          # always build locally first — catches type errors before Vercel does
git add -A
git commit -m "describe the change"
git push origin main   # Vercel builds and deploys automatically (~2–3 min)
```

Pushing to any other branch creates a preview URL; pushing to `main` deploys to production. Watch progress under **Vercel → Deployments**.

### Where things live

| What | Where | Notes |
|---|---|---|
| Redirects | `next.config.ts` → `redirects()` | **Do not duplicate these in `vercel.json`.** Vercel-level redirects run *before* the locale middleware and would bypass `/en` `/hi` `/mr` detection. |
| Security headers | `next.config.ts` → `headers()` | HSTS, X-Frame-Options, Permissions-Policy, frame-ancestors |
| Cache headers for crawl files | `vercel.json` → `headers` | `/llms.txt`, `/robots.txt`, `/sitemap.xml`, `/images/*` |
| Function region | `vercel.json` → `regions: ["bom1"]` | Mumbai — lowest latency for Indian visitors |
| `robots.txt` | `src/app/robots.ts` | Dynamic; allows AI crawlers explicitly |
| `sitemap.xml` | `src/app/sitemap.ts` | Dynamic; all routes × 3 locales with hreflang |
| `llms.txt` | `src/app/llms.txt/route.ts` | Dynamic; generated from `siteConfig` + content arrays |
| Domain / www redirect | Vercel → Settings → Domains | Apex is primary; `www` 308s to it. No code needed. |

### `llms.txt` — nothing to configure in Vercel

It is a route handler in the codebase, so it deploys with every push and is live at
`https://thrivewithsharuja.com/llms.txt`. There is no file to upload and no Vercel setting.
To change its contents, edit `src/app/llms.txt/route.ts` or the data it reads from
(`siteConfig`, `clientConditions`, `expertiseAreas`, `locationPages`).


## Deployment checklist

- Set `NEXT_PUBLIC_SITE_URL` to `https://thrivewithsharuja.com` (no trailing slash) in Vercel → Settings → Environment Variables, for Production. All canonicals, hreflang alternates, the sitemap, Open Graph URLs and JSON-LD IDs derive from it.
- Add `thrivewithsharuja.com` in Vercel → Settings → Domains and mark it the **primary** domain, so the `.vercel.app` host 308-redirects to it instead of serving duplicate content.
- Point DNS at Vercel with the registrar: apex `A` record to `76.76.21.21`, plus a `CNAME` for `www` to `cname.vercel-dns.com`.
- Decide apex vs `www` and keep the other as a redirect only — the canonical host must match `NEXT_PUBLIC_SITE_URL` exactly.
- After DNS resolves, resubmit the sitemap (`/sitemap.xml`) in Google Search Console under the new property.
