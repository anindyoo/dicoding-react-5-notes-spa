import React from 'react';
import NoteActionModalContent from './NoteActionModalContent';
import NoteActionModalButtons from './NoteActionModalButtons';
import PropTypes from 'prop-types';
import { noteActionModalTypes } from '../../utils/definitions';

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
  {
    id: 'unarchive',
    title: 'Unarchive Note',
    body: (noteTitle) => `Proceed to unarchive note: "${noteTitle}"?`,
    confirm: 'Unarchive Note',
  },
];

const NoteActionModal = ({
  modalValue,
  toggleModal,
  onDeleteNoteHandler,
  onArchiveNoteHandler,
  updateNotes,
}) => {
  const selectedModalType = modalTypesData.find((type) => type.id === modalValue.action);

  return selectedModalType && (
    <dialog
      open={modalValue.isOpen}
      className="
      note-action-modal__dark-bg
      fixed top-0 left-0 z-40
      px-3 sm:px-0
      bg-opacity-40 bg-accentColor
      dark:bg-opacity-60 dark:bg-backgroundDark
      w-screen h-screen"
    >
      <div
        className="
        note-action-modal
        flex flex-col gap-10
        max-w-[26rem]
        mt-72 md:mt-[20%] mx-auto
        px-4 py-5
        rounded-lg
        border border-accentColor border-opacity-30
        bg-white dark:bg-backgroundSecondaryDark"
      >
        <NoteActionModalContent
          modalTitle={selectedModalType?.title}
          modalBody={selectedModalType?.body}
          modalValue={modalValue}
          toggleModal={toggleModal}
        />
        <NoteActionModalButtons
          modalConfirm={selectedModalType?.confirm}
          modalValue={modalValue}
          toggleModal={toggleModal}
          onDeleteNoteHandler={onDeleteNoteHandler}
          onArchiveNoteHandler={onArchiveNoteHandler}
          updateNotes={updateNotes}
        />
      </div>
      <button
        type="button"
        onClick={() => toggleModal.closeModal()}
        className="
        invisible-button
        fixed top-0 left-0 -z-10 bg-none
        w-screen h-screen"
      />
    </dialog>
  );
};

NoteActionModal.propTypes = {
  modalValue: PropTypes.shape(noteActionModalTypes).isRequired,
  toggleModal: PropTypes.objectOf(PropTypes.func).isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
  onArchiveNoteHandler: PropTypes.func.isRequired,
  updateNotes: PropTypes.func.isRequired,
};

export default NoteActionModal;
