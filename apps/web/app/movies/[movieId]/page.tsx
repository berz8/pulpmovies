import { getMovieDetails } from "@/actions/tmdb";
import MovieCard from "@/components/movieCard";
import { cn } from "@/lib/utils";
import { format, intervalToDuration } from "date-fns";

export default async function MovieDetails({
  params: { movieId },
}: {
  params: { movieId: string };
}) {
  const movie = await getMovieDetails(movieId);
  const formattedRuntime = () => {
    const runtimeMinute = movie.runtime;
    const runtimeObject = intervalToDuration({
      start: 0,
      end: runtimeMinute * 60000,
    });
    if (runtimeObject.hours && runtimeObject.hours > 0) {
      return `${runtimeObject.hours}h${
        runtimeObject.minutes ? runtimeObject.minutes + "m" : ""
      }`;
    }
    return `${runtimeObject.minutes}m`;
  };

  const posterPath = !movie.poster_path
    ? "/images/fallback-movie.jpg"
    : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="container mt-2 md:mt-4 mx-auto px-2">
      <div className="w-full py-3 md:py-6 rounded-r-xl relative">
        <div
          className="absolute right-0 top-0 w-4/5 h-full bg-cover rounded-r-xl"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
          }}
        >
          <div className="bg-gradient-to-r from-background via-transparent via-30% to-transparent absolute top-0 left-0 w-full h-full" />
          <div className="bg-gradient-to-t from-background via-background via-30% to-transparent absolute bottom-0 left-0 w-full h-2/3 md:h-1/2" />
        </div>
        <div className="flex gap-3 md:gap-6 items-end">
          <div className={cn("relative w-[130px] md:w-[200px] lg:w-[250px]")}>
            <div
              className={cn(
                "bg-cover rounded-lg absolute w-full h-4/5 bottom-0 left-0 z-10 overflow-hidden dark:opacity-60",
              )}
              style={{
                backgroundImage: `url(${posterPath})`,
                transform: "translate3d(0, 0, 0)",
                willChange: "transform",
                filter: "blur(24px)",
              }}
            />
            <div className="relative z-20">
              <MovieCard movie={movie} />
            </div>
            <div className="relative z-20 flex justify-between pb-1 pt-3 px-2 md:px-3 bg-[rgba(0,0,0,0.3)] text-white text-xs md:text-base rounded-b-lg -mt-2 shadow-lg font-bold">
              <div>{format(movie.release_date, "yyyy")}</div>
              <div>{formattedRuntime()}</div>
            </div>
          </div>
          <div className="relative z-20">
            <h1 className="text-2xl md:text-5xl font-black italic">
              {movie.title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
