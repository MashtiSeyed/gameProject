import { Menu, MenuButton, Button, MenuList, MenuItem, Icon } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Platform } from "../hooks/useGame";

interface Props {
  onSelectPlatform: (platform : Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformsComponent = ({onSelectPlatform, selectedPlatform}:Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<Icon as={ChevronDownIcon} />}>
          {selectedPlatform?.name || "Platform"}
        </MenuButton>{" "}
        <MenuList>
          {data.map((arg) => (
            <MenuItem onClick={() => onSelectPlatform(arg)} key={arg.id}>{arg.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatformsComponent;
