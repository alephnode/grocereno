import { config } from "https://deno.land/x/dotenv/mod.ts";

config({ export: true });

const airTableUrl = Deno.env.get("AIRTABLE_API_URL") || "";
const airTableApiKey = Deno.env.get("AIRTABLE_API_KEY") || "";

const res = await fetch(airTableUrl, {
  headers: {
    "Authorization": `Bearer ${airTableApiKey}`,
  },
});

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);
