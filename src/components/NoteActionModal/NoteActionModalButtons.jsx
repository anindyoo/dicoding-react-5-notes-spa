import PropTypes from 'prop-types';
import React from 'react';

const NoteActionModalButtons = ({
  modalConfirm,
  noteModalObj,
  toggleModal,
  onDeleteNoteHandler,
}) => {
  const selectedOnClickAction = () => {
    if (noteModalObj.action === 'delete') {
      onDeleteNoteHandler(noteModalObj.noteId);
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
  modalConfirm: PropTypes.string.isRequired,
  noteModalObj: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
};

export default NoteActionModalButtons;
