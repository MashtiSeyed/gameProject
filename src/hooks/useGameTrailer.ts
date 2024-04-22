import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { Trailer } from "../entities/Trailer";


const useGameTrailer = (gameId: number) => {
  const apiClient = new APIclient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameTrailer;
