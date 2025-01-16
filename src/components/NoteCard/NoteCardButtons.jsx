import { ArchiveBoxArrowDownIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const NoteCardButtons = ({ id }) => {
  return (
    <div className="
    note-card-buttons
    flex flex-row items-center gap-5"
    >
      <Link
        to={`/${id}`}
        className="
        note-card-buttons__read-more
        flex flex-1 justify-center items-center gap-1
        p-1
        rounded-lg
        bg-secondaryColor
        transition-all duration-200 ease-in-out
        hover:brightness-90"
      >
        <span className="w-6">
          <EyeIcon />
        </span>
        <span>Read more</span>
      </Link>
      <button
        className="
        note-card-buttons__archive
        flex flex-none justify-center items-center
        w-8 h-8
        rounded-full
        transition-all duration-200 ease-in-out
        hover:bg-accentColor hover:bg-opacity-40"
        type="button"
        title="Archive note."
      >
        <ArchiveBoxArrowDownIcon className="w-6" />
      </button>
      <button
        className="
        note-card-buttons__delete
        flex flex-none justify-center items-center
        w-8 h-8
        rounded-full
        transition-all duration-200 ease-in-out
        hover:bg-accentColor hover:bg-opacity-40"
        type="button"
        title="Archive note."
      >
        <TrashIcon className="w-6" />
      </button>
    </div>
  );
};

NoteCardButtons.propTypes = {
  id: PropTypes.string.isRequired,
};

export default NoteCardButtons;
