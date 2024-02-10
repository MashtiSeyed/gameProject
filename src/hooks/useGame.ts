import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchedData {
  count: number;
  result: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchedData>("/games/", {signal: controller.signal})
      .then((res) => setGames(res.data.result))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError("Error fetching data from the server")});
    return () => controller.abort();
    }, []);

  return {games, error};
};
export default useGames;
