import { Router } from "https://deno.land/x/oak/mod.ts";

import getRecipes from "./recipes/getRecipes.ts";
const router = new Router();

router
  .get("/recipes", getRecipes);

export default router;
