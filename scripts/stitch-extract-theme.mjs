import { readFile, writeFile } from "node:fs/promises";

const html = await readFile("src/components/saas/stitch/thrive-landing.html", "utf8");
const configMatch = html.match(/tailwind\.config = (\{[\s\S]*?\})\s*<\/script>/);
if (!configMatch) throw new Error("Tailwind config not found");

const config = Function(`return (${configMatch[1]})`)();
const colors = config.theme.extend.colors;
const spacing = config.theme.extend.spacing;
const fontSize = config.theme.extend.fontSize;
const fontFamily = config.theme.extend.fontFamily;

let css = `.stitch-landing {\n`;
for (const [key, value] of Object.entries(colors)) {
  css += `  --color-${key}: ${value};\n`;
}
css += `}\n\n`;

css += `@theme inline {\n`;
for (const [key, value] of Object.entries(colors)) {
  css += `  --color-${key}: ${value};\n`;
}
for (const [key, value] of Object.entries(spacing)) {
  css += `  --spacing-${key}: ${value};\n`;
}
css += `}\n\n`;

css += `.stitch-landing .material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.stitch-landing .glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.stitch-landing .squishy-button {
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.2s ease;
}
.stitch-landing .squishy-button:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 10px 25px -5px rgba(77, 97, 80, 0.2);
}
.stitch-landing .squishy-button:active {
  transform: scale(0.95);
}
`;

for (const [key, value] of Object.entries(fontSize)) {
  const [size, meta] = value;
  css += `.stitch-landing .text-${key} { font-size: ${size};`;
  if (meta?.lineHeight) css += ` line-height: ${meta.lineHeight};`;
  if (meta?.fontWeight) css += ` font-weight: ${meta.fontWeight};`;
  if (meta?.letterSpacing) css += ` letter-spacing: ${meta.letterSpacing};`;
  css += ` }\n`;
}

for (const [key, families] of Object.entries(fontFamily)) {
  css += `.stitch-landing .font-${key} { font-family: ${families.join(", ")}, sans-serif; }\n`;
}

await writeFile("src/components/saas/stitch/stitch-theme.css", css, "utf8");

const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<script>/);
let body = bodyMatch[1]
  .replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<nav[\s\S]*?<\/nav>/, "")
  .replace(/<footer[\s\S]*?<\/footer>/, "")
  .trim();

body = body.replace(/href="#services"/g, 'href="/services"');
body = body.replace(/href="#how-it-works"/g, 'href="/about"');
body = body.replace(/href="#pricing"/g, 'href="/appointment"');
body = body.replace(/href="#about"/g, 'href="/about"');
body = body.replace(/href="#"/g, 'href="/appointment"');

await writeFile("src/components/saas/stitch/body.html", body, "utf8");
console.log("Generated stitch-theme.css and body.html");
