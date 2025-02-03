import React, { useContext } from 'react';
import NoteActionButton from '../NoteActionButton/NoteActionButton';
import { BoltIcon, BoltSlashIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { LocaleContext } from '../../App';

const noteIndicators = [
  {
    archived: false,
    text: 'Active Note',
    textID: 'Catatan Aktif',
  },
  {
    archived: true,
    text: 'Archived Note',
    textID: 'Catatan Terarsip',
  },
];

const NoteDetailPanel = ({
  toggleModal,
  noteId,
  noteTitle,
  archived,
}) => {
  const { locale } = useContext(LocaleContext);
  const selectedIndicator = noteIndicators.find((item) => item.archived === archived);

  return (
    <div className="
    note-detail-panel
    flex flex-row justify-between
    w-full h-max
    py-2 my-4
    border border-y border-x-0"
    >
      <p className="flex flex-row gap-2 mt-1">
        <span className="w-6 text-accentColor">
          {archived
            ? <BoltSlashIcon />
            : <BoltIcon />
          }
        </span>
        <span>
          {locale === 'en' ? selectedIndicator.text : selectedIndicator.textID}
        </span>
      </p>
      <div className="
      note-detail-panel__buttons
      flex flex-row justify-end gap-2 text-accentColor"
      >
        <NoteActionButton
          action={archived ? 'unarchive' : 'archive'}
          noteId={noteId}
          noteTitle={noteTitle}
          isArchived={archived}
          toggleModal={toggleModal}
        />
        <NoteActionButton
          action="delete"
          noteId={noteId}
          noteTitle={noteTitle}
          isArchived={archived}
          toggleModal={toggleModal}
        />
      </div>
    </div>
  );
};

NoteDetailPanel.propTypes = {
  noteId: PropTypes.string.isRequired,
  noteTitle: PropTypes.string.isRequired,
  toggleModal: PropTypes.objectOf(PropTypes.func).isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteDetailPanel;
