import React, { ChangeEventHandler } from 'react';
import { SearchIcon } from '../../icons/index';
import { Input, SearchIconWrapper, Wrapper } from './style';

interface SearchProps {
  placeholder: string;
  width?: number;
  onChange?: ChangeEventHandler;
}

const Search: React.FC<SearchProps> = ({ placeholder, width, onChange }) => {
  return (
    <Wrapper width={width}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <Input
        spellCheck="true"
        type="search"
        name="search"
        placeholder={placeholder}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default Search;
