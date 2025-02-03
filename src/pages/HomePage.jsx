import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import NoteActionModal from '../components/NoteActionModal/NoteActionModal';
import NotesList from '../components/NotesList/NotesList';
import SearchBar from '../components/SearchBar/SearchBar';
import useNoteActionModal from '../hooks/useNoteActionModal';
import { getActiveNotes } from '../utils/network-data';
import { useSearchParams } from 'react-router-dom';
import useLoading from '../hooks/useLoading';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import { LocaleContext } from '../App';

const HomePage = ({
  isSidebarOpen,
  onDeleteNoteHandler,
  onArchiveNoteHandler,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [modalValue, toggleModal] = useNoteActionModal();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => searchParams.get('keyword') || '');
  const {
    isLoading,
    startLoading,
    stopLoading,
  } = useLoading();
  const { locale } = useContext(LocaleContext);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams(keyword ? { keyword } : {});
  };

  const searchedNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        startLoading();
        const { data } = await getActiveNotes();
        setNotes(data);
      } catch (error) {
        console.error('error fetching notes: ', error);
        stopLoading();
      } finally {
        stopLoading();
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
      text-2xl font-bold text-primaryColor dark:text-white"
      >
        {locale === 'en' ? 'Notes' : 'Catatan'}
      </h2>
      <SearchBar
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
      />
      {
        isLoading
          ? <LoadingIndicator />
          : (
            <NotesList
              notes={searchedNotes}
              isSidebarOpen={isSidebarOpen}
              toggleModal={toggleModal}
              keyword={keyword}
            />
          )
      }
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
};

export default HomePage;
