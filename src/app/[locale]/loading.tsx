export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 animate-ping rounded-full bg-[color:var(--color-sage)]/20" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-soft-green)]">
          <span className="font-[family-name:var(--font-serif)] text-lg text-[color:var(--color-sage-dark)]">Tw</span>
        </div>
      </div>
      <p className="mt-6 text-sm text-[color:var(--color-muted)]">Loading...</p>
    </div>
  );
}
