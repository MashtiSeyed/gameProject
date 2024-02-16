import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useRef } from "react";


interface Props {
  onSearch: (serchText: string) => void;
}

const SearchComponent = ({onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <form style={{width: "100%"}} onSubmit={(e) => {
      e.preventDefault();
      if(ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup>
        <InputLeftElement>{<Search2Icon/>}</InputLeftElement>
        <Input ref={ref} borderRadius={18} variant="filled" placeholder="Search Games..." />
      </InputGroup>
    </form>
  );
};

export default SearchComponent;
