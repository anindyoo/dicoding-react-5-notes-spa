import PropTypes from 'prop-types';
import React from 'react';
import { getArchivedNotes } from '../utils/local-data';
import NoteCard from '../components/NoteCard/NoteCard';
import NoteActionModal from '../components/NoteActionModal/NoteActionModal';

const ArchivePage = ({
  notes,
  noteModalObj,
  toggleModal,
  onDeleteNoteHandler,
  onArchiveNoteHandler,
}) => {
  const archivedNotes = getArchivedNotes(notes);

  return (
    <section className="
    archive-page
    flex flex-col gap-5
    w-screen"
    >
      <h2 className="
      archive-page__title
      text-2xl font-bold text-primaryColor"
      >
        Archived Notes
      </h2>
      <ul className="
      home-page__notes-list
      grid grid-cols-4 gap-5"
      >
        {archivedNotes.length > 0
          ? archivedNotes?.map((note) => (
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
          : <div>empty</div>
        }
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

ArchivePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  noteModalObj: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
  onArchiveNoteHandler: PropTypes.func.isRequired,
};

export default ArchivePage;
