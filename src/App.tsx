import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformsComponent from "./components/PlatformsComponent";
import SortComponent from "./components/SortComponent";
import GamesHeading from "./components/GamesHeading";

const App = () => {
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
          {<GenresList />}
        </GridItem>
      </Show>
      <GridItem marginY={5} area={"main"}>
        <GamesHeading />
        <Flex marginBottom={5} paddingX={2} gap={2}>
          <PlatformsComponent />
          <SortComponent />
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
