import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { getAllNotes } from './utils/local-data';
import NoteDetailPage from './pages/NoteDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import AddNotePage from './pages/AddNotePage';
import ArchivePage from './pages/ArchivePage';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');
  const keyword = searchParams.get('keyword') || '';

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const onAddNoteHandler = ({ title, body }) => {
    const newContact = {
      id: (+new Date).toString(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    setNotes([
      ...notes,
      newContact,
    ]);
  };

  const onDeleteNoteHandler = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const onArchiveNoteHandler = (id) => {
    const updatedNotes = notes.map((note) => note.id === id
      ? { ...note, archived: !note.archived }
      : note,
    );
    setNotes(updatedNotes);
  };

  const changeSearchParams = (keyword) => setSearchParams({ keyword });

  const searchedNotes = notes.filter((note) => (
    note.title.toLowerCase().includes(keyword?.toLowerCase())
  ));

  useEffect(() => {
    const notes = getAllNotes();
    setNotes(notes);
  }, []);

  return (
    <div className="
    notes-spa
    center-element
    flex flex-col
    h-screen overflow-hidden"
    >
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-row">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main className="
        notes-spa__main
        flex justify-center
        w-full h-screen
        px-5 md:pl-5 md:pr-20 py-4
        pb-96
        md:rounded-tl-3xl
        overflow-y-scroll
        shadow-inner
        bg-background">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  notes={searchedNotes}
                  isSidebarOpen={isSidebarOpen}
                  onDeleteNoteHandler={onDeleteNoteHandler}
                  onArchiveNoteHandler={onArchiveNoteHandler}
                  keyword={keyword}
                  keywordChange={changeSearchParams}
                />
              }
            />
            <Route
              path='/notes/:id'
              element={
                <NoteDetailPage
                  notes={notes}
                  onDeleteNoteHandler={onDeleteNoteHandler}
                  onArchiveNoteHandler={onArchiveNoteHandler}
                />
              }
            />
            <Route
              path='/add'
              element={<AddNotePage onAddNoteHandler={onAddNoteHandler} />}
            />
            <Route
              path='/archive'
              element={
                <ArchivePage
                  notes={searchedNotes}
                  onDeleteNoteHandler={onDeleteNoteHandler}
                  onArchiveNoteHandler={onArchiveNoteHandler}
                  keyword={keyword}
                  keywordChange={changeSearchParams}
                />
              }
            />
            <Route
              path='*'
              element={<NotFoundPage />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
