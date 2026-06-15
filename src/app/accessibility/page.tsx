import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { LegalContent } from "@/components/shared/legal-content";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

const LAST_UPDATED = "June 2026";

export const metadata: Metadata = buildPageMetadata({
  title: "Accessibility Statement",
  description: `Our commitment to making the ${siteConfig.name} website usable by everyone, including people with disabilities.`,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Accessibility", url: `${siteConfig.url}/accessibility` }]} />
      <PageHero
        kicker="Accessibility"
        title="Accessibility Statement"
        description="We want every family to be able to use this website comfortably, regardless of ability."
      />
      <Section>
        <LegalContent
          lastUpdated={LAST_UPDATED}
          intro={`${siteConfig.name} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.`}
          sections={[
            {
              heading: "Our standard",
              body: [
                "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible to people with a wide range of disabilities.",
              ],
            },
            {
              heading: "Measures we take",
              list: [
                "Semantic HTML with clear heading structure and landmark regions",
                "A visible skip-to-content link and keyboard-accessible navigation",
                "Visible keyboard focus indicators on links, buttons, and form fields",
                "Colour combinations chosen to meet AA contrast ratios for text",
                "Descriptive alternative text for meaningful images",
                "Respect for the \"reduce motion\" operating-system preference",
                "Labelled form fields with accessible error messaging",
              ],
            },
            {
              heading: "Ongoing effort",
              body: [
                "Accessibility is an ongoing commitment rather than a one-time task. We periodically review the website and welcome feedback that helps us improve.",
              ],
            },
            {
              heading: "Feedback and contact",
              body: [
                `If you encounter any accessibility barrier on this website, or need information in an alternative format, please let us know at ${siteConfig.email} or ${siteConfig.phoneDisplay}. We will do our best to provide the information or assistance you need.`,
              ],
            },
          ]}
        />
      </Section>
    </main>
  );
}
