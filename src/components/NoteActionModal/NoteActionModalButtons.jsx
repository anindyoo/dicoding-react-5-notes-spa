import PropTypes from 'prop-types';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { noteActionModalTypes } from '../../utils/definitions';
import { getActiveNotes, getArchivedNotes } from '../../utils/network-data';

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
    const isArchived = modalValue.isArchivedNote;

    if (modalValue.action === 'delete') {
      await onDeleteNoteHandler(modalValue.noteId);
      location.pathname === '/archive' ? navigate('/archive') : navigate('/');
    } else {
      await onArchiveNoteHandler(modalValue.noteId, isArchived);
    }

    const { data } = isArchived
      ? await getArchivedNotes()
      : await getActiveNotes();
    updateNotes(data);

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
          ? 'bg-dangerColor'
          : 'bg-primaryColor'}
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
        bg-secondaryColor"
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
