import PropTypes from 'prop-types';
import React from 'react';
import NoteCard from '../components/NoteCard/NoteCard';
import NoteActionModal from '../components/NoteActionModal/NoteActionModal';
import { getActiveNotes } from '../utils/local-data';

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
      <ul className="
      home-page__notes-list
      grid grid-cols-4 gap-5"
      >
        {activeNotes.length > 0
          ? activeNotes?.map((note) => (
            <li
              key={note.id}
              className="home-page__notes-list__list-item"
            >
              <NoteCard
                id={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
                archived={note.archived}
                toggleModal={toggleModal}
              />
            </li>
          ))
          : <div>empty</div>}
      </ul>
      <NoteActionModal
        pageOrigin="home"
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
