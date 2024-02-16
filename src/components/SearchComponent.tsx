import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
const SearchComponent = () => {
  return (
    <InputGroup>
      <InputLeftElement>{<Search2Icon/>}</InputLeftElement>
      <Input borderRadius={18} variant="filled" placeholder="Search Games..." />
    </InputGroup>
  );
};

export default SearchComponent;
