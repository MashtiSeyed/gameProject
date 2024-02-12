import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformsComponent from "./components/PlatformsComponent";
const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  return (
    <Grid
      templateAreas={{
        base: 'nav menu',
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem  area={"aside"} paddingLeft={4}>{<GenresList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>}</GridItem>
      </Show>
      <GridItem area={"main"}>
      <PlatformsComponent/>
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
};

export default App;
