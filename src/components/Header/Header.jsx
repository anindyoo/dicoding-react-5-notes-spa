import { Bars3Icon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="
    notes-spa__header
    flex flex-row gap-5 justify-center md:justify-normal
    px-4 py-4"
    >
      <button
        className="
        notes-spa__sidebar-toggler
        hidden md:block"
        type="button"
        onClick={toggleSidebar}
      >
        <Bars3Icon className="w-6" />
      </button>
      <h1 className="
      notes-spa__title
      font-bold
      text-xl text-primaryColor"
      >
        <Link to="/">
          Notes Single Page Application
        </Link>
      </h1>
    </header>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
