import { config } from "https://deno.land/x/dotenv/mod.ts";

config({ export: true });

const airTableUrl =
  `https://api.airtable.com/v0/app26FVO9keL7Sj5N/recipeNames?api_key=${
    Deno.env.get("AIRTABLE_API_KEY")
  }`;

const res = await fetch(airTableUrl);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);
