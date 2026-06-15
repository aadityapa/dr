"use client";

import { Footer } from "@/components/layout/footer";
import { FloatingWhatsapp } from "@/components/layout/floating-whatsapp";
import { Navbar } from "@/components/layout/navbar";
import { StickyCtaBar } from "@/components/layout/sticky-cta-bar";
import { LanguageProvider } from "@/components/providers/language-provider";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <div id="main-content" className="pb-16 md:pb-0">
        {children}
      </div>
      <Footer />
      <FloatingWhatsapp />
      <StickyCtaBar />
    </LanguageProvider>
  );
}
