import PropTypes from 'prop-types';
import React from 'react';
import NoteActionModal from '../components/NoteActionModal/NoteActionModal';
import { getActiveNotes } from '../utils/local-data';
import NotesList from '../components/NotesList/NotesList';

const HomePage = ({
  notes,
  noteModalObj,
  toggleModal,
  onDeleteNoteHandler,
  onArchiveNoteHandler,
}) => {
  const activeNotes = getActiveNotes(notes);

  return (
    <section className="
    home-page
    flex flex-col gap-5
    w-screen"
    >
      <h2 className="
      home-page__title
      text-2xl font-bold text-primaryColor"
      >
        Notes
      </h2>
      <NotesList notes={activeNotes} toggleModal={toggleModal}/>
      <NoteActionModal
        noteModalObj={noteModalObj}
        toggleModal={toggleModal}
        onDeleteNoteHandler={onDeleteNoteHandler}
        onArchiveNoteHandler={onArchiveNoteHandler}
      />
    </section>
  );
};

HomePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  noteModalObj: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
  onArchiveNoteHandler: PropTypes.func.isRequired,
};

export default HomePage;
