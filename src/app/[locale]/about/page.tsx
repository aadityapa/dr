import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";

import { Section } from "@/components/shared/section";
import type { AppLocale } from "@/i18n/routing";
import { getAboutContent, getPageShells } from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";
import { getSiteImage } from "@/lib/site-images";

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
    <main className="bg-[#F4F9F9]">
      <Section compact>
        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,280px)_1fr] md:gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-xs md:mx-0 md:max-w-none">
            <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-[#d0e0e0]/60">
              <Image
                src={getSiteImage("doctorPortrait")}
                alt={`${siteConfig.doctorName} — Pediatric Occupational Therapist in Kandivali, Mumbai`}
                width={400}
                height={500}
                className="aspect-[4/5] w-full object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <h1 className={headingClass}>{about.aboutMe.title}</h1>
            <p className="mt-4 text-xl font-medium text-[#004d4d] md:text-2xl">{about.aboutMe.greeting}</p>
            <div className="mt-6 space-y-4">
              {about.aboutMe.paragraphs.map((para) => (
                <p key={para.slice(0, 48)} className={bodyClass}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section compact>
        <h2 className={headingClass}>{about.inviteSharuja.title}</h2>
        <div className="mt-6 max-w-3xl space-y-4">
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
              <li key={item} className={`flex items-start gap-2.5 ${bodyClass}`}>
                <span className="mt-0.5 shrink-0 font-semibold text-[#004d4d]" aria-hidden>
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
          <div className="rounded-2xl border-l-4 border-l-[#b9ddec] bg-white px-6 py-8 shadow-sm">
            <h3 className="text-xl font-semibold text-[#004d4d] md:text-2xl">{about.expertise.title}</h3>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
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

          <div className="rounded-2xl border-r-4 border-r-[#b9ddec] bg-white px-6 py-8 shadow-sm">
            <h3 className="text-xl font-semibold text-[#004d4d] md:text-2xl">{about.suitableFor.title}</h3>
            <p className={`mt-5 ${bodyClass}`}>{about.suitableFor.items.join(" - ")}</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
