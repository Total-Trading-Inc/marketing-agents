---
name: meta-ads-strategist
description: "Meta advertising strategy for D2C brands. Bilingual EN/KO — always asks language first. 2026 SOP with Advantage+, creative briefs using CC-IDs, UTM linking to Content Calendar. Use when user says: Meta ads strategy, Facebook campaign setup, Advantage+ setup, retargeting setup, ad creative brief, campaign restructure, ROAS improvement, Meta 광고 전략, 캠페인 구조, or any Meta paid advertising request."
---

# Meta Ads Strategist

## STEP 0 — ALWAYS ask language first
Before doing anything else, ask:
"영어로 작성할까요, 한국어로 작성할까요? (English or Korean?)"

Do not proceed until language is confirmed.

---

## 2026 Meta SOP

### Core principle
Fewer campaigns, more budget per campaign — let the algorithm optimize. Creative diversity beats audience diversity in the Advantage+ era. Stop over-segmenting audiences; Meta's ML already does this better.

---

## Campaign Structure

### Primary: Advantage+ Shopping Campaign (ASC)
- Budget allocation: 65–85% of total Meta budget
- Objective: Sales (conversions)
- Audience: Broad (Advantage+ audience — let Meta find buyers)
- Creative: 6–10 ad variations minimum (mix of formats + hooks)
- Learning phase: 7 days minimum — NO changes during this period

### Secondary: Retargeting Campaign
- Budget allocation: 15–20% of total Meta budget
- Audience: Warm audiences (see Custom Audiences below)
- Objective: Sales
- Creative: Objection-kill + social proof + risk reversal

### Optional: Awareness Campaign
- Budget allocation: 0–15% of total Meta budget
- Only run if Reach / CPM objectives are intentional (new market entry, product launch)
- Not recommended for ongoing performance campaigns

---

## Custom Audiences (build these in Ads Manager)
| Audience | Lookback | Priority |
|---|---|---|
| Website Visitors | 30 days | High |
| Add to Cart — No Purchase | 14 days | Critical |
| Video Viewers 50%+ | 60 days | Medium |
| Email List (Mailchimp import) | Always on | High |
| Instagram Engagers | 60 days | Medium |

Lookalike audiences: Build from Email List and Add to Cart No Purchase (1–3% similarity)

---

## Creative Brief Template (per ad)

```
AD CREATIVE BRIEF — [CC-ID] [Ad Name]
Campaign: [ASC / Retargeting / Awareness]
Persona target: [P1 / P2 / P3 or audience description]
Funnel stage: TOFU / MOFU / BOFU

HOOK (first 3 seconds):
[Script line]

BODY COPY (full text for static/image ads):
[Copy — 1–3 sentences max]

PRIMARY TEXT (125 chars max for mobile):
[Short version for feed]

HEADLINE (40 chars max):
[Punchy, benefit-forward]

CTA BUTTON: [Shop Now / Learn More / Book Now / See Menu]

VISUAL DIRECTION:
[Image or video description — reference CC-ID assets if using organic content]

ASSET SOURCE:
[ ] New creative (generate via creative-production-brief)
[ ] Repurposed from CC-[ID] (organic content performing >5% engagement)

URL: [destination URL]
UTM: utm_source=facebook&utm_medium=paid&utm_campaign=[campaign-name]&utm_content=[CC-ID]

PERFORMANCE TARGETS:
ROAS target: [from targets below]
CPC target: [from targets below]
CPM target: [from targets below]
```

---

## Performance Targets

### RTP Tennis (CAD)
| Metric | Target | Kill threshold |
|---|---|---|
| Overall ROAS | 3.5x+ | Below 2.5x after 14d |
| ASC ROAS | 4.0x+ | Below 3.0x after 14d |
| Retargeting ROAS | 6.0x+ | Below 4.0x after 14d |
| CPC | Below $2.00 CAD | Above $4.00 CAD |
| CPM | Below $25 CAD | Above $45 CAD |

### Kmedtest (USD)
Higher CPC/CPM tolerance — medical tourism is a high-consideration, long-cycle purchase.
| Metric | Target | Notes |
|---|---|---|
| ROAS | Booking value / ad spend — define conversion value as package price | Track MQL (consult booking) as primary conversion, not immediate sale |
| CPC | $3–8 USD acceptable | High-intent keywords warrant higher CPC |
| CPM | $30–60 USD acceptable | Smaller precise audiences = higher CPM is normal |

---

## Creative Reuse Rule (critical for efficiency)
Any organic content piece with >5% engagement rate on Instagram or TikTok:
→ **Immediately test as paid ad in ASC — unchanged**
→ Use the same CC-ID in the UTM: `utm_content=[CC-ID]`
→ This links paid performance back to the Content Calendar entry
→ If ROAS is strong, brief a variation via `viral-video-creator` (same hook, fresh visuals)

---

## UTM Convention
Always use: `utm_content=[CC-ID]`
This connects Meta ad spend data to specific Content Calendar entries for ROI tracking.

Full UTM structure:
`utm_source=facebook&utm_medium=paid_social&utm_campaign=[campaign-slug]&utm_content=[CC-ID]`

---

## Learning Phase Protocol
- NO budget changes in first 7 days
- NO audience changes in first 7 days
- NO creative swaps in first 7 days (you can ADD creative, not remove)
- After 7 days: review ROAS + CPM
- Kill individual ads below 50% of campaign average ROAS after 7 days + $50 spend
- Scale winning ads: increase budget 20% every 3 days max (avoid re-triggering learning)

---

## Budget Scaling Decision Tree
```
Ad performing at target ROAS?
├── Yes, for 7+ days → increase budget 20%
├── Yes, for 3–6 days → hold, confirm consistency
└── No
    ├── Above kill threshold? → hold for 14 days total before decision
    └── Below kill threshold after 7d + $50 spend → kill and test new creative
```

---

## Bilingual output (if Korean selected)
- Full strategy in Korean
- Keep Meta terminology in English with Korean explanation (Meta 광고, ASC, ROAS 등)
- Budget amounts: convert to KRW or keep in USD/CAD based on user preference
