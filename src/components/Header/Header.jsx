import { ArrowLeftStartOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import LocaleToggle from '../LocaleToggle/LocaleToggle';
import { LocaleContext } from '../../App';

const Header = ({
  toggleSidebar,
  logout,
  authedUser,
}) => {
  const { locale } = useContext(LocaleContext);

  return (
    <header className="
    notes-spa__header
    flex flex-row gap-5 justify-between
    px-5 md:pr-8 py-4
    dark:text-accentColor30Dark dark:bg-backgroundSecondaryDark"
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
        font-bold text-xl text-primaryColor dark:text-white"
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
            {locale === 'en' ? 'Hello' : 'Halo'},
            {' '}
            <span className="truncate">
              {authedUser.name}
            </span>
            !
          </p>
        </h1>
      </div>
      <div className="
      right-wrapper
      flex flex-row items-center gap-3
      text-primaryColor dark:text-accentColor30Dark"
      >
        <LocaleToggle />
        <div className="h-5 border-r" />
        <DarkModeToggle />
        <div className="h-5 border-r" />
        <button
          type="button"
          onClick={logout}
          className="flex flex-row gap-1 items-center text-dangerColor dark:text-dangerLighterColor"
        >
          <ArrowLeftStartOnRectangleIcon className="w-5" />
          <span>{locale === 'en' ? 'Logout' : 'Keluar'}</span>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  authedUser: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Header;
