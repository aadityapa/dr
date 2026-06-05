import type { ReactNode } from "react";

import "./stitch-theme.css";

export function StitchShell({ children }: { children: ReactNode }) {
  return (
    <div className="stitch-landing overflow-hidden bg-background text-on-background font-body-md">
      {children}
    </div>
  );
}

type StitchHeroProps = {
  kicker?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function StitchHero({ kicker, title, description, centered = true }: StitchHeroProps) {
  return (
    <section className="relative px-4 pb-14 pt-10 md:px-16 md:pb-20 md:pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(101,122,104,0.1),transparent_42%),radial-gradient(circle_at_85%_10%,rgba(216,227,250,0.28),transparent_38%)]" />
      <div className={`relative mx-auto max-w-4xl ${centered ? "text-center" : ""}`}>
        {kicker ? (
          <p className="text-primary font-label-md mb-4 tracking-[0.18em] uppercase">{kicker}</p>
        ) : null}
        <h1 className="font-headline-xl text-headline-xl text-on-background md:text-[2.75rem] md:leading-[1.1]">{title}</h1>
        {description ? (
          <p className="font-body-lg text-body-lg mt-5 text-on-surface-variant">{description}</p>
        ) : null}
      </div>
    </section>
  );
}

export function StitchSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-4 py-14 md:px-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function StitchCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.75rem] bg-white/80 p-6 shadow-[0_12px_40px_-16px_rgba(47,77,59,0.18)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-16px_rgba(47,77,59,0.22)] md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function StitchPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[2rem] bg-surface-container-low p-8 shadow-[0_8px_30px_-12px_rgba(47,77,59,0.12)] md:p-10 ${className}`}>
      {children}
    </div>
  );
}
