import { writeFile, mkdir } from "node:fs/promises";
import { stitch } from "@google/stitch-sdk";

const projectId = "16093142512687109662";
const prompt =
  "Modern SaaS landing page for 'Thrive with sharuja' pediatric occupational therapy platform. Tagline: 'Belonging without boundaries. Thriving without limits.' Premium clean SaaS design with sage green (#7d927f), cream (#f7f3eb), slate accents. Sections: sticky navbar, hero with headline and dual CTAs plus dashboard mockup, stats row, bento feature grid, service cards, how-it-works steps, testimonials, final pricing-style CTA panel. Tailwind CSS, responsive, warm and trustworthy.";

process.env.STITCH_API_KEY = process.env.STITCH_API_KEY ?? "";

async function main() {
  const project = stitch.project(projectId);
  console.log("Generating screen (this may take several minutes)...");
  const screen = await project.generate(prompt, "DESKTOP");
  console.log("Screen generated:", screen.id ?? screen.screenId ?? JSON.stringify(screen));

  const htmlUrl = await screen.getHtml();
  console.log("HTML URL:", htmlUrl);

  const response = await fetch(htmlUrl);
  const html = await response.text();

  await mkdir("src/components/saas/stitch", { recursive: true });
  await writeFile("src/components/saas/stitch/thrive-landing.html", html, "utf8");
  await writeFile(
    "src/components/saas/stitch/screen-meta.json",
    JSON.stringify({ projectId, screen, htmlUrl }, null, 2),
    "utf8",
  );

  console.log("Saved HTML to src/components/saas/stitch/thrive-landing.html");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
