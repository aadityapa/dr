# Clinic Photos — Upload Guide

Upload real photography here using the **exact filenames** below. Local clinic photos are used by default once these files exist. To temporarily fall back to remote placeholders, set:

```
NEXT_PUBLIC_USE_LOCAL_PHOTOS=false
```

Then redeploy.

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
│   ├── climbing-wall.jpg     ← Climbing wall / colorful movement space
│   └── aquatic-area.jpg      ← Aquatic therapy area (if applicable)
├── equipment/
│   ├── sensory-tools.jpg     ← Sensory integration tools
│   └── fine-motor.jpg        ← Handwriting / fine motor setup
├── gallery/
│   ├── sensory-pathway-stepping-practice.jpg
│   ├── therapist-guided-balance-play.jpg
│   ├── climbing-wall-step-practice.jpg
│   ├── ring-swing-movement-play.jpg
│   └── supported-swing-session.jpg
├── videos/
│   ├── handwriting-board-practice.mp4
│   ├── sensory-pathway-guided-play.mp4
│   ├── climbing-wall-balance-practice.mp4
│   └── sensory-swing-session.mp4
└── therapy/
    ├── sensory-pathway.jpg   ← Child using tactile/sensory pathway
    ├── guided-swing-support.jpg
    └── handwriting-practice.jpg
```

## Recommended specs

- **Format:** JPG or WebP
- **Quality:** High resolution, well-lit, natural colours
- **Portrait:** Professional, warm background, child-friendly feel
- **Clinic:** Clean, inviting, show real therapy spaces
- **Avoid:** Stock photos, heavy filters, blurry images
- **Videos:** Use short MP4 clips with native controls, no autoplay audio, and a still poster image.

## After uploading

1. Place files in the folders above with matching names
2. Run `npm run build` locally to verify images load
3. Push and deploy to Vercel after review
