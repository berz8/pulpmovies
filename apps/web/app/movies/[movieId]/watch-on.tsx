"use client";

import { cn } from "@/lib/utils";
import {
  Buy,
  Flatrate,
  Rent,
  WatchProviders,
} from "@/types/tmdb/watch-providers";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ChevronRight, DollarSign, Hourglass, Tv } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { Drawer } from "vaul";

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
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <div
          className={cn(
            "relative cursor-pointer overflow-hidden md:mt-1 mb-3 md:mb-8 flex gap-6 items-center justify-between -mx-2 p-2 rounded-lg text-background shadow-lg",
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
            <div className="relative z-20 opacity-80 dark:opacity-100 text-sm italic dark:text-primary">
              No digital release in your country
            </div>
          ) : (
            <div className="grow overflow-hidden flex gap-6">
              <ProviderSection items={providers.results[country].flatrate}>
                <Tv className="w-5 h-5" />
              </ProviderSection>
              <ProviderSection items={providers.results[country].buy}>
                <DollarSign className="w-5 h-5" />
              </ProviderSection>
            </div>
          )}
          <ChevronRight className="w-6 h-6 text-background relative z-20" />
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-30" />
        <Drawer.Content
          className={cn(
            "overflow-hidden rounded-3xl w-[calc(100%-2rem)] h-fit fixed bottom-4 left-0 right-0 outline-hidden z-30",
            "md:bottom-12 md:w-[500px] mx-auto",
          )}
        >
          <div className="bg-background pt-2">
            <Drawer.Handle className="cursor-pointer" />
            <Drawer.Title className="p-4 pb-6 font-bold text-lg md:text-xl max-w-72 mx-auto">
              Watch, Buy or Rent on:
            </Drawer.Title>
            <div className="p-4 pb-8 md:pb-8 max-w-72 md:w-fit md:max-w-fit m-auto">
              {!providers.results[country] ? (
                <div className="relative z-20 opacity-80 dark:opacity-100 text-sm italic">
                  No digital release in your country
                </div>
              ) : (
                <div className="flex flex-col gap-3 md:gap-6">
                  <ProviderSection
                    items={providers.results[country].flatrate}
                    expanded
                  >
                    <Tv className="w-5 h-5" />
                    <span>Streaming</span>
                  </ProviderSection>
                  <ProviderSection
                    items={providers.results[country].buy}
                    expanded
                  >
                    <DollarSign className="w-5 h-5" />
                    <span>Buy</span>
                  </ProviderSection>
                  <ProviderSection
                    items={providers.results[country].rent}
                    expanded
                  >
                    <Hourglass className="w-5 h-5" />
                    <span>Rent</span>
                  </ProviderSection>
                </div>
              )}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

function ProviderSection({
  items,
  children,
  expanded = false,
}: {
  items: Flatrate[] | Buy[] | Rent[] | undefined;
  children: ReactNode;
  expanded?: boolean;
}) {
  if (!items) return null;
  return (
    <div
      className={cn(
        "relative z-10 flex gap-2",
        expanded
          ? "flex-col gap-4 pb-2 md:justify-center md:items-center"
          : "items-center",
      )}
    >
      <div className="flex gap-2 items-center">{children}</div>
      <div className="flex gap-2">
        {items.map((prov) => (
          <Provider provider={prov} key={prov.provider_id} />
        ))}
      </div>
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
