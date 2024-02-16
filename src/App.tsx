import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
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
        base: `'nav'
                'main'`,
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
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          }
        </GridItem>
      </Show>
      <GridItem marginY={5} area={"main"}>
        <Flex paddingX={2} gap={2}>
          <PlatformsComponent
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortComponent
            selectedOrder={gameQuery.ordering}
            onSelectSortOrder={(ordering) =>
              setGameQuery({ ...gameQuery, ordering })
            }
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
