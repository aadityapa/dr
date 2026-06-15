import { Reveal } from "@/components/shared/reveal";

export type LegalSection = {
  heading: string;
  body?: string[];
  list?: string[];
};

type LegalContentProps = {
  intro?: string;
  lastUpdated?: string;
  sections: LegalSection[];
};

export function LegalContent({ intro, lastUpdated, sections }: LegalContentProps) {
  return (
    <div className="mx-auto max-w-3xl">
      {lastUpdated ? (
        <p className="text-sm text-[color:var(--color-muted)]">Last updated: {lastUpdated}</p>
      ) : null}
      {intro ? (
        <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-muted)]">{intro}</p>
      ) : null}
      <div className="mt-10 space-y-10">
        {sections.map((section, i) => (
          <Reveal key={section.heading} delay={i * 0.03}>
            <section>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
                {section.heading}
              </h2>
              {section.body?.map((paragraph, idx) => (
                <p key={idx} className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                  {paragraph}
                </p>
              ))}
              {section.list ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[color:var(--color-muted)]">
                  {section.list.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
