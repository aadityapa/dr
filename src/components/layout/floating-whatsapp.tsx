import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site-data";

export function FloatingWhatsapp() {
  const message = encodeURIComponent(
    `Hello, I would like to enquire about pediatric therapy at ${siteConfig.name}.`,
  );

  return (
    <Link
      href={`https://wa.me/${siteConfig.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-xl transition hover:scale-105 md:bottom-5"
      aria-label="Chat on WhatsApp with Thrive with sharuja"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
    </Link>
  );
}
