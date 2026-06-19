import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { LegalContent } from "@/components/shared/legal-content";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

const LAST_UPDATED = "June 2026";

export const metadata: Metadata = buildPageMetadata({
  title: "Medical Disclaimer",
  description: `Important information about the educational nature of the content on ${siteConfig.name} and why it is not a substitute for professional medical advice.`,
  path: "/medical-disclaimer",
});

export default function MedicalDisclaimerPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Medical Disclaimer", url: `${siteConfig.url}/medical-disclaimer` }]} />
      <PageHero
        kicker="Please Read"
        title="Medical Disclaimer"
        description="The information on this website is for general education and is not a substitute for professional assessment, diagnosis, or treatment."
      />
      <Section>
        <LegalContent
          lastUpdated={LAST_UPDATED}
          intro={`The content provided on ${siteConfig.name} — including articles, condition overviews, screening tools, FAQs, and parent resources — is offered for general informational and educational purposes only.`}
          sections={[
            {
              heading: "Not medical advice",
              body: [
                "The information on this website does not constitute medical advice and should not be relied upon as a substitute for a professional clinical assessment. Every child is unique, and occupational therapy recommendations must be individualised following a direct evaluation.",
              ],
            },
            {
              heading: "No therapist–client relationship",
              body: [
                "Reading this website, using the sensory screening tool, or submitting an enquiry does not create a therapist–client or doctor–patient relationship. Such a relationship is established only through a formal consultation and assessment at our clinic.",
              ],
            },
            {
              heading: "Screening tools are not diagnostic",
              body: [
                "Any checklists, sensory screeners, or \"when to seek help\" guidance on this site are intended to help you decide whether to seek a professional opinion. They are not diagnostic instruments and cannot confirm or rule out any condition.",
              ],
            },
            {
              heading: "Always seek professional guidance",
              list: [
                "Consult a qualified healthcare professional regarding any questions about your child's development or health",
                "Never disregard or delay seeking professional advice because of something you have read here",
                "In a medical emergency, contact your local emergency services immediately",
              ],
            },
            {
              heading: "External links",
              body: [
                "This website may reference external resources for convenience. We are not responsible for the content or accuracy of third-party websites.",
              ],
            },
            {
              heading: "Speak with us",
              body: [
                `For personalised guidance about your child, please book a consultation with ${siteConfig.doctorName}. We are always happy to help.`,
              ],
            },
          ]}
        />
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-3">
          <Button asChild>
            <Link href="/appointment">Book a Consultation</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact the Clinic</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
