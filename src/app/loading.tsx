export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <div className="h-10 w-56 animate-pulse rounded-xl bg-[color:var(--color-soft-green)]" />
      <div className="mt-6 h-4 w-full animate-pulse rounded bg-[color:var(--color-soft-green)]/70" />
      <div className="mt-3 h-4 w-4/5 animate-pulse rounded bg-[color:var(--color-soft-green)]/70" />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="h-52 animate-pulse rounded-3xl bg-[color:var(--color-soft-green)]/60" />
        ))}
      </div>
    </div>
  );
}
