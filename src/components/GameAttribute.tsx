import { Game } from "../entities/Game";
import Definition from "./Definition"
import Metacritic from "./Metacritic"
import {Text} from '@chakra-ui/react'

interface Props {
    game: Game;
}

const GameAttribute = ({game}:Props) => {
  return (
    <div>
      <div className="row">
          <div className="col">
            <Definition term="Platform">
              {game?.parent_platforms.map(({ platform }) => (
                <Text key={platform.id} marginY={1}>
                  {platform.name}
                </Text>
              ))}
            </Definition>
          </div>
          <div className="col">
            <Definition term="Metacritic">
              <Metacritic score={game.metacritic} />
            </Definition>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Definition term="Genres">
              {game?.genres.map((genre) => (
                <Text key={genre.id}>{genre.name}</Text>
              ))}
            </Definition>
          </div>
          <div className="col">
            <Definition term="Publishers">
              {game?.publishers.map((publisher) => (
                <Text key={publisher.id}>{publisher.name}</Text>
              ))}
            </Definition>
          </div>
        </div>
    </div>
  )
}

export default GameAttribute
