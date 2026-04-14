---
name: canva-edit-brief
description: "Creates structured Canva video edit briefs from generated assets. Outputs clip order, text overlays, music direction, CTA card, and export settings. Use when user says: create the edit brief for CC-XXX, I have the clips ready, Canva edit instructions, prepare the editing brief, or any request bridging generated assets to Canva assembly."
---

# Canva Edit Brief

## Overview
Takes generated TTS audio, images/clips, and storyboard → produces a structured Canva edit brief with everything needed to assemble the final video. After edit is complete, run `asset-logger` to log to Notion.

## Required inputs (ask user if not provided)
1. CC-ID (to fetch original brief and storyboard)
2. TTS script (Doc 1 from creative-production-brief)
3. Shot list (Doc 2 from creative-production-brief)
4. Asset inventory — what was actually generated:
   - Which image angles were generated per scene?
   - Are video clips available (Kling/Seedance) or images only?
   - TTS audio file name and confirmed voice/speed
5. Target platform (determines export specs)

---

## Platform Export Specifications

| Platform | Resolution | Aspect Ratio | Frame Rate | Format | Max Duration |
|---|---|---|---|---|---|
| Instagram Reel | 1080 x 1920 | 9:16 | 30fps | MP4 H.264 | 90s |
| TikTok | 1080 x 1920 | 9:16 | 30fps | MP4 H.264 | 10 min |
| YouTube Short | 1080 x 1920 | 9:16 | 30fps | MP4 H.264 | 60s |
| YouTube Long | 1920 x 1080 | 16:9 | 30fps | MP4 H.264 | Unlimited |
| Instagram Feed (Square) | 1080 x 1080 | 1:1 | 30fps | MP4 H.264 | 60s |
| Instagram Story | 1080 x 1920 | 9:16 | 30fps | MP4 H.264 | 15s per slide |

---

## Edit Brief Output Format

```
CANVA EDIT BRIEF — [CC-ID] [Title]
Platform: [Platform] | Duration: [Target length]
Export spec: [Resolution] [AR] [fps] MP4

---

SECTION 1 — CLIP ORDER + TIMING

| Clip # | Asset file | Start | Duration | Notes |
|---|---|---|---|---|
| 1 | [CC-ID]_Scene1_AngleA_v1.png | 0:00 | 0:03 | Ken Burns: slow zoom in |
| 2 | [CC-ID]_Scene2_AngleB_v1.mp4 | 0:03 | 0:05 | Natural motion, no extra effect |
...

Total timeline: [X] seconds

---

SECTION 2 — TEXT OVERLAYS

| Clip # | Text | Font | Size | Color | Position | Animation | Timing |
|---|---|---|---|---|---|---|---|
| 1 | [hook text] | [font] | [size] | [hex] | [top/center/bottom] | [fade/slide] | 0:00–0:03 |
...

Text overlay rules:
- Hook text: large, high contrast, centered
- Proof points: smaller, lower third
- CTA: full screen last 3–5 seconds
- Caption burns: if requested, match TTS timing

---

SECTION 3 — MUSIC DIRECTION

Mood: [describe feeling — e.g., "focused and determined", "warm and reassuring"]
Tempo: [slow/medium/fast — match edit rhythm]
Instrumentation: [e.g., "minimal piano", "subtle electronic", "acoustic guitar"]
Volume: [%] under voiceover | [%] intro/outro (no VO)
Fade: in over first [X]s | out over last [X]s
Canva library search terms: [2–3 search terms to find right track]
Note: avoid tracks with prominent vocals — competes with TTS

---

SECTION 4 — CTA CARD (last 3–5 seconds)

Background: [color — use brand primary]
Text line 1: [CTA text] | Font: [font] | Size: large
Text line 2: [URL or handle] | Font: [font] | Size: medium
Logo: [position — bottom center]
Animation: [fade in / slide up]
Duration: [3–5 seconds]

---

SECTION 5 — EXPORT SETTINGS

File name: [CC-ID]_[Platform]_[Title]_v1.mp4
Resolution: [from platform spec above]
Aspect ratio: [from platform spec above]
Frame rate: 30fps
Format: MP4 H.264
Canva quality setting: High

Google Drive destination:
[Company] > Content Production > [Campaign] > [CC-ID] > final/

---

SECTION 6 — REVIEW CHECKLIST

Before exporting, verify:
☐ All text overlays are readable on mobile (min 36px equivalent)
☐ No text within 5% of frame edges
☐ TTS audio synced to cuts
☐ Music fades properly under VO
☐ CTA card is legible and on-brand
☐ No copyright-flagged music
☐ Duration matches platform maximum
☐ Aspect ratio correct for platform
☐ Export file name follows naming convention
```

---

## After delivering brief:
1. Remind user of file naming: `[CC-ID]_[Platform]_[Title]_v1.mp4`
2. Remind user to upload to Google Drive: `[Company] > Content Production > [Campaign] > [CC-ID] > final/`
3. Offer: "Once you've exported, run `asset-logger` to log the final video to Notion Asset Library."
