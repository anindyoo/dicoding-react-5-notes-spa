import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import NoteActionModal from '../components/NoteActionModal/NoteActionModal';
import NotesList from '../components/NotesList/NotesList';
import SearchBar from '../components/SearchBar/SearchBar';
import useNoteActionModal from '../hooks/useNoteActionModal';
import { getArchivedNotes } from '../utils/network-data';

const ArchivePage = ({
  onDeleteNoteHandler,
  onArchiveNoteHandler,
  keyword,
  keywordChange,
}) => {
  const [modalValue, toggleModal] = useNoteActionModal();
  const [archivedNotes, setArchivedNotes] = useState([]);

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
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
  onArchiveNoteHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePage;
