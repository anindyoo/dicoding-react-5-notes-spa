import React from 'react';
import NoteWrapper from '../components/NoteWrapper/NoteWrapper';
import NoteInput from '../components/NoteInput/NoteInput';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';

const AddNotePage = () => {
  const navigate = useNavigate();

  const onAddNoteHandler = async ({ title, body }) => {
    await addNote({ title, body });
    navigate('/');
  };

  return (
    <section className="
    add-note-page
    flex flex-col gap-5
    w-[calc(100vw-20vw)] md:w-auto"
    >
      <h2 className="
      home-page__title
      text-2xl font-bold text-primaryColor dark:text-white"
      >
        Add Note
      </h2>
      <NoteWrapper>
        <NoteInput onAddNoteHandler={onAddNoteHandler} />
      </NoteWrapper>
    </section>
  );
};

export default AddNotePage;
