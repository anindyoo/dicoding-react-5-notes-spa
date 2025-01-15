import { PlusIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const AddNoteButton = () => {
  return (
    <Link
      to="/add"
      className="
      add-note-button
      flex flex-row gap-1 justify-center items-center
      w-64
      p-2
      rounded-xl
      bg-primaryColor text-white
      transition-all duration-200 ease-in-out
      hover:brightness-90"
    >
      <PlusIcon className="w-6" />
      <span>Add a new note</span>
    </Link>
  );
};

export default AddNoteButton;
