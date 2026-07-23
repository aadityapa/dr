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
  async redirects() {
    return [
      { source: "/therapy-journey", destination: "/expertise", permanent: true },
      { source: "/testimonials", destination: "/testimonials-milestones", permanent: true },
      { source: "/services", destination: "/expertise", permanent: true },
      { source: "/services/:slug", destination: "/expertise/:slug", permanent: true },
      { source: "/services/sensory-integration", destination: "/expertise/sensory-integration", permanent: true },
      { source: "/services/feeding-therapy", destination: "/expertise/oral-placement-therapy", permanent: true },
      { source: "/services/adl-training", destination: "/expertise/looking-beyond-a-diagnosis", permanent: true },
      { source: "/services/parent-counseling", destination: "/expertise/looking-beyond-a-diagnosis", permanent: true },
      { source: "/services/group-sessions", destination: "/expertise/looking-beyond-a-diagnosis", permanent: true },
      { source: "/services/occupational-therapy", destination: "/expertise/looking-beyond-a-diagnosis", permanent: true },
      { source: "/services/handwriting-training", destination: "/expertise/handwriting-without-tears", permanent: true },
      { source: "/services/brain-gym", destination: "/expertise/brain-gym", permanent: true },
      { source: "/services/aquatic-therapy", destination: "/expertise/aquatic-therapy", permanent: true },
      // Short condition URLs for SEO
      { source: "/autism", destination: "/conditions/autism-spectrum-disorder", permanent: true },
      { source: "/adhd", destination: "/conditions/adhd", permanent: true },
      { source: "/sensory-processing", destination: "/conditions/sensory-processing-difficulties", permanent: true },
      { source: "/developmental-delay", destination: "/conditions/developmental-delay", permanent: true },
      { source: "/learning-difficulties", destination: "/conditions/learning-difficulties", permanent: true },
      { source: "/handwriting-difficulties", destination: "/conditions/handwriting-difficulties", permanent: true },
      { source: "/fine-motor-challenges", destination: "/conditions/fine-motor-challenges", permanent: true },
      { source: "/gross-motor-challenges", destination: "/conditions/gross-motor-difficulties", permanent: true },
      { source: "/primitive-reflex-retention", destination: "/conditions/primitive-reflex-retention", permanent: true },
      { source: "/emotional-regulation", destination: "/conditions/emotional-regulation-difficulties", permanent: true },
      { source: "/school-readiness", destination: "/conditions/school-readiness-concerns", permanent: true },
      { source: "/cerebral-palsy", destination: "/conditions/cerebral-palsy", permanent: true },
      { source: "/down-syndrome", destination: "/conditions/down-syndrome", permanent: true },
      { source: "/feeding-difficulties", destination: "/conditions/feeding-oral-motor-challenges", permanent: true },
      { source: "/social-participation", destination: "/conditions/social-participation-challenges", permanent: true },
      // Local SEO short URLs
      { source: "/occupational-therapist-mumbai", destination: "/locations/occupational-therapist-mumbai", permanent: true },
      { source: "/pediatric-occupational-therapist-kandivali", destination: "/locations/pediatric-occupational-therapist-kandivali", permanent: true },
      { source: "/aquatic-therapy-mumbai", destination: "/locations/aquatic-therapy-mumbai", permanent: true },
      { source: "/brain-gym-mumbai", destination: "/locations/brain-gym-mumbai", permanent: true },
      { source: "/handwriting-training-mumbai", destination: "/locations/handwriting-training-mumbai", permanent: true },
      { source: "/autism-support-mumbai", destination: "/locations/autism-therapy-support-mumbai", permanent: true },
    ];
  },
  images: {
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
    optimizePackageImports: ["lucide-react"],
  },
};

export default withNextIntl(nextConfig);
