import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props {
    gameQuery: GameQuery
}


const GamesHeading = ({gameQuery}:Props) => {
    const query = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} ${"Games"}`
  return (
    <Heading as='h1' paddingLeft={2} marginBottom={5}>{query}</Heading>
  )
}

export default GamesHeading;
