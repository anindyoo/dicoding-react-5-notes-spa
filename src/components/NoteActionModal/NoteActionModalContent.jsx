import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React from 'react';
import { noteActionModalTypes } from '../../utils/definitions';

const NoteActionModalContent = ({
  modalTitle,
  modalBody,
  modalValue,
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
        <div className="flex flex-row items-center gap-2 text-primaryColor dark:text-white">
          <ExclamationTriangleIcon className="w-6" />
          <h2 className="modal__title text-xl font-medium">
            {modalTitle}
          </h2>
        </div>
        <button
          title="Close toggle button."
          onClick={() => toggleModal.closeModal()}
          type="button"
        >
          <XMarkIcon className="w-6 text-primaryColor dark:text-accentColor30Dark" />
        </button>
      </div>
      <p className="modal__body font-light dark:text-white">
        {modalBody(modalValue.noteTitle)}
      </p>
    </div>
  );
};

NoteActionModalContent.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  modalBody: PropTypes.func.isRequired,
  modalValue: PropTypes.shape(noteActionModalTypes).isRequired,
  toggleModal: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default NoteActionModalContent;
