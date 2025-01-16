import { ArchiveBoxArrowDownIcon, TrashIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React from 'react';

const actionsData = [
  {
    id: 'delete',
    title: 'Delete button',
    icon: <TrashIcon title="Delete note." />,
    onClick: () => console.log('delete.'),
  },
  {
    id: 'archive',
    title: 'Archive button',
    icon: <ArchiveBoxArrowDownIcon title="Archive note." />,
    onClick: () => console.log('archive.'),
  },
];

const NoteActionButton = ({ action }) => {
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
      onClick={selectedAction.onClick}
    >
      <span className="w-6">
        {selectedAction.icon}
      </span>
    </button>
  );
};

NoteActionButton.propTypes = {
  action: PropTypes.string.isRequired,
};

export default NoteActionButton;
