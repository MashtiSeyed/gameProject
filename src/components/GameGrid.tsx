import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameGridSkeleton from "./GameGridSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage } = useGames();
  const pageQuery = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div>
      {error && <p>{error.message}</p>}
      <InfiniteScroll
        dataLength={data?.pages.length || 0}
        hasMore={true}
        next={() => fetchNextPage()}
        loader={<Spinner size="lg" />}
      >
        <SimpleGrid spacing={3} padding={2} columns={{ sm: 1, md: 2, lg: 3 }}>
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
      </InfiniteScroll>
    </div>
  );
};

export default GameGrid;
