import type { Metadata } from "next";

import { InviteInquiryForm } from "@/components/forms/invite-inquiry-form";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { inviteContent } from "@/lib/client-content/invite";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Invite Sharuja — Workshops & Parent Programs",
  description: `Invite ${siteConfig.doctorName} for parent education, school workshops, conferences, and community programs in Mumbai.`,
  path: "/invite-sharuja",
  keywords: ["parent workshop Mumbai", "school OT training", "Brain Gym workshop", "invite speaker pediatric OT"],
});

export default function InviteSharujaPage() {
  const copy = inviteContent;

  return (
    <main>
      <PageHero kicker={copy.hero.kicker} title={copy.hero.title} description={copy.hero.description} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-10">
            <Reveal>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
                {copy.availableFor.title}
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {copy.availableFor.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-[color:var(--color-border)]/60 bg-white/80 px-4 py-3 text-sm text-[color:var(--color-muted)]"
                  >
                    <span className="text-[color:var(--color-sage)]">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
                {copy.expertiseAreas.title}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {copy.expertiseAreas.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-soft-green)]/30 px-4 py-2 text-sm font-medium text-[color:var(--color-sage-dark)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-[color:var(--color-border)]/50 bg-[color:var(--color-almond)] p-6 md:p-8">
              <h2 className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)]">
                {copy.form.title}
              </h2>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">{copy.form.description}</p>
              <div className="mt-6">
                <InviteInquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
