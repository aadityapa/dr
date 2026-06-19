/**
 * Merges UI messages + page content from src/lib/i18n into /locales/*.json
 * Run: npx tsx scripts/build-locales.ts
 */
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

import { en } from "../src/lib/i18n/en";
import { hi } from "../src/lib/i18n/hi";
import { mr } from "../src/lib/i18n/mr";
import { enContent } from "../src/lib/i18n/content/en";
import { hiContent } from "../src/lib/i18n/content/hi";
import { mrContent } from "../src/lib/i18n/content/mr";

const outDir = join(process.cwd(), "locales");
mkdirSync(outDir, { recursive: true });

function build(messages: typeof en, content: typeof enContent) {
  return { ...messages, content };
}

const locales = [
  { code: "en", messages: en, content: enContent },
  { code: "hi", messages: hi, content: hiContent },
  { code: "mr", messages: mr, content: mrContent },
] as const;

for (const { code, messages, content } of locales) {
  const payload = build(messages, content);
  writeFileSync(join(outDir, `${code}.json`), JSON.stringify(payload, null, 2), "utf-8");
  console.log(`Wrote locales/${code}.json`);
}
