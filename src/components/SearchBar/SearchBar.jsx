import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { LocaleContext } from '../../App';

const SearchBar = ({
  keyword,
  keywordChange,
}) => {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="
    search-bar
    relative
    flex flex-row items-center
    h-max min-h-max
    rounded-lg
    border border-accentColor border-opacity-30
    shadow-md"
    >
      <div className="search-bar__icon absolute left-2 pointer-events-none text-accentColor dark:text-accentColor30Dark">
        <MagnifyingGlassIcon className="w-6" />
      </div>
      <input
        id="search-query"
        type="text"
        placeholder={locale === 'en' ? 'Search note title...' : 'Cari judul catatan...'}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
        className="
        search-bar__input
        w-full
        p-2 pl-10
        rounded-lg
        dark:bg-backgroundSecondaryDark
        dark:text-accentColor20Dark
        dark:placeholder:text-accentColor20Dark"
      />
    </div>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
