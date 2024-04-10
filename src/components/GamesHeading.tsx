import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenres from "../hooks/useGenres"
import usePlatforms from "../hooks/usePlatforms"
interface Props {
    gameQuery: GameQuery
}


const GamesHeading = ({gameQuery}:Props) => {
  const {data: platforms} = usePlatforms();
  const platform = platforms?.results.find(g => g.id === gameQuery.platformId)
  const {data: genres} = useGenres();
  const genre = genres?.results.find(g => g.id === gameQuery.genreId)
    const query = `${platform?.name || ''} ${genre?.id || ''} ${"Games"}`
  return (
    <Heading as='h1' paddingLeft={2} marginBottom={5}>{query}</Heading>
  )
}

export default GamesHeading;
