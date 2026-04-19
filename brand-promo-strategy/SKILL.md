---
name: brand-promo-strategy
description: "Build promotional strategy documents for consumer brands. Bilingual EN/KO — always asks language first. Outputs Word doc with personas, channel strategy, seasonal calendar, and content ideas. For RTP Tennis and Kmedtest, auto-loads brand context. Use when user says: build a promo strategy, marketing plan, campaign strategy, seasonal marketing, content strategy document, 마케팅 전략 짜줘, 프로모션 전략, or any structured marketing strategy request."
---

# Brand Promotional Strategy

## STEP 0 — ALWAYS ask language first
Before doing anything else, ask:
"영어로 작성할까요, 한국어로 작성할까요? (English or Korean?)"

Do not proceed until language is confirmed.

---

## Overview
Generates a comprehensive promotional strategy document in Word (.docx) format. For RTP Tennis and Kmedtest, auto-loads brand context from their context/ folders. For new brands, collects brand info before generating.

---

## Pre-requisite (for RTP Tennis or Kmedtest)
Load:
- `[company]/context/brand.md`
- `[company]/context/rules.md`

---

## Document Sections

### Section 1 — Brand Overview & Goals
- Brand name and one-paragraph overview
- Current marketing goals (Awareness / Engagement / Conversion)
- Key metrics being tracked
- Current channels + performance (if user can share)
- 90-day priority focus

### Section 2 — Personas (2–3 personas)
Per persona:
- Name and archetype
- Demographics + psychographics
- Pain points (3–5)
- Motivations (3–5)
- Platform behavior (where they consume content, when, how)
- Tone that resonates
- CTA that converts

For RTP Tennis: use 5 established personas (select most relevant 2–3 per campaign focus)
For Kmedtest: use all 3 established personas (P1/P2/P3)

### Section 3 — Channel Strategy
Per channel:
- Platform: [IG / TikTok / YouTube / Email / Other]
- Posting frequency: [specific cadence]
- Content formats: [Reels / Carousels / Stories / Shorts / Long-form / Newsletters]
- Tone + style for this channel
- Key performance targets (reach, engagement rate, open rate, etc.)
- Paid potential (organic first, then amplify with Meta ads if applicable)

For Kmedtest: include healthcare-specific trust-building in channel strategy (no direct medical claims, emphasize proof points and transparency)

### Section 4 — Seasonal Calendar
12-month view with:
- Key dates (holidays, sports seasons, health awareness months, industry events)
- Recommended campaign windows
- Content volume by month (high/medium/low)

RTP Tennis seasonal dates (Canada):
- January: New Year fitness resolutions
- March: Indoor tennis season peak
- May–August: Outdoor season, summer leagues
- September: Fall season starts
- October: Injury prevention awareness
- November–December: Holiday gifting

Kmedtest seasonal dates (Canada/USA):
- January: New Year health resolutions
- April: Travel planning season begins
- June–August: Peak travel + Korea tourism season
- October: Annual physical / fall health checks
- December: Year-end benefits use-it-or-lose-it

### Section 5 — Content Ideas by Format
Minimum 3 ideas per format:
- Instagram Reels / TikTok (TOFU / MOFU / BOFU examples)
- YouTube (educational long-form + Shorts)
- Carousel posts
- Stories
- Email campaigns

For RTP: cross-reference viral-video-creator/references/rtp-product-frames.md for product-specific angles
For Kmedtest: use anxiety-first content framing, persona-specific messaging

### Section 6 — Execution Checklist
- Weekly content rhythm (what to post each day/week)
- Production workflow summary
- Tools needed: Canva, Kie.AI, Midjourney, Mailchimp, Notion
- Team roles (if applicable)
- Review and approval steps

### Section 7 — Content Pipeline Integration (ALWAYS include)
Map this strategy to the content pipeline:
1. Take one campaign from this strategy
2. Create a Campaign Brief → load into `content-pipeline` skill
3. Phase 2 Research → check research/ folder for this topic
4. Phase 3–4 → intake ideas from Section 5, run gap analysis
5. Phase 5–6 → generate briefs + push to Notion Content Calendar
6. Production → use `viral-video-creator` + `creative-production-brief` + `canva-edit-brief`

Include: "To run this strategy through the content pipeline, say: 'Run content pipeline for [Campaign Name from Section 4]'"

---

## Output format
- Generate as structured document outline (user can paste into Word or Notion)
- Use clear section headers
- Tables for personas, channel strategy, seasonal calendar
- Bullet lists for content ideas and checklists
- Total length: ~2,500–4,000 words depending on brand complexity

---

## Bilingual output (if Korean selected)
- Full document in Korean
- Section headers in both EN/KO
- Marketing terminology: use standard Korean marketing vocabulary
- Seasonal dates: include both Korean holidays and North American (if targeting diaspora)
- Note: Kmedtest Korean output targets Korean-speaking North American audience — not Korean domestic market
