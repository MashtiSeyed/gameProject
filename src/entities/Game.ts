import { Genres } from "./Genres";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";


export interface Game {
  id: number;
  name: string;
  description_raw: string;
  slug: string;
  publishers: Publisher[];
  genres: Genres[];
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}
