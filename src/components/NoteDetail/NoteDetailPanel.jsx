import React from 'react';
import NoteActionButton from '../NoteActionButton/NoteActionButton';
import { BoltIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const NoteDetailPanel = ({
  toggleModal,
  noteId,
  noteTitle,
}) => {
  return (
    <div className="
    note-detail-panel
    flex flex-row justify-between
    w-full h-max
    py-2 my-4
    border border-y border-x-0"
    >
      <p className="flex flex-row gap-2 mt-1">
        <span>
          <BoltIcon className="w-6 text-accentColor" />
        </span>
        <span>
          Active Note
        </span>
      </p>
      <div className="
      note-detail-panel__buttons
      flex flex-row justify-end gap-2 text-accentColor"
      >
        <NoteActionButton
          action="archive"
          noteId={noteId}
          noteTitle={noteTitle}
          toggleModal={toggleModal}
        />
        <NoteActionButton
          action="delete"
          noteId={noteId}
          noteTitle={noteTitle}
          toggleModal={toggleModal}
        />
      </div>
    </div>
  );
};

NoteDetailPanel.propTypes = {
  noteId: PropTypes.string.isRequired,
  noteTitle: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default NoteDetailPanel;
