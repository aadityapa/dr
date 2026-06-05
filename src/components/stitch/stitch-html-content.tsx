import { stitchHtmlByPage } from "./html/content";
import type { StitchPageKey } from "./stitch-screen-map";

type StitchHtmlContentProps = {
  page: StitchPageKey;
  fullPage?: boolean;
};

export function StitchHtmlContent({ page, fullPage = page === "home" }: StitchHtmlContentProps) {
  return (
    <div
      data-stitch-page={page}
      className={`stitch-landing bg-background text-on-background font-body-md ${fullPage ? "stitch-home" : ""}`}
      dangerouslySetInnerHTML={{ __html: stitchHtmlByPage[page] }}
    />
  );
}
