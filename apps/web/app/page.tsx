import { getTrendingMovies } from "@/actions/tmdb";
import MovieCard from "@/components/movie-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulpmovies",
  description: "The right place to log and share all the movies you love",
};

export default async function Home() {
  const trendingMovies = await getTrendingMovies();
  return (
    <div className="w-full px-4">
      <div className="mt-8 text-center">
        <h1 className="font-bold text-2xl md:text-3xl md:text-[2.5rem] md:max-w-[580px] md:leading-normal text-violet-950 dark:text-violet-100 m-auto">
          The right place to log and share all the movies you love
        </h1>
        <h2 className="font-semibold text-lg md:text-xl mt-2 opacity-70">
          Soon available on AppStore and PlayStore
        </h2>
      </div>
      <div className="my-12 container m-auto grid grid-cols-3 md:grid-cols-8 lg:grid-cols-10 grid-flow-row gap-3 lg:gap-4">
        {trendingMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
