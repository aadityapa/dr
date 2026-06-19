// Generation helper - run with: node scripts/gen-i18n-phase2.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../src/lib/i18n/content");

// This script generates faq-overrides from embedded translation maps
// Run manually when FAQ source changes

console.log("Use direct file writes for phase 2 i18n content.");
