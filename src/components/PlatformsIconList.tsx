import { Platform } from "../entities/Platform";
import { HStack, Icon  } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
  FaAppStoreIos,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const IconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  android: FaAndroid,
  linux: FaLinux,
  ios: FaAppStoreIos
};

const PlatformsIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={3}>
      {platforms.map((platform) => (
        <Icon
          as={IconMap[platform.slug]}
          key={platform.slug}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformsIconList;
