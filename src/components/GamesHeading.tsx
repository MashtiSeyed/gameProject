import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import usePlatformId from "../hooks/usePlatformId"
import useGenresId from "../hooks/useGenresId"
interface Props {
    gameQuery: GameQuery
}


const GamesHeading = ({gameQuery}:Props) => {

  const platform = usePlatformId(gameQuery.platformId)
  const genre = useGenresId(gameQuery.genreId)

    const query = `${platform?.name || ''} ${genre?.name || ''} ${"Games"}`
  return (
    <Heading as='h1' paddingLeft={2} marginBottom={5}>{query}</Heading>
  )
}

export default GamesHeading;
