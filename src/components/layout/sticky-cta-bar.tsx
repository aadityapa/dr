"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function StickyCtaBar() {
  const { messages } = useLanguage();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-[color:var(--color-border)] bg-[color:var(--color-snow)]/95 px-3 py-3 shadow-[0_-4px_20px_-8px_rgba(47,77,59,0.15)] backdrop-blur-xl md:hidden"
      role="complementary"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-lg items-center gap-2">
        <Button asChild variant="outline" size="sm" className="flex-1 gap-1.5">
          <a href={`tel:${siteConfig.phone}`} aria-label={`Call ${siteConfig.phoneDisplay}`}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            {messages.cta.callNow}
          </a>
        </Button>
        <Button asChild variant="outline" size="sm" className="flex-1 gap-1.5 border-green-600/30 text-green-700 hover:bg-green-50">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to enquire about pediatric occupational therapy.")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {messages.cta.whatsapp}
          </a>
        </Button>
        <Button asChild size="sm" className="flex-1">
          <Link href="/appointment">{messages.cta.book}</Link>
        </Button>
      </div>
    </div>
  );
}
