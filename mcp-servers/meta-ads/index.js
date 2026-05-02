import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config({ path: "/Users/jessalynli/Documents/workspace/.env" });

const TOKEN = process.env.META_ACCESS_TOKEN;
const AD_ACCOUNT = process.env.META_AD_ACCOUNT_ID;
const API_VERSION = "v21.0";
const BASE_URL = `https://graph.facebook.com/${API_VERSION}`;

const server = new McpServer({
  name: "meta-ads",
  version: "1.0.0",
});

// Tool 1 — Get account overview
server.tool("get_account_overview", "Get RTP Tennis ad account summary", {}, async () => {
  const res = await fetch(`${BASE_URL}/${AD_ACCOUNT}?fields=name,account_status,currency,daily_spend_limit,amount_spent&access_token=${TOKEN}`);
  const data = await res.json();
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
});

// Tool 2 — Get all campaigns
server.tool("get_campaigns", "Get all campaigns in the RTP Tennis ad account", {}, async () => {
  const res = await fetch(`${BASE_URL}/${AD_ACCOUNT}/campaigns?fields=id,name,status,objective,daily_budget,lifetime_budget,start_time,stop_time&access_token=${TOKEN}`);
  const data = await res.json();
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
});

// Tool 3 — Get ad sets for a campaign
server.tool("get_adsets", "Get ad sets for a specific campaign", {
  campaign_id: z.string().describe("The campaign ID to get ad sets for"),
}, async ({ campaign_id }) => {
  const res = await fetch(`${BASE_URL}/${campaign_id}/adsets?fields=id,name,status,daily_budget,targeting,optimization_goal,billing_event&access_token=${TOKEN}`);
  const data = await res.json();
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
});

// Tool 4 — Get insights (performance data)
server.tool("get_insights", "Get performance insights for the RTP Tennis ad account", {
  date_preset: z.string().describe("Date range: last_7d, last_14d, last_30d, last_90d"),
}, async ({ date_preset }) => {
  const res = await fetch(`${BASE_URL}/${AD_ACCOUNT}/insights?fields=campaign_name,impressions,clicks,spend,ctr,cpc,cpp,purchase_roas,actions&date_preset=${date_preset}&level=campaign&access_token=${TOKEN}`);
  const data = await res.json();
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
});

// Tool 5 — Get ads for an ad set
server.tool("get_ads", "Get ads for a specific ad set", {
  adset_id: z.string().describe("The ad set ID to get ads for"),
}, async ({ adset_id }) => {
  const res = await fetch(`${BASE_URL}/${adset_id}/ads?fields=id,name,status,creative&access_token=${TOKEN}`);
  const data = await res.json();
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
});

const transport = new StdioServerTransport();
await server.connect(transport);
