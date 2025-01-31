import PropTypes from 'prop-types';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { noteActionModalTypes } from '../../utils/definitions';
import { getActiveNotes, getArchivedNotes, getNote } from '../../utils/network-data';

const NoteActionModalButtons = ({
  modalConfirm,
  modalValue,
  toggleModal,
  onDeleteNoteHandler,
  onArchiveNoteHandler,
  updateNotes,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedOnClickAction = async () => {
    const { noteId, action, isArchivedNote } = modalValue;
    const isDetailPage = location.pathname.startsWith('/notes');
    const isArchivePage = location.pathname.startsWith('/archive');

    if (action === 'delete') {
      await onDeleteNoteHandler(noteId);
      (isArchivePage || isArchivedNote)
        ? navigate('/archive')
        : navigate('/');
    } else {
      await onArchiveNoteHandler(modalValue.noteId, isArchivedNote);
      if (isDetailPage) {
        const { data } = await getNote(noteId);
        updateNotes(data);
      }
    }

    if (!isDetailPage) {
      const { data } = isArchivePage
        ? await getArchivedNotes()
        : await getActiveNotes();
      updateNotes(data);
    }

    toggleModal.closeModal();
  };

  return (
    <div className="
    note-action-modal-buttons
    flex flex-row-reverse gap-2 self-end"
    >
      <button
        type="button"
        onClick={selectedOnClickAction}
        className={`
        main-action-button
        px-3 py-2
        rounded-md
        text-white
        ${modalValue.action === 'delete'
          ? 'bg-dangerColor dark:bg-dangerLighterColor'
          : 'bg-primaryColor dark:bg-primaryColor20Dark'}
        `}
      >
        {modalConfirm}
      </button>
      <button
        type="button"
        onClick={() => toggleModal.closeModal()}
        className="
        secondary-action-button
        px-3 py-2
        rounded-md
        bg-secondaryColor dark:bg-backgroundSecondaryDark
        dark:border dark:border-accentColor20Dark
        dark:text-white"
      >
        Cancel
      </button>
    </div>
  );
};

NoteActionModalButtons.propTypes = {
  modalConfirm: PropTypes.string.isRequired,
  modalValue: PropTypes.shape(noteActionModalTypes).isRequired,
  toggleModal: PropTypes.objectOf(PropTypes.func).isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
  onArchiveNoteHandler: PropTypes.func.isRequired,
  updateNotes: PropTypes.func.isRequired,
};

export default NoteActionModalButtons;
