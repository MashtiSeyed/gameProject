import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameGridSkeleton from "./GameGridSkeleton";
import GameCardContainer from "./GameCardContainer";
const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [
    123, 123, 132, 132, 12, 31, 321, 31, 23, 21, 3, 132, 1, 3, 12, 3,
  ];
  return (
    <div>
      {error && <p>{error}</p>}
      <SimpleGrid spacing={10} padding={14} columns={{ sm: 1, md: 2, lg: 3 }}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameGridSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
