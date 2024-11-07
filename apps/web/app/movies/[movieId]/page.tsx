import { getMovieDetails } from "@/actions/tmdb";
import MovieCard from "@/components/movie-card";
import { cn } from "@/lib/utils";
import { format, intervalToDuration } from "date-fns";
import Link from "next/link";
import WatchOn from "./watch-on";
import { redirect } from "next/navigation";
import slugify from "slugify";
import Credits from "./credits-preview";
import { Metadata } from "next";

type Props = {
	params: Promise<{ movieId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const id = (await params).movieId;
	const movie = await getMovieDetails(id.split("-")[0]);

	return {
		title: `${movie.title} - Pulpmovies`,
		description: movie.overview,
		openGraph: {
			title: `${movie.title} - Pulpmovies`,
			description: movie.overview,
			images: [
				!movie.backdrop_path
					? "/images/fallback-movie.jpg"
					: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
			],
		},
	};
}

export default async function MovieDetails({
	params: { movieId },
}: {
	params: { movieId: string };
}) {
	const movie = await getMovieDetails(movieId.split("-")[0]);
	if (movie.adult) redirect("/");

	const formattedRuntime = () => {
		const runtimeObject = intervalToDuration({
			start: 0,
			end: movie.runtime * 60000,
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
			<div className="w-full py-3 md:py-6 rounded-l-xl relative">
				<div
					className="absolute left-0 top-0 w-4/5 lg:w-5/6 h-full bg-cover rounded-l-xl"
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
					}}
				>
					<div className="bg-gradient-to-l from-background via-transparent via-30% to-transparent absolute top-0 right-0 w-full h-full" />
					<div className="bg-gradient-to-t from-background via-background via-30% to-transparent absolute bottom-0 right-0 w-full h-2/3 md:h-1/2" />
				</div>
				<div className="flex gap-3 md:gap-6 justify-end items-end">
					<div className="relative z-20 grow px-2">
						<h1 className="text-2xl md:text-5xl font-black italic">
							{movie.title}
						</h1>
					</div>
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
						<div className="relative z-30">
							<MovieCard movie={movie} size={342} />
						</div>
						<div className="relative z-20 flex justify-between pb-1 pt-3 px-2 md:px-3 bg-[rgba(0,0,0,0.3)] text-white text-xs md:text-base rounded-b-lg -mt-2 shadow-lg font-bold">
							<div>{format(movie.release_date, "yyyy")}</div>
							<div>{formattedRuntime()}</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container px-2 -mt-2 relative z-20">
				<div>
					<span className="italic font-medium md:text-lg">Directed by </span>
					{movie.credits?.crew
						.filter((director) => director.job === "Director")
						.map((director, index: number, filteredDirectors) => (
							<Link
								href={`/person/${director.id}-${slugify(director.name.toLowerCase(), { strict: true })}`}
								key={director.id}
								className="inline-block font-black md:text-xl italic text-center"
							>
								{`${director.name}${
									filteredDirectors.length > 1 &&
									filteredDirectors.length - 1 !== index
										? ", "
										: ""
								}`}
							</Link>
						))}
				</div>
				<div className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-between mt-4">
					<div className="w-full md:w-1/2 lg:w-1/3">
						{movie["watch/providers"] ? (
							<WatchOn
								providers={movie["watch/providers"]}
								posterPath={posterPath}
							/>
						) : null}
						<h4 className="font-bold">Overview</h4>
						<p className="opacity-85">{movie.overview}</p>
					</div>
					<div className="w-full md:w-1/2 lg:w-2/3">
						{movie.credits ? (
							<Credits
								credits={movie.credits}
								movieUrl={`/movies/${movie.id}-${
									movie.title &&
									slugify(movie.title, {
										strict: true,
									}).toLowerCase()
								}`}
							/>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
