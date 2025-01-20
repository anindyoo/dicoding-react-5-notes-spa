import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoteActionModalButtons = ({
  pageOrigin,
  modalConfirm,
  noteModalObj,
  toggleModal,
  onDeleteNoteHandler,
}) => {
  const navigate = useNavigate();

  const selectedOnClickAction = () => {
    if (noteModalObj.action === 'delete') {
      onDeleteNoteHandler(noteModalObj.noteId);
      if (pageOrigin === 'detail') {
        navigate('/');
      }
    } else {
      console.log('archiveeeee');
    }
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
        ${noteModalObj.action === 'delete'
          ? 'bg-dangerColor'
          : 'bg-primaryColor'}
        `}
      >
        {modalConfirm}
      </button>
      <button
        type="button"
        onClick={() => toggleModal({
          action: '',
          isOpen: false,
        })}
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
  pageOrigin: PropTypes.string.isRequired,
  modalConfirm: PropTypes.string.isRequired,
  noteModalObj: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
};

export default NoteActionModalButtons;
