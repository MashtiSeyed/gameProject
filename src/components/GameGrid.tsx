import { SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameGridSkeleton from "./GameGridSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genres | null
  selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform}:Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [
    123, 123, 132, 132, 12, 31, 321, 31, 23, 21, 3, 132, 1, 3, 12, 3,
  ];
  return (
    <div>
      {error && <p>{error}</p>}
      <SimpleGrid spacing={5} padding={{sm: 14, lg: 2, xl:2, base: 15}} marginY={{sm: 10, lg: 2, xl:2, base: 45}} columns={{ sm: 1, md: 2, lg: 3 }}>
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
