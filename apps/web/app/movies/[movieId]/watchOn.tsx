import { cn } from "@/lib/utils";
import { Flatrate, WatchProviders } from "@/types/tmdb/watch-providers";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { DollarSign, Tv } from "lucide-react";
import Image from "next/image";

export default function WatchOn({
  providers,
  posterPath,
  country = "IT",
}: {
  providers: WatchProviders;
  posterPath: string;
  country?: "IT" | "US";
}) {
  return (
    <div
      className={cn(
        "relative mt-2 mb-8 flex gap-6 items-center -mx-2 p-2 rounded-lg text-background shadow-lg",
      )}
    >
      <div
        className="absolute top-0 left-0 w-full h-full scale-105 opacity-60 dark:opacity-70"
        style={{
          backgroundImage: `url(${posterPath})`,
          backgroundSize: "100% 100%",
          transform: "translate3d(0, 0, 0)",
          filter: "blur(10px)",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-contain bg-foreground opacity-40 dark:opacity-50 dark:bg-gray-500 rounded-lg" />
      {!providers.results[country] ? (
        <div className="relative z-20 opacity-80 dark:opacity-100 text-sm italic">
          No digital release in your country
        </div>
      ) : (
        <>
          {providers.results[country].flatrate ? (
            <div className="relative z-10 flex gap-2 items-center">
              <Tv className="w=5 h-5" />
              <div className="flex gap-1">
                {providers.results["IT"].flatrate.map((prov) => (
                  <Provider provider={prov} key={prov.provider_id} />
                ))}
              </div>
            </div>
          ) : null}
          {providers.results["IT"].buy ? (
            <div className="relative z-10 flex gap-2 items-center">
              <DollarSign className="w-5 h-5" />
              <div className="flex gap-1">
                {providers.results["IT"].buy.map((prov) => (
                  <Provider provider={prov} key={prov.provider_id} />
                ))}
              </div>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

function Provider({ provider }: { provider: Flatrate }) {
  return (
    <div className="w-8">
      <AspectRatio ratio={1 / 1}>
        <Image
          src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
          alt={provider.provider_name}
          width={185}
          height={185}
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  );
}
