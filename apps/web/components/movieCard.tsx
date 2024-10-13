import { Movie } from "@/types/tmdb/movie";
import { AspectRatio } from "./ui/aspect-ratio";

export default function MovieCard({ movie }: { movie: Movie }) {
  const posterPath = !movie.poster_path
    ? "/images/fallback-movie.jpg"
    : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="w-full cursor-pointer hover:scale-110 transition-all duration-300">
      <AspectRatio ratio={500 / 750}>
        <img
          src={posterPath}
          alt={movie.title}
          className="rounded-lg object-cover shadow-lg"
        />
      </AspectRatio>
    </div>
  );
}
