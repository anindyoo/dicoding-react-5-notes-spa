import React from 'react';
import NoteWrapper from '../components/NoteWrapper/NoteWrapper';
import NoteInput from '../components/NoteInput/NoteInput';
import PropTypes from 'prop-types';

const AddNotePage = ({ onAddNoteHandler }) => {
  return (
    <section className="
    add-note-page
    flex flex-col gap-5"
    >
      <h2 className="
      home-page__title
      text-2xl font-bold text-primaryColor"
      >
        Add Note
      </h2>
      <NoteWrapper>
        <NoteInput onAddNoteHandler={onAddNoteHandler} />
      </NoteWrapper>
    </section>
  );
};

AddNotePage.propTypes = {
  onAddNoteHandler: PropTypes.func.isRequired,
};

export default AddNotePage;
