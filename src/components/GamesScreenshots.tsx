import { Image, SimpleGrid } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  gameId: number;
}

const GamesScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid spacing={3} columns={{ base: 1, md: 2 }}>
      {data?.results.map((data) => (
        <Image borderRadius={3} src={data.image} key={data.id}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GamesScreenshots;
