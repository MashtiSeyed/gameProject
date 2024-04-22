import { useParams } from "react-router-dom";
import useSingleGame from "../hooks/useSingleGame";
import { Heading, Spinner, Stack } from "@chakra-ui/react";
import ExpandibleText from "../components/ExpandibleText";
import GameAttribute from "../components/GameAttribute";
import GameTrailer from "../components/GameTrailer";
const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useSingleGame(slug!);

  if (isLoading) return <Spinner marginLeft={4} marginTop={3} />;
  if (game === undefined) return null;
  if (error) throw error;
  return (
    <>
      <Stack padding={5}>
        <Heading>{game?.name}</Heading>
        <ExpandibleText>{game?.description_raw}</ExpandibleText>
        <GameAttribute game={game}/>
        <GameTrailer gameId={game.id}/>
      </Stack>
    </>
  );
};

export default GameDetailPage;
