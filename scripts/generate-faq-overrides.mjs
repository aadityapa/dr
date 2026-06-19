import { writeFileSync } from "fs";
import { faqCategories } from "../src/lib/faqs.ts";
import { faqHiByCategory, toMarathiFaq } from "./faq-i18n-data.mjs";

const hiFaqCategories = faqCategories.map((cat) => {
  const t = faqHiByCategory[cat.id];
  if (!t) throw new Error(`Missing Hindi translations for category: ${cat.id}`);
  if (t.faqs.length !== cat.faqs.length) {
    throw new Error(
      `FAQ count mismatch for ${cat.id}: expected ${cat.faqs.length}, got ${t.faqs.length}`,
    );
  }
  return { id: cat.id, title: t.title, faqs: t.faqs };
});

const mrFaqCategories = hiFaqCategories.map((cat) => ({
  id: cat.id,
  title: cat.title
    .replace(/माता-पिता/g, "पालक")
    .replace(/और/g, "आणि")
    .replace(/ध्यान/g, "लक्ष"),
  faqs: cat.faqs.map(toMarathiFaq),
}));

const file = `import type { FaqCategory } from "@/lib/faqs";

export const hiFaqCategories: FaqCategory[] = ${JSON.stringify(hiFaqCategories, null, 2)};

export const mrFaqCategories: FaqCategory[] = ${JSON.stringify(mrFaqCategories, null, 2)};
`;

writeFileSync("src/lib/i18n/content/faq-overrides.ts", file);
console.log("Generated", hiFaqCategories.reduce((n, c) => n + c.faqs.length, 0), "FAQs");
