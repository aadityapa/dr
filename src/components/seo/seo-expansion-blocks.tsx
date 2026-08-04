import type { MythFact, SeoExpansion, SeoExpansionSection } from "@/lib/seo/expansions";

export function SeoExpansionBlocks({ expansion }: { expansion: SeoExpansion }) {
  return (
    <>
      {expansion.sections.map((section: SeoExpansionSection) => (
        <article key={section.heading} className="space-y-4">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
            {section.heading}
          </h2>
          {section.paragraphs.map((para) => (
            <p key={para.slice(0, 48)} className="leading-relaxed text-[color:var(--color-muted)]">
              {para}
            </p>
          ))}
        </article>
      ))}

      {expansion.mythsAndFacts && expansion.mythsAndFacts.length > 0 && (
        <article className="space-y-4">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
            Myths & Facts
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {expansion.mythsAndFacts.map((item: MythFact) => (
              <div
                key={item.myth}
                className="rounded-2xl border border-[color:var(--color-border)]/60 bg-white/70 p-5"
              >
                <p className="text-sm font-semibold text-[color:var(--color-terracotta)]">Myth: {item.myth}</p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">Fact: {item.fact}</p>
              </div>
            ))}
          </div>
        </article>
      )}

      {expansion.homeStrategies && expansion.homeStrategies.length > 0 && (
        <article className="space-y-4">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
            Practical Home Strategies
          </h2>
          <ul className="space-y-2">
            {expansion.homeStrategies.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                <span className="mt-0.5 text-[color:var(--color-sage-dark)]">→</span>
                {tip}
              </li>
            ))}
          </ul>
        </article>
      )}
    </>
  );
}
