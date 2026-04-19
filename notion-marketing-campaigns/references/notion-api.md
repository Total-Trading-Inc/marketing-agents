# Notion API Patterns for Claude

## Authentication
Claude Code uses the Notion MCP integration (configured in settings).
All Notion operations go through: `mcp__claude_ai_Notion__notion-*` tools

## Key database IDs (both companies — filter by Brand)
- Content Calendar: `10c6823b-c5b6-42f1-bb2f-940be53283c3`
- All Tasks: `292c68b0-c7e8-8170-a2aa-000b6cd7a545`
- Projects: `305c68b0-c7e8-80ca-90a9-000b0b182db7`
- Asset Library: `30ac68b0-c7e8-80ea-8a27-000bcc43105d`

---

## Creating a Content Calendar entry
Use: `notion-create-pages`

Required properties to set on EVERY entry:
```
Brand: [active company name] — SELECT type
Status: Idea — SELECT type  
Format: [Reel|YT Short|YT Long|Static|Carousel|Story|Email|Blog] — SELECT type
Funnel Stage: [TOFU|MOFU|BOFU] — SELECT type
Content Pillar: [Educational|Authentic|Commercial|Community] — SELECT type
Campaign/Theme: [exact campaign name] — TEXT or SELECT type
CC-ID: [CC-001] — TEXT type
```

---

## Creating a Task in All Tasks DB
Use: `notion-create-pages`

Naming convention: "[COMPANY] / [CC-ID] [Format] – [Step]"
Examples:
- "RTP / CC-001 Reel – Write Script"
- "Kmedtest / CC-002 Static – Design Brief"

Properties:
```
Brand: [company name]
Status: Not Started
Related CC: [relation to Content Calendar entry]
```

---

## Updating a Content Calendar status
Use: `notion-update-page`

Status values in order:
Idea → Research → Brief Ready → In Production → In Review → Approved → Scheduled → Published

Rule: Never set beyond "Brief Ready" automatically — human must approve In Production and beyond.

---

## Searching existing Content Calendar entries
Use: `notion-search` or `notion-fetch`

Always filter with Brand property to avoid cross-company data.
When fetching a CC entry by CC-ID: search for the CC-ID value in the database.

---

## Creating Asset Library entries
Use: `notion-create-pages`
Database: `30ac68b0-c7e8-80ea-8a27-000bcc43105d`

Required properties:
```
Brand: [company]
CC-ID: [related CC-ID]
Asset Type: [TTS Audio|Generated Image|Raw Video Clip|Canva Draft Export|Approved Final Export|Revised Export]
Version: [v1|v2|v3]
Status: [Done|Archived]
Google Drive Link: [URL]
File Name: [exact file name]
```

Relation: link to the Content Calendar entry.

---

## Reading a Notion page
Use: `notion-fetch` with the page URL or ID

When user provides a Notion URL: extract the page ID (last segment of URL, 32 chars).
Format: `https://www.notion.so/[page-id]`
or: `https://www.notion.so/[workspace]/[title-slug]-[page-id]`

---

## Common errors
- "Property not found": check exact property name (case-sensitive in Notion API)
- "Option not available": SELECT properties only accept pre-defined options — must match exactly
- "Relation not found": when linking to another DB entry, use the page ID not the title
- "Rate limit": space out bulk creates — create 1-2 pages, brief pause, continue
