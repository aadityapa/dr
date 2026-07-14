"""One-off parser for Note 1 expertise section — outputs JSON for review."""
import json
import re
from pathlib import Path

text = Path(r"C:\Users\Admin\Desktop\abhijeet\doc-extract.txt").read_text(encoding="utf-8")
lines = text.splitlines()
start = next(i for i, l in enumerate(lines) if l.strip() == "Looking Beyond a Diagnosis")
end = next(i for i, l in enumerate(lines) if l.strip() == "CONTACT US")
section = lines[start:end]

TITLES = {
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
}

blocks = []
i = 0
while i < len(section):
    line = section[i].strip()
    if not line:
        i += 1
        continue
    if line not in TITLES:
        i += 1
        continue

    title = line
    i += 1
    tagline = ""
    if i < len(section) and section[i].strip() not in TITLES and not section[i].strip().startswith("Parents") and section[i].strip() not in ("Areas Commonly Supported:", "Benefits may include:") and not section[i].strip().startswith("•") and not section[i].strip().startswith("Aquatic Therapy may"):
        tagline = section[i].strip()
        i += 1

    paras, parents_intro, parents, approach, areas, closing = [], None, [], [], [], None

    while i < len(section):
        s = section[i].strip()
        if not s:
            i += 1
            continue
        if s in TITLES:
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

    blocks.append(
        {
            "title": title,
            "tagline": tagline,
            "paras": paras,
            "parents_intro": parents_intro,
            "parents": parents,
            "approach": approach,
            "areas": areas,
            "closing": closing,
        }
    )

print(json.dumps(blocks, indent=2, ensure_ascii=False))
