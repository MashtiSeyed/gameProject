import { GameQuery } from "../App";
import {useInfiniteQuery} from "@tanstack/react-query"
import APIclient, { FetchData } from "../services/api-client";


const apiClient = new APIclient<Game>('/games');


export interface Platform {
  id: number;
  name: string;
  slug: string;
}


interface Client {
  pageSize: number;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery, query: Client) => {
  return useInfiniteQuery<FetchData<Game>, Error>({
    queryKey: ["games", query, gameQuery],
    queryFn: ({pageParam = 1}) => 
    apiClient.getAll( {
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.ordering,
        search: gameQuery.search,
        page: pageParam
      },
    }),
    getNextPageParam(lastPages, allPages) {
      return lastPages.next ? allPages.length + 1 : undefined;
    },
    
  })
}


export default useGames;