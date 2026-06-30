import type { ClientCondition } from "@/lib/client-content/conditions";
import type { SharedLabels } from "@/lib/i18n/content/labels";

type ConditionDetailCardProps = {
  condition: ClientCondition;
  labels: SharedLabels;
  id?: string;
  hideTitle?: boolean;
};

function CategorizedList({
  items,
  variant,
}: {
  items: ClientCondition["howOtHelps"]["items"];
  variant: "notice" | "help";
}) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li
          key={`${item.text}-${item.category}`}
          className="flex items-start gap-3 text-sm leading-relaxed text-[color:var(--color-muted)] md:text-base"
        >
          {variant === "help" ? (
            <span className="mt-0.5 shrink-0 font-semibold text-[color:var(--color-sage-dark)]" aria-hidden>
              ✓
            </span>
          ) : (
            <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-[color:var(--color-terracotta)]" aria-hidden />
          )}
          <span>
            {item.text}
            {item.category ? (
              <span className="text-[color:var(--color-muted)]/80"> ({item.category})</span>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ConditionDetailCard({ condition, labels, id, hideTitle }: ConditionDetailCardProps) {
  return (
    <article
      id={id}
      className="scroll-mt-28 rounded-[1.75rem] border border-white/60 bg-white/70 px-6 py-8 shadow-lg shadow-[#4A9B73]/5 backdrop-blur-md md:px-10 md:py-10"
    >
      {hideTitle ? null : (
        <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)] md:text-3xl">
          {condition.title}
        </h2>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-medium text-[color:var(--color-sage-dark)] md:text-xl">
          {condition.understandingHeading}
        </h3>
        <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">{condition.understanding}</p>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-[color:var(--color-sage-dark)] md:text-xl">{labels.whatParentsNotice}</h3>
        {condition.whatParentsNotice.intro ? (
          <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">{condition.whatParentsNotice.intro}</p>
        ) : null}
        {condition.whatParentsNotice.sections.map((section, sectionIndex) => (
          <div
            key={section.intro ?? `section-${sectionIndex}`}
            className={sectionIndex > 0 || condition.whatParentsNotice.intro ? "mt-5" : "mt-4"}
          >
            {section.intro ? (
              <p className="mb-3 font-medium leading-relaxed text-[color:var(--color-muted)]">{section.intro}</p>
            ) : null}
            <CategorizedList items={section.items} variant="notice" />
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-[color:var(--color-soft-green)]/40 p-6 md:p-8">
        <h3 className="text-lg font-medium text-[color:var(--color-sage-dark)] md:text-xl">{labels.howOtHelps}</h3>
        <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">{condition.howOtHelps.intro}</p>
        <CategorizedList items={condition.howOtHelps.items} variant="help" />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-[color:var(--color-sage-dark)] md:text-xl">{labels.considerSupportIf}</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {condition.considerSupportIf.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-xl border border-[color:var(--color-border)]/60 bg-white/80 p-4 text-sm text-[color:var(--color-muted)]"
            >
              <span className="mt-0.5 text-[color:var(--color-terracotta)]">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {condition.closing ? (
        <div className="mt-8 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-almond)] p-8 text-center">
          <h3 className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)]">
            {condition.closing.heading}
          </h3>
          <div className="mt-4 space-y-3">
            {condition.closing.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="leading-relaxed text-[color:var(--color-muted)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
