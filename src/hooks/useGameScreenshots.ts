import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { Screenshots } from "../entities/Screenshots";

const useGameScreenshots = (gameId: number) => {
  const apiClient = new APIclient<Screenshots>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameScreenshots;
