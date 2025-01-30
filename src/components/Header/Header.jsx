import { ArrowLeftStartOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({
  toggleSidebar,
  logout,
  authedUser,
}) => {
  return (
    <header className="
    notes-spa__header
    flex flex-row gap-5 justify-between
    px-4 md:pr-8 py-4"
    >
      <div className="
      left-wrapper
      flex flex-row gap-5"
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
        flex flex-col md:flex-row md:items-center md:gap-4
        font-bold text-xl text-primaryColor"
        >
          <Link to="/">
            <span className="hidden md:block">
              Notes Single Page Application
            </span>
            <span className="block md:hidden">
              Notes SPA
            </span>
          </Link>
          <p className="
          max-w-28 md:max-w-80 text-nowrap
          md:pl-4 md:border-l
          text-base font-normal
          truncate"
          >
            Hello,
            {' '}
            <span className="truncate">
              {authedUser.name}
            </span>
            !
          </p>
        </h1>
      </div>
      <button
        type="button"
        onClick={logout}
        className="flex flex-row gap-1 items-center text-dangerColor"
      >
        <ArrowLeftStartOnRectangleIcon className="w-5" />
        <span>Logout</span>
      </button>
    </header>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  authedUser: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Header;
