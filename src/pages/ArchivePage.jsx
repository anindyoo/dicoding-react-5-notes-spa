import PropTypes from 'prop-types';
import React from 'react';
import { getArchivedNotes } from '../utils/local-data';
import NoteActionModal from '../components/NoteActionModal/NoteActionModal';
import NotesList from '../components/NotesList/NotesList';
import SearchBar from '../components/SearchBar/SearchBar';

const ArchivePage = ({
  notes,
  noteModalObj,
  toggleModal,
  onDeleteNoteHandler,
  onArchiveNoteHandler,
  keyword,
  keywordChange,
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
      <SearchBar
        keyword={keyword}
        keywordChange={keywordChange}
      />
      <NotesList
        notes={archivedNotes}
        toggleModal={toggleModal}
        keyword={keyword}
      />
      <NoteActionModal
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
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePage;
