import { Heading } from "@chakra-ui/react"
import usePlatformId from "../hooks/usePlatformId"
import useGenresId from "../hooks/useGenresId"
import gameQueryStore from "../store/queryStore"


const GamesHeading = () => {

  const platformId = gameQueryStore(s => s.gameQuery.platformId)
  const genreId = gameQueryStore(s => s.gameQuery.genreId)

  const platform = usePlatformId(platformId)
  const genre = useGenresId(genreId)

    const query = `${platform?.name || ''} ${genre?.name || ''} ${"Games"}`
  return (
    <Heading as='h1' paddingLeft={2} marginBottom={5}>{query}</Heading>
  )
}

export default GamesHeading;
