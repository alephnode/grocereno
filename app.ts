import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import "./config.ts";
import router from "./router.ts";

const app = new Application();
app.use(oakCors());
const APP_PORT = Deno.env.get("APP_PORT");
const APP_HOST = Deno.env.get("APP_HOST");

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on ${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
