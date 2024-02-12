import { HStack,Text,Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getUrlOfLoadedImages from "../services/image-crop";
const GenresList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingTop={2}>
            <Image boxSize="42px" borderRadius="8px" src={getUrlOfLoadedImages(genre.image_background)}></Image>
            <Text>{genre.name}</Text>
          </HStack>

        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
