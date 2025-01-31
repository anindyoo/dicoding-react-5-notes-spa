import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import NoteDetailPage from './pages/NoteDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import AddNotePage from './pages/AddNotePage';
import ArchivePage from './pages/ArchivePage';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { archiveNote, deleteNote, getUserLogged, putAccessToken, unarchiveNote } from './utils/network-data';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams('');
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  // const keyword = searchParams.get('keyword') || '';

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const onDeleteNoteHandler = async (id) => {
    try {
      await deleteNote(id);
    } catch (error) {
      console.log('error deleting note: ', error);
    }
  };

  const onArchiveNoteHandler = async (id, isArchived) => {
    try {
      if (isArchived) {
        await unarchiveNote(id);
      } else {
        await archiveNote(id);
      }
    } catch (error) {
      console.log('error archiving note: ', error);
    }
  };

  // const changeSearchParams = (keyword) => setSearchParams({ keyword });

  // const searchedNotes = notes.filter((note) => (
  //   note.title.toLowerCase().includes(keyword?.toLowerCase())
  // ));

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
                isSidebarOpen={isSidebarOpen}
                onDeleteNoteHandler={onDeleteNoteHandler}
                onArchiveNoteHandler={onArchiveNoteHandler}
                // keyword={keyword}
                // keywordChange={changeSearchParams}
              />
            }
          />
          <Route
            path='/notes/:id'
            element={
              <NoteDetailPage
                onDeleteNoteHandler={onDeleteNoteHandler}
                onArchiveNoteHandler={onArchiveNoteHandler}
              />
            }
          />
          <Route
            path='/add'
            element={<AddNotePage />}
          />
          <Route
            path='/archive'
            element={
              <ArchivePage
                onDeleteNoteHandler={onDeleteNoteHandler}
                onArchiveNoteHandler={onArchiveNoteHandler}
                // keyword={keyword}
                // keywordChange={changeSearchParams}
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
