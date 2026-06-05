"use client";

import { usePathname } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { FloatingWhatsapp } from "@/components/layout/floating-whatsapp";
import { Navbar } from "@/components/layout/navbar";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFullStitchHome = pathname === "/";

  return (
    <>
      {!isFullStitchHome && <Navbar />}
      {children}
      {!isFullStitchHome && <Footer />}
      {!isFullStitchHome && <FloatingWhatsapp />}
    </>
  );
}
