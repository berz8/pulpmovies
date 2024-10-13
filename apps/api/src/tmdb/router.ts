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
  )
  .get(
    "/search/movies",
    ({ cache, query: { q, page } }) => getSearchMovies(cache, q, page),
    {
      query: t.Object({
        q: t.String(),
        page: t.Number({ default: 1 }),
      }),
    },
  )
  .get(
    "/search/person",
    ({ cache, query: { q, page } }) => getSearchPerson(cache, q, page),
    {
      query: t.Object({
        q: t.String(),
        page: t.Number({ default: 1 }),
      }),
    },
  )
  .get("/trending/movies", async ({ cache }) => getTrendingMovies(cache));

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

async function getTrendingMovies(cache: RedisCache) {
  let trending = await cache.get("trending:movies");
  if (trending) return JSON.parse(trending);
  const tmdbTrendingData = await fetch(
    `${process.env.TMDB_URL}/trending/movie/week?language=en`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    },
  );
  const tmdbTrending = await tmdbTrendingData.json();
  if (tmdbTrending) {
    await cache.set(`trending:movies`, JSON.stringify(tmdbTrending));
    return tmdbTrending;
  }
  return error(404);
}

async function getSearchMovies(
  cache: RedisCache,
  query: string,
  page: number = 1,
) {
  let search = await cache.get(`search:movies-query_${query}-page_${page}`);
  if (search) return JSON.parse(search);
  const tmdbSearchData = await fetch(
    `${process.env.TMDB_URL}/search/movie?query=${query}&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    },
  );
  const tmdbSearch = await tmdbSearchData.json();
  if (tmdbSearch) {
    await cache.set(
      `search:movies-query_${query}-page_${page}`,
      JSON.stringify(tmdbSearch),
    );
    return tmdbSearch;
  }
  return error(404);
}

async function getSearchPerson(
  cache: RedisCache,
  query: string,
  page: number = 1,
) {
  let search = await cache.get(`search:person-query_${query}-page_${page}`);
  if (search) return JSON.parse(search);
  const tmdbSearchData = await fetch(
    `${process.env.TMDB_URL}/search/person?query=${query}&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    },
  );
  const tmdbSearch = await tmdbSearchData.json();
  if (tmdbSearch) {
    await cache.set(
      `search:person-query_${query}-page_${page}`,
      JSON.stringify(tmdbSearch),
    );
    return tmdbSearch;
  }
  return error(404);
}
