import { useState } from 'react';

const useNoteActionModal = () => {
  const [noteId, setNoteId] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [action, setAction] = useState('');
  const [isArchivedNote, setIsArchivedNote] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = ({ id, title, action, isArchived, isOpen }) => {
    setNoteId(id);
    setNoteTitle(title);
    setAction(action);
    setIsArchivedNote(isArchived);
    setIsOpen(isOpen);
  };

  const closeModal = () => setIsOpen(false);

  return [
    {
      noteId,
      noteTitle,
      action,
      isArchivedNote,
      isOpen,
    },
    {
      openModal,
      closeModal,
    },
  ];
};

export default useNoteActionModal;
