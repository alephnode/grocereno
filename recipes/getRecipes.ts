import { Response } from "https://deno.land/x/oak/mod.ts";

const airTableUrl = Deno.env.get("AIRTABLE_API_URL") || "";
const airTableApiKey = Deno.env.get("AIRTABLE_API_KEY") || "";

const getRecipes = async () => {
  try {
    const recipes = await (await fetch(`${airTableUrl}/recipeNames`, {
      headers: {
        "Authorization": `Bearer ${airTableApiKey}`,
      },
    })).json();
    return recipes;
  } catch (e) {
    return "Error fetching recipes";
  }
};
export default async ({ response }: { response: Response }) => {
  response.body = await getRecipes();
};
