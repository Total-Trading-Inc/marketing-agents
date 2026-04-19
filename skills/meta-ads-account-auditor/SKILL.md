---
name: meta-ads-account-auditor
description: >
  Meta Ads account health auditor for RTP Tennis. Reads Notion campaign pages (All
  Tasks DB + Content Calendar) to check for audience cannibalization, budget
  fragmentation, learning phase conflicts, creative overlap, and objective
  misalignment across all simultaneous campaigns. Outputs a Campaign Health Score
  (0-100), prioritized fix list, and a safe campaign launch timeline.

  Trigger whenever the user says: "check if campaigns are competing", "audit Meta
  ads structure", "cannibalizing each other", "safe to launch another campaign",
  "Meta campaigns conflict", "campaign health check", "Meta account audit",
  "review my campaign structure", "광고 캠페인 점검", "캠페인 구조 감사",
  "메타 광고 충돌 확인", "캠페인 겹침 확인". ALSO trigger before any new Meta
  campaign launch, when asking about budget allocation across campaigns, or when
  Meta performance is declining without a clear cause. This is the required
  upstream check before meta-ads-strategist creates new campaigns.
---

# Meta Ads Account Auditor

Campaign structure health check for RTP Tennis Meta Ads account.
Reads Notion planning docs, identifies structural conflicts, scores account health,
and recommends a safe campaign launch timeline — all before a dollar is wasted.

Based on 2026 Meta best practices: consolidation-first, algorithm-friendly architecture,
learning phase protection, and audience overlap prevention.

---

## Workflow Overview

```
MODE A — Notion-Driven (preferred, fully automated)
  Step 1 → Pull campaign data from Notion
  Step 2 → Parse all active + planned campaigns
  Step 3 → Run conflict checks
  Step 4 → Score the account
  Step 5 → Generate timeline + fix plan
  Step 6 → Write audit report back to Notion

MODE B — Manual Input (fallback)
  Step 1 → Collect campaign data from user
  Steps 2-6 identical to Mode A
```

Always prefer Mode A. Notion is the source of truth for RTP Tennis campaign planning.

---

## Step 0 — Mode Selection

Check whether Notion MCP is available and whether Notion campaign pages exist.

If Notion MCP is connected:
→ Proceed directly to Step 1A (Notion Pull). Do NOT ask the user for data.

If Notion MCP is unavailable:
→ Tell the user: "Notion isn't connected right now. I'll ask you for your campaign details manually instead."
→ Skip to Step 1B (Manual Input).

---

## Step 1A — Pull from Notion (Preferred)

Read the following Notion sources in this order. Use the Notion MCP search and fetch tools.

### 1A-1. Active Task Pages in All Tasks DB

Search All Tasks DB for pages matching:
- Brand = RTP Tennis
- Title contains "Meta Ads" OR "Ad Campaign" OR "Campaign Brief"
- Status = "In progress" OR "Not started"

Key Notion resources to search/fetch (known IDs from workspace):
- All Tasks DB: `collection://292c68b0-c7e8-8170-a2aa-000b6cd7a545`
- Content Calendar DB: `collection://10c6823b-c5b6-42f1-bb2f-940be53283c3`
- "RTP / Meta Ads April Restructure": `333c68b0-c7e8-8088-902d-ef2b18f46cd7`
- "RTP / April Ad Creatives": `333c68b0-c7e8-80b0-9b4a-f1fd83543ca5`
- "Q1 RTP / Meta Campaigns": `305c68b0-c7e8-80d2-b196-ff88919c98f0`
- Any other pages with "Meta" in the title and Status = In progress / Not started

For each page found, extract:
- `campaign_name` — the page title
- `status` — (In progress / Not started / Complete)
- `date_range` — start and end dates
- `budget` — extract from page content (look for $ figures, CAD/day mentions)
- `objective` — Sales / Traffic / Awareness / Engagement (parse from content)
- `audience_type` — TOFU / MOFU / BOFU / broad / interest / retargeting (parse from content)
- `product` — Dampener / GripSocks / Heel Pad / Bundle / All (parse from content)
- `ad_creative_ids` — any CC-IDs referenced from Content Calendar
- `campaign_structure` — ASC / Manual CBO / Manual ABO / unknown (parse from content)
- `blocking` / `blocked_by` — from Notion relation properties (signal dependencies)

### 1A-2. Content Calendar — Upcoming Paid Content

Query Content Calendar for entries where:
- Brand = "RTP Tennis"
- Status = "Approved" OR "Scheduled" OR "Brief Ready"
- Publish Date = within next 30 days

For each CC entry, extract:
- `CC_ID` — the ID field
- `Campaign / Theme` — identifies which Meta campaign it feeds into
- `Format` — Reel / Static Image / Story / etc.
- `Funnel Stage` — TOFU / MOFU / BOFU
- `Platform` — Instagram / TikTok etc.

Group CC entries by `Campaign / Theme` to understand which content clusters exist.

### 1A-3. Parse Campaign Snapshot

Build a `campaign_snapshot` list:

```json
[
  {
    "name": "RTP / Meta Ads April Restructure",
    "status": "Not started",
    "start_date": "2026-04-05",
    "end_date": "2026-04-07",
    "budget_daily_cad": 100,
    "objective": "Sales",
    "audience_type": "TOFU + MOFU + BOFU",
    "product": "Dampener + GripSocks",
    "structure": "CBO",
    "content_pieces": ["CC-001", "CC-002"],
    "notion_url": "https://www.notion.so/333c68b0..."
  }
]
```

Once the snapshot is built, proceed to Step 2.

---

## Step 1B — Manual Input (Fallback)

If Notion is unavailable, ask the user to provide a campaign list.
Ask for each active or planned campaign:

```
For each campaign (repeat for all active or upcoming):
1. Campaign name and product focus
2. Current status: active / planned / paused
3. Daily budget (CAD)
4. Campaign objective: Sales / Traffic / Awareness
5. Audience type: broad / interest / retargeting / lookalike / ASC
6. Funnel stage: TOFU / MOFU / BOFU
7. Planned launch date (if not yet live)
8. Any shared audience with other campaigns?
```

Build the same `campaign_snapshot` structure. Proceed to Step 2.

---

## Step 2 — Run Conflict Checks

For the full check framework, read `references/conflict-checks.md`

Run all 6 checks against the `campaign_snapshot`. For each check, produce:
- `status`: PASS / WARNING / FAIL
- `severity`: Low / Medium / High / Critical
- `detail`: Specific campaigns or issues flagged
- `fix`: Recommended action

### Check 1 — Objective Fragmentation
Are multiple campaigns running the same objective (e.g., two separate Sales campaigns)?
- FAIL if: 2+ active Sales campaigns targeting overlapping audiences
- WARNING if: 2+ Sales campaigns with clearly separated audience tiers (TOFU vs BOFU)
- Rule: One objective = one consolidated campaign (Ben Heath / 2026 SOP)

### Check 2 — Audience Overlap / Cannibalization
Do any active campaigns target audiences that likely overlap?
- FAIL if: Two campaigns targeting the same product + same funnel stage
- WARNING if: Two campaigns targeting same funnel stage but different products
- Check especially for: missing exclusions (purchasers from retargeting, etc.)
- Flag: "Campaigns X and Y likely share audience. Check Meta's Audience Overlap tool."

### Check 3 — Budget Fragmentation
Is the total daily budget spread too thin across too many campaigns?
- RTP rule: Max 3 campaigns at $100-120 CAD/day total
- FAIL if: 4+ campaigns active simultaneously at current budget
- FAIL if: Any single campaign below $35 CAD/day (will never exit learning phase)
- WARNING if: 3 campaigns active and any single one is below $40 CAD/day

### Check 4 — Learning Phase Conflicts
Are simultaneous campaign launches fragmenting the learning pool?
- FAIL if: 3+ campaigns launched within the same 7-day window
- WARNING if: 2 campaigns launched within 3 days of each other
- Rule: Stagger launches by 7+ days minimum

### Check 5 — Creative Overlap
Are the same ad creatives or hooks appearing in multiple campaigns?
- FAIL if: Same video/image used in both TOFU and BOFU campaigns
- WARNING if: Same product angle used across 2+ campaigns at same funnel stage
- Check CC entries to identify creative clusters per campaign

### Check 6 — Non-RTP Campaign Interference
Are Kmedtest or other non-RTP campaigns active in the same Meta Business account?
- FAIL if: Any non-RTP campaign (Kmedtest, KJM skin brand) is active
- These contaminate the RTP pixel's learning pool and must be paused before any RTP restructure
- This is an immediate blocker — flag as CRITICAL

---

## Step 3 — Score the Account

Calculate Campaign Health Score (0-100):

| Check | Max Points |
|---|---|
| Check 1 — Objective Fragmentation | 10 |
| Check 2 — Audience Overlap | 25 |
| Check 3 — Budget Fragmentation | 20 |
| Check 4 — Learning Phase Conflicts | 15 |
| Check 5 — Creative Overlap | 10 |
| Check 6 — Non-RTP Interference | 20 |
| **Total** | **100** |

Scoring per check:
- PASS = full points
- WARNING = half points
- FAIL = 0 points

Score bands:
- 85-100: GREEN — Healthy. Safe to launch new campaigns.
- 65-84: YELLOW — Caution. Fix warnings before launching new campaigns.
- 40-64: ORANGE — At Risk. Fix all FAILs before any new launch.
- 0-39: RED — Critical. Stop all new launches. Restructure immediately.

---

## Step 4 — Generate Launch Timeline

Based on check results, produce a recommended campaign launch sequence.

For the full timeline rules, read `references/timeline-rules.md`

Output format:

```
RECOMMENDED LAUNCH SEQUENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━
WEEK 1 — [Date range]:
   Action: [what to do]
   Budget: $XX/day
   Creative: [which CC entries to use]
   Expected outcome: [learning phase milestone or KPI target]

WEEK 2 — [Date range]:
   Checkpoint: Evaluate [specific metric at specific threshold]
   IF [condition] → [next action]
   IF [condition] → [hold / investigate]

WEEK 3-4 — [Date range]:
   Evaluate combined ROAS:
   > 4x → [action]
   3-4x → [action]
   < 3x → [action]
━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Step 5 — Write Audit Report to Notion

Create a new page in All Tasks DB with:
- Title: `RTP / Meta Ads Health Check — [YYYY-MM-DD]`
- Status: Complete
- Brand: RTP Tennis
- Priority: High (if score < 65) / Medium (if score 65-84) / Low (if score 85+)

Page content structure:

```
## Campaign Health Score: [XX]/100 — [Color + Band Label]

## Check Results

### Check 1 — Objective Fragmentation: [PASS/WARNING/FAIL]
[Detail and fix]

### Check 2 — Audience Overlap: [PASS/WARNING/FAIL]
[Detail and fix]

### Check 3 — Budget Fragmentation: [PASS/WARNING/FAIL]
[Detail and fix]

### Check 4 — Learning Phase Conflicts: [PASS/WARNING/FAIL]
[Detail and fix]

### Check 5 — Creative Overlap: [PASS/WARNING/FAIL]
[Detail and fix]

### Check 6 — Non-RTP Campaign Interference: [PASS/WARNING/FAIL]
[Detail and fix]

## Priority Fix List
1. [CRITICAL/HIGH/MEDIUM] — [Action] — [Campaign affected]
2. ...

## Recommended Launch Sequence
[Full timeline output from Step 4]

## Content Calendar Alignment
[CC entries mapped to campaigns — which creative feeds which campaign]

## Next Audit
Recommended: [Date — 2 weeks from today, or after next campaign launch]
```

---

## Step 6 — Summary for User

After writing to Notion, deliver a brief chat summary:

```
META ADS HEALTH CHECK — [Date]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Score: [XX]/100 — [Color + Band Label]

Top issues found:
- [Issue 1 — one line]
- [Issue 2 — one line]
- [Issue 3 — one line]

Recommended next campaign launch: [Date]
Safe to launch now: [YES / NO / With conditions]

Full report written to Notion → [page title]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Run next check: After next campaign launch, or in 2 weeks.
```

---

## Integration Points

Feeds into:
- `meta-ads-strategist` — once health check passes, use this skill to build the new campaign
- `content-pipeline` — CC entries aligned to campaigns inform what content to produce next

Fed by:
- All Tasks DB — source of campaign briefs and active task pages
- Content Calendar DB — source of upcoming creative tied to campaigns

When to run:
- Before launching any new Meta campaign
- Weekly during active campaign periods (every Monday alongside performance review)
- After any budget change of >20%
- After any campaign launch or pause

---

## Reference Files

- `references/conflict-checks.md` — detailed logic for each of the 6 checks
- `references/rtp-meta-account-map.md` — known RTP campaign history and Notion IDs
- `references/timeline-rules.md` — launch sequence rules and budget allocation formulas
