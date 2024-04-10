import { useQuery } from "@tanstack/react-query";
import APIclient, { FetchData } from "../services/api-client";
import platformData from "../data/platform-data";

const apiClient = new APIclient<Platform>("/platforms/lists/parents")

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<FetchData<Platform>>({
    queryKey: ["games"],
    queryFn: apiClient.getAll,
    initialData: platformData
  })
}

export default usePlatforms;
