# Thrive with sharuja

Production website for **Thrive with sharuja** — pediatric occupational therapy built with Next.js 15, React 19, and Tailwind CSS v4. Page designs are sourced from [Google Stitch](https://stitch.withgoogle.com) and rendered as optimized Stitch HTML integrated with React forms and site navigation.

**Live:** [drsharujasarap.vercel.app](https://drsharujasarap.vercel.app)

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
