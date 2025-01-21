import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React from 'react';

const SearchBar = ({
  keyword,
  keywordChange,
}) => {
  return (
    <div className="
    search-bar
    relative
    flex flex-row items-center
    rounded-lg
    border border-accentColor border-opacity-30
    shadow-md
    overflow-x-hidden"
    >
      <div className="search-bar__icon absolute left-2 text-accentColor">
        <MagnifyingGlassIcon className="w-6" />
      </div>
      <input
        type="text"
        placeholder="Search note title..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
        className="
        search-bar__input
        w-full
        p-2 pl-10"
      />
    </div>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
