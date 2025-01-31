import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import NoteActionModal from '../components/NoteActionModal/NoteActionModal';
import NotesList from '../components/NotesList/NotesList';
import SearchBar from '../components/SearchBar/SearchBar';
import useNoteActionModal from '../hooks/useNoteActionModal';
import { getArchivedNotes } from '../utils/network-data';
import { useSearchParams } from 'react-router-dom';

const ArchivePage = ({
  onDeleteNoteHandler,
  onArchiveNoteHandler,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [modalValue, toggleModal] = useNoteActionModal();
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => searchParams.get('keyword') || '');

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams(keyword ? { keyword } : {});
  };

  const searchedArchivedNotes = archivedNotes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getArchivedNotes();
        setArchivedNotes(data);
      } catch (error) {
        console.error('error fetching notes: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="
    archive-page
    flex flex-col gap-5
    w-screen"
    >
      <h2 className="
      archive-page__title
      text-2xl font-bold text-primaryColor dark:text-white"
      >
        Archived Notes
      </h2>
      <SearchBar
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
      />
      <NotesList
        notes={searchedArchivedNotes}
        toggleModal={toggleModal}
        keyword={keyword}
      />
      <NoteActionModal
        modalValue={modalValue}
        toggleModal={toggleModal}
        onDeleteNoteHandler={onDeleteNoteHandler}
        onArchiveNoteHandler={onArchiveNoteHandler}
        updateNotes={setArchivedNotes}
      />
    </section>
  );
};

ArchivePage.propTypes = {
  onDeleteNoteHandler: PropTypes.func.isRequired,
  onArchiveNoteHandler: PropTypes.func.isRequired,
};

export default ArchivePage;
