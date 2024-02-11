import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameGridSkeleton from "./GameGridSkeleton";
const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [123,123,132,132,12,31,321,31,23,21,3,132,1,3,12,3];
  return (
    <div>
      {error && <p>{error}</p>}
      <SimpleGrid spacing={10} padding={14} columns={{sm: 1, md: 2, lg: 3}}>
        {isLoading && skeletons.map(skeleton => <GameGridSkeleton key={skeleton}/>)}
        {games.map((game) => (
          <GameCard game={game}/>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
