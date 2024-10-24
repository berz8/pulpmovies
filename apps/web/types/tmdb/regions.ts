import { CountryCode } from "./movie";

export interface Region {
  iso_3166_1: CountryCode;
  english_name: string;
  native_name: string;
}
