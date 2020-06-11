import { Response } from "https://deno.land/x/oak/mod.ts";

const airTableUrl = Deno.env.get("AIRTABLE_API_URL") || "";
const airTableApiKey = Deno.env.get("AIRTABLE_API_KEY") || "";

const getRecipes = async () => {
  console.log('Fetching recipes ...')
  try {
    const recipes = await (await fetch(`${airTableUrl}/recipeNames`, {
      headers: {
        "Authorization": `Bearer ${airTableApiKey}`,
      },
    })).json();
    console.log('Recipes found. Data: ')
    console.log(JSON.stringify(recipes,null,1))
    return recipes;
  } catch (e) {
    console.error('Error fetching recipes');
  }
};
export default async ({ response }: { response: Response }) => {
  response.body = await getRecipes();
};
