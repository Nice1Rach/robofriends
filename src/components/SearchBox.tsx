import React, { ChangeEvent } from 'react';

interface SearchBoxProps {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  ariaLabel?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchChange, searchValue, ariaLabel = 'Search input' }) => (
  <input
    aria-label={ariaLabel}
    type="search"
    placeholder="Search robots"
    onChange={searchChange}
    value={searchValue}
    className="pa3 ba b--green bg-lightest-blue"
  />
);

export default SearchBox;