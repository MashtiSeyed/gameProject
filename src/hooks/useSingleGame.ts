import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIclient<Game>('/games');

const useSingleGame = (slug: string) => {
    return useQuery({
        queryKey: ['games', slug],
        queryFn: () => apiClient.getSingleGame(slug),
    })
}

export default useSingleGame;
