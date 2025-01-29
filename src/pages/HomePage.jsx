import PropTypes from 'prop-types';
import React from 'react';
import NoteActionModal from '../components/NoteActionModal/NoteActionModal';
import { getActiveNotes } from '../utils/local-data';
import NotesList from '../components/NotesList/NotesList';
import SearchBar from '../components/SearchBar/SearchBar';
import useNoteActionModal from '../hooks/useNoteActionModal';

const HomePage = ({
  notes,
  isSidebarOpen,
  onDeleteNoteHandler,
  onArchiveNoteHandler,
  keyword,
  keywordChange,
}) => {
  const [modalValue, toggleModal] = useNoteActionModal();
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
      <SearchBar
        keyword={keyword}
        keywordChange={keywordChange}
      />
      <NotesList
        notes={activeNotes}
        isSidebarOpen={isSidebarOpen}
        toggleModal={toggleModal}
        keyword={keyword}
      />
      <NoteActionModal
        modalValue={modalValue}
        toggleModal={toggleModal}
        onDeleteNoteHandler={onDeleteNoteHandler}
        onArchiveNoteHandler={onArchiveNoteHandler}
      />
    </section>
  );
};

HomePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
  onArchiveNoteHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePage;
