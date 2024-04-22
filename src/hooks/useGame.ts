import { useInfiniteQuery } from "@tanstack/react-query";
import APIclient, { FetchData } from "../services/api-client";
import gameQueryStore from "../store/queryStore";
import { Game } from "../entities/Game";

const apiClient = new APIclient<Game>("/games");

const useGames = () => {
  const gameQuery = gameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchData<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    getNextPageParam(lastPages, allPages) {
      return lastPages.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
