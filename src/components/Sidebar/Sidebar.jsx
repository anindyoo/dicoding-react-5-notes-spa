import React from 'react';
import Navigation from './Navigation';
import AddNoteButton from './AddNoteButton';
import PropTypes from 'prop-types';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`
    sidebar
    fixed left-0 bottom-0 z-10 md:static
    flex flex-row md:flex-col gap-2
    justify-between md:justify-normal
    w-full
    p-5 md:px-4 md:pt-2
    bg-white md:bg-auto
    transition-[width]
    ${isSidebarOpen
      ? 'md:w-72 duration-200 ease-in'
      : 'md:w-[4.5rem] duration-700 overflow-x-hidden ease-out'}`}
    >
      <AddNoteButton isSidebarOpen={isSidebarOpen} />
      <hr className="
      hidden md:block
      my-2
      bg-accentColor opacity-50" />
      <Navigation isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
