import { Elysia, error, t } from "elysia";
import RedisCache from "../libs/cache";

export const tmdb = new Elysia({ prefix: "/tmdb" })
  .decorate("cache", new RedisCache())
  .get(
    "/movies/:id",
    async ({ cache, params: { id } }) => getMovie(cache, id),
    {
      params: t.Object({
        id: t.Number(),
      }),
    },
  )
  .get(
    "/person/:id",
    async ({ cache, params: { id } }) => getPerson(cache, id),
    {
      params: t.Object({
        id: t.Number(),
      }),
    },
  );

async function getMovie(cache: RedisCache, id: number) {
  let movie = await cache.get(`movie:${id}`);
  if (movie) return JSON.parse(movie);
  const tmdbMovieData = await fetch(
    `${process.env.TMDB_URL}/movie/${id}?append_to_response=credits,videos,watch/providers`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    },
  );
  const tmdbMovie = await tmdbMovieData.json();
  if (tmdbMovie) {
    await cache.set(`movie:${id}`, JSON.stringify(tmdbMovie));
    return tmdbMovie;
  }
  return error(404);
}

async function getPerson(cache: RedisCache, id: number) {
  let person = await cache.get(`person:${id}`);
  if (person) return JSON.parse(person);
  const tmdbPersonData = await fetch(
    `${process.env.TMDB_URL}/person/${id}?language=en&append_to_response=movie_credits`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    },
  );
  const tmdbPerson = await tmdbPersonData.json();
  if (tmdbPerson) {
    await cache.set(`person:${id}`, JSON.stringify(tmdbPerson));
    return tmdbPerson;
  }
  return error(404);
}
