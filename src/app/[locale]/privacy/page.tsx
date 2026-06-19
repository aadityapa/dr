import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { LegalContent } from "@/components/shared/legal-content";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

const LAST_UPDATED = "June 2026";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects the personal information you share through our website and enquiry forms.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Privacy Policy", url: `${siteConfig.url}/privacy` }]} />
      <PageHero
        kicker="Your Privacy"
        title="Privacy Policy"
        description="We are committed to protecting the privacy of the families who reach out to us."
      />
      <Section>
        <LegalContent
          lastUpdated={LAST_UPDATED}
          intro={`This Privacy Policy explains how ${siteConfig.name} ("we", "us", "our") collects, uses, and safeguards the information you provide when you use our website or contact us. This is a placeholder template that should be reviewed by the clinic owner and, where appropriate, a legal professional before publication.`}
          sections={[
            {
              heading: "Information we collect",
              body: [
                "When you submit an enquiry, appointment request, sensory screening, or call-back form, we collect the details you choose to share with us.",
              ],
              list: [
                "Contact details such as your name, your child's first name or age, phone number, and email address",
                "The message or concern you describe in the form",
                "Basic, non-identifying analytics about how the website is used (for example, pages visited)",
              ],
            },
            {
              heading: "How we use your information",
              list: [
                "To respond to your enquiry and schedule consultations or therapy sessions",
                "To provide information about our services that you have requested",
                "To improve the quality and relevance of our website and services",
                "To send you parent resources or updates only if you have opted in (for example, via newsletter signup)",
              ],
            },
            {
              heading: "How we store and protect your information",
              body: [
                "Enquiry submissions are transmitted securely over HTTPS. We retain personal information only for as long as necessary to respond to your request and provide ongoing care, after which it is securely deleted or anonymised.",
                "We do not sell, rent, or trade your personal information to third parties.",
              ],
            },
            {
              heading: "Third-party services",
              body: [
                "We use trusted service providers to operate our website and communications (for example, our hosting provider and email delivery service). These providers process data only on our behalf and under appropriate safeguards.",
              ],
            },
            {
              heading: "Children's privacy",
              body: [
                "Because we serve families of young children, any information about a child is provided by a parent or legal guardian. We only collect the minimum information needed to provide care and never knowingly collect information directly from a child.",
              ],
            },
            {
              heading: "Your rights",
              body: [
                "You may request access to, correction of, or deletion of the personal information we hold about you at any time.",
              ],
            },
            {
              heading: "Contact us",
              body: [
                `If you have any questions about this Privacy Policy or how your information is handled, please contact us at ${siteConfig.email} or ${siteConfig.phoneDisplay}.`,
              ],
            },
          ]}
        />
      </Section>
    </main>
  );
}
