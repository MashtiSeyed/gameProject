import { GameQuery } from "../App";
import {useQuery} from "@tanstack/react-query"
import APIclient, { FetchData } from "../services/api-client";

const apiClient = new APIclient<Game>('/games');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchData<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => 
    apiClient.getAll( {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.search
      },
    })
  })
}


export default useGames;