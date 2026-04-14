---
name: kie-tts
description: "Convert scripts to audio using Kie.AI TTS API. Curated voice menu with exact API IDs, speed control, and company defaults. Always confirms voice and speed before generating. Use when user says: convert script to audio, generate TTS for CC-XXX, Kie.AI TTS, text to speech, generate voiceover, or any request to turn written content into spoken audio."
---

# Kie.AI TTS — Text to Speech

## CRITICAL RULE
⚠️ **ALWAYS confirm voice and speed with user BEFORE generating. Never assume defaults.**
Ask: "For [CC-ID] [Title], I'll use [Voice Name] ([Voice ID]) at [Speed]x. Confirm? Or choose a different voice from the menu below."

---

## Voice Menu (exact API IDs — copy precisely, case-sensitive)

| Voice Name | API ID | Character | Best for |
|---|---|---|---|
| Bill | en-US-BillNeural | Deep, authoritative male | RTP MOFU/BOFU default |
| Andrew | en-US-AndrewNeural | Warm, conversational male | Kmedtest all formats, RTP YT Long |
| Brian | en-US-BrianNeural | Clear, professional male | Educational, tutorial content |
| Ryan | en-US-RyanMultilingualNeural | Dynamic, energetic male | RTP TOFU Reels |
| Emma | en-US-EmmaNeural | Warm, friendly female | Community, lifestyle content |
| Jenny | en-US-JennyNeural | Clear, professional female | Email narration, announcements |
| Aria | en-US-AriaNeural | Expressive, conversational female | Authentic, UGC-style content |

---

## Speed Options
0.8x | 0.9x | 1.0x (default) | 1.1x | 1.2x

---

## Company Defaults (always confirm before using)

### RTP Tennis
| Format | Voice | Speed |
|---|---|---|
| TOFU Reels (Instagram/TikTok) | Ryan (en-US-RyanMultilingualNeural) | 1.1x |
| MOFU / BOFU (all formats) | Bill (en-US-BillNeural) | 1.0x |
| YouTube Long-form | Andrew (en-US-AndrewNeural) | 1.0x |

### Kmedtest
| Format | Voice | Speed |
|---|---|---|
| All formats | Andrew (en-US-AndrewNeural) | 0.9x |

---

## Script Preparation (before API call)

Run these replacements on the script:
1. Remove ALL stage directions and bracket instructions: `[pause]`, `[cut]`, `[scene X]`, etc.
2. Replace `[pause short]` with ` ... ` (space-dot-dot-dot-space)
3. Replace `[pause long]` with ` ...... ` (space-six-dots-space)
4. Space brand names for pronunciation:
   - "RTP Tennis" → "R T P Tennis"
   - "Kmedtest" → "Kay med test"
5. Write all numbers as words: "$35" → "thirty-five dollars"
6. Write percentages as words: "94.7%" → "ninety-four point seven percent"
7. Remove all markdown formatting (no **, ##, -, etc.)
8. Ensure clean sentence endings — no cut-offs

---

## API Call

Uses environment variable: `KIE_AI_API_KEY`

Verify env var is set before calling:
```bash
echo "KIE_AI_API_KEY: ${KIE_AI_API_KEY:+SET (value hidden)}"
```

API endpoint and parameters (confirm with Kie.AI docs if needed):
- voice: exact API ID from menu above
- speed: decimal value (0.8, 0.9, 1.0, 1.1, 1.2)
- text: cleaned script (after all replacements above)

---

## Output File Naming

`[CC-ID]_TTS_[Title]_v[N].mp3`

Examples:
- `CC-001_TTS_TennisElbowTOFU_v1.mp3`
- `CC-002_TTS_KmedtestBasicPackage_v1.mp3`

Upload destination: `[Company] > Content Production > [Campaign] > [CC-ID] > audio/`

---

## Troubleshooting

| Problem | Cause | Fix |
|---|---|---|
| Wrong gender voice | Voice ID case error | Check exact capitalization — must match table above exactly |
| 401 Unauthorized | API key missing or wrong | Run `echo $KIE_AI_API_KEY` — if empty, add to shell profile |
| Script too long (API error) | Exceeds length limit | Split at section breaks — generate 2–3 files, stitch in Canva |
| Pronunciation error on brand name | Not spaced | Ensure "R T P Tennis" or "Kay med test" in script |
| Unnatural pacing | Missing pause markers | Add ` ... ` between thoughts before calling API |

---

## Version tracking
- v1 = first generation
- v2 = after script edit or voice change
- Log each version to Notion Asset Library via `asset-logger`
- Only latest approved = "Done", all previous = "Archived"
