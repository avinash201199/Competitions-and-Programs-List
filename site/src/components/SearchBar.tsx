import React from "react";
import {
  SearchBar_wrapper,
  SearchBar_input,
  SearchBar_label,
} from "./styles/SearchBar";

interface P {
  search: string;
  setSearch: (val: string) => void;
}

const SearchBar: React.FC<P> = ({ search, setSearch }: P) => {
  return (
    <SearchBar_wrapper>
      <SearchBar_label>Search:</SearchBar_label>
      <SearchBar_input
        type="text"
        placeholder="Type Here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchBar_wrapper>
  );
};

export default SearchBar;
