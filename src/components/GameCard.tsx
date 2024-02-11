import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformsIconList from "./PlatformsIconList";
import Metacritic from "./Metacritic";
import getUrlOfLoadedImages from "../services/image-crop";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={(getUrlOfLoadedImages(game.background_image))} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformsIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Metacritic score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
