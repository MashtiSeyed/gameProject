import { HStack, Image } from "@chakra-ui/react"
import Logo from '../assets/react.svg'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchComponent from "./SearchComponent"



const NavBar = () => {
  return (
    <HStack display={"flex"} padding={"3px 7px"}>
        <Image src={Logo} boxSize={"60px"} padding={"6px"}/>
        <SearchComponent />
        <ColorModeSwitch/>
    </HStack>
    )
}

export default NavBar