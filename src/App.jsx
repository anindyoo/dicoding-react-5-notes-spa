import React, { createContext, useEffect, useState } from 'react';
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
import AuthLayout from './layouts/AuthLayout';

export const DarkModeContext = createContext(false);

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode');

    if (!darkMode) {
      localStorage.setItem('darkMode', false);
    } else {
      document.body.classList.add('dark');
    }

    setIsDarkMode(darkMode);
  }, []);

  if (initializing) {
    return (
      <section className="
      w-screen h-screen
      flex justify-center items-center
      dark:bg-backgroundDark dark:text-white"
      >
        Initializing...
      </section>
    );
  }

  if (!authedUser) {
    return (
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <Routes>
          <Route
            path="/"
            element={<AuthLayout />}
          >
            <Route
              index
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route
              path="*"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route
              path="/register"
              element={<RegisterPage />}
            />
          </Route>
        </Routes>
      </DarkModeContext.Provider>
    );
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
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
              />
            }
          />
          <Route
            path="/notes/:id"
            element={
              <NoteDetailPage
                onDeleteNoteHandler={onDeleteNoteHandler}
                onArchiveNoteHandler={onArchiveNoteHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddNotePage />}
          />
          <Route
            path="/archive"
            element={
              <ArchivePage
                onDeleteNoteHandler={onDeleteNoteHandler}
                onArchiveNoteHandler={onArchiveNoteHandler}
              />
            }
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </DarkModeContext.Provider>
  );
};

export default App;
