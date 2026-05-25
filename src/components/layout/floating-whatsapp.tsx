import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site-data";

export function FloatingWhatsapp() {
  return (
    <Link
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-sage)] text-white shadow-xl transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}
