---
name: content-pipeline
description: "Master content pipeline orchestrator. Runs 6 phases from campaign brief to Notion Content Calendar with production tasks. Use when user says: run the content pipeline, plan a campaign, push ideas to Notion, content calendar for [campaign], gap analysis on my ideas, or any workflow from ideas to published content plan."
---

# Content Pipeline — Master Orchestrator

## Overview
This skill runs 6 sequential phases from campaign brief to Notion Content Calendar entries with full production task chains. Always read the active company's context/ files before starting any phase.

## Pre-requisite
Before running any phase, load active company context:
- `[company]/context/brand.md`
- `[company]/context/notion-ids.md`
- `[company]/context/rules.md`

---

## Phase 1 — Campaign Brief
**Input:** Notion page URL or user-provided brief text
**Action:**
- If URL provided: fetch Notion page and extract campaign name, goal, product focus, target personas, dates, offer/hook
- If text: parse and structure into brief format
- Confirm brief with user before proceeding

**Output:** Structured campaign brief with:
- Campaign name
- Goal (Awareness / Engagement / Conversion)
- Product(s) featured
- Target persona(s)
- Funnel stage emphasis (TOFU / MOFU / BOFU)
- Key messages (3–5)
- Offer or hook
- Campaign dates

---

## Phase 2 — Research
**Input:** Campaign brief from Phase 1
**Action:**
- Scan active company's research/ folder:
  - research/campaigns/[relevant campaign]/
  - research/competitors/
  - research/audience/
  - research/platform-trends/
  - research/raw-dumps/
- Surface relevant findings per campaign goal
- Optionally run web search if user approves ("Run web research? Y/N")

**Output:** Research summary:
- Relevant competitor content observations
- Audience pain points matching this campaign
- Platform trend notes
- Recommended angles based on research

---

## Phase 3 — Idea Intake
**Input:** Raw ideas from user (bullet list, voice dump, rough notes)
**Action:**
- Accept any format — clean up and structure each idea
- Assign preliminary format, funnel stage, pillar, persona to each idea
- Do NOT filter or reject ideas yet

**Output:** Structured idea list with:
- Idea title
- Format (Reel / YT Short / YT Long / Static / Carousel / Story / Email / Blog)
- Funnel Stage (TOFU / MOFU / BOFU)
- Content Pillar (Educational / Authentic / Commercial / Community)
- Persona (list all that apply)
- Rough hook angle

---

## Phase 4 — Gap Analysis (PAUSE FOR APPROVAL)
**Input:** Idea list from Phase 3
**Action:**
- Audit the full set against:
  - Funnel coverage (TOFU / MOFU / BOFU balance)
  - Format mix (video / static / text — minimum 1 each per campaign)
  - Pillar coverage
  - Persona coverage
  - Platform coverage (IG / TikTok / YT / Email)
- Identify gaps and recommend additions
- Present gap report to user

**⛔ PAUSE HERE — present gap analysis and wait for user approval before proceeding**

**Output:** Gap analysis report + recommended additions + approved final idea list

---

## Phase 5 — Brief Generation
**Input:** Approved idea list from Phase 4
**Action:**
- Generate a format-specific brief for each approved idea
- Brief formats by content type:

**Video (Reel / YT Short / YT Long):**
- Hook (first 3 seconds)
- Retain section (mechanism, story, proof)
- Reward (payoff + CTA)
- Visual direction
- Kie.AI voice recommendation
- Storyboard outline (3–5 beats)

**Static / Carousel:**
- Headline
- Body copy
- Visual concept
- CTA
- Caption draft

**Story:**
- Slide sequence (3–5 slides)
- Copy per slide
- Interactive element (poll/swipe/link)

**Email:**
- Subject line (3 options)
- Preview text
- Body structure (hook / value / CTA)
- Send timing recommendation

**Output:** One brief document per approved idea, with CC-ID assigned sequentially (CC-001, CC-002, etc.)

---

## Phase 6 — Notion Publishing
**Input:** Approved briefs from Phase 5
**Action:**
- Create one Content Calendar entry per brief in Notion
- Database: active company's Content Calendar (see notion-ids.md)
- Required fields per entry:
  - Title: descriptive content title
  - Brand: active company name (ALWAYS set this — no exceptions)
  - Status: "Brief Ready" (NEVER set beyond this automatically)
  - Format
  - Funnel Stage
  - Content Pillar
  - Persona(s)
  - Campaign / Theme
  - CC-ID
  - Brief content in page body
- Create production task chain per entry in All Tasks DB (see references/task-chains.md)
- Task naming: "[COMPANY] / [CC-ID] [Format] – [Step]"

**Output:** Links to all created Notion pages + task list

**After Phase 6:** Offer to run `creative-production-brief` for each Content Calendar entry.

---

## Rules (always enforced)
- Brand field ALWAYS set to active company name
- Status NEVER set beyond "Brief Ready" automatically
- CC-IDs assigned sequentially within campaign
- Minimum content mix: 1 video + 1 static + 1 text format per campaign
- Campaign/Theme field identical across all pieces in same campaign
- Task naming: "[COMPANY] / [CC-ID] [Format] – [Step]" — no exceptions

---

## Reference files (read these)
- references/task-chains.md — task dependency chains per format
- references/campaign-structure.md — when to create a Project vs Theme-only
- references/full-production-workflow.md — complete workflow map
