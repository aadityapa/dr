"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { QuickConsultationForm } from "@/components/forms/quick-consultation-form";
import { useLanguage } from "@/components/providers/language-provider";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function HomeContactSection() {
  const { content } = useLanguage();
  const copy = content.contact;

  return (
    <Section id="contact" compact className="bg-white">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading kicker={copy.kicker} title={copy.title} description={copy.description} />
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-sage)]" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-[color:var(--color-sage-dark)]">{copy.phoneLabel}</p>
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-[color:var(--color-muted)] hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-sage)]" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-[color:var(--color-sage-dark)]">{copy.emailLabel}</p>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-[color:var(--color-muted)] hover:underline">
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-sage)]" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-[color:var(--color-sage-dark)]">{copy.addressLabel}</p>
                <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">{siteConfig.address.full}</p>
                <p className="mt-1 text-xs text-[color:var(--color-muted)]">{siteConfig.timings}</p>
              </div>
            </li>
          </ul>
          <Button asChild className="mt-8">
            <Link href="/appointment">{copy.bookFirstVisit}</Link>
          </Button>
        </div>
        <div className="rounded-[2rem] border border-[color:var(--color-border)]/50 bg-[color:var(--color-almond)] p-6 md:p-8">
          <h3 className="font-semibold text-[color:var(--color-sage-dark)]">{copy.callbackTitle}</h3>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">{copy.callbackDescription}</p>
          <div className="mt-6">
            <QuickConsultationForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
