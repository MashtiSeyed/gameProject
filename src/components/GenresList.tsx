import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getUrlOfLoadedImages from "../services/image-crop";
import GenresSkeleton from "./GenresSkeleton";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  if(error) return null
  return (
    <List>
      {isLoading &&
        skeletens.map((skeleton) => <GenresSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingTop={2}>
            <Image
              boxSize="42px"
              borderRadius="8px"
              src={getUrlOfLoadedImages(genre.image_background)}
            ></Image>
            <Button
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize={19}
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
