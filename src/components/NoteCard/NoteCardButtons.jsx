import { EyeIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NoteActionButton from '../NoteActionButton/NoteActionButton';
import { LocaleContext } from '../../App';

const NoteCardButtons = ({
  id,
  noteTitle,
  isArchived,
  toggleModal,
}) => {
  const { locale } = useContext(LocaleContext);

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
        bg-secondaryColor dark:bg-secondaryColor20Dark
        dark:text-primaryColor
        transition-all duration-200 ease-in-out
        hover:brightness-90"
      >
        <span className="w-6">
          <EyeIcon />
        </span>
        <span>{locale === 'en' ? 'Read more' : 'Lebih lanjut'}</span>
      </Link>
      <div className="
      flex flex-row gap-2
      pl-4
      border-l border-accentColor border-opacity-50"
      >
        <NoteActionButton
          noteId={id}
          noteTitle={noteTitle}
          isArchived={isArchived}
          action={isArchived ? 'unarchive' : 'archive'}
          toggleModal={toggleModal}
        />
        <NoteActionButton
          noteId={id}
          noteTitle={noteTitle}
          isArchived={isArchived}
          action="delete"
          toggleModal={toggleModal}
        />
      </div>
    </div>
  );
};

NoteCardButtons.propTypes = {
  id: PropTypes.string.isRequired,
  noteTitle: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  toggleModal: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default NoteCardButtons;
