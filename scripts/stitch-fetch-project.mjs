import { mkdir, writeFile } from "node:fs/promises";
import { stitch } from "@google/stitch-sdk";

const projectId = "16093142512687109662";
const outDir = "src/components/saas/stitch/fetched";

async function main() {
  const project = stitch.project(projectId);
  const screens = await project.screens();
  console.log(`Found ${screens.length} screen(s)`);

  await mkdir(outDir, { recursive: true });
  const manifest = [];

  for (const screen of screens) {
    const id = screen.id ?? screen.screenId;
    console.log(`Fetching screen: ${id} (${screen.title ?? screen.name ?? "untitled"})`);

    const full = await project.getScreen(id);
    const htmlUrl = await full.getHtml();
    const imageUrl = await full.getImage?.().catch(() => null);

    const response = await fetch(htmlUrl);
    const html = await response.text();

    const safeName = (screen.title ?? screen.name ?? id).replace(/[^a-z0-9]+/gi, "-").toLowerCase();
    const htmlPath = `${outDir}/${safeName}-${id}.html`;
    await writeFile(htmlPath, html, "utf8");

    manifest.push({
      id,
      title: screen.title ?? screen.name ?? safeName,
      htmlPath,
      htmlUrl,
      imageUrl,
      bytes: html.length,
    });
    console.log(`  saved ${htmlPath} (${html.length} bytes)`);
  }

  await writeFile(`${outDir}/manifest.json`, JSON.stringify({ projectId, screens: manifest }, null, 2));
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
