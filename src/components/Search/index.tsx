import React from 'react';
import styled from 'styled-components';
import { Search as SearchIcon } from '@mui/icons-material';

interface SearchProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  return (
    <Wrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <Input spellCheck="true" type="search" name="search" placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  border-radius: calc(5 / 16 * 1rem);
`;

const SearchIconWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding-left: 9px;
  align-items: center;
  pointer-events: none;
  z-index: 1;
  font-size: var(--font-size-12);
  color: var(--color-grey-80);
`;

const Input = styled.input`
  border: 0;
  color: var(--color-grey-100);
  opacity: 0.75;
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  width: 100%;
  border: 1px solid var(--color-grey-50);
  border-radius: calc(5 / 16 * 1rem);
  padding: 4px 4px 4px 24px;

  &:focus {
    outline: 1px solid transparent;
    outline-offset: 2px;
    border-color: var(--color-primary-50);
  }
`;

export default Search;
