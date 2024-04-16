import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getUrlOfLoadedImages from "../services/image-crop";
import GenresSkeleton from "./GenresSkeleton";
import gameQueryStore from "../store/queryStore";



const GenresList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const selectedGenreId = gameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = gameQueryStore(s => s.setGenreId);
  if(error) return null
  return (
    <List>
      {isLoading &&
        skeletens.map((skeleton) => <GenresSkeleton key={skeleton} />)}
      {data?.results.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingTop={2}>
            <Image
            objectFit='cover'
              boxSize="42px"
              borderRadius="8px"
              src={getUrlOfLoadedImages(genre.image_background)}
            ></Image>
            <Button
              fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
              onClick={() => setSelectedGenreId(genre.id)}
              variant="link"
              fontSize={19}
              whiteSpace='normal'
              textAlign='left'
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
