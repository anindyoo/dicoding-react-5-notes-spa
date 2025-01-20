import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React from 'react';

const NoteActionModalContent = ({
  modalTitle,
  modalBody,
  noteModalObj,
  toggleModal,
}) => {
  return (
    <div className="
    note-action-modal-content
    flex flex-col gap-3"
    >
      <div className="
      modal__header
      flex flex-row justify-between"
      >
        <div className="flex flex-row items-center gap-2 text-primaryColor">
          <ExclamationTriangleIcon className="w-6" />
          <h2 className="modal__title text-xl font-medium">
            {modalTitle}
          </h2>
        </div>
        <button
          title="Close toggle button."
          onClick={() => toggleModal({
            action: '',
            isOpen: false,
          })}
          type="button"
        >
          <XMarkIcon className="w-6 text-secondaryColor" />
        </button>
      </div>
      <p className="modal__body font-light">
        {modalBody(noteModalObj.noteTitle)}
      </p>
    </div>
  );
};

NoteActionModalContent.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  modalBody: PropTypes.func.isRequired,
  noteModalObj: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default NoteActionModalContent;
