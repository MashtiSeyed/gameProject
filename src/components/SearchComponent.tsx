import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useRef } from "react";
import gameQueryStore from "../store/queryStore";



const SearchComponent = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = gameQueryStore(s=> s.setSearchText)
  return (
    <form style={{width: "100%"}} onSubmit={(e) => {
      e.preventDefault();
      if(ref.current) setSearchText(ref.current.value)
    }}>
      <InputGroup>
        <InputLeftElement>{<Search2Icon/>}</InputLeftElement>
        <Input ref={ref} borderRadius={18} variant="filled" placeholder="Search Games..." />
      </InputGroup>
    </form>
  );
};

export default SearchComponent;
