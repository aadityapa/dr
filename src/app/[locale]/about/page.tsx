import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Section } from "@/components/shared/section";
import type { AppLocale } from "@/i18n/routing";
import { getAboutContent, getPageShells } from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";

type Props = { params: Promise<{ locale: AppLocale }> };

const headingClass = "text-3xl font-semibold text-[#004d4d] md:text-4xl";
const bodyClass = "leading-relaxed text-[#4a4a4a]";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.about.metaTitle,
    description: shells.about.metaDescription,
    path: "/about",
    locale,
    keywords: mumbaiKeywords(
      "Pediatric Occupational Therapist Mumbai",
      "OT Kandivali",
      "Dr. Sharuja Sarap OT",
      "Brain Gym Mumbai",
      "Sensory Integration Mumbai",
    ),
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const about = getAboutContent(locale);

  return (
    <main className="bg-[#f9fbfb]">
      <Section compact>
        <h1 className={headingClass}>{about.aboutMe.title}</h1>
        <p className="mt-4 text-xl font-medium text-[#004d4d] md:text-2xl">{about.aboutMe.greeting}</p>
        <div className="mt-6 space-y-4">
          {about.aboutMe.paragraphs.map((para) => (
            <p key={para.slice(0, 48)} className={bodyClass}>
              {para}
            </p>
          ))}
        </div>
      </Section>

      <Section compact>
        <h2 className={headingClass}>{about.inviteSharuja.title}</h2>
        <div className="mt-6 space-y-4">
          {about.inviteSharuja.paragraphs.map((para) => (
            <p key={para.slice(0, 48)} className={bodyClass}>
              {para}
            </p>
          ))}
        </div>
      </Section>

      <Section compact>
        <div className="rounded-2xl bg-[#e0f2f2] px-6 py-8 md:px-10 md:py-10">
          <h2 className="text-2xl font-bold text-[#004d4d] md:text-3xl">{about.availableFor.title}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {about.availableFor.items.map((item) => (
              <li key={item} className={`flex items-start gap-2.5 text-[#4a4a4a] ${bodyClass}`}>
                <span className="mt-0.5 shrink-0 text-[#004d4d]" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section compact className="pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#d0e0e0] bg-white px-6 py-8">
            <h3 className="text-xl font-semibold text-[#004d4d] md:text-2xl">{about.expertise.title}</h3>
            <ul className="mt-5 space-y-2">
              {about.expertise.items.map((item) => (
                <li key={item} className={`flex gap-2 ${bodyClass}`}>
                  <span className="shrink-0 text-[#004d4d]" aria-hidden>
                    –
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#d0e0e0] bg-white px-6 py-8">
            <h3 className="text-xl font-semibold text-[#004d4d] md:text-2xl">{about.suitableFor.title}</h3>
            <p className={`mt-5 ${bodyClass}`}>{about.suitableFor.items.join(" • ")}</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
