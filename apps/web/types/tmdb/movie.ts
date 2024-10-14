import { Credits } from "./credits";
import { WatchProviders } from "./watch-providers";

export interface Movie {
  id: number;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits?: Credits;
  "watch/providers"?: WatchProviders;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: CountryCode;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export const CountryCodes = [
  "AE",
  "AR",
  "AT",
  "AU",
  "BE",
  "BG",
  "BO",
  "BR",
  "CA",
  "CH",
  "CL",
  "CO",
  "CR",
  "CV",
  "CZ",
  "DE",
  "DK",
  "EC",
  "EE",
  "EG",
  "ES",
  "FI",
  "FR",
  "GB",
  "GH",
  "GR",
  "GT",
  "HK",
  "HN",
  "HU",
  "ID",
  "IE",
  "IL",
  "IN",
  "IT",
  "JP",
  "LT",
  "LV",
  "MU",
  "MX",
  "MY",
  "MZ",
  "NL",
  "NO",
  "NZ",
  "PE",
  "PH",
  "PL",
  "PT",
  "PY",
  "RU",
  "SA",
  "SE",
  "SG",
  "SI",
  "SK",
  "TH",
  "TR",
  "TW",
  "UG",
  "US",
  "VE",
  "ZA",
] as const;

export type CountryCode = (typeof CountryCodes)[number];
