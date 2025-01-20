import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { getAllNotes } from './utils/local-data';
import NoteDetailPage from './pages/NoteDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import AddNotePage from './pages/AddNotePage';
import ArchivePage from './pages/ArchivePage';

const emptyNote = {
  noteId: '',
  noteTitle: '',
  pageOrigin: '',
  isArchivedNote: false,
  action:'',
  isOpen: false,
};

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [noteModalObj, setNoteModalObj] = useState(emptyNote);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const onAddNoteHandler = ({ body, title }) => {
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
    setNoteModalObj(emptyNote);
  };

  const onArchiveNoteHandler = (id) => {
    const updatedNotes = notes.map((note) => note.id === id
      ? { ...note, archived: !note.archived }
      : note,
    );
    setNotes(updatedNotes);
    setNoteModalObj(emptyNote);
  };

  const toggleModal = (newObj) => {
    setNoteModalObj({
      ...noteModalObj,
      ...newObj,
    });
  };

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
        pl-5 pr-20 py-4
        rounded-tl-3xl
        overflow-y-scroll
        shadow-inner
        bg-background">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  notes={notes}
                  noteModalObj={noteModalObj}
                  toggleModal={toggleModal}
                  onDeleteNoteHandler={onDeleteNoteHandler}
                  onArchiveNoteHandler={onArchiveNoteHandler}
                />
              }
            />
            <Route
              path='/notes/:id'
              element={
                <NoteDetailPage
                  notes={notes}
                  noteModalObj={noteModalObj}
                  toggleModal={toggleModal}
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
                  notes={notes}
                  noteModalObj={noteModalObj}
                  toggleModal={toggleModal}
                  onDeleteNoteHandler={onDeleteNoteHandler}
                  onArchiveNoteHandler={onArchiveNoteHandler}
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
