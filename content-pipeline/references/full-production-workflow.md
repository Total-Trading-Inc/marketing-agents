# Full Production Workflow Map

## End-to-end flow: Notion Brief → Published Asset

```
NOTION (Content Calendar)
  ↓ CC entry "Brief Ready"
  ↓
SKILL: creative-production-brief
  ↓ Generates 3 docs:
  ├── Doc 1: TTS Script (Kie.AI ready)
  ├── Doc 2: Shot List (image prompts per scene)
  └── Doc 3: Scene Consistency Brief
  ↓
ASSET GENERATION (parallel)
  ├── KIE.AI TTS → [CC-ID]_TTS_[Title]_v1.mp3
  └── MIDJOURNEY / DALL-E → Scene images (3-4 per scene)
      → [CC-ID]_Scene[N]_[Angle]_v1.png
  ↓
GOOGLE DRIVE (upload all raw assets)
  → [Company] > Content Production > [Campaign] > [CC-ID] > [audio|images|clips]
  ↓
SKILL: canva-edit-brief
  ↓ Generates edit brief:
  ├── Clip order + timing
  ├── Text overlays + animation
  ├── Music direction
  └── CTA card specs
  ↓
CANVA (assembly)
  → [CC-ID]_[Platform]_[Title]_v1.mp4
  ↓
GOOGLE DRIVE (upload export)
  → [Company] > Content Production > [Campaign] > [CC-ID] > final/
  ↓
SKILL: asset-logger
  ↓ Logs to Notion Asset Library:
  └── Asset page with Drive link + version + notes
  ↓
NOTION (Content Calendar)
  → Status update: In Review → Approved → Scheduled → Published
```

## Parallel work allowed
- TTS generation and image generation can run simultaneously
- Caption writing can happen during asset generation
- Multiple CC entries from same campaign can progress independently

## Handoff points (human approval required)
1. Phase 4 Gap Analysis → must approve before briefs generated
2. Brief Ready → must approve before production starts
3. In Review → must approve before scheduling
4. Approved → must confirm before posting

## File organization in Google Drive
```
[Company Name]/
  Content Production/
    [Campaign or Theme Name]/
      [CC-ID]/
        audio/      ← TTS mp3 files
        images/     ← generated scene images
        clips/      ← video clips (Kling, Seedance)
        final/      ← Canva exports (final mp4, jpg)
```

## Version numbering
- v1 = first pass
- v2 = after first round of revisions
- v3+ = subsequent revisions
- Only latest approved version = "Done" in Asset Library
- All previous versions = "Archived" (never deleted)
