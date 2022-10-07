import React from 'react';
import { SearchBar_wrapper,SearchBar_input,SearchBar_button } from './styles/SearchBar';

export default function SearchBar() {
  return (
    <SearchBar_wrapper>
      <SearchBar_input type="text" placeholder="Type Here" />
      <SearchBar_button>Search</SearchBar_button>
    </SearchBar_wrapper>
  );
}