import React from 'react';
import NoteCard from '../NoteCard/NoteCard';
import PropTypes from 'prop-types';
import EmptyNoteList from './EmptyNoteList';

const NotesList = ({ notes, toggleModal, keyword }) => {
  return notes.length > 0 ? (
    <ul className="
    notes-list
    grid grid-cols-4 gap-5"
    >
      {notes?.map((note) => (
        <li
          key={note.id}
          className="notes-list__list-item"
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
      ))}
    </ul>
  ) : (
    <EmptyNoteList keyword={keyword} />
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  toggleModal: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default NotesList;
