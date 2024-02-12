import { HStack,Text,Image, List, ListItem, Spinner, Button, Link } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getUrlOfLoadedImages from "../services/image-crop";
import GenresSkeleton from "./GenresSkeleton";

interface Props {
  onSelectGenre: (genre : Genres) => void;
}

const GenresList = ({onSelectGenre}:Props) => {
  const { data, isLoading } = useGenres();
  const skeletens = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  
  return (
    <List>
      {isLoading && skeletens.map(skeleton => <GenresSkeleton key={skeleton}/>)}
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingTop={2}>
            <Image boxSize="42px" borderRadius="8px" src={getUrlOfLoadedImages(genre.image_background)}></Image>
            <Button onClick={() => onSelectGenre(genre)} variant="link" fontSize={19}>{genre.name}</Button>
          </HStack>

        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
