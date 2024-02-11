import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface Genres {
    id: number;
    name: string;
}

interface FetchGenres {
    count: number;
    results: Genres[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<FetchGenres>("/genres", { signal: controller.signal })
        .then((res) => {
          setGenres(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });
      return () => controller.abort();
    }, []);
  
    return { genres, error, isLoading };
}

export default useGenres;