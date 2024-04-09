import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import {useQuery} from "@tanstack/react-query"

export interface FetchData<T> {
  count: number;
  results: T[];
}

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
    apiClient.get<FetchData<Game>>('/games', {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.search
      },
    })
    .then(res => res.data)
  })
}


export default useGames;


/*(gameQuery: GameQuery) =>
useData<Game>(
    "/games",
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.ordering, search: gameQuery.search } },
    [gameQuery]
  ); */
