import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

export interface OnSearchProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: OnSearchProps) => {
  const inpValue = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inpValue.current) onSearch(inpValue.current.value);
      }}
      className="w-full mr-2"
    >
      <InputGroup className="mr-5">
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input placeholder="Search games..." borderRadius={20} ref={inpValue} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
