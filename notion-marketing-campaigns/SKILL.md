---
name: notion-marketing-campaigns
description: "Set up and manage marketing campaigns and content calendars in Notion. Covers Instagram organic and Mailchimp email drips. Use when user says: set up a campaign in Notion, build my content calendar, create an Instagram campaign, set up an email drip, plan my marketing in Notion, create campaign pages, map out my email sequence, or any Notion + marketing workflow request."
---

# Notion Marketing Campaigns

## Overview
6-step workflow for setting up and managing marketing campaigns in Notion. Covers Instagram organic content + Mailchimp email drip sequences. Uses existing shared databases — does NOT create new databases.

## Critical: Use existing databases (do NOT create new ones)
Content Calendar: `10c6823b-c5b6-42f1-bb2f-940be53283c3`
All Tasks: `292c68b0-c7e8-8170-a2aa-000b6cd7a545`
Projects: `305c68b0-c7e8-80ca-90a9-000b0b182db7`
Asset Library: `30ac68b0-c7e8-80ea-8a27-000bcc43105d`

Always filter by `Brand = [active company]` before reading or writing.

---

## Step 1 — Campaign Brief
Collect from user:
- Campaign name
- Brand (RTP Tennis or Kmedtest)
- Goal: Awareness / Engagement / Conversion / Launch / Retention
- Dates: start → end
- Products / services featured
- Target persona(s)
- Key message (1–2 sentences)
- Offer or hook (if applicable)
- Budget (organic only, or paid amplification planned?)

Output: Structured campaign brief summary. Confirm with user before Step 2.

---

## Step 2 — Notion Structure Setup

**If campaign qualifies for a Project (5+ pieces, 2+ weeks, paid budget):**
- Create a Project page in Projects DB
- Fields: Brand, Campaign Name, Goal, Timeline, Budget, Status: Active
- Relation: will link Content Calendar entries in Step 3

**If campaign is Theme-only (under 4 pieces, organic, quick):**
- Use Campaign/Theme field on Content Calendar entries only
- No separate Project page needed

Confirm structure choice with user before proceeding.

---

## Step 3 — Content Calendar Population

Create Content Calendar entries for each planned content piece.
**Every entry MUST have:**
- Title: descriptive
- Brand: [active company] — ALWAYS set this
- Status: Idea (starting point)
- Format: [Reel / YT Short / YT Long / Static / Carousel / Story / Email / Blog]
- Funnel Stage: TOFU / MOFU / BOFU
- Content Pillar: Educational / Authentic / Commercial / Community
- Persona(s): [active company personas]
- Campaign / Theme: [exact same value for all pieces in this campaign]
- CC-ID: CC-001, CC-002... (sequential)

**Content arc structure:**
- Phase 1 (first ~33%): Awareness pieces — TOFU, Educational, problem-focused
- Phase 2 (middle ~34%): Engagement pieces — MOFU, Authentic, mechanism/proof
- Phase 3 (final ~33%): Conversion pieces — BOFU, Commercial, offer/CTA

**Posting frequency defaults:**
- IG Feed (static + carousel): 4x/week
- Reels: 2x/week
- Stories: daily (can be simple reposts/behind the scenes)
- Email: 1–2x/week

---

## Step 4 — Content Generation
For each Content Calendar entry, offer to run:
- `viral-video-creator` for video content (Reels, YT Shorts, YT Long)
- `creative-production-brief` to generate production documents
- Direct brief generation (captions, copy) for static/carousel/story

Update Status: Idea → Research → Brief Ready as each piece is briefed.

---

## Step 5 — Email Drip Setup
If campaign includes email component, set up drip sequence:

**Email drip types (see references/campaign-types.md for templates):**
- Welcome Sequence (5 emails — new subscriber)
- Product Launch (5–7 emails — product announcement to purchase)
- Re-engagement (3 emails — inactive subscribers)
- Campaign Nurture (3–5 emails — supports content calendar campaign)

For each email in sequence:
- Create Content Calendar entry: Format = Email, Status = Idea
- Task: "Kmedtest / [CC-ID] Email – Write Draft" in All Tasks DB
- Note: Mailchimp build happens after copy is approved in Notion

---

## Step 6 — Review Workflow
Status progression (manual approval required at each step):
```
Idea → Research → Brief Ready → In Production → In Review → Approved → Scheduled → Published
```

Create review tasks in All Tasks DB:
- "[COMPANY] / [CC-ID] [Format] – In Review" — assigned to reviewer
- "[COMPANY] / [CC-ID] [Format] – Approved" — final sign-off
- "[COMPANY] / [CC-ID] [Format] – Schedule" — set date/time in Notion

After publishing: update Status to Published. Log to Asset Library via `asset-logger`.

---

## Reference files
- `references/campaign-types.md` — email drip templates
- `references/content-formulas.md` — caption frameworks by format
- `references/notion-api.md` — Notion API patterns for Claude
