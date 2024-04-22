import { useParams } from "react-router-dom";
import useSingleGame from "../hooks/useSingleGame";
import { Text, Heading, Spinner, Stack } from "@chakra-ui/react";
import ExpandibleText from "../components/ExpandibleText";
import GameAttributes from "../components/GameAttributes";
import Metacritic from "../components/Metacritic";
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
        <div className="row">
          <div className="col">
            <GameAttributes term="Platform">
              {game?.parent_platforms.map(({ platform }) => (
                <Text key={platform.id} marginY={1}>
                  {platform.name}
                </Text>
              ))}
            </GameAttributes>
          </div>
          <div className="col">
            <GameAttributes term="Metacritic">
              <Metacritic score={game.metacritic} />
            </GameAttributes>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <GameAttributes term="Genres">
              {game?.genres.map((genre) => (
                <Text key={genre.id}>{genre.name}</Text>
              ))}
            </GameAttributes>
          </div>
          <div className="col">
            <GameAttributes term="Publishers">
              {game?.publishers.map((publisher) => (
                <Text key={publisher.id}>{publisher.name}</Text>
              ))}
            </GameAttributes>
          </div>
        </div>
      </Stack>
    </>
  );
};

export default GameDetailPage;
