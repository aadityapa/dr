import type { ClientCondition } from "@/lib/client-content/conditions";
import type { SharedLabels } from "@/lib/i18n/content/labels";

type ConditionDetailCardProps = {
  condition: ClientCondition;
  labels: SharedLabels;
  id?: string;
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
        <li key={`${item.text}-${item.category}`} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#3d5555]">
          {variant === "help" ? (
            <span className="mt-0.5 shrink-0 font-semibold text-[#008080]" aria-hidden>
              ✓
            </span>
          ) : (
            <span className="mt-2 inline-block h-2 w-2 shrink-0 bg-[#008080]" aria-hidden />
          )}
          <span>
            {item.text}
            {item.category ? (
              <span className="text-[#5a7a7a]"> ({item.category})</span>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ConditionDetailCard({ condition, labels, id }: ConditionDetailCardProps) {
  return (
    <article
      id={id}
      className="scroll-mt-28 rounded-2xl border border-[#d0e8e8] bg-white px-6 py-8 shadow-sm md:px-10 md:py-10"
    >
      <h2 className="text-2xl font-semibold text-[#005B5B] md:text-3xl">{condition.title}</h2>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-[#3d8f8f] md:text-xl">{condition.understandingHeading}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#3d5555] md:text-base">{condition.understanding}</p>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-[#005B5B] md:text-xl">{labels.whatParentsNotice}</h3>
        {condition.whatParentsNotice.intro ? (
          <p className="mt-3 text-[15px] leading-relaxed text-[#3d5555]">{condition.whatParentsNotice.intro}</p>
        ) : null}
        {condition.whatParentsNotice.sections.map((section, sectionIndex) => (
          <div key={section.intro ?? `section-${sectionIndex}`} className={sectionIndex > 0 || condition.whatParentsNotice.intro ? "mt-5" : "mt-4"}>
            {section.intro ? (
              <p className="mb-3 text-[15px] font-medium leading-relaxed text-[#3d5555]">{section.intro}</p>
            ) : null}
            <CategorizedList items={section.items} variant="notice" />
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-[#e8f5f5] px-5 py-6 md:px-7 md:py-8">
        <h3 className="text-lg font-medium text-[#005B5B] md:text-xl">{labels.howOtHelps}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#3d5555]">{condition.howOtHelps.intro}</p>
        <CategorizedList items={condition.howOtHelps.items} variant="help" />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-[#005B5B] md:text-xl">{labels.considerSupportIf}</h3>
        <ul className="mt-4 space-y-2.5">
          {condition.considerSupportIf.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#3d5555]">
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#008080]" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {condition.closing ? (
        <div className="mt-8 border-t border-[#d0e8e8] pt-8">
          <h3 className="text-lg font-medium text-[#005B5B] md:text-xl">{condition.closing.heading}</h3>
          <div className="mt-3 space-y-3">
            {condition.closing.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-[15px] leading-relaxed text-[#3d5555] md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
