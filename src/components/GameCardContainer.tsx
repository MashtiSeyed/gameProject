import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
 
interface Props {
    children: ReactNode
}

const GameCardContainer = ({children}:Props) => {
  return (
    <Box _hover={{transform: "scale(0.98999)",}} overflow={"hidden"} borderRadius={"10px"}>   {children}</Box>
  )
}

export default GameCardContainer;

