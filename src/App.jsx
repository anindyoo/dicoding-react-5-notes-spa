import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { getAllNotes } from './utils/local-data';
import NoteDetailPage from './pages/NoteDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import AddNotePage from './pages/AddNotePage';
import ArchivePage from './pages/ArchivePage';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
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

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  useEffect(() => {
    const notes = getAllNotes();
    setNotes(notes);
  }, []);

  useEffect(() => {
    const fetchUserLogged = async () => {
      const { data } = await getUserLogged();

      setAuthedUser(data);
      setInitializing(false);
    };

    fetchUserLogged();
  }, []);

  if (initializing) {
    return 'Initializing...';
  }

  if (!authedUser) {
    return (
      <div className="
      notes-spa
      flex flex-col items-center justify-center
      w-screen h-screen"
      >
        <Routes>
          <Route
            path="/*"
            element={<LoginPage loginSuccess={onLoginSuccess} />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
        </Routes>
      </div>
    );
  }

  return (
    <div className="
    notes-spa
    center-element
    flex flex-col
    h-screen overflow-hidden"
    >
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
              logout={onLogout}
              authedUser={authedUser}
            />
          }
        >
          <Route
            index
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
        </Route>
      </Routes>
    </div>
  );
};

export default App;
