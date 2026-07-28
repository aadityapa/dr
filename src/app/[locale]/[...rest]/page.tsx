import { notFound } from "next/navigation";

/** Catch-all: any URL that doesn't match a real route renders the styled,
 *  localized 404 page (src/app/[locale]/not-found.tsx). */
export default function CatchAllPage() {
  notFound();
}
