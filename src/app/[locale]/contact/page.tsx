import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { QuickConsultationForm } from "@/components/forms/quick-consultation-form";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { ContactScene } from "@/components/illustrations/scene-illustrations";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getPageShells } from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale }> };

const CLINIC_HOURS = [
  { days: "Monday – Friday", hours: "9 AM – 5 PM" },
  { days: "Saturday", hours: "9 AM – 12 PM" },
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.contact.metaTitle,
    description: shells.contact.metaDescription,
    path: "/contact",
    locale,
    keywords: mumbaiKeywords("pediatric OT contact Kandivali", "occupational therapist Mumbai contact"),
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const shells = getPageShells(locale);
  const messages = getMessages(locale);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <main>
      <Breadcrumbs items={[{ name: messages.nav.contact, url: `${siteConfig.url}/${locale}/contact` }]} />
      <PageHero photoKey="contact" art={<ContactScene />} kicker={shells.contact.kicker} title={shells.contact.title} description={shells.contact.description} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white/80 p-5 transition-all hover:shadow-md"
                >
                  <Phone className="h-5 w-5 text-[color:var(--color-sage)]" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[color:var(--color-muted)]">Phone</p>
                    <p className="font-semibold text-[color:var(--color-sage-dark)]">{siteConfig.phoneDisplay}</p>
                  </div>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white/80 p-5 transition-all hover:shadow-md"
                >
                  <MessageCircle className="h-5 w-5 text-[color:var(--color-sage)]" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[color:var(--color-muted)]">{messages.cta.whatsapp}</p>
                    <p className="font-semibold text-[color:var(--color-sage-dark)]">{siteConfig.phoneDisplay}</p>
                  </div>
                </a>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white/80 p-5 transition-all hover:shadow-md"
              >
                <Mail className="h-5 w-5 text-[color:var(--color-sage)]" aria-hidden="true" />
                <div>
                  <p className="text-xs text-[color:var(--color-muted)]">Email</p>
                  <p className="font-semibold text-[color:var(--color-sage-dark)]">{siteConfig.email}</p>
                </div>
              </a>

              <div className="rounded-2xl border border-[color:var(--color-border)] bg-white/80 p-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-sage)]" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[color:var(--color-sage-dark)]">Clinic Address</p>
                    <address className="mt-2 space-y-0.5 text-sm not-italic leading-relaxed text-[color:var(--color-muted)]">
                      <span className="block">Manhar Medical And Jeet Child Development Centre</span>
                      <span className="block">2-A Gyan Kutir</span>
                      <span className="block">S.V.P Road</span>
                      <span className="block">Near Municipal Garden</span>
                      <span className="block">Kandivali West</span>
                      <span className="block">Mumbai 400067</span>
                    </address>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-almond)] p-5">
                <p className="font-semibold text-[color:var(--color-sage-dark)]">Clinic Hours</p>
                <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
                  {CLINIC_HOURS.map(({ days, hours }) => (
                    <li key={days} className="flex justify-between gap-4">
                      <span>{days}</span>
                      <span className="font-medium text-[color:var(--color-sage-dark)]">{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {messages.cta.whatsapp}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </Link>
                </Button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[color:var(--color-border)]">
                <iframe
                  title="Clinic location on Google Maps"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.mapsQuery)}&output=embed`}
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-[color:var(--color-border)]/50 bg-[color:var(--color-almond)] p-6 md:p-8">
              <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
                Request a Call Back
              </h2>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                Tell us a little about your child — we&apos;ll reach out soon.
              </p>
              <div className="mt-6">
                <QuickConsultationForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
