import { ArchiveBoxArrowDownIcon, TrashIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React from 'react';

const actionsData = [
  {
    id: 'delete',
    title: 'Delete button',
    icon: <TrashIcon title="Delete note." />,
  },
  {
    id: 'archive',
    title: 'Archive button',
    icon: <ArchiveBoxArrowDownIcon title="Archive note." />,
  },
];

const NoteActionButton = ({
  noteId,
  noteTitle,
  action,
  toggleModal,
}) => {
  const selectedAction = actionsData.find((data) => data.id === action);

  return (
    <button
      className="
      note-card-buttons__archive
      flex flex-none justify-center items-center
      w-8 h-8
      rounded-full border border-accentColor
      transition-all duration-200 ease-in-out
      hover:bg-accentColor hover:bg-opacity-20"
      type="button"
      title={selectedAction.title}
      onClick={() => toggleModal({
        noteId,
        noteTitle,
        action: selectedAction.id,
        isOpen: true,
      })}
    >
      <span className="w-6">
        {selectedAction.icon}
      </span>
    </button>
  );
};

NoteActionButton.propTypes = {
  noteId: PropTypes.string.isRequired,
  noteTitle: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default NoteActionButton;
