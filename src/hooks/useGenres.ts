import dataClient from "../data/data-client";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchData } from "./useGame";


export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchData<Genres>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, 
    initialData: {count: dataClient.length, results: dataClient}
  });
};

export default useGenres;
