import { HStack, useColorMode, Switch, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
      <Text whiteSpace="nowrap" margin="0 !important">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
