import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ArchiveBoxIcon, HomeIcon } from '@heroicons/react/24/outline';

const navigationData = [
  { id: 1, path: '/', name: 'Home', icon: <HomeIcon/> },
  { id: 2, path: '/archive', name: 'Archive', icon: <ArchiveBoxIcon/> },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="
    navigation
    pt-4">
      <ul className="
      navigation__list
      flex flex-col gap-2"
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
              flex flex-row gap-4
              p-2
              rounded-xl
              transition-all duration-200 ease-in-out
              ${location.pathname === data.path
                ? 'bg-opacity-40 bg-accentColor'
                : 'hover:bg-opacity-15 hover:bg-accentColor'}`}
            >
              <div className="w-6 text-primaryColor">
                {data.icon}
              </div>
              <span>
                {data.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
