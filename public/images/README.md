# Clinic Photos — Upload Guide

Upload your real photography here using the **exact filenames** below. Once all files are in place, set in `.env.local`:

```
NEXT_PUBLIC_USE_LOCAL_PHOTOS=true
```

Then redeploy. Until then, the site uses placeholder images automatically.

## Folder structure

```
images/
├── doctor/
│   └── portrait.jpg          ← Dr. Sharuja professional headshot (min 800×1000px)
├── hero/
│   └── main.jpg              ← Homepage hero (min 1280×1600px)
├── clinic/
│   ├── reception.jpg         ← Reception / waiting area
│   ├── exterior.jpg          ← Building or entrance
│   └── hallway.jpg           ← Corridor or welcome area
├── therapy-rooms/
│   ├── sensory-gym.jpg       ← Sensory gym with swings & equipment
│   ├── assessment-room.jpg   ← Assessment / quiet room
│   └── aquatic-area.jpg      ← Aquatic therapy area (if applicable)
└── equipment/
    ├── sensory-tools.jpg     ← Sensory integration tools
    └── fine-motor.jpg        ← Handwriting / fine motor setup
```

## Recommended specs

- **Format:** JPG or WebP
- **Quality:** High resolution, well-lit, natural colours
- **Portrait:** Professional, warm background, child-friendly feel
- **Clinic:** Clean, inviting, show real therapy spaces
- **Avoid:** Stock photos, heavy filters, blurry images

## After uploading

1. Place files in the folders above with matching names
2. Add `NEXT_PUBLIC_USE_LOCAL_PHOTOS=true` to `.env.local`
3. Run `npm run build` locally to verify images load
4. Push and deploy to Vercel (add env var in Vercel dashboard too)
