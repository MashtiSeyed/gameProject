import { useQuery } from "@tanstack/react-query";
import APIclient, { FetchData } from "../services/api-client";

const apiClient = new APIclient<Genres>('/genres') 

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<FetchData<Genres>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll
  })
}

export default useGenres;
