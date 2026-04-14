---
name: creative-production-brief
description: "Converts Content Calendar entries into 3 production-ready documents for Kie.AI and Midjourney: (1) TTS script formatted for voice generation, (2) shot list with 3-4 image angle prompts per scene, (3) scene consistency brief for visual continuity. Use when user says: generate production docs for CC-XXX, create the shot list, Kie.AI script for [piece], prepare production assets, or any request to move from approved brief to asset creation."
---

# Creative Production Brief

## Overview
Converts an approved Content Calendar entry into 3 production documents ready for Kie.AI TTS and Midjourney/DALL-E image generation. After delivering documents, updates CC Status: Brief Ready → In Production.

## Input
- CC-ID (fetches from Notion Content Calendar)
- Or: direct brief text + script from user

## Pre-requisite
Read the active company's brand.md and rules.md before generating documents.

---

## Document 1 — TTS Script (Kie.AI Ready)

### Rules for TTS formatting:
- One thought per line (hard line breaks between thoughts)
- Remove ALL stage directions, visual cues, bracket instructions
- Replace [pause short] with " ... " (three dots with spaces)
- Replace [pause long] with " ...... " (six dots with spaces)
- Write numbers as words: "thirty-five dollars" not "$35"
- Write percentages as words: "ninety-four point seven percent"
- Brand names spaced for correct pronunciation:
  - RTP Tennis → "R T P Tennis"
  - Kmedtest → "Kay med test"
- No markdown, no formatting — plain text only
- End each section with a natural sentence (no cut-off mid-thought)

### TTS Script output format:
```
[CC-ID] TTS Script — [Title]
Voice: [Name] ([Voice ID]) at [Speed]x

---

[Line 1]

[Line 2]

...
```

---

## Document 2 — Shot List

### Structure:
- Scene-by-scene breakdown matching script structure
- 3–4 image prompts per scene from different angles
- Motion notes for video generation (Kling / Seedance)

### Angles to cover per scene:
- **Wide Shot**: environment, context, full body
- **Close-up**: product detail, face reaction, hands
- **POV**: from subject's perspective
- **Hero Shot**: optimized for thumbnail/cover image

### Shot list format:
```
SCENE [N] — [Scene name/description]
Script timing: [0:00–0:XX]
VO lines: "[relevant script lines]"

Angle A — Wide Shot
Image prompt: [full Midjourney prompt]
Video prompt: [Kling/Seedance motion notes]

Angle B — Close-up
Image prompt: [full Midjourney prompt]
Video prompt: [Kling/Seedance motion notes]

Angle C — POV
Image prompt: [full Midjourney prompt]
Video prompt: [Kling/Seedance motion notes]

Angle D — Hero Shot
Image prompt: [full Midjourney prompt]
Video prompt: [Kling/Seedance motion notes]

Recommended angle for this scene: [A/B/C/D]
```

---

## Document 3 — Scene Consistency Brief

### Purpose:
Locks visual identity across all generated images. **This document must be pasted at the start of EVERY new image generation session** to maintain consistency.

### Format:
```
SCENE CONSISTENCY BRIEF — [CC-ID] [Title]
Paste this at the start of every Midjourney or DALL-E session.

CHARACTER (if human subject present):
- [Age range, gender, appearance description]
- [Clothing: specific colors, brands, style]
- [Expression/energy: calm, focused, in pain, athletic, etc.]

ENVIRONMENT:
- [Setting: court type, surface, location]
- [Time of day / lighting direction]
- [Background elements to include/exclude]

LIGHTING:
- Color temperature: [K value]
- Direction: [side-lit, back-lit, overhead, etc.]
- Quality: [hard/soft, natural/artificial]

COLOR PALETTE:
- Dominant: [hex or description]
- Accent: [hex or description]
- Avoid: [colors to exclude]

CAMERA STYLE:
- Lens feel: [85mm portrait / 35mm wide / macro]
- Style: [photorealistic, editorial, documentary, cinematic]
- Finish: [--style raw, --v 6, etc.]

ASPECT RATIO: [16:9 / 9:16 / 1:1]

DO NOT include: [list of elements to avoid for brand compliance]
```

---

## After delivering documents:
1. Update Notion Content Calendar entry: Status → "In Production"
2. Confirm: "Documents ready. Update status to In Production? (Y/N)"
3. Offer handoff: "Once you've generated your assets, I can create the Canva edit brief with `canva-edit-brief`."

---

## File naming (remind user to use)
- TTS file: `[CC-ID]_TTS_[Title]_v1.mp3`
- Image files: `[CC-ID]_Scene[N]_[AngleLetter]_v1.png`
- Google Drive path: `[Company] > Content Production > [Campaign] > [CC-ID] > [audio|images]`
