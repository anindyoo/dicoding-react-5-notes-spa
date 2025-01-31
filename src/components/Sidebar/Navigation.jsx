import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ArchiveBoxIcon, HomeIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const navigationData = [
  { id: 1, path: '/', name: 'Home', icon: <HomeIcon title="Home." /> },
  { id: 2, path: '/archive', name: 'Archive', icon: <ArchiveBoxIcon title="Archive." /> },
];

const Navigation = ({ isSidebarOpen }) => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <ul className="
      navigation__list
      flex flex-row md:flex-col gap-3 md:gap-2"
      >
        {navigationData.map((data) => (
          <li
            key={data.id}
            className="navigation__list-item"
          >
            <NavLink
              to={data.path}
              className={`
              navigation__list-item__link
              flex flex-row gap-2 md:gap-4 justify-start
              min-w-10 h-10
              p-2
              rounded-xl
              overflow-hidden
              transition-all duration-200 ease-in-out
              ${location.pathname === data.path
                ? 'bg-opacity-40 bg-accentColor dark:bg-accentColor20Dark'
                : 'hover:bg-opacity-15 hover:bg-accentColor dark:hover:bg-opacity-50 dark:hover:bg-accentColor20Dark'}`}
            >
              <div className={`
              min-w-6 text-primaryColor transition-none
              ${location.pathname === data.path
                ? 'dark:text-primaryColor'
                : 'dark:text-accentColor30Dark'}`}
              >
                {data.icon}
              </div>
              <span className={`
              navigation__list-item__link-label
              transition-all duration-1000 ease-in-out
              ${isSidebarOpen ? 'visible' : 'md:invisible md:w-0'}
              ${location.pathname === data.path
                ? 'dark:text-primaryColor'
                : 'dark:text-white'}`}
              >
                {data.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Navigation;
