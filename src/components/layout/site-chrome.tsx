"use client";

import { Footer } from "@/components/layout/footer";
import { FloatingWhatsapp } from "@/components/layout/floating-whatsapp";
import { Navbar } from "@/components/layout/navbar";
import { StickyCtaBar } from "@/components/layout/sticky-cta-bar";
import { ClientEnhancements } from "@/components/providers/client-enhancements";
import { LanguageProvider, useLanguage } from "@/components/providers/language-provider";
import { ScrollProgress } from "@/components/providers/scroll-progress";
import { WatercolorCanvas } from "@/components/providers/watercolor-canvas";

function SkipLink() {
  const { messages } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[color:var(--color-sage-dark)] focus:px-4 focus:py-2 focus:text-white"
    >
      {messages.common.skipToContent}
    </a>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SkipLink />
      <WatercolorCanvas />
      <ScrollProgress />
      <ClientEnhancements />
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
