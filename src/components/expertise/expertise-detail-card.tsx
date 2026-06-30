import type { ExpertiseArea } from "@/lib/client-content/expertise";
import type { SharedLabels } from "@/lib/i18n/content/labels";

type ExpertiseDetailCardProps = {
  area: ExpertiseArea;
  labels: SharedLabels;
  hideTitle?: boolean;
};

export function ExpertiseDetailCard({ area, labels, hideTitle }: ExpertiseDetailCardProps) {
  return (
    <article className="scroll-mt-28 rounded-[1.75rem] border border-white/60 bg-white/70 px-6 py-8 shadow-lg shadow-[#4A9B73]/5 backdrop-blur-md md:px-10 md:py-10">
      {hideTitle ? null : (
        <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)] md:text-3xl">
          {area.title}
        </h2>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-medium text-[color:var(--color-sage-dark)] md:text-xl">{labels.whatIsIt}</h3>
        <div className="mt-3 space-y-4 leading-relaxed text-[color:var(--color-muted)]">
          {area.understanding.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>

      {area.whatParentsMayNotice.length > 0 ? (
        <div className="mt-8">
          <h3 className="text-lg font-medium text-[color:var(--color-sage-dark)] md:text-xl">
            {labels.whatParentsNotice}
          </h3>
          {area.whatParentsNoticeIntro ? (
            <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">{area.whatParentsNoticeIntro}</p>
          ) : null}
          <ul className="mt-4 space-y-3">
            {area.whatParentsMayNotice.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-[color:var(--color-muted)] md:text-base"
              >
                <span
                  className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-[color:var(--color-terracotta)]"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {area.approachSummary?.length ? (
        <div className="mt-8 space-y-4 leading-relaxed text-[color:var(--color-muted)]">
          {area.approachSummary.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {area.areasCommonlySupported.length > 0 ? (
        <div className="mt-8 rounded-2xl bg-[color:var(--color-soft-green)]/40 p-6 md:p-8">
          <h3 className="text-lg font-medium text-[color:var(--color-sage-dark)] md:text-xl">
            {labels.areasCommonlySupported}
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {area.areasCommonlySupported.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed text-[color:var(--color-muted)] md:text-base"
              >
                <span className="mt-0.5 shrink-0 font-semibold text-[color:var(--color-sage-dark)]" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {area.closingLine ? (
        <p className="mt-8 text-center font-[family-name:var(--font-serif)] text-lg italic text-[color:var(--color-muted)]">
          {area.closingLine}
        </p>
      ) : null}
    </article>
  );
}
