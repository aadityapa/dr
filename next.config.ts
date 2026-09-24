import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Clickjacking protection via the modern frame-ancestors directive.
  // A full script/style CSP is intentionally omitted to avoid breaking
  // Next.js inline runtime scripts and JSON-LD; add with a nonce later.
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.87"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async rewrites() {
    return [
      // /favicon.ico was 404ing: the .ico file lives under app/[locale]/, where
      // Next ignores the favicon convention. Google and many user agents request
      // /favicon.ico directly, so serve the 192px brand icon at that path.
      // (Move the file to app/favicon.ico and drop this once convenient.)
      { source: "/favicon.ico", destination: "/images/logo-192.png" },
    ];
  },
  async redirects() {
    return [
      // Locale-prefixed variants (localePrefix is "always", so real URLs carry /en|/hi|/mr)
      { source: "/:locale(en|hi|mr)/therapy-journey", destination: "/:locale/expertise", permanent: true },
      { source: "/:locale(en|hi|mr)/testimonials", destination: "/:locale/testimonials-milestones", permanent: true },
      { source: "/:locale(en|hi|mr)/services/sensory-integration", destination: "/:locale/expertise/sensory-integration", permanent: true },
      { source: "/:locale(en|hi|mr)/services/feeding-therapy", destination: "/:locale/expertise/oral-placement-therapy", permanent: true },
      { source: "/:locale(en|hi|mr)/services/adl-training", destination: "/:locale/expertise/looking-beyond-a-diagnosis", permanent: true },
      { source: "/:locale(en|hi|mr)/services/parent-counseling", destination: "/:locale/expertise/looking-beyond-a-diagnosis", permanent: true },
      { source: "/:locale(en|hi|mr)/services/group-sessions", destination: "/:locale/expertise/looking-beyond-a-diagnosis", permanent: true },
      { source: "/:locale(en|hi|mr)/services/occupational-therapy", destination: "/:locale/expertise/looking-beyond-a-diagnosis", permanent: true },
      { source: "/:locale(en|hi|mr)/services/handwriting-training", destination: "/:locale/expertise/handwriting-without-tears", permanent: true },
      { source: "/:locale(en|hi|mr)/services/brain-gym", destination: "/:locale/expertise/brain-gym", permanent: true },
      { source: "/:locale(en|hi|mr)/services/aquatic-therapy", destination: "/:locale/expertise/aquatic-therapy", permanent: true },
      { source: "/:locale(en|hi|mr)/services", destination: "/:locale/expertise", permanent: true },
      { source: "/:locale(en|hi|mr)/services/:slug", destination: "/:locale/expertise/:slug", permanent: true },
      // Unprefixed legacy URLs — destinations carry /en to avoid a second hop
      // through the locale middleware. Specific slugs are listed before the
      // catch-all so they win.
      { source: "/therapy-journey", destination: "/en/expertise", permanent: true },
      { source: "/testimonials", destination: "/en/testimonials-milestones", permanent: true },
      { source: "/services", destination: "/en/expertise", permanent: true },
      { source: "/services/sensory-integration", destination: "/en/expertise/sensory-integration", permanent: true },
      { source: "/services/feeding-therapy", destination: "/en/expertise/oral-placement-therapy", permanent: true },
      { source: "/services/adl-training", destination: "/en/expertise/looking-beyond-a-diagnosis", permanent: true },
      { source: "/services/parent-counseling", destination: "/en/expertise/looking-beyond-a-diagnosis", permanent: true },
      { source: "/services/group-sessions", destination: "/en/expertise/looking-beyond-a-diagnosis", permanent: true },
      { source: "/services/occupational-therapy", destination: "/en/expertise/looking-beyond-a-diagnosis", permanent: true },
      { source: "/services/handwriting-training", destination: "/en/expertise/handwriting-without-tears", permanent: true },
      { source: "/services/brain-gym", destination: "/en/expertise/brain-gym", permanent: true },
      { source: "/services/aquatic-therapy", destination: "/en/expertise/aquatic-therapy", permanent: true },
      { source: "/services/:slug", destination: "/en/expertise/:slug", permanent: true },
      // Old article slugs -> new articles (article library replaced Aug 2026)
      { source: "/:locale(en|hi|mr)/resources/signs-your-child-may-need-occupational-therapy", destination: "/:locale/resources/signs-your-child-may-benefit-from-occupational-therapy", permanent: true },
      { source: "/:locale(en|hi|mr)/resources/preparing-child-for-first-ot-appointment", destination: "/:locale/resources/preparing-your-child-for-first-occupational-therapy-appointment", permanent: true },
      { source: "/:locale(en|hi|mr)/resources/early-intervention-developmental-delay", destination: "/:locale/resources/why-early-intervention-matters", permanent: true },
      { source: "/:locale(en|hi|mr)/resources/understanding-sensory-processing-in-children", destination: "/:locale/resources", permanent: true },
      { source: "/:locale(en|hi|mr)/resources/brain-gym-for-children-with-adhd", destination: "/:locale/resources", permanent: true },
      { source: "/:locale(en|hi|mr)/resources/handwriting-struggles-when-to-seek-help", destination: "/:locale/resources", permanent: true },
      { source: "/:locale(en|hi|mr)/resources/benefits-of-aquatic-therapy-for-children", destination: "/:locale/resources", permanent: true },
      { source: "/:locale(en|hi|mr)/resources/autism-and-occupational-therapy-guide", destination: "/:locale/resources", permanent: true },
      // Short condition URLs for SEO.
      // Destinations carry /en explicitly: an unprefixed destination would be
      // redirected a second time by the locale middleware (two hops), and Google
      // would crawl and report the intermediate URL.
      { source: "/autism", destination: "/en/conditions/autism-spectrum-disorder", permanent: true },
      { source: "/adhd", destination: "/en/conditions/adhd", permanent: true },
      { source: "/sensory-processing", destination: "/en/conditions/sensory-processing-difficulties", permanent: true },
      { source: "/developmental-delay", destination: "/en/conditions/developmental-delay", permanent: true },
      { source: "/learning-difficulties", destination: "/en/conditions/learning-difficulties", permanent: true },
      { source: "/handwriting-difficulties", destination: "/en/conditions/handwriting-difficulties", permanent: true },
      { source: "/fine-motor-challenges", destination: "/en/conditions/fine-motor-challenges", permanent: true },
      { source: "/gross-motor-challenges", destination: "/en/conditions/gross-motor-difficulties", permanent: true },
      { source: "/primitive-reflex-retention", destination: "/en/conditions/primitive-reflex-retention", permanent: true },
      { source: "/emotional-regulation", destination: "/en/conditions/emotional-regulation-difficulties", permanent: true },
      { source: "/school-readiness", destination: "/en/conditions/school-readiness-concerns", permanent: true },
      { source: "/cerebral-palsy", destination: "/en/conditions/cerebral-palsy", permanent: true },
      { source: "/down-syndrome", destination: "/en/conditions/down-syndrome", permanent: true },
      { source: "/feeding-difficulties", destination: "/en/conditions/feeding-oral-motor-challenges", permanent: true },
      { source: "/social-participation", destination: "/en/conditions/social-participation-challenges", permanent: true },
      // Local SEO short URLs
      { source: "/occupational-therapist-mumbai", destination: "/en/locations/occupational-therapist-mumbai", permanent: true },
      { source: "/pediatric-occupational-therapist-kandivali", destination: "/en/locations/pediatric-occupational-therapist-kandivali", permanent: true },
      { source: "/aquatic-therapy-mumbai", destination: "/en/locations/aquatic-therapy-mumbai", permanent: true },
      { source: "/brain-gym-mumbai", destination: "/en/locations/brain-gym-mumbai", permanent: true },
      { source: "/handwriting-training-mumbai", destination: "/en/locations/handwriting-training-mumbai", permanent: true },
      { source: "/autism-support-mumbai", destination: "/en/locations/autism-therapy-support-mumbai", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default withNextIntl(nextConfig);
