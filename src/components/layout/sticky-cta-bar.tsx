import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function StickyCtaBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-[color:var(--color-border)] bg-[color:var(--color-cream)]/95 px-4 py-3 shadow-[0_-4px_20px_-8px_rgba(47,77,59,0.15)] backdrop-blur-xl md:hidden"
      role="complementary"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <Button asChild className="flex-1" size="sm">
          <Link href="/appointment">Book Consultation</Link>
        </Button>
        <Button asChild variant="outline" size="sm" className="shrink-0">
          <a href={`tel:${siteConfig.phone}`} aria-label={`Call ${siteConfig.phoneDisplay}`}>
            <Phone className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
