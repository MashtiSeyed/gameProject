import { Menu, MenuButton, Button, MenuList, MenuItem, Icon } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { ChevronDownIcon } from "@chakra-ui/icons";
import usePlatformId from "../hooks/usePlatformId";
import gameQueryStore from "../store/queryStore";


const PlatformsComponent = () => {
  const selectedPlatformId = gameQueryStore(s => s.gameQuery.platformId)
  const onSelectPlatform = gameQueryStore(s => s.setPlatformId)
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatformId(selectedPlatformId)
  if (error) return null;
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<Icon as={ChevronDownIcon} />}>
          {selectedPlatform?.name || "Platform"}
        </MenuButton>
        <MenuList>
          {data?.results.map((arg) => (
            <MenuItem onClick={() => onSelectPlatform(arg.id)} key={arg.id}>{arg.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatformsComponent;
