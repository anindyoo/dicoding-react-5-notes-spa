import React from 'react';
import Navigation from './Navigation';
import AddNoteButton from './AddNoteButton';
import PropTypes from 'prop-types';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`
    sidebar
    flex flex-col gap-2
    px-4 pt-2
    transition-[width]
    ${isSidebarOpen
      ? 'w-72 duration-200 ease-in'
      : 'w-[4.5rem] duration-700 overflow-x-hidden ease-out'}`}
    >
      <AddNoteButton isSidebarOpen={isSidebarOpen} />
      <hr className="my-2 bg-accentColor opacity-50" />
      <Navigation isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
