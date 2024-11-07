import { Movie } from "@/types/tmdb/movie";
import { AspectRatio } from "./ui/aspect-ratio";
import Link from "next/link";
import slugify from "slugify";

export default function MovieCard({
	movie,
	size = 185,
}: {
	movie: Partial<Movie>;
	size?: number;
}) {
	const posterPath = !movie.poster_path
		? "/images/fallback-movie.jpg"
		: `https://image.tmdb.org/t/p/w${size}${movie.poster_path}`;

	return (
		<Link
			href={`/movies/${movie.id}-${
				movie.title &&
				slugify(movie.title, {
					strict: true,
				}).toLowerCase()
			}`}
			className="w-full cursor-pointer hover:scale-110 transition-all duration-300"
			prefetch={true}
		>
			<AspectRatio ratio={500 / 750}>
				<img
					src={posterPath}
					alt={movie.title}
					className="rounded-lg object-cover shadow-lg"
				/>
			</AspectRatio>
		</Link>
	);
}
