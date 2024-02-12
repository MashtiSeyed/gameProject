import { HStack,Text,Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getUrlOfLoadedImages from "../services/image-crop";
import GenresSkeleton from "./GenresSkeleton";
const GenresList = () => {
  const { data, isLoading } = useGenres();
  const skeletens = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  
  return (
    <List>
      {isLoading && skeletens.map(skeleton => <GenresSkeleton key={skeleton}/>)}
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingTop={2}>
            <Image boxSize="42px" borderRadius="8px" src={getUrlOfLoadedImages(genre.image_background)}></Image>
            <Text fontSize={19}>{genre.name}</Text>
          </HStack>

        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
