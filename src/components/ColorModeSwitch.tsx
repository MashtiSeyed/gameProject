import { HStack, useColorMode, Switch, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
