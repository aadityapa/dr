import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { QuickConsultationForm } from "@/components/forms/quick-consultation-form";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function HomeContactSection() {
  return (
    <Section id="contact" compact className="bg-white">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading
            kicker="Get in Touch"
            title="We're here when you're ready"
            description="Share your concern — we'll call or WhatsApp you within 24 hours. No pressure, just a warm conversation."
          />
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-sage)]" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-[color:var(--color-sage-dark)]">Phone & WhatsApp</p>
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-[color:var(--color-muted)] hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-sage)]" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-[color:var(--color-sage-dark)]">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-[color:var(--color-muted)] hover:underline">
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-sage)]" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-[color:var(--color-sage-dark)]">Clinic Address</p>
                <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">{siteConfig.address.full}</p>
                <p className="mt-1 text-xs text-[color:var(--color-muted)]">{siteConfig.timings}</p>
              </div>
            </li>
          </ul>
          <Button asChild className="mt-8">
            <Link href="/appointment">Book Your First Visit</Link>
          </Button>
        </div>
        <div className="rounded-[2rem] border border-[color:var(--color-border)]/50 bg-[color:var(--color-almond)] p-6 md:p-8">
          <h3 className="font-semibold text-[color:var(--color-sage-dark)]">Request a Call Back</h3>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">Tell us a little about your child — we&apos;ll reach out soon.</p>
          <div className="mt-6">
            <QuickConsultationForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
