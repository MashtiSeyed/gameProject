import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformsIconList from "./PlatformsIconList";
import Metacritic from "./Metacritic";
import getUrlOfLoadedImages from "../services/image-crop";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getUrlOfLoadedImages(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformsIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Metacritic score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          <Link to={'games/' + game.slug}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
