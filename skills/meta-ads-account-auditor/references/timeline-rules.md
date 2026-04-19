# Campaign Launch Timeline Rules — Meta Ads Account Auditor

Rules for building a safe campaign launch sequence for RTP Tennis.
Based on Meta's learning phase requirements and RTP's $100-120 CAD/day budget.

---

## Core Sequencing Rules

### Rule 1 — Never launch more than 2 campaigns in the same week
Each campaign needs clean conversion data to learn. Two campaigns launched in the same 7-day window compete for the same pixel events, extending both learning phases.

### Rule 2 — Minimum 5 days between campaign launches
This gives the first campaign time to collect initial data before the second one starts competing for budget and audience. Ideal spacing: 7-10 days. Use the 5-day minimum only if a specific event or season forces the timeline.

### Rule 3 — Sequence by funnel: TOFU then MOFU then BOFU
Always launch cold audience campaigns first. Retargeting only works once there's a warm audience built by the TOFU campaign. Launching BOFU before TOFU gives retargeting nothing to work with.

### Rule 4 — Check learning phase exit before adding campaigns
Before launching a new campaign, confirm the existing campaign(s) have exited the learning phase:
- 7+ days live AND 50+ purchase events = exited learning
- Still in learning after 14 days = structural problem, do not add more campaigns

### Rule 5 — Budget must increase proportionally with campaign count
Each new campaign requires a minimum of $35 CAD/day. Do not add a campaign without either reducing spend on an existing one or increasing total daily budget.

---

## Timeline Templates

### Template A — Fresh Start (No Prior Campaigns)

Use when: Starting from zero or after a full account reset.

```
WEEK 1 (Days 1-7):
  Launch: 1x ASC (Advantage+ Shopping Campaign)
  Budget: $100-120 CAD/day (all-in)
  Objective: Sales
  Creative: TOFU Educational Reel (primary) + 1 variation
  Audience: Broad (let Meta's algorithm find buyers)
  Goal: Exit learning phase (50 purchases)

WEEK 2 (Days 8-14):
  Checkpoint: Did ASC exit learning?
  YES (50+ purchases, stable ROAS) → Launch retargeting campaign in Week 3
  NO (still in learning) → Hold. No new campaigns. Investigate creative performance.

WEEK 3 (Days 15-21):
  If ASC is stable:
  Launch: 1x BOFU Retargeting campaign
  Budget: Split — ASC $65-70/day, Retargeting $35-40/day
  Audience: Website visitors last 30 days, video viewers, excludes purchasers
  Creative: BOFU offer or testimonial content

WEEK 4+:
  Evaluate combined ROAS:
  > 4x → Healthy. Test 1 new creative variation in ASC only.
  3-4x → Acceptable. No new campaigns. Optimize creative.
  < 3x → Run next audit. Do not add campaigns.
```

### Template B — Mid-Restructure (Existing Campaigns, Needs Cleanup)

Use when: Campaigns exist but have structural problems (audience overlap, budget fragmentation, non-RTP interference).

```
WEEK 0 (Pre-Launch):
  1. Pause all non-RTP campaigns (Kmedtest, KJM)
  2. Pause any duplicate or underperforming campaigns
  3. Wait 48 hours for auction to stabilize
  4. Confirm Health Score > 65 before proceeding

WEEK 1 (Days 1-7):
  Launch: 1x new ASC with fresh creative
  Budget: $100-120 CAD/day (all-in on this campaign)
  Do not run any other campaigns in parallel

[Continue with Template A from Week 2 onward]
```

### Template C — Event / Promo Launch (Fixed Date Constraint)

Use when: Mother's Day, BOGO, seasonal sale with a hard deadline.

```
T-14 days before event:
  Launch: 1x ASC (TOFU seeding — Educational / Authentic content)
  Budget: $80-90/day
  Goal: Build warm audience before promo period

T-7 days before event:
  Checkpoint: Does ASC have 50+ purchases and stable ROAS?
  YES → Prepare BOFU promo campaign in draft mode
  NO → Delay BOFU launch. Keep seeding.

T-3 days before event:
  Launch: 1x BOFU Promo campaign
  Budget: Reduce ASC to $60/day, allocate $50-60/day to BOFU promo
  Creative: Urgency / offer / countdown content
  Audience: Retarget warm audience from ASC + website visitors

Event day through end:
  Monitor BOFU campaign daily
  Increase BOFU budget if ROAS > 3x
  Do not add any new campaigns during this window

Post-event:
  Pause BOFU promo campaign
  Restore ASC to $100-120/day
  Run next audit within 48 hours of event end
```

---

## Budget Allocation Formulas

### 2-Campaign Structure ($100-120 CAD/day)
- Campaign 1 (ASC / TOFU): 60-65% of daily budget ($65-70/day)
- Campaign 2 (Retargeting / BOFU): 35-40% of daily budget ($35-40/day)

### 3-Campaign Structure (requires $130+ CAD/day to be viable)
- Campaign 1 (ASC / TOFU): 50% ($65+/day)
- Campaign 2 (MOFU): 25% ($35+/day)
- Campaign 3 (BOFU Retargeting): 25% ($35+/day)
- Note: 3-campaign structure is NOT recommended at $100-120/day. Only use if budget expands.

---

## Frequency Guardrails

- Creative refresh trigger: When frequency > 2.5 for any single ad set, swap in new creative
- Campaign fatigue signal: Rising frequency + falling ROAS = classic creative fatigue
- Do not increase budget to compensate for creative fatigue — refresh creatives first
