import { HStack, Image } from "@chakra-ui/react"
import Logo from '../assets/react.svg'
import ColorModeSwitch from "./ColorModeSwitch"
const NavBar = () => {
  return (
    <HStack>
        <Image src={Logo} boxSize={"60px"} padding={"6px"}/>
        <ColorModeSwitch/>
    </HStack>
    )
}

export default NavBar