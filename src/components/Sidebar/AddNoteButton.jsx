import { PlusIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const AddNoteButton = ({ isSidebarOpen }) => {
  return (
    <Link
      to="/add"
      className={`
      add-note-button
      flex flex-row gap-1 items-center justify-center
      min-w-10 h-10
      p-2
      rounded-xl
      bg-primaryColor text-white
      transition-all duration-200 ease-in-out
      hover:brightness-90
      ${isSidebarOpen ? 'w-64' : ''}`}
    >
      <PlusIcon className={`
      min-w-6 max-h-6
      transition-all duration-200 ease-in-out
      ${isSidebarOpen ? '' : 'translate-x-0.5'}`} />
      <span className={`
      overflow-x-hidden
      transition-all duration-1000 ease-in-out
      ${isSidebarOpen ? 'visible' : 'invisible w-0'}
      `}>
        Add a new note
      </span>
    </Link>
  );
};

AddNoteButton.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default AddNoteButton;
