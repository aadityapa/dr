import { readFile, writeFile, mkdir } from "node:fs/promises";

const stitchScreenMap = {
  home: "7d7e1799d7ff4678974ab2aefe26db60",
  about: "eb18c3820e9345808d3dc29313379227",
  services: "013f1b368b9047db9cdb6ee59e298bcb",
  conditions: "96624b6b778d4a00952b63dea43e6b04",
  gallery: "53ba6c9e2b594240aaedc314d0bce3ab",
  milestones: "a80f27f83f87458287b392c8ad350a57",
  contact: "552b2090152345fb92f1cc41fd00847c",
  appointment: "cd919464a2a64c2d8737d35d3ac18dfd",
};

const fetchedDir = "stitch-source/fetched";
const outDir = "src/components/stitch/html";

const routeLinks = {
  "/": "/",
  "/about": "/about",
  "/services": "/services",
  "/conditions": "/conditions",
  "/gallery": "/gallery",
  "/milestones": "/testimonials-milestones",
  "/testimonials": "/testimonials-milestones",
  "/testimonials-milestones": "/testimonials-milestones",
  "/contact": "/contact",
  "/appointment": "/appointment",
  "#services": "/services",
  "#about": "/about",
  "#pricing": "/appointment",
  "#how-it-works": "/about",
  "#contact": "/contact",
  "#gallery": "/gallery",
  "#conditions": "/conditions",
  "#milestones": "/testimonials-milestones",
};

function extractBody(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return html;
  return bodyMatch[1];
}

function stripChrome(html, page) {
  let out = html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "");

  if (page === "home") {
    out = out
      .replace(/<nav[^>]*id="top-nav"[\s\S]*?<\/nav>/gi, "")
      .replace(/<footer[\s\S]*?<\/footer>/gi, "");
    return out;
  }

  out = out
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "");

  return out;
}

function normalizeHeroLayouts(html) {
  return html
    .replace(
      /class="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2/g,
      'class="max-w-container-max mx-auto px-gutter w-full grid grid-cols-1 lg:grid-cols-2',
    )
    .replace(
      /class="grid lg:grid-cols-2 gap-xl items-center"/g,
      'class="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center w-full"',
    )
    .replace(
      /class="relative z-10 max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2/g,
      'class="relative z-10 max-w-container-max mx-auto px-gutter w-full grid grid-cols-1 lg:grid-cols-2',
    );
}

function fixLinks(html, page) {
  let out = html;
  for (const [from, to] of Object.entries(routeLinks)) {
    out = out.replaceAll(`href="${from}"`, `href="${to}"`);
    out = out.replaceAll(`href='${from}'`, `href='${to}'`);
  }

  const textLinks = [
    ["Home", "/"],
    ["Services", "/services"],
    ["Conditions", "/conditions"],
    ["Milestones", "/testimonials-milestones"],
    ["Gallery", "/gallery"],
    ["Contact", "/contact"],
    ["Appointment", "/appointment"],
    ["About", "/about"],
    ["All Services", "/services"],
    ["Approach", "/about"],
    ["Contact Support", "/contact"],
    ["FAQ", "/contact"],
    ["Thrive with Sharuja", "/"],
  ];

  for (const [label, href] of textLinks) {
    out = out.replace(new RegExp(`href="#">${label}</a>`, "gi"), `href="${href}">${label}</a>`);
    out = out.replace(new RegExp(`href='#'>${label}</a>`, "gi"), `href='${href}'>${label}</a>`);
  }

  if (page === "home") {
    out = out.replace(/href="#">Schedule a Call/gi, 'href="/appointment">Schedule a Call');
    out = out.replace(/href="#">Start the Journey/gi, 'href="/appointment">Start the Journey');
    out = out.replace(/href="#">View Our Services/gi, 'href="/services">View Our Services');
    out = out.replace(
      /<button class="bg-primary text-on-primary([^"]*)">\s*Start the Journey\s*<\/button>/gi,
      '<a href="/appointment" class="bg-primary text-on-primary$1">Start the Journey</a>',
    );
    out = out.replace(
      /<button class="border border-primary text-primary([^"]*)">\s*View Our Services\s*<\/button>/gi,
      '<a href="/services" class="border border-primary text-primary$1">View Our Services</a>',
    );
  }

  if (page === "about") {
    out = out.replace(
      /href="\/about" class="text-primary[^"]*border-b-2[^"]*">About<\/a>/gi,
      'href="/about" class="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors duration-300">About</a>',
    );
  }

  out = out.replace(/href="#"/g, 'href="/"');
  return out;
}

function stripDeadHandlers(html) {
  return html.replace(/\s+onclick="[^"]*"/gi, "");
}

function simplifyAppointmentPage(html) {
  return html.replace(
    /<div class="flex justify-between items-center max-w-4xl mx-auto mb-xl relative px-md">[\s\S]*?<\/div>\s*<\/section>/,
    "</section>",
  ).replace(
    /<section class="max-w-container-max mx-auto px-gutter mb-xl">[\s\S]*?<\/section>/,
    `<section class="max-w-container-max mx-auto px-gutter mb-xl">
<div class="max-w-2xl mx-auto rounded-3xl border border-outline-variant/20 bg-white/90 p-6 shadow-[0_12px_40px_-16px_rgba(47,77,59,0.18)] md:p-8">
<h3 class="font-headline-md text-headline-md text-primary mb-lg">Tell us about your child</h3>
<div data-stitch-form-slot="appointment"></div>
</div>
</section>`,
  );
}

function fixButtons(html) {
  const buttonRoutes = [
    ["Start the Journey", "/appointment"],
    ["View Our Services", "/services"],
    ["View All Programs", "/services"],
    ["Schedule a Consultation", "/appointment"],
    ["Schedule Appointment", "/appointment"],
    ["Book a Free Screening", "/appointment"],
    ["Schedule Consultation", "/appointment"],
    ["Sign Up Free", "/appointment"],
    ["Start Tracking", "/testimonials-milestones"],
    ["View Demo", "/contact"],
    ["Meet Our Team", "/about"],
    ["Watch Our Story", "/about"],
    ["Explore Conditions", "/conditions"],
    ["Parent Resources", "/contact"],
    ["View Milestone Guide", "/testimonials-milestones"],
    ["Contact Support", "/contact"],
    ["Download Guide", "/contact"],
    ["View Pricing", "/appointment"],
    ["Start Viewing", "/gallery"],
  ];

  let out = html;
  for (const [label, href] of buttonRoutes) {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    out = out.replace(
      new RegExp(`<button([^>]*)>\\s*${escaped}[^<]*</button>`, "gi"),
      `<a href="${href}"$1>${label}</a>`,
    );
  }
  return out;
}

function extractStyles(html) {
  const blocks = [...html.matchAll(/<style>([\s\S]*?)<\/style>/gi)].map((m) => m[1].trim());
  return blocks.join("\n\n");
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const exports = [];
  const allStyles = new Set();

  for (const [page, screenId] of Object.entries(stitchScreenMap)) {
    const glob = `${fetchedDir}/${screenId}-${screenId}.html`;
    const html = await readFile(glob, "utf8");
    const styles = extractStyles(html);
    if (styles) allStyles.add(styles);

    let body = stripChrome(extractBody(html), page);
    body = normalizeHeroLayouts(body);
    body = stripDeadHandlers(body);
    body = fixLinks(body, page);
    body = fixButtons(body);

    if (page === "contact") {
      body = body.replace(/<form[\s\S]*?<\/form>/i, '<div data-stitch-form-slot="contact"></div>');
    }
    if (page === "appointment") {
      body = simplifyAppointmentPage(body);
    }

    const outPath = `${outDir}/${page}.html`;
    await writeFile(outPath, body.trim(), "utf8");
    exports.push({ page, screenId, outPath, bytes: body.length });
    console.log(`Synced ${page} <- ${screenId} (${body.length} bytes)`);
  }

  let inlineStyles = [...allStyles].join("\n\n");
  inlineStyles = inlineStyles
    .replace(/\.reveal\s*\{[^}]*\}/g, "")
    .replace(/\.reveal\.active\s*\{[^}]*\}/g, "");
  inlineStyles += `

.stitch-landing.stitch-reveal-ready .reveal:not(.active) {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.stitch-landing.stitch-reveal-ready .reveal.active {
  opacity: 1;
  transform: translateY(0);
}
`;
  await writeFile(`${outDir}/inline-styles.css`, inlineStyles, "utf8");
  await writeFile(
    `${outDir}/manifest.json`,
    JSON.stringify({ syncedAt: new Date().toISOString(), pages: exports }, null, 2),
  );

  const entries = Object.entries(stitchScreenMap)
    .map(([page, screenId]) => `  ${page}: ${JSON.stringify(screenId)},`)
    .join("\n");

  const htmlBodies = {};
  for (const page of Object.keys(stitchScreenMap)) {
    htmlBodies[page] = await readFile(`${outDir}/${page}.html`, "utf8");
  }

  const htmlExports = Object.keys(stitchScreenMap)
    .map((page) => {
      const key = page.replace(/-/g, "_");
      return `export const stitchHtml_${key} = ${JSON.stringify(htmlBodies[page])};`;
    })
    .join("\n\n");

  await writeFile(
    "src/components/stitch/html/content.ts",
    `/* Auto-generated by scripts/stitch-sync-pages.mjs */\n\n${htmlExports}\n\nexport const stitchHtmlByPage = {\n${Object.keys(stitchScreenMap)
      .map((page) => `  ${page}: stitchHtml_${page.replace(/-/g, "_")},`)
      .join("\n")}\n} as const;\n\nexport const stitchScreenIds = {\n${entries}\n} as const;\n`,
  );
  console.log("Generated content.ts");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
