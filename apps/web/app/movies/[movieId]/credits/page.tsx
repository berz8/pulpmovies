import { getMovieDetails } from "@/actions/tmdb";
import { CastCard, CrewCard } from "@/components/person-cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ movieId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).movieId;
  const movie = await getMovieDetails(id.split("-")[0]);

  return {
    title: `${movie.title} - Credits - Pulpmovies`,
    description: movie.overview,
    openGraph: {
      title: `${movie.title} - Credits - Pulpmovies`,
      description: movie.overview,
      images: [
        !movie.backdrop_path
          ? "/images/fallback-movie.jpg"
          : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      ],
    },
  };
}

export default async function MovieCredits(
  props: {
    params: Promise<{ movieId: string }>;
  }
) {
  const params = await props.params;

  const {
    movieId
  } = params;

  const movie = await getMovieDetails(movieId.split("-")[0]);
  if (movie.adult) redirect("/");
  return (
    <div className="container mt-2 md:mt-4 mx-auto px-2">
      <h1 className="text-2xl md:text-5xl font-black italic">
        {movie.title}
        <span className="ml-4 opacity-65 font-semibold">Cast & Crew</span>
      </h1>
      {movie.credits ? (
        <Tabs defaultValue="cast" className="w-full mt-4">
          <TabsList className="h-12 grid w-full grid-cols-2 mb-8 bg-primary/10">
            <TabsTrigger className="text-lg " value="cast">
              Cast
            </TabsTrigger>
            <TabsTrigger className="text-lg " value="crew">
              Crew
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cast">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {movie.credits.cast.map((person) => (
                <CastCard
                  person={person}
                  variant="list"
                  key={person.id + person.character}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="crew">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {movie.credits.crew.map((person) => (
                <CrewCard
                  person={person}
                  variant="list"
                  key={person.id + person.job}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      ) : null}
    </div>
  );
}
