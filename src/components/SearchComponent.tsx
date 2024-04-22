import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useRef } from "react";
import gameQueryStore from "../store/queryStore";
import {useNavigate} from 'react-router-dom'


const SearchComponent = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = gameQueryStore(s=> s.setSearchText);
  const navigate = useNavigate();
  return (
    <form style={{width: "100%"}} onSubmit={(e) => {
      e.preventDefault();
      if(ref.current) {
        navigate('/')
        setSearchText(ref.current.value)}
    }}>
      <InputGroup>
        <InputLeftElement>{<Search2Icon/>}</InputLeftElement>
        <Input ref={ref} borderRadius={18} variant="filled" placeholder="Search Games..." />
      </InputGroup>
    </form>
  );
};

export default SearchComponent;
