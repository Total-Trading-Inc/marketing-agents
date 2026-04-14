# Workspace — Multi-Company Claude Environment

## Companies
- RTP Tennis → companies/rtp-tennis/ (tennis performance gear, Canada)
- Kmedtest   → companies/kmedtest/  (Korean medical exam booking, Canada/USA)

## Session start protocol
Always declare company at session start:
  "Working on RTP Tennis — load companies/rtp-tennis/context/"
  "Working on Kmedtest — load companies/kmedtest/context/"

## Shared Notion Databases (both companies, filtered by Brand field)
Content Calendar  : https://www.notion.so/6a628963f70a409e84c9db4cf27f7295
All Tasks         : https://www.notion.so/292c68b0c7e881ce91e2c015a18fbd76
Projects          : https://www.notion.so/305c68b0c7e88072a574c62eb4b668ca
Asset Library     : https://www.notion.so/30ac68b0c7e880a4a807d5921772c019

## Naming convention (enforced)
RTP tasks   : "RTP / [CC-ID] [Format] – [Step]"
Kmedtest tasks : "Kmedtest / [CC-ID] [Format] – [Step]"
Content Calendar uses Brand field (not naming) for company filtering.

## Adding a new company
1. mkdir companies/[company-name]/context companies/[company-name]/research/{campaigns,competitors,audience,platform-trends,raw-dumps}
2. Write brand.md, notion-ids.md, rules.md in context/
3. Add Brand option to Notion Content Calendar Brand field
4. Create task template in Notion All Tasks DB
5. No skill changes needed — skills are universal
