# Conflict Check Reference — Meta Ads Account Auditor

Detailed decision logic for each of the 6 structural conflict checks.
Based on 2026 Meta Ads best practices (Ben Heath framework + Meta SOP).

---

## Check 1 — Objective Fragmentation (10 pts)

The Problem: Running 2+ campaigns with the same objective splits your pixel's conversion data across separate learning pools. Each campaign gets fewer impressions, slower learning, and weaker optimization. Meta needs 50 purchase events within a 7-day window per campaign to exit the learning phase — fragmentation makes this nearly impossible at RTP's budget level ($100-120/day).

Decision Tree:
- Only 1 Sales campaign active → PASS (10 pts)
- 2+ Sales campaigns, clearly separated funnel (TOFU vs BOFU) → WARNING (5 pts)
- 2+ Sales campaigns, overlapping audience tier → FAIL (0 pts)

Fix for FAIL: Consolidate into 1 ASC (Advantage+ Shopping Campaign) with multiple ad sets instead of separate campaigns.

---

## Check 2 — Audience Overlap / Cannibalization (25 pts)

The Problem: Two campaigns bidding for the same person in the same auction. Meta's algorithm will inflate CPMs for both to avoid internal competition. The result: same spend, fewer impressions, slower learning, weaker ROAS.

The 25% overlap threshold: If Meta's Audience Overlap tool shows >25% overlap between any two active campaigns, cannibalization is confirmed.

Decision Tree:
- No campaigns share audience tier + product → PASS (25 pts)
- 2 campaigns same funnel stage, different products → WARNING (12 pts)
- 2 campaigns same funnel stage, same product → FAIL (0 pts)
- Non-RTP campaigns active in same account (Kmedtest / KJM) → FAIL (0 pts) — handled in Check 6

RTP-Specific Checks:
1. Does BOFU retargeting exclude purchasers? If not, FAIL.
2. Does ASC (broad) have audience overlap with any manual targeting campaign? If yes, WARNING.
3. Are Kmedtest or KJM campaigns paused? If not, FAIL on Check 6.

---

## Check 3 — Budget Fragmentation (20 pts)

The Problem: Spreading budget across too many campaigns means none can exit the learning phase. Meta's learning phase requires approximately 50 optimization events (purchases) within 7 days. At RTP's CPA of $20-30 CAD, this requires $143+ CAD/day per campaign minimum.

RTP budget fragmentation thresholds (at $100-120 CAD/day total):
- 1 campaign → fine, all budget concentrated
- 2 campaigns → minimum $35/day each (borderline but workable)
- 3 campaigns → absolute maximum, $35/day minimum each
- 4+ campaigns → FAIL, guaranteed budget fragmentation

Decision Tree:
- 1-2 campaigns, each receiving $50+ CAD/day → PASS (20 pts)
- 2-3 campaigns, each receiving $35-50 CAD/day → WARNING (10 pts)
- Any single campaign below $35 CAD/day → FAIL (0 pts)
- 4+ campaigns active simultaneously → FAIL (0 pts)

Learning Phase Math (for reference in reports):
- Estimated RTP CPA: $20-30 CAD
- Purchases needed per week to exit learning: 50
- Daily budget needed per campaign to reliably hit 50 purchases/week: $143+ CAD
- At $100-120/day total, this is achievable for max 1 campaign at a time
- Compromise: 2 campaigns at $60/$40 split — ASC exits learning slowly; retargeting may not exit at all but is acceptable given smaller audience size

---

## Check 4 — Learning Phase Conflicts (15 pts)

The Problem: Launching multiple campaigns simultaneously means they all enter the learning phase at the same time. They compete for the same budget, the same pixel events, and the same audience — making it impossible to attribute which campaign is performing and preventing any from exiting learning quickly.

Decision Tree:
- All active campaigns past learning phase (7+ days or 50+ events each) → PASS (15 pts)
- 1 campaign in learning phase, others stable → WARNING (8 pts)
- 2+ campaigns in learning phase simultaneously → FAIL (0 pts)
- 3+ campaigns launched within same 7-day window → FAIL (0 pts)

Stagger Rule: Minimum 7 days between campaign launches. Ideal: 10-14 days. This gives the first campaign time to collect enough signal before the second one starts competing.

---

## Check 5 — Creative Overlap (10 pts)

The Problem: Using the same creatives across campaigns targeting similar audiences means you're testing the same thing twice without learning anything new. Worse, if the same hook appears in both TOFU and BOFU ads, it trains Meta to show your bottom-funnel offer to cold audiences who haven't been warmed up.

Decision Tree:
- All campaigns use distinct creative sets matched to funnel stage → PASS (10 pts)
- Minor overlap (same product, different hook/angle) → WARNING (5 pts)
- Same creative used across TOFU and BOFU → FAIL (0 pts)
- Same hook/angle used in 2+ campaigns at same funnel stage → FAIL (0 pts)

RTP Creative Rules:
- TOFU: Educational or Authentic content only (how dampeners work, foot protection benefits, grip science)
- MOFU: Comparison, testimonial, or demonstration content
- BOFU: Direct offer, urgency, social proof, or bundle deal content
- Never use Commercial (price/promo) content in TOFU campaigns

---

## Check 6 — Non-RTP Campaign Interference (20 pts)

The Problem: RTP Tennis, Kmedtest, and KJM skin brand all share the same Meta Business Account and the same pixel. When Kmedtest and KJM campaigns run simultaneously with RTP campaigns, Meta's algorithm receives mixed signals about who RTP's customers are. The pixel learns from all conversion events in the account — so Kmedtest bookings contaminate the RTP purchase audience, making lookalike audiences and ASC targeting less accurate over time.

This is a structural account problem, not a campaign problem. It must be fixed before any RTP restructure will work correctly.

Decision Tree:
- No non-RTP campaigns active → PASS (20 pts)
- Non-RTP campaigns paused (not deleted) → PASS (20 pts)
- Non-RTP campaigns active but spending < $10/day → WARNING (10 pts)
- Non-RTP campaigns active and spending > $10/day → FAIL (0 pts)

Fix: Pause (do not delete) Kmedtest-2024 and KJM skin brand campaigns immediately. If those brands need to run ads in the future, consider separating them into their own Meta Business Account with their own pixel.
