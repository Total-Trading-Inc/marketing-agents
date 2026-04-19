---
name: viral-video-creator
description: "Generate viral short-form video scripts, storyboards, and AI visual prompts using HRR formula across TOFU/MOFU/BOFU. Bilingual EN/KO. Reads Content Calendar entries by CC-ID. Use when user says: script for CC-XXX, reel script for [product], video ideas for [campaign], viral video, short-form content, 릴스 스크립트, 바이럴 영상, or any video creation request. After scripts, hands off to creative-production-brief."
---

# Viral Video Creator

## Overview
Uses Hook → Retain → Reward (HRR) formula to generate viral short-form scripts with storyboards and AI visual prompts. Bilingual EN/KO. After scripts, always offers to hand off to `creative-production-brief`.

## Input options
- CC-ID: fetch brief from Notion Content Calendar
- Direct brief: user provides product, angle, persona, funnel stage
- Raw idea: user provides rough idea, Claude structures it

## Step 0 — Load product frames
For RTP Tennis: ALWAYS read `references/rtp-product-frames.md` before writing any hooks.
For Kmedtest: Use anxiety-acknowledgment hook pattern (see Funnel Blueprints below).

---

## HRR Formula

### Hook (first 3 seconds)
Goal: Stop the scroll. Create a pattern interrupt.
Must match one of these 7 hook types:

| Type | Formula | Example |
|---|---|---|
| Curiosity Gap | "Most [audience] don't know that [X]..." | "Most tennis players don't know their elbow pain isn't a muscle problem." |
| Pain Mirror | State the pain directly, viscerally | "That burning feeling in your elbow after every match?" |
| Contrarian | Challenge a common belief | "Stretching won't fix tennis elbow. Here's what actually will." |
| Transformation | Before → After implied | "I played through elbow pain for 3 years. Then I tried this." |
| Bold Claim | Specific, audacious, verifiable | "This $35 dampener absorbs 94.7% of the impact that causes tennis elbow." |
| Objection Kill | Pre-empt the main objection | "No, it's not about your grip. It's about what happens at frame impact." |
| Social Proof | Numbers or authority | "60,000 athletes use this. Here's why." |

### Retain (middle section)
Goal: Deliver the promise of the hook. Keep watching.
Elements:
- Mechanism (how/why it works — the science)
- Story or demonstration
- Proof (data, credentials, testimonials)
- Specificity (numbers, names, details)

### Reward (final section)
Goal: Emotional payoff + clear next step.
Elements:
- Resolution of the hook's tension
- Brand moment (natural, not forced)
- CTA appropriate to funnel stage

---

## Funnel Blueprints

### TOFU (15–30 seconds)
- Goal: Awareness, reach, shares
- Hook: Curiosity Gap or Pain Mirror — no brand name in first 10 seconds
- Retain: Problem education, mechanism teaser
- Reward: Soft CTA ("Link in bio to learn more", "Follow for more")
- Tone: Relatable, educational, no selling

### MOFU (30–45 seconds)
- Goal: Consideration, website visits
- Hook: Bold Claim or Contrarian
- Retain: Full mechanism explanation, expert credibility (Sky Kim, Sorbothane science, JCI accreditation), proof points
- Reward: Product reveal + medium CTA ("Compare on our site", "See full specs")
- Tone: Expert, authoritative, proof-forward

### BOFU (15–45 seconds)
- Goal: Conversion, purchase
- Hook: Objection Kill or Social Proof
- Retain: Risk reversal (30-day return), final proof, specific offer
- Reward: Hard CTA ("Order today", "Book your morning", "Use code X")
- Tone: Confident, direct, urgency only if real

---

## Script Output Format

For every script, deliver all 4 components:

### 1. Script Block
```
[HOOK - 0:00-0:03]
[line 1]
[line 2 if needed]

[RETAIN - 0:03-0:XX]
[line by line, one thought per line]
[use ... for natural pauses]

[REWARD - 0:XX-end]
[payoff line]
[CTA]
```

### 2. Storyboard (5–8 panels)
| Panel | Timing | Visual | Audio | Motion |
|---|---|---|---|---|
| 1 | 0:00-0:02 | [visual description] | [VO line] | [camera/subject motion] |
...

### 3. AI Visual Prompts (3–4 per video)
For each key scene, provide:
- **Image prompt** (Midjourney/DALL-E): detailed, style-specific
- **Video prompt** (Kling/Seedance): motion direction, speed, camera move
- **Angle options**: Wide / Close-up / POV / Hero Shot (provide at least 2 angles per scene)
See `references/ai-prompt-styles.md` for style guidelines.

### 4. Persona Adaptation Matrix
| Persona | Hook modification | CTA modification | Tone shift |
|---|---|---|---|
| [P1] | [adjust] | [adjust] | [adjust] |
| [P2] | [adjust] | [adjust] | [adjust] |

---

## Bilingual output (EN/KO)
If user requests Korean version:
- Translate full script maintaining HRR structure
- Adapt hook for Korean audience (not literal translation — cultural adaptation)
- Note any platform differences (Korean TikTok trends may differ)
- Korean TTS: use separate voice recommendation (confirm with user)

---

## Handoff
After delivering scripts, always offer:
"Ready to generate production documents for this script? I can run `creative-production-brief` to create the TTS script, shot list, and scene consistency brief."

---

## Reference files (read these)
- `references/rtp-product-frames.md` — RTP product hooks, pain points, proof points (LOAD FOR ALL RTP CONTENT)
- `references/hook-library.md` — 40+ hook templates by type and funnel stage
- `references/ai-prompt-styles.md` — AI visual prompt frameworks per brand
