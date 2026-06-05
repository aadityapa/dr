import { readFile, writeFile } from "node:fs/promises";

const html = await readFile("src/components/saas/stitch/thrive-landing.html", "utf8");

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
const configMatch = html.match(/tailwind\.config = (\{[\s\S]*?\})\s*<\/script>/);

const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<script>/);
if (!bodyMatch) throw new Error("Body not found");

let body = bodyMatch[1]
  .replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<nav[\s\S]*?<\/nav>/, "")
  .replace(/<footer[\s\S]*?<\/footer>/, "")
  .trim();

body = body
  .replace(/\sclass=/g, " className=")
  .replace(/\sfor=/g, " htmlFor=")
  .replace(/<img([^>]*?)>/g, (_, attrs) => {
    const src = attrs.match(/src="([^"]+)"/)?.[1];
    const alt = attrs.match(/data-alt="([^"]+)"/)?.[1] ?? attrs.match(/alt="([^"]+)"/)?.[1] ?? "";
    const className = attrs.match(/className="([^"]+)"/)?.[1] ?? "";
    if (!src) return `<img${attrs} />`;
    return `<Image src="${src}" alt="${alt.replace(/"/g, "&quot;")}" width={800} height={600} className="${className}" unoptimized />`;
  })
  .replace(/<a([^>]*?)href="#([^"]*)"([^>]*)>/g, '<Link$1href="/$2"$3>')
  .replace(/<a([^>]*?)href="#"([^>]*)>/g, '<Link$1href="/"$2>')
  .replace(/<\/a>/g, "</Link>")
  .replace(/<button([^>]*)>\s*Get Started\s*<\/button>/g, '<Button asChild$1><Link href="/appointment">Get Started</Link></Button>')
  .replace(/<button([^>]*)>\s*Start Your Journey\s*<\/button>/g, '<Button asChild$1><Link href="/appointment">Start Your Journey</Link></Button>')
  .replace(/<button([^>]*)>\s*Get Started Now\s*<\/button>/g, '<Button asChild$1><Link href="/appointment">Get Started Now</Link></Button>');

const component = `"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

import "./stitch-theme.css";

export function ThriveStitchLanding() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("[data-stitch-section]").forEach((section) => {
      section.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-10");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stitch-landing bg-background text-on-background font-body-md">
${body
  .split("\n")
  .map((line) => `      ${line.replace(/<section /g, '<section data-stitch-section ')}`)
  .join("\n")}
    </div>
  );
}
`;

await writeFile("src/components/saas/stitch/thrive-stitch-landing.tsx", component, "utf8");

if (styleMatch) {
  await writeFile("src/components/saas/stitch/stitch-theme.css", styleMatch[1].trim() + "\n", "utf8");
}

if (configMatch) {
  await writeFile("src/components/saas/stitch/stitch-tailwind-config.json", configMatch[1], "utf8");
}

console.log("Converted to thrive-stitch-landing.tsx");
