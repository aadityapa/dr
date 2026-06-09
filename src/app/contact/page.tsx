import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} in Kandivali West, Mumbai. Call ${siteConfig.phoneDisplay} or book a consultation.`,
};

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`;

  return (
    <main>
      <PageHero
        kicker="Contact"
        title="We're here to support your family"
        description="Reach out to schedule a consultation, ask a question, or learn more about our pediatric therapy programs."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                  We respond within 24 hours on working days.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white/80 p-5 transition-all hover:shadow-md"
                >
                  <Phone className="h-5 w-5 text-[color:var(--color-sage)]" />
                  <div>
                    <p className="text-xs text-[color:var(--color-muted)]">Call us</p>
                    <p className="font-semibold text-[color:var(--color-sage-dark)]">{siteConfig.phoneDisplay}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white/80 p-5 transition-all hover:shadow-md"
                >
                  <Phone className="h-5 w-5 text-[color:var(--color-sage)]" />
                  <div>
                    <p className="text-xs text-[color:var(--color-muted)]">WhatsApp</p>
                    <p className="font-semibold text-[color:var(--color-sage-dark)]">{siteConfig.phoneDisplay}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white/80 p-5 transition-all hover:shadow-md sm:col-span-2 lg:col-span-1"
                >
                  <Mail className="h-5 w-5 text-[color:var(--color-sage)]" />
                  <div>
                    <p className="text-xs text-[color:var(--color-muted)]">Email</p>
                    <p className="font-semibold text-[color:var(--color-sage-dark)]">{siteConfig.email}</p>
                  </div>
                </a>
              </div>

              <div className="rounded-2xl border border-[color:var(--color-border)] bg-white/80 p-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-sage)]" />
                  <div>
                    <p className="font-semibold text-[color:var(--color-sage-dark)]">{siteConfig.address.line1}</p>
                    <p className="mt-1 text-sm text-[color:var(--color-muted)]">{siteConfig.address.full}</p>
                    <p className="mt-2 text-sm text-[color:var(--color-muted)]">{siteConfig.timings}</p>
                    <Button asChild variant="outline" size="sm" className="mt-4">
                      <Link href={mapsUrl} target="_blank" rel="noopener noreferrer">
                        Get Directions
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[color:var(--color-border)]">
                <iframe
                  title="Clinic location on Google Maps"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.mapsQuery)}&output=embed`}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
