import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformsIconList from "./PlatformsIconList";
import Metacritic from "./Metacritic";
import getUrlOfLoadedImages from "../services/image-crop";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={(getUrlOfLoadedImages(game.background_image))} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformsIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Metacritic score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <Emoji rating={game.rating_top}/>
      </CardBody>
    </Card>
  );
};

export default GameCard;
