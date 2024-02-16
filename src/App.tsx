import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformsComponent from "./components/PlatformsComponent";
import { Platform } from "./hooks/useGame";
import SortComponent from "./components/SortComponent";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  ordering: string;
}

const App = () => {
      const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: "nav menu",
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingLeft={4}>
          {
            <GenresList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
            />
          }
        </GridItem>
      </Show>
      <GridItem area={"main"}>
          <HStack spacing={3} paddingX={2}>
            <PlatformsComponent selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) =>  setGameQuery({...gameQuery, platform})} />
            <SortComponent selectedOrder={gameQuery.ordering} onSelectSortOrder={(ordering) => setGameQuery({ ...gameQuery, ordering})}/>
          </HStack>
          <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
};

export default App;
