import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformsComponent from "./components/PlatformsComponent";
import { Platform } from "./hooks/useGame";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
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
        <PlatformsComponent selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) =>  setGameQuery({...gameQuery, platform})} />
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
};

export default App;
