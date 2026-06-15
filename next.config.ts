import type { NextConfig } from "next";

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
      { source: "/milestones", destination: "/testimonials-milestones", permanent: true },
      { source: "/testimonials", destination: "/testimonials-milestones", permanent: true },
      { source: "/services/sensory-integration", destination: "/services/occupational-therapy", permanent: true },
      { source: "/services/feeding-therapy", destination: "/services/occupational-therapy", permanent: true },
      { source: "/services/adl-training", destination: "/services/occupational-therapy", permanent: true },
      { source: "/services/parent-counseling", destination: "/services/occupational-therapy", permanent: true },
      { source: "/services/group-sessions", destination: "/services/occupational-therapy", permanent: true },
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
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
