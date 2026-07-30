import { getAboutContent } from "@/lib/i18n/content/about-locale";
import { getContent, getMessages } from "@/lib/i18n";
import { getPageShells, getLabels, getLocalizedClientCondition, getLocalizedExpertise } from "@/lib/i18n/localize";
import { getPhase3Content } from "@/lib/i18n/content/phase3-locale";
import { clientConditions } from "@/lib/client-content/conditions";
import { expertiseAreas } from "@/lib/client-content/expertise";

const KEEP = /Brain Gym|AOTA|Journal|http|@|WhatsApp|Google|MNRI|HWT|RMTI|OPT|PIASTM|Kinesio|IATF|Masgutova|Handwriting Without Tears|Sharuja|Jeet|Thrive|Kandivali|Mumbai|Borivali|Malad|Goregaon|Andheri|Dahisar|ASD|ADHD|\.(jpg|mp4|png)|^\//;
const isEnglish = (s: unknown): s is string =>
  typeof s === "string" && s.length > 20 && /[a-zA-Z]{5,}/.test(s) && !/[ऀ-ॿ]/.test(s) && !KEEP.test(s);

function walk(obj: unknown, path: string, out: string[], depth = 0) {
  if (depth > 8) return;
  if (isEnglish(obj)) { out.push(`${path}: ${(obj as string).slice(0, 70)}`); return; }
  if (Array.isArray(obj)) obj.forEach((v, i) => walk(v, `${path}[${i}]`, out, depth + 1));
  else if (obj && typeof obj === "object")
    for (const [k, v] of Object.entries(obj)) {
      if (/slug|href|url|id|image|src|key|icon|category/i.test(k)) continue;
      walk(v, `${path}.${k}`, out, depth + 1);
    }
}

for (const loc of ["hi", "mr"] as const) {
  const found: string[] = [];
  walk(getMessages(loc), "messages", found);
  walk(getContent(loc), "content", found);
  walk(getAboutContent(loc), "about", found);
  walk(getPageShells(loc), "shells", found);
  walk(getLabels(loc), "labels", found);
  walk(getPhase3Content(loc), "phase3", found);
  for (const c of clientConditions) walk(getLocalizedClientCondition(c.slug, loc), `condition[${c.slug}]`, found);
  for (const e of expertiseAreas) walk(getLocalizedExpertise(e.slug, loc), `expertise[${e.slug}]`, found);
  console.log(`\n===== ${loc.toUpperCase()}: ${found.length} untranslated =====`);
  found.slice(0, 400).forEach((f) => console.log("  " + f));
}
