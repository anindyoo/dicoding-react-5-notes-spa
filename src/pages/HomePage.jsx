import PropTypes from 'prop-types';
import React from 'react';
import NoteCard from '../components/NoteCard/NoteCard';
import NoteActionModal from '../components/NoteActionModal/NoteActionModal';

const HomePage = ({
  notes,
  noteModalObj,
  toggleModal,
  onDeleteNoteHandler,
}) => {
  return (
    <section className="
    home-page
    flex flex-col gap-5
    w-screen">
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
        {notes.map((note) => (
          <li
            key={note.id}
            className="home-page__notes-list__list-item"
          >
            <NoteCard
              id={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              toggleModal={toggleModal}
            />
          </li>
        ))}
      </ul>
      <NoteActionModal
        pageOrigin="home"
        noteModalObj={noteModalObj}
        toggleModal={toggleModal}
        onDeleteNoteHandler={onDeleteNoteHandler}
      />
    </section>
  );
};

HomePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  noteModalObj: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
};

export default HomePage;
