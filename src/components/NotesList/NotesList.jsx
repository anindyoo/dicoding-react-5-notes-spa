import React from 'react';
import NoteCard from '../NoteCard/NoteCard';
import PropTypes from 'prop-types';
import EmptyNoteList from './EmptyNoteList';

const NotesList = ({
  notes,
  isSidebarOpen,
  toggleModal,
  keyword,
}) => {
  return notes.length > 0 ? (
    <ul className={`
    notes-list
    grid grid-cols-1 sm:grid-cols-2 gap-5
    ${isSidebarOpen
      ? 'sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
      : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}
    pb-52`}
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
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default NotesList;
