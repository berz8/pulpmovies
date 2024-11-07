import { getTrendingMovies } from "@/actions/tmdb";
import Logo from "@/components/logo";
import MovieCard from "@/components/movie-card";
import Naming from "@/components/naming";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pulpmovies",
	description: "The right place to log and share all the movies you love",
};

export default async function Home() {
	const trendingMovies = await getTrendingMovies();
	return (
		<div className="w-full px-4">
			<div className="mt-8 flex items-center justify-center gap-4 dark:gap-1">
				<div className="glowing rounded-xl md:rounded-3xl shadow-2xl p-3 dark:p-0 md:p-4 flex items-center justify-center bg-gradient-to-br from-[#6400E2] to-[#341C97] dark:bg-none dark:shadow-none">
					<div className="w-10 md:w-16 dark:md:w-20">
						<Logo />
					</div>
				</div>
				<div className="translate-y-1 w-44 md:w-80">
					<Naming />
				</div>
			</div>
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
