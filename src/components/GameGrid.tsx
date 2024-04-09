import { Button, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameGridSkeleton from "./GameGridSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useGames(gameQuery, {
      pageSize,
    });
  const pageQuery = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div>
      {error && <p>{error.message}</p>}
      <SimpleGrid spacing={5} padding={2} columns={{ sm: 1, md: 2, lg: 3 }}>
        {isLoading &&
          pageQuery.map((skeleton) => (
            <GameCardContainer>
              <GameGridSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data?.pages.map((page) => (
          <React.Fragment>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard key={game.id} game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Button className="ms-2 mt-1" onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </Button>
    </div>
  );
};

export default GameGrid;
