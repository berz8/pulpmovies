import Link from "next/link";
import Logo from "./logo";
import Naming from "./naming";

export default function Footer() {
  return (
    <div className="mx-8 mb-32 mt-28 flex flex-col items-center gap-2">
      <div className="flex justify-center items-center gap-2 mb-4">
        <div className="w-10">
          <Logo />
        </div>
        <div className="w-32 translate-y-1">
          <Naming />
        </div>
      </div>
      <p className="text-sm text-center">
        © 2024 - PulpMovies, All rights reserved.
      </p>
      <div className="flex flex-col gap-4 justify-center items-center text-sm mt-4 md:flex-row">
        <Link href="/privacy-policy" className="underline text-gray-400">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="underline text-gray-400">
          Terms of Service
        </Link>
      </div>
      <TmdbCredits />
    </div>
  );
}

function TmdbCredits() {
  return (
    <div className="mx-8 mt-20 flex flex-col items-center gap-2">
      <img
        className="w-36 mb-1"
        src="/images/tmdb.svg"
        alt="The Movie Database logo"
      />
      <p className="text-sm text-center">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </div>
  );
}
