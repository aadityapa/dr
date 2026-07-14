"""Generate src/lib/client-content/expertise.ts from doc-extract.txt (verbatim)."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
text = (ROOT / "doc-extract.txt").read_text(encoding="utf-8")
lines = text.splitlines()
start = next(i for i, l in enumerate(lines) if l.strip() == "Looking Beyond a Diagnosis")
end = next(i for i, l in enumerate(lines) if l.strip() == "CONTACT US")
section = lines[start:end]

TITLES = [
    "Looking Beyond a Diagnosis",
    "Brain Gym®",
    "Double Doodle Play®",
    "Sensory Integration",
    "Rhythmic Movement Training International® (RMTI)",
    "Handwriting Without Tears® (HWT)",
    "Oral Placement Therapy® (OPT)",
    "Aquatic Therapy (IATF Certified)",
    "Pediatric Instrument Assisted Soft Tissue Mobilization (PIASTM)",
    "Kinesio Taping® (KT)",
    "Masgutova Neurosensorimotor Reflex Integration® (MNRI)",
    "Kinesio Dry Cupping Therapy (KDCT)",
]

SLUGS = {
    "Looking Beyond a Diagnosis": "looking-beyond-a-diagnosis",
    "Brain Gym®": "brain-gym",
    "Double Doodle Play®": "double-doodle-play",
    "Sensory Integration": "sensory-integration",
    "Rhythmic Movement Training International® (RMTI)": "rmti",
    "Handwriting Without Tears® (HWT)": "handwriting-without-tears",
    "Oral Placement Therapy® (OPT)": "oral-placement-therapy",
    "Aquatic Therapy (IATF Certified)": "aquatic-therapy",
    "Pediatric Instrument Assisted Soft Tissue Mobilization (PIASTM)": "piastm",
    "Kinesio Taping® (KT)": "kinesio-taping",
    "Masgutova Neurosensorimotor Reflex Integration® (MNRI)": "mnri",
    "Kinesio Dry Cupping Therapy (KDCT)": "kdct",
}

ICONS = {
    "looking-beyond-a-diagnosis": "HeartHandshake",
    "brain-gym": "Brain",
    "double-doodle-play": "PenLine",
    "sensory-integration": "Sparkles",
    "rmti": "Target",
    "handwriting-without-tears": "PenLine",
    "oral-placement-therapy": "Utensils",
    "aquatic-therapy": "Waves",
    "piastm": "Hand",
    "kinesio-taping": "Award",
    "mnri": "Brain",
    "kdct": "HeartHandshake",
}

PILL = {
    "looking-beyond-a-diagnosis": "Whole Child",
    "brain-gym": "Brain Gym",
    "double-doodle-play": "Double Doodle",
    "sensory-integration": "Sensory Integration",
    "rmti": "RMTI",
    "handwriting-without-tears": "HWT",
    "oral-placement-therapy": "OPT",
    "aquatic-therapy": "Aquatic Therapy",
    "piastm": "PIASTM",
    "kinesio-taping": "Kinesio Taping",
    "mnri": "MNRI",
    "kdct": "KDCT",
}

META = {
    "looking-beyond-a-diagnosis": "Pediatric OT in Kandivali that sees the whole child — not just a diagnosis. Family-centred care with Dr. Sharuja Sarap, Mumbai.",
    "brain-gym": "Brain Gym® for children in Mumbai & Kandivali. Movement-based support for focus, learning readiness, and participation with Dr. Sharuja Sarap.",
    "double-doodle-play": "Double Doodle Play® in Kandivali — playful bilateral drawing that supports handwriting and coordination. Pediatric OT with Dr. Sharuja Sarap.",
    "sensory-integration": "Sensory integration therapy in Mumbai & Kandivali for children who struggle with noise, texture, or overwhelm. Warm OT with Dr. Sharuja Sarap.",
    "rmti": "RMTI® rhythmic movement training for children in Kandivali. Gentle reflex integration for posture, focus, and calm with Dr. Sharuja Sarap.",
    "handwriting-without-tears": "Handwriting Without Tears® in Mumbai & Kandivali. Multisensory handwriting support for children who struggle with legibility and endurance.",
    "oral-placement-therapy": "Oral Placement Therapy® for picky eaters and feeding challenges in Kandivali. Gentle pediatric OT feeding support with Dr. Sharuja Sarap.",
    "aquatic-therapy": "Pediatric aquatic therapy in Mumbai for strength, balance, and sensory calm. Certified water-based OT with Dr. Sharuja Sarap in Kandivali.",
    "piastm": "PIASTM soft tissue therapy for children in Kandivali. Gentle support for muscle tension, posture, and movement with Dr. Sharuja Sarap.",
    "kinesio-taping": "Kinesio Taping® for children in Mumbai & Kandivali. Postural and movement support for school, sports, and daily activities.",
    "mnri": "MNRI® reflex integration for children in Kandivali. Foundational nervous system support for movement, regulation, and learning.",
    "kdct": "KDCT gentle dry cupping for children in Kandivali. Pediatric muscle tension relief alongside OT with Dr. Sharuja Sarap, Mumbai.",
}


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def parse_blocks():
    title_set = set(TITLES)
    blocks = []
    i = 0
    while i < len(section):
        line = section[i].strip()
        if line not in title_set:
            i += 1
            continue
        title = line
        i += 1
        tagline = ""
        if i < len(section):
            nxt = section[i].strip()
            if nxt not in title_set and not nxt.startswith("Parents") and nxt not in (
                "Areas Commonly Supported:",
                "Benefits may include:",
            ) and not nxt.startswith("•") and not nxt.startswith("Aquatic Therapy may"):
                tagline = nxt
                i += 1

        paras, parents_intro, parents, approach, areas, closing = [], None, [], [], [], None
        while i < len(section):
            s = section[i].strip()
            if not s:
                i += 1
                continue
            if s in title_set:
                break
            if s.startswith("Parents") or s.startswith("Aquatic Therapy may be beneficial"):
                parents_intro = s
                i += 1
                while i < len(section) and section[i].strip().startswith("•"):
                    parents.append(section[i].strip()[1:].strip())
                    i += 1
                continue
            if s in ("Areas Commonly Supported:", "Benefits may include:"):
                i += 1
                while i < len(section) and section[i].strip().startswith("•"):
                    areas.append(section[i].strip()[1:].strip())
                    i += 1
                continue
            if areas:
                closing = s
                i += 1
                break
            if parents and not areas:
                approach.append(s)
                i += 1
                continue
            paras.append(s)
            i += 1

        if title == "Looking Beyond a Diagnosis":
            fixed_tagline = tagline.replace(" ..", ".").replace("..", ".")
            if fixed_tagline and not fixed_tagline.endswith("."):
                fixed_tagline += "."
            tagline = fixed_tagline

        block = {
            "title": title,
            "tagline": tagline,
            "paras": paras,
            "parents_intro": parents_intro,
            "parents": parents,
            "approach": approach,
            "areas": areas,
            "closing": closing,
        }
        if block["title"] == "Looking Beyond a Diagnosis":
            block["tagline"] = block["tagline"].replace("diagnosis.", "diagnosis. ").replace("  ", " ").strip()
        if block["title"] == "Aquatic Therapy (IATF Certified)":
            confident = (
                "Parents often notice that children feel more confident, motivated, "
                "and successful when learning through water-based experiences."
            )
            if confident not in block["approach"] and confident not in block["paras"]:
                block["approach"].insert(0, confident)
        blocks.append(block)
    return blocks


def ts_array(items: list[str], indent: str = "      ") -> str:
    if not items:
        return "[]"
    return "[\n" + ",\n".join(f'{indent}"{esc(x)}"' for x in items) + f"\n{indent[:-2]}]"


blocks = parse_blocks()
out = [
    "export type ExpertiseArea = {",
    "  slug: string;",
    "  title: string;",
    "  tagline: string;",
    "  pillLabel: string;",
    "  icon: string;",
    "  understanding: string;",
    "  whatParentsNoticeIntro?: string;",
    "  whatParentsMayNotice: string[];",
    "  approachSummary?: string[];",
    "  areasCommonlySupported: string[];",
    "  closingLine?: string;",
    "  metaDescription: string;",
    "};",
    "",
    "export const expertiseAreas: ExpertiseArea[] = [",
]

for b in blocks:
    slug = SLUGS[b["title"]]
    understanding = "\n\n".join(b["paras"])
    approach = b["approach"] or None
    out.append("  {")
    out.append(f'    slug: "{slug}",')
    out.append(f'    title: "{esc(b["title"])}",')
    out.append(f'    tagline: "{esc(b["tagline"])}",')
    out.append(f'    pillLabel: "{esc(PILL[slug])}",')
    out.append(f'    icon: "{ICONS[slug]}",')
    out.append(f'    understanding: "{esc(understanding)}",')
    if b["parents_intro"]:
        out.append(f'    whatParentsNoticeIntro: "{esc(b["parents_intro"])}",')
    out.append(f"    whatParentsMayNotice: {ts_array(b['parents'])},")
    if approach:
        out.append(f"    approachSummary: {ts_array(approach)},")
    out.append(f"    areasCommonlySupported: {ts_array(b['areas'])},")
    if b["closing"]:
        out.append(f'    closingLine: "{esc(b["closing"])}",')
    out.append(f'    metaDescription: "{esc(META[slug])}",')
    out.append("  },")

out.extend(
    [
        "];",
        "",
        "/** Eleven specialised programme pages — excludes the landing-only intro. */",
        "export const expertiseCategorySlugs = [",
        '  "brain-gym",',
        '  "double-doodle-play",',
        '  "sensory-integration",',
        '  "rmti",',
        '  "handwriting-without-tears",',
        '  "oral-placement-therapy",',
        '  "aquatic-therapy",',
        '  "piastm",',
        '  "kinesio-taping",',
        '  "mnri",',
        '  "kdct",',
        "] as const;",
        "",
        "export type ExpertiseCategorySlug = (typeof expertiseCategorySlugs)[number];",
        "",
        "export const expertiseCategories = expertiseCategorySlugs",
        "  .map((slug) => expertiseAreas.find((area) => area.slug === slug))",
        "  .filter((area): area is ExpertiseArea => Boolean(area));",
        "",
        "export const lookingBeyondExpertise = expertiseAreas.find(",
        '  (area) => area.slug === "looking-beyond-a-diagnosis",',
        ")!;",
        "",
        "export function getExpertise(slug: string): ExpertiseArea | undefined {",
        "  return expertiseAreas.find((area) => area.slug === slug);",
        "}",
        "",
        "export function isExpertiseCategory(slug: string): slug is ExpertiseCategorySlug {",
        "  return (expertiseCategorySlugs as readonly string[]).includes(slug);",
        "}",
        "",
    ]
)

(ROOT / "src/lib/client-content/expertise.ts").write_text("\n".join(out), encoding="utf-8")
print("Wrote expertise.ts with", len(blocks), "areas")
