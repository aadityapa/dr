import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-data";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #f7f3eb 0%, #dce7d5 50%, #e8ddcc 100%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#be7a62",
            fontStyle: "italic",
            marginBottom: 16,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#2f4d3b",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 32, color: "#67766d", marginTop: 20 }}>{siteConfig.title} · Mumbai</div>
        <div style={{ fontSize: 24, color: "#7d927f", marginTop: 32 }}>
          {siteConfig.doctorName} · {siteConfig.experienceYears}+ Years Experience
        </div>
      </div>
    ),
    { ...size },
  );
}
