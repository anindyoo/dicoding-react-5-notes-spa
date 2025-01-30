import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import NoteActionModal from '../components/NoteActionModal/NoteActionModal';
import NotesList from '../components/NotesList/NotesList';
import SearchBar from '../components/SearchBar/SearchBar';
import useNoteActionModal from '../hooks/useNoteActionModal';
import { getActiveNotes } from '../utils/network-data';

const HomePage = ({
  isSidebarOpen,
  onDeleteNoteHandler,
  onArchiveNoteHandler,
  keyword,
  keywordChange,
}) => {
  const [modalValue, toggleModal] = useNoteActionModal();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getActiveNotes();
        setNotes(data);
      } catch (error) {
        console.error('error fetching notes: ', error);
      }
    };

    fetchData();
  }, []);

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
        notes={notes}
        isSidebarOpen={isSidebarOpen}
        toggleModal={toggleModal}
        keyword={keyword}
      />
      <NoteActionModal
        modalValue={modalValue}
        toggleModal={toggleModal}
        onDeleteNoteHandler={onDeleteNoteHandler}
        onArchiveNoteHandler={onArchiveNoteHandler}
        updateNotes={setNotes}
      />
    </section>
  );
};

HomePage.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
  onArchiveNoteHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePage;
