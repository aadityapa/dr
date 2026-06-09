import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.87"],
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
