import type { Metadata } from "next";
import Link from "next/link";

import { FaqAccordion } from "@/components/faqs/faq-accordion";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { allFaqs } from "@/lib/faqs";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { faqPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQs — Pediatric OT Questions Answered",
  description: `100+ answers about pediatric occupational therapy, autism, ADHD, aquatic therapy, Brain Gym, handwriting & child development from ${siteConfig.doctorName} in Mumbai.`,
  path: "/faqs",
  keywords: mumbaiKeywords("pediatric OT FAQ", "occupational therapy questions Mumbai", "autism therapy FAQ Kandivali"),
});

export default function FaqsPage() {
  return (
    <main>
      <JsonLd data={faqPageSchema(allFaqs)} id="faq-page-schema" />
      <Breadcrumbs items={[{ name: "FAQs", url: `${siteConfig.url}/faqs` }]} />
      <PageHero
        kicker="FAQs"
        title="Questions Parents Ask Us"
        description={`Honest, helpful answers from ${siteConfig.doctorName} — covering occupational therapy, autism, ADHD, aquatic therapy, Brain Gym, handwriting, and child development in Mumbai.`}
      />
      <Section>
        <FaqAccordion />
        <div className="mt-12 rounded-2xl bg-[color:var(--color-soft-green)]/40 p-8 text-center">
          <p className="font-semibold text-[color:var(--color-sage-dark)]">Still have questions?</p>
          <p className="mt-2 text-sm text-[color:var(--color-muted)]">
            Dr. Sharuja Sarap and our team are happy to help. Book a consultation or call us directly.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/appointment">Book Consultation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
