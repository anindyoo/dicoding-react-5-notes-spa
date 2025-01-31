import { ArchiveBoxArrowDownIcon, ArchiveBoxXMarkIcon, TrashIcon } from '@heroicons/react/24/outline';
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
  {
    id: 'unarchive',
    title: 'Unarchive button',
    icon: <ArchiveBoxXMarkIcon title="Unrchive note." />,
  },
];

const NoteActionButton = ({
  noteId,
  noteTitle,
  isArchived,
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
      dark:text-accentColor30Dark
      transition-all duration-200 ease-in-out
      hover:bg-accentColor hover:bg-opacity-20"
      type="button"
      title={selectedAction.title}
      onClick={() => toggleModal.openModal({
        id: noteId,
        title: noteTitle,
        action: selectedAction.id,
        isArchived,
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
  isArchived: PropTypes.bool.isRequired,
  action: PropTypes.string.isRequired,
  toggleModal: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default NoteActionButton;
