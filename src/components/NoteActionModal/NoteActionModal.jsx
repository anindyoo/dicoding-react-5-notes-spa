import React from 'react';
import NoteActionModalContent from './NoteActionModalContent';
import NoteActionModalButtons from './NoteActionModalButtons';
import PropTypes from 'prop-types';

const modalTypesData = [
  {
    id: 'delete',
    title: 'Delete Note',
    body: (noteTitle) => `Proceed to delete note: "${noteTitle}"?`,
    confirm: 'Delete Note',
  },
  {
    id: 'archive',
    title: 'Archive Note',
    body: (noteTitle) => `Proceed to archive note: "${noteTitle}"?`,
    confirm: 'Archive Note',
  },
];

const NoteActionModal = ({
  noteModalObj,
  toggleModal,
  onDeleteNoteHandler,
}) => {
  const selectedModalType = modalTypesData.find((type) => type.id === noteModalObj.action);

  return selectedModalType && (
    <dialog
      open={noteModalObj.isOpen}
      className="
      note-action-modal__dark-bg
      fixed top-0 left-0 z-40
      bg-opacity-40 bg-accentColor
      w-screen h-screen"
    >
      <div
        className="
        note-action-modal
        flex flex-col gap-10
        w-[30%]
        mt-[20%] mx-auto
        px-4 py-5
        rounded-lg
        border border-accentColor border-opacity-30
        bg-white"
      >
        <NoteActionModalContent
          modalTitle={selectedModalType?.title}
          modalBody={selectedModalType?.body}
          noteModalObj={noteModalObj}
          toggleModal={toggleModal}
        />
        <NoteActionModalButtons
          modalConfirm={selectedModalType?.confirm}
          noteModalObj={noteModalObj}
          toggleModal={toggleModal}
          onDeleteNoteHandler={onDeleteNoteHandler}
        />
      </div>
      <button
        type="button"
        onClick={() => toggleModal({
          action: '',
          isOpen: false,
        })}
        className="
        invisible-button
        fixed top-0 left-0 -z-10 bg-none
        w-screen h-screen"
      />
    </dialog>
  );
};

NoteActionModal.propTypes = {
  noteModalObj: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
};

export default NoteActionModal;
