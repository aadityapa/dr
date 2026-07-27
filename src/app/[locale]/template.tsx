/**
 * Route template — re-mounts on every navigation, giving each page a soft
 * fade-and-rise entrance animation (CSS only; disabled for reduced motion).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
