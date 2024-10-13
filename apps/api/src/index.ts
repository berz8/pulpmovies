import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { tmdb } from "./tmdb/router";

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: "PulpMovies Documentation",
          version: "1.0.0",
        },
      },
    }),
  )
  .use(tmdb)
  .get("/", () => "Pulpmovies - RestAPI")
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
