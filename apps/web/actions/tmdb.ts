"use server";

import { Movie, MovieDetails } from "@/types/tmdb/movie";

export async function getTrendingMovies() {
  const res = await fetch(`${process.env.API_URL}/tmdb/trending/movies`);
  const { results } = (await res.json()) as {
    page: number;
    results: Array<Movie>;
  };
  return results;
}

export async function getMovieDetails(id: string) {
  const res = await fetch(`${process.env.API_URL}/tmdb/movies/${id}`);
  return (await res.json()) as MovieDetails;
}
