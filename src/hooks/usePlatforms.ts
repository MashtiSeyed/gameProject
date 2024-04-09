import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchData } from "./useGame";


interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get<FetchData<Platform>>("/platforms/lists/parents").then((res) => res.data),
  });
};

export default usePlatforms;
