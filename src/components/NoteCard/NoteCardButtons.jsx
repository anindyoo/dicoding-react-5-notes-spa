import { EyeIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import NoteActionButton from '../NoteActionButton/NoteActionButton';

const NoteCardButtons = ({ id }) => {
  return (
    <div className="
    note-card-buttons
    flex flex-row items-center gap-5"
    >
      <Link
        to={`/notes/${id}`}
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
      <div className="
      flex flex-row gap-2
      pl-4
      border-l border-accentColor border-opacity-50"
      >
        <NoteActionButton action="archive" />
        <NoteActionButton action="delete" />
      </div>
    </div>
  );
};

NoteCardButtons.propTypes = {
  id: PropTypes.string.isRequired,
};

export default NoteCardButtons;
