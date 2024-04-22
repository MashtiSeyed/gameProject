import { useQuery } from "@tanstack/react-query";
import APIclient, { FetchData } from "../services/api-client";
import dataClient from "../data/data-client";
import { Genres } from "../entities/Genres";

const apiClient = new APIclient<Genres>("/genres");

const useGenres = () => {
  return useQuery<FetchData<Genres>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: dataClient,
  });
};

export default useGenres;
