import { StitchHtmlContent } from "./stitch-html-content";
import { StitchHtmlEnhancer } from "./stitch-html-enhancer";
import type { StitchPageKey } from "./stitch-screen-map";

type StitchHtmlPageProps = {
  page: StitchPageKey;
  fullPage?: boolean;
};

export function StitchHtmlPage({ page, fullPage = page === "home" }: StitchHtmlPageProps) {
  return (
    <>
      <StitchHtmlContent page={page} fullPage={fullPage} />
      <StitchHtmlEnhancer page={page} fullPage={fullPage} />
    </>
  );
}
