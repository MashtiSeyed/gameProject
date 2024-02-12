import { Menu, MenuButton, Button, MenuList, MenuItem, Icon } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { ChevronDownIcon } from "@chakra-ui/icons";

const PlatformsComponent = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<Icon as={ChevronDownIcon} />}>
          Platforms
        </MenuButton>{" "}
        <MenuList>
          {data.map((arg) => (
            <MenuItem key={arg.id}>{arg.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatformsComponent;
