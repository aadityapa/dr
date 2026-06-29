import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import * as cheerio from "cheerio";
import {
  AlignmentType,
  Document,
  HeadingLevel,
  ImageRun,
  Packer,
  Paragraph,
  TextRun,
} from "docx";

import { routing, type AppLocale } from "../src/i18n/routing";
import { articles } from "../src/lib/articles";
import { clientConditions } from "../src/lib/client-content/conditions";
import { expertiseAreas } from "../src/lib/client-content/expertise";
import { locationPages } from "../src/lib/locations";
import { services } from "../src/lib/site-data";

const outputDir = path.resolve(process.env.EXPORT_DOCS_OUTPUT_DIR ?? "exports/page-documents-with-media");
const publicDir = path.resolve("public");
const port = Number(process.env.EXPORT_CRAWL_PORT ?? 4327);
const baseUrl = process.env.EXPORT_CRAWL_BASE_URL ?? `http://127.0.0.1:${port}`;
const shouldStartServer = !process.env.EXPORT_CRAWL_BASE_URL;
const maxEmbeddedImagesPerDoc = Number(process.env.EXPORT_MAX_EMBEDDED_IMAGES_PER_DOC ?? 10);
const maxImageDisplayWidth = Number(process.env.EXPORT_IMAGE_DISPLAY_WIDTH ?? 520);

type RouteRecord = {
  locale: AppLocale;
  path: string;
  urlPath: string;
  url: string;
  source: string;
};

type ManifestEntry = RouteRecord & {
  status: "generated" | "skipped" | "failed";
  httpStatus?: number;
  redirectedTo?: string;
  title?: string;
  description?: string;
  docx?: string;
  imagesEmbedded?: number;
  imagesReferenced?: number;
  videosReferenced?: number;
  skippedMedia?: MediaSkip[];
  reason?: string;
};

type ImageMedia = {
  kind: "image";
  src: string;
  alt: string;
  caption: string;
  section: string;
};

type VideoMedia = {
  kind: "video";
  src: string;
  poster: string;
  title: string;
  caption: string;
  section: string;
};

type ContentItem =
  | {
      kind: "text";
      tagName: string;
      text: string;
    }
  | {
      kind: "image";
      media: ImageMedia;
    }
  | {
      kind: "video";
      media: VideoMedia;
    };

type MediaSkip = {
  src: string;
  reason: string;
};

type MediaCounts = {
  imagesEmbedded: number;
  imagesReferenced: number;
  videosReferenced: number;
  skippedMedia: MediaSkip[];
};

type MediaExportStats = MediaCounts & {
  skippedMediaByRoute: (MediaSkip & { route: string })[];
};

type ImageType = "jpg" | "png" | "gif" | "bmp";

function unique<T>(items: T[], key: (item: T) => string): T[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const id = key(item);
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

function discoverRoutes(): RouteRecord[] {
  const staticRoutes = [
    { path: "/", source: "sitemap static route" },
    { path: "/about", source: "sitemap static route" },
    { path: "/expertise", source: "sitemap static route" },
    { path: "/conditions", source: "sitemap static route" },
    { path: "/invite-sharuja", source: "sitemap static route" },
    { path: "/locations", source: "sitemap static route" },
    { path: "/resources", source: "sitemap static route" },
    { path: "/library", source: "sitemap static route" },
    { path: "/faqs", source: "sitemap static route" },
    { path: "/gallery", source: "sitemap static route" },
    { path: "/testimonials-milestones", source: "sitemap static route" },
    { path: "/contact", source: "sitemap static route" },
    { path: "/appointment", source: "sitemap static route" },
    { path: "/therapy-outcomes", source: "sitemap static route" },
    { path: "/screening", source: "sitemap static route" },
    { path: "/privacy", source: "sitemap static route" },
    { path: "/terms", source: "sitemap static route" },
    { path: "/medical-disclaimer", source: "sitemap static route" },
    { path: "/accessibility", source: "sitemap static route" },
    { path: "/services", source: "app route file" },
  ];

  const dynamicRoutes = [
    ...expertiseAreas.map((item) => ({ path: `/expertise/${item.slug}`, source: "expertiseAreas" })),
    ...clientConditions.map((item) => ({ path: `/conditions/${item.slug}`, source: "clientConditions" })),
    ...locationPages.map((item) => ({ path: `/locations/${item.slug}`, source: "locationPages" })),
    ...articles.map((item) => ({ path: `/resources/${item.slug}`, source: "articles" })),
    ...services.map((item) => ({ path: `/services/${item.slug}`, source: "services" })),
  ];

  const localized = routing.locales.flatMap((locale) =>
    [...staticRoutes, ...dynamicRoutes].map((route) => {
      const urlPath = `/${locale}${route.path === "/" ? "" : route.path}`;
      return {
        locale,
        path: route.path,
        urlPath,
        url: `${baseUrl}${urlPath}`,
        source: route.source,
      };
    }),
  );

  return unique(localized, (route) => `${route.locale}:${route.path}`).sort((a, b) =>
    a.urlPath.localeCompare(b.urlPath),
  );
}

function safeFilename(route: RouteRecord): string {
  const routePart = route.path === "/" ? "home" : route.path.replace(/^\/+/, "").replace(/[^\w-]+/g, "-");
  return `${route.locale}__${routePart}.docx`;
}

function normalizeText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function stripQueryAndHash(value: string): string {
  return value.split(/[?#]/, 1)[0] ?? value;
}

function imageTypeFromPath(src: string): ImageType | undefined {
  const extension = path.extname(stripQueryAndHash(src)).toLowerCase();
  if (extension === ".jpg" || extension === ".jpeg") return "jpg";
  if (extension === ".png") return "png";
  if (extension === ".gif") return "gif";
  if (extension === ".bmp") return "bmp";
  return undefined;
}

function firstSrcFromSrcset(srcset: string): string {
  return normalizeText(srcset.split(",")[0]?.trim().split(/\s+/)[0] ?? "");
}

function normalizeMediaSrc(rawSrc: string): string {
  const src = normalizeText(rawSrc);
  if (!src) return "";

  try {
    const parsed = new URL(src, baseUrl);
    if (parsed.pathname === "/_next/image") {
      return parsed.searchParams.get("url") ?? src;
    }

    if (parsed.origin === new URL(baseUrl).origin) {
      return `${parsed.pathname}${parsed.search}${parsed.hash}`;
    }
  } catch {
    // Keep the original src below; non-URL values are handled by public-path resolution.
  }

  return src;
}

function mediaSrcFromNode(node: { attr: (name: string) => string | undefined }): string {
  return normalizeMediaSrc(
    node.attr("src") ??
      node.attr("data-src") ??
      firstSrcFromSrcset(node.attr("srcset") ?? node.attr("srcSet") ?? "") ??
      "",
  );
}

function resolvePublicFile(src: string): string | undefined {
  const normalized = normalizeMediaSrc(src);
  if (!normalized || normalized.startsWith("data:")) return undefined;

  let pathname = normalized;
  try {
    const parsed = new URL(normalized, baseUrl);
    if (parsed.origin !== new URL(baseUrl).origin) return undefined;
    pathname = parsed.pathname;
  } catch {
    // Relative site paths are resolved from public below.
  }

  if (!pathname.startsWith("/")) return undefined;

  const decodedPath = decodeURIComponent(stripQueryAndHash(pathname));
  const absolutePath = path.resolve(publicDir, `.${decodedPath}`);
  const relativeToPublic = path.relative(publicDir, absolutePath);
  if (relativeToPublic.startsWith("..") || path.isAbsolute(relativeToPublic)) return undefined;
  return absolutePath;
}

function imageDimensions(data: Buffer, type: ImageType): { width: number; height: number } | undefined {
  if (type === "png" && data.length >= 24) {
    return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
  }

  if (type === "gif" && data.length >= 10) {
    return { width: data.readUInt16LE(6), height: data.readUInt16LE(8) };
  }

  if (type === "bmp" && data.length >= 26) {
    return { width: data.readUInt32LE(18), height: Math.abs(data.readInt32LE(22)) };
  }

  if (type === "jpg" && data.length >= 4) {
    let offset = 2;
    while (offset < data.length) {
      if (data[offset] !== 0xff) {
        offset += 1;
        continue;
      }

      while (data[offset] === 0xff) offset += 1;
      const marker = data[offset];
      offset += 1;

      if (marker === 0xd8 || marker === 0xd9) continue;
      if (offset + 2 > data.length) break;

      const length = data.readUInt16BE(offset);
      const isStartOfFrame =
        marker !== undefined &&
        ((marker >= 0xc0 && marker <= 0xc3) ||
          (marker >= 0xc5 && marker <= 0xc7) ||
          (marker >= 0xc9 && marker <= 0xcb) ||
          (marker >= 0xcd && marker <= 0xcf));

      if (isStartOfFrame && offset + 7 <= data.length) {
        return { height: data.readUInt16BE(offset + 3), width: data.readUInt16BE(offset + 5) };
      }

      offset += length;
    }
  }

  return undefined;
}

function scaledDimensions(
  dimensions: { width: number; height: number } | undefined,
): { width: number; height: number } {
  if (!dimensions || dimensions.width <= 0 || dimensions.height <= 0) {
    return { width: maxImageDisplayWidth, height: Math.round(maxImageDisplayWidth * 0.66) };
  }

  const width = Math.min(maxImageDisplayWidth, dimensions.width);
  const scale = width / dimensions.width;
  return { width, height: Math.max(1, Math.round(dimensions.height * scale)) };
}

function textParagraph(text: string, options: { bold?: boolean; heading?: (typeof HeadingLevel)[keyof typeof HeadingLevel] } = {}) {
  return new Paragraph({
    heading: options.heading,
    children: [
      new TextRun({
        text,
        bold: options.bold,
      }),
    ],
    spacing: { after: 140 },
  });
}

function labelValue(label: string, value: string) {
  return new Paragraph({
    children: [
      new TextRun({ text: `${label}: `, bold: true }),
      new TextRun(value),
    ],
    spacing: { after: 100 },
  });
}

function headingForTag(tagName: string): (typeof HeadingLevel)[keyof typeof HeadingLevel] | undefined {
  if (tagName === "h1") return HeadingLevel.HEADING_1;
  if (tagName === "h2") return HeadingLevel.HEADING_2;
  if (tagName === "h3") return HeadingLevel.HEADING_3;
  if (tagName === "h4") return HeadingLevel.HEADING_4;
  return undefined;
}

function bullets(title: string, items: string[]) {
  if (!items.length) return [];
  return [
    textParagraph(title, { heading: HeadingLevel.HEADING_2 }),
    ...items.map(
      (item) =>
        new Paragraph({
          text: item,
          bullet: { level: 0 },
          spacing: { after: 80 },
        }),
    ),
  ];
}

function mediaReferenceParagraph(label: string, media: ImageMedia | VideoMedia, reason?: string) {
  const details =
    media.kind === "image"
      ? [
          media.alt && `Alt: ${media.alt}`,
          media.caption && `Caption: ${media.caption}`,
          media.section && `Section: ${media.section}`,
          `Source: ${media.src}`,
          reason && `Note: ${reason}`,
        ]
      : [
          media.title && `Title: ${media.title}`,
          media.caption && `Caption: ${media.caption}`,
          media.section && `Section: ${media.section}`,
          media.poster && `Poster: ${media.poster}`,
          media.src && `Video source: ${media.src}`,
          reason && `Note: ${reason}`,
        ];

  return labelValue(label, details.filter(Boolean).join(" | "));
}

async function imageMediaParagraphs(
  media: ImageMedia,
  counts: MediaCounts,
  embeddedPaths: Set<string>,
  route: RouteRecord,
  options: { label?: string; forceReference?: boolean } = {},
): Promise<Paragraph[]> {
  const label = options.label ?? "Image";
  const imageType = imageTypeFromPath(media.src);
  const absolutePath = resolvePublicFile(media.src);

  if (options.forceReference) {
    counts.imagesReferenced += 1;
    return [mediaReferenceParagraph(label, media, "Referenced because this document already reached the embedded image limit.")];
  }

  if (!imageType) {
    const reason = "Unsupported image type for docx embedding.";
    counts.imagesReferenced += 1;
    counts.skippedMedia.push({ src: media.src, reason });
    return [mediaReferenceParagraph(label, media, reason)];
  }

  if (!absolutePath || !existsSync(absolutePath)) {
    const reason = absolutePath ? "Local file was not found." : "Remote or non-public image source.";
    counts.imagesReferenced += 1;
    counts.skippedMedia.push({ src: media.src, reason });
    return [mediaReferenceParagraph(label, media, reason)];
  }

  if (embeddedPaths.has(absolutePath)) {
    counts.imagesReferenced += 1;
    return [mediaReferenceParagraph(label, media, "Same local image was already embedded earlier in this document.")];
  }

  try {
    const data = await readFile(absolutePath);
    const dimensions = scaledDimensions(imageDimensions(data, imageType));
    embeddedPaths.add(absolutePath);
    counts.imagesEmbedded += 1;

    return [
      mediaReferenceParagraph(label, media),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new ImageRun({
            type: imageType,
            data,
            transformation: dimensions,
            altText: {
              name: media.alt || media.caption || path.basename(absolutePath),
              title: media.alt || media.caption || path.basename(absolutePath),
              description: media.caption || media.alt || media.src,
            },
          }),
        ],
        spacing: { after: 180 },
      }),
    ];
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    counts.imagesReferenced += 1;
    counts.skippedMedia.push({ src: media.src, reason });
    process.stderr.write(`[media] ${route.urlPath}: failed to embed ${media.src}: ${reason}\n`);
    return [mediaReferenceParagraph(label, media, reason)];
  }
}

async function videoMediaParagraphs(
  media: VideoMedia,
  counts: MediaCounts,
  embeddedPaths: Set<string>,
  route: RouteRecord,
): Promise<Paragraph[]> {
  counts.videosReferenced += 1;
  const children = [
    textParagraph("Video", { heading: HeadingLevel.HEADING_3 }),
    mediaReferenceParagraph("Video Reference", media, "Word export references video files and embeds the poster when available."),
  ];

  if (!media.poster) return children;

  const poster: ImageMedia = {
    kind: "image",
    src: media.poster,
    alt: media.title,
    caption: media.caption,
    section: media.section,
  };

  return [
    ...children,
    ...(await imageMediaParagraphs(poster, counts, embeddedPaths, route, {
      label: "Video Poster",
      forceReference: counts.imagesEmbedded >= maxEmbeddedImagesPerDoc,
    })),
  ];
}

function extractPage(html: string) {
  const $ = cheerio.load(html);
  const title = normalizeText($("title").first().text());
  const description = normalizeText($('meta[name="description"]').attr("content") ?? "");
  const keywords = normalizeText($('meta[name="keywords"]').attr("content") ?? "");
  const canonical = normalizeText($('link[rel="canonical"]').attr("href") ?? "");
  const ogTitle = normalizeText($('meta[property="og:title"]').attr("content") ?? "");
  const ogDescription = normalizeText($('meta[property="og:description"]').attr("content") ?? "");
  const jsonLd = $('script[type="application/ld+json"]')
    .map((_, el) => {
      const raw = $(el).text();
      try {
        const parsed = JSON.parse(raw);
        const type = Array.isArray(parsed) ? parsed.map((item) => item["@type"]).filter(Boolean).join(", ") : parsed["@type"];
        const name = Array.isArray(parsed) ? "" : parsed.name;
        return normalizeText([type && `Type: ${type}`, name && `Name: ${name}`].filter(Boolean).join(" | "));
      } catch {
        return normalizeText(raw.slice(0, 240));
      }
    })
    .get()
    .filter(Boolean);

  $("script, style, noscript, svg").remove();
  const main = $("main").first().length ? $("main").first() : $("body");

  const headings = main
    .find("h1,h2,h3")
    .map((_, el) => normalizeText($(el).text()))
    .get()
    .filter(Boolean);

  const contentItems: ContentItem[] = [];
  let currentSection = "";
  const seenMedia = new Set<string>();

  main.find("h1,h2,h3,h4,p,li,blockquote,label,summary,picture,img,video").each((_, el) => {
    const node = $(el);
    const tagName = el.tagName.toLowerCase();

    if (tagName === "img" && node.parents("picture").length) return;

    if (tagName === "picture" || tagName === "img") {
      const imageNode = tagName === "picture" ? node.find("img").first() : node;
      const sourceNode = tagName === "picture" ? node.find("source").first() : node;
      const src = mediaSrcFromNode(imageNode.length ? imageNode : sourceNode);
      const alt = normalizeText(imageNode.attr("alt") ?? imageNode.attr("aria-label") ?? "");
      const caption = normalizeText(node.closest("figure").find("figcaption").first().text());
      const key = `image:${src}:${currentSection}`;

      if (src && !seenMedia.has(key)) {
        seenMedia.add(key);
        contentItems.push({
          kind: "image",
          media: {
            kind: "image",
            src,
            alt,
            caption,
            section: currentSection,
          },
        });
      }
      return;
    }

    if (tagName === "video") {
      const src = normalizeMediaSrc(node.attr("src") ?? mediaSrcFromNode(node.find("source").first()));
      const poster = normalizeMediaSrc(node.attr("poster") ?? "");
      const title = normalizeText(
        node.attr("aria-label") ??
          node.closest("article,section,div").find("h1,h2,h3,h4").first().text() ??
          currentSection,
      );
      const caption = normalizeText(node.closest("article,figure").text());
      const key = `video:${src}:${poster}:${currentSection}`;

      if ((src || poster) && !seenMedia.has(key)) {
        seenMedia.add(key);
        contentItems.push({
          kind: "video",
          media: {
            kind: "video",
            src,
            poster,
            title,
            caption,
            section: currentSection,
          },
        });
      }
      return;
    }

    const text = normalizeText(node.text());
    if (!text) return;
    if (tagName.match(/^h[1-4]$/)) currentSection = text;
    contentItems.push({ kind: "text", tagName, text });
  });

  const textBlocks = contentItems
    .filter((item): item is Extract<ContentItem, { kind: "text" }> => item.kind === "text")
    .map((item) => item.text);

  const linksAndCtas = unique(
    main
      .find("a,button,input[type='submit']")
      .map((_, el) => {
        const node = $(el);
        const label = normalizeText(node.text() || node.attr("value") || node.attr("aria-label") || "");
        if (!label) return "";
        const href = node.attr("href");
        return href ? `${label} -> ${href}` : label;
      })
      .get()
      .filter(Boolean),
    (item) => item,
  );

  const formFields = unique(
    main
      .find("input,textarea,select")
      .map((_, el) => {
        const node = $(el);
        const type = node.attr("type") ?? el.tagName;
        const name = node.attr("name") ?? node.attr("id") ?? "";
        const placeholder = node.attr("placeholder") ?? "";
        const label = node.attr("aria-label") ?? "";
        return normalizeText([label, name, placeholder, `(${type})`].filter(Boolean).join(" "));
      })
      .get()
      .filter(Boolean),
    (item) => item,
  );

  return {
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    headings: unique(headings, (item) => item),
    textBlocks: unique(textBlocks, (item) => item),
    contentItems,
    linksAndCtas,
    formFields,
    jsonLd,
  };
}

async function buildDocument(
  route: RouteRecord,
  extracted: ReturnType<typeof extractPage>,
  counts: MediaCounts,
): Promise<Document> {
  const embeddedPaths = new Set<string>();
  const children: Paragraph[] = [
    textParagraph(extracted.title || route.urlPath, { heading: HeadingLevel.TITLE }),
    labelValue("Locale", route.locale),
    labelValue("Route", route.urlPath),
    labelValue("URL", route.url),
    labelValue("Discovery source", route.source),
    textParagraph("SEO Metadata", { heading: HeadingLevel.HEADING_2 }),
    labelValue("Title", extracted.title || "Not found"),
    labelValue("Description", extracted.description || "Not found"),
  ];

  if (extracted.keywords) children.push(labelValue("Keywords", extracted.keywords));
  if (extracted.canonical) children.push(labelValue("Canonical", extracted.canonical));
  if (extracted.ogTitle) children.push(labelValue("Open Graph Title", extracted.ogTitle));
  if (extracted.ogDescription) children.push(labelValue("Open Graph Description", extracted.ogDescription));

  children.push(textParagraph("Page Content With Media Placement", { heading: HeadingLevel.HEADING_2 }));

  for (const item of extracted.contentItems) {
    if (item.kind === "text") {
      children.push(textParagraph(item.text, { heading: headingForTag(item.tagName) }));
      continue;
    }

    if (item.kind === "image") {
      children.push(
        ...(await imageMediaParagraphs(item.media, counts, embeddedPaths, route, {
          forceReference: counts.imagesEmbedded >= maxEmbeddedImagesPerDoc,
        })),
      );
      continue;
    }

    children.push(...(await videoMediaParagraphs(item.media, counts, embeddedPaths, route)));
  }

  children.push(
    ...bullets("Headings", extracted.headings),
    ...bullets("Forms And CTA Labels", [...extracted.linksAndCtas, ...extracted.formFields]),
    ...bullets("JSON-LD / Schema Summary", extracted.jsonLd),
  );

  return new Document({
    creator: "Thrive With Sharuja page export",
    title: extracted.title || route.urlPath,
    description: extracted.description || `Exported content for ${route.urlPath}`,
    sections: [{ children }],
  });
}

async function waitForServer(serverUrl: string, child?: ChildProcessWithoutNullStreams) {
  const deadline = Date.now() + 120_000;
  let lastError = "";

  while (Date.now() < deadline) {
    if (child?.exitCode !== null) {
      throw new Error(`Next server exited early with code ${child?.exitCode}`);
    }

    try {
      const response = await fetch(serverUrl);
      if (response.status < 500) return;
      lastError = `HTTP ${response.status}`;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  throw new Error(`Timed out waiting for ${serverUrl}. Last error: ${lastError}`);
}

async function startServer() {
  const child = spawn(
    "npx",
    ["next", "dev", "--turbopack", "--hostname", "127.0.0.1", "--port", String(port)],
    {
      cwd: process.cwd(),
      env: { ...process.env, BROWSER: "none" },
      stdio: "pipe",
      shell: process.platform === "win32",
    },
  );

  child.stdout.on("data", (data) => process.stdout.write(`[next] ${data}`));
  child.stderr.on("data", (data) => process.stderr.write(`[next] ${data}`));

  await waitForServer(`${baseUrl}/en`, child);
  return child;
}

async function stopServer(child: ChildProcessWithoutNullStreams) {
  if (process.platform === "win32" && child.pid) {
    await new Promise<void>((resolve) => {
      const taskkill = spawn("taskkill", ["/pid", String(child.pid), "/t", "/f"], {
        stdio: "ignore",
      });
      taskkill.on("exit", () => resolve());
      taskkill.on("error", () => resolve());
    });
    return;
  }

  child.kill();
}

async function writeDoc(route: RouteRecord, html: string, totals: MediaExportStats): Promise<ManifestEntry> {
  const extracted = extractPage(html);
  const counts: MediaCounts = {
    imagesEmbedded: 0,
    imagesReferenced: 0,
    videosReferenced: 0,
    skippedMedia: [],
  };
  const document = await buildDocument(route, extracted, counts);
  const filename = safeFilename(route);
  const absoluteDocPath = path.join(outputDir, route.locale, filename);
  await mkdir(path.dirname(absoluteDocPath), { recursive: true });
  await writeFile(absoluteDocPath, await Packer.toBuffer(document));

  totals.imagesEmbedded += counts.imagesEmbedded;
  totals.imagesReferenced += counts.imagesReferenced;
  totals.videosReferenced += counts.videosReferenced;
  totals.skippedMedia.push(...counts.skippedMedia);
  totals.skippedMediaByRoute.push(...counts.skippedMedia.map((item) => ({ ...item, route: route.urlPath })));

  return {
    ...route,
    status: "generated",
    httpStatus: 200,
    title: extracted.title,
    description: extracted.description,
    docx: path.relative(outputDir, absoluteDocPath).replace(/\\/g, "/"),
    imagesEmbedded: counts.imagesEmbedded,
    imagesReferenced: counts.imagesReferenced,
    videosReferenced: counts.videosReferenced,
    skippedMedia: counts.skippedMedia,
  };
}

async function writeIndex(entries: ManifestEntry[], totals: MediaExportStats) {
  const generated = entries.filter((entry) => entry.status === "generated");
  const failedOrSkipped = entries.filter((entry) => entry.status !== "generated");

  const children: Paragraph[] = [
    textParagraph("Thrive With Sharuja Page Documents With Media", { heading: HeadingLevel.TITLE }),
    labelValue("Generated at", new Date().toISOString()),
    labelValue("Routes discovered", String(entries.length)),
    labelValue("Documents generated", String(generated.length)),
    labelValue("Skipped or failed", String(failedOrSkipped.length)),
    labelValue("Images embedded", String(totals.imagesEmbedded)),
    labelValue("Images referenced", String(totals.imagesReferenced)),
    labelValue("Videos referenced", String(totals.videosReferenced)),
    labelValue("Skipped media", String(totals.skippedMedia.length)),
    textParagraph("Generated Documents", { heading: HeadingLevel.HEADING_2 }),
    ...generated.map((entry) =>
      labelValue(
        entry.urlPath,
        [
          entry.docx ?? "",
          `images embedded: ${entry.imagesEmbedded ?? 0}`,
          `images referenced: ${entry.imagesReferenced ?? 0}`,
          `videos referenced: ${entry.videosReferenced ?? 0}`,
        ].join(" | "),
      ),
    ),
  ];

  if (failedOrSkipped.length) {
    children.push(
      textParagraph("Skipped Or Failed Pages", { heading: HeadingLevel.HEADING_2 }),
      ...failedOrSkipped.map((entry) => labelValue(entry.urlPath, entry.reason ?? entry.status)),
    );
  }

  const document = new Document({
    creator: "Thrive With Sharuja page export",
    title: "Thrive With Sharuja Page Documents With Media Index",
    sections: [{ children }],
  });

  await writeFile(path.join(outputDir, "index.docx"), await Packer.toBuffer(document));
}

async function main() {
  const routes = discoverRoutes();
  let server: ChildProcessWithoutNullStreams | undefined;
  const mediaTotals: MediaExportStats = {
    imagesEmbedded: 0,
    imagesReferenced: 0,
    videosReferenced: 0,
    skippedMedia: [],
    skippedMediaByRoute: [],
  };

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  if (shouldStartServer) {
    server = await startServer();
  } else {
    await waitForServer(baseUrl);
  }

  const manifest: ManifestEntry[] = [];

  try {
    for (const [index, route] of routes.entries()) {
      process.stdout.write(`[${index + 1}/${routes.length}] ${route.urlPath}\n`);
      try {
        const response = await fetch(route.url, { redirect: "manual" });
        const location = response.headers.get("location") ?? undefined;

        if (response.status >= 300 && response.status < 400) {
          manifest.push({
            ...route,
            status: "skipped",
            httpStatus: response.status,
            redirectedTo: location,
            reason: `Redirected to ${location ?? "another URL"}`,
          });
          continue;
        }

        if (!response.ok) {
          manifest.push({
            ...route,
            status: "failed",
            httpStatus: response.status,
            reason: `HTTP ${response.status}`,
          });
          continue;
        }

        manifest.push(await writeDoc(route, await response.text(), mediaTotals));
      } catch (error) {
        manifest.push({
          ...route,
          status: "failed",
          reason: error instanceof Error ? error.message : String(error),
        });
      }
    }
  } finally {
    if (server) {
      await stopServer(server);
    }
  }

  await writeFile(path.join(outputDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  await writeFile(
    path.join(outputDir, "media-report.json"),
    `${JSON.stringify(
      {
        imagesEmbedded: mediaTotals.imagesEmbedded,
        imagesReferenced: mediaTotals.imagesReferenced,
        videosReferenced: mediaTotals.videosReferenced,
        skippedMedia: mediaTotals.skippedMediaByRoute,
        maxEmbeddedImagesPerDoc,
        maxImageDisplayWidth,
      },
      null,
      2,
    )}\n`,
  );
  await writeIndex(manifest, mediaTotals);

  const summary = {
    outputDir,
    routesDiscovered: manifest.length,
    documentsGenerated: manifest.filter((entry) => entry.status === "generated").length,
    skippedOrFailed: manifest.filter((entry) => entry.status !== "generated").length,
    imagesEmbedded: mediaTotals.imagesEmbedded,
    imagesReferenced: mediaTotals.imagesReferenced,
    videosReferenced: mediaTotals.videosReferenced,
    skippedMedia: mediaTotals.skippedMediaByRoute.length,
    indexCreated: existsSync(path.join(outputDir, "index.docx")),
    manifestCreated: existsSync(path.join(outputDir, "manifest.json")),
    mediaReportCreated: existsSync(path.join(outputDir, "media-report.json")),
  };

  process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
