import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { LegalContent } from "@/components/shared/legal-content";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

const LAST_UPDATED = "June 2026";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description: `The terms that govern your use of the ${siteConfig.name} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Terms of Service", url: `${siteConfig.url}/terms` }]} />
      <PageHero
        kicker="Terms"
        title="Terms of Service"
        description="Please review these terms, which govern your use of this website."
      />
      <Section>
        <LegalContent
          lastUpdated={LAST_UPDATED}
          intro={`By accessing and using the ${siteConfig.name} website, you agree to the following terms. This is a placeholder template that should be reviewed by the clinic owner before publication.`}
          sections={[
            {
              heading: "Use of this website",
              body: [
                "You may use this website for lawful, personal, and informational purposes only. You agree not to misuse the site, attempt to disrupt its operation, or use it in any way that could harm the website or other users.",
              ],
            },
            {
              heading: "Information accuracy",
              body: [
                "We make reasonable efforts to keep the information on this website accurate and up to date, but we make no warranties about its completeness or suitability for any particular purpose. Service details, availability, and content may change without notice.",
              ],
            },
            {
              heading: "Not a substitute for professional care",
              body: [
                "Content on this website is educational and does not constitute medical advice. Please see our Medical Disclaimer for full details.",
              ],
            },
            {
              heading: "Appointments and enquiries",
              body: [
                "Submitting an enquiry or appointment request is a request to be contacted and does not constitute a confirmed booking. Appointments are confirmed only after direct communication with our clinic.",
              ],
            },
            {
              heading: "Intellectual property",
              body: [
                `All content on this website — including text, branding, and design — is the property of ${siteConfig.name} unless otherwise stated, and may not be reproduced without permission.`,
              ],
            },
            {
              heading: "Limitation of liability",
              body: [
                "To the fullest extent permitted by law, we are not liable for any loss or damage arising from your use of, or reliance on, this website or its content.",
              ],
            },
            {
              heading: "Contact us",
              body: [
                `Questions about these terms can be directed to ${siteConfig.email} or ${siteConfig.phoneDisplay}.`,
              ],
            },
          ]}
        />
      </Section>
    </main>
  );
}
