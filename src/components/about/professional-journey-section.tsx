import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { getCardPastel } from "@/lib/pastel-palette";
import { doctorTimeline } from "@/lib/site-data";

export function ProfessionalJourneySection() {
  return (
    <Section className="rounded-[2rem] bg-white/70">
      <SectionHeading
        kicker="Professional Journey"
        title="A career built on pediatric expertise"
        description="From early practice in Mumbai to advanced international certifications — a path dedicated to helping children thrive."
        center
      />
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {doctorTimeline.map((item, i) => {
          const pastel = getCardPastel(i);
          return (
            <Reveal key={item.title} delay={i * 0.05}>
              <div
                className="flex gap-4 rounded-xl border p-4 md:p-5"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <span className="w-14 shrink-0 text-xs font-bold md:text-sm" style={{ color: pastel.accent }}>
                  {item.year}
                </span>
                <div>
                  <p className="font-semibold" style={{ color: pastel.text }}>
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[color:var(--color-muted)]">{item.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
