import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <div>
      {error && <p>{error}</p>}
      <SimpleGrid spacing={10} column={{sm: 1, md: 2, lg: 3, xl: 5}}>
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
