---
name: asset-logger
description: "Log completed production assets to Notion Asset Library with Google Drive links and version tracking. Use when user says: log the assets for CC-XXX, add this to Notion, record the Google Drive link, asset is done update Notion, log the final export, record the v2 edit, or any request to track a generated file back into Notion."
---

# Asset Logger

## Overview
Logs completed production assets to the Notion Asset Library database, linked to their Content Calendar entry. One Notion page per asset. Tracks versions — only latest approved = "Done", all previous = "Archived".

## Notion Asset Library Database
ID: `30ac68b0-c7e8-80ea-8a27-000bcc43105d`
URL: https://www.notion.so/30ac68b0c7e880a4a807d5921772c019

---

## Required inputs (ask user for any missing)
1. **CC-ID** — e.g., CC-001
2. **Asset type** — see types below
3. **Google Drive link** — direct link to file
4. **File name** — exact file name (must follow naming convention)
5. **Version number** — v1, v2, v3, etc.
6. **Notes** (optional) — any context about this version

---

## Asset Types
| Type | Description | File format |
|---|---|---|
| TTS Audio | Kie.AI generated voiceover | .mp3 |
| Generated Image | Midjourney/DALL-E scene image | .png / .jpg |
| Raw Video Clip | Kling/Seedance generated clip | .mp4 |
| Canva Draft Export | Work-in-progress Canva export | .mp4 / .jpg |
| Approved Final Export | Approved, ready to schedule | .mp4 / .jpg |
| Revised Export | Post-approval revision | .mp4 / .jpg |

---

## File Naming Convention (enforce this)
Pattern: `[CC-ID]_[AssetType]_[Description]_v[N].[ext]`

Examples:
- `CC-001_TTS_TennisElbowTOFU_v1.mp3`
- `CC-001_Scene1_AngleA_v1.png`
- `CC-001_Scene2_HeroShot_v1.png`
- `CC-001_IGReel_TennisElbowTOFU_v1.mp4`
- `CC-001_IGReel_TennisElbowTOFU_v2.mp4`

If user provides a file with a non-compliant name, flag it:
"This file name doesn't follow the convention. Recommended name: [corrected name]. Use this? (Y/N)"

---

## Notion Asset Library page structure
Create one page per asset with:

**Page title:** `[CC-ID] [AssetType] – [Description] v[N]`
Example: `CC-001 TTS Audio – TennisElbowTOFU v1`

**Page properties:**
- Brand: [active company name]
- CC-ID: [ID]
- Asset Type: [from types above]
- Version: [vN]
- Status: Done (latest) or Archived (previous versions)
- Content Calendar: [relation to CC entry]
- Google Drive Link: [URL]
- File Name: [exact file name]
- Created: [date]
- Notes: [any context]

**Page body — Asset Details Table:**
| Field | Value |
|---|---|
| File Name | [name] |
| Asset Type | [type] |
| Version | [vN] |
| Google Drive | [link] |
| Voice (if TTS) | [voice name + ID] |
| Speed (if TTS) | [speed]x |
| Dimensions (if image/video) | [WxH] |
| Duration (if video/audio) | [length] |
| Notes | [any notes] |

---

## Version tracking rules
1. When logging v2 or later: find the previous version page and update Status: Done → Archived
2. Never delete previous version pages
3. Only ONE page per CC-ID + asset type should have Status = "Done" at any time
4. If user asks to delete old versions: explain the archiving system and decline

---

## After logging, always ask:
1. "Should I update the Content Calendar status for [CC-ID]? Current status: [X]. Options: In Production / In Review / Published"
2. "Should I mark the production task '[COMPANY] / [CC-ID] [Format] – [Step]' as Done in All Tasks?"

---

## Google Drive path reminder
If user hasn't organized their Drive yet:
```
[Company] > Content Production > [Campaign] > [CC-ID] > [audio|images|clips|final]
```
e.g., `RTP Tennis > Content Production > 2026 Tennis Elbow > CC-001 > audio/`
