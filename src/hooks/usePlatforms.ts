import { useQuery } from "@tanstack/react-query";
import APIclient, { FetchData } from "../services/api-client";

const apiClient = new APIclient<Platform>("/platforms/lists/parents")

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<FetchData<Platform>>({
    queryKey: ["games"],
    queryFn: apiClient.getAll
  })
}

export default usePlatforms;
