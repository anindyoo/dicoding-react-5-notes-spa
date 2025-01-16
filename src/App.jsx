import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { getAllNotes } from './utils/local-data';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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
        flex
        w-full h-screen
        pl-5 pr-20 py-4
        rounded-tl-3xl
        overflow-y-scroll
        shadow-inner
        bg-background">
          <Routes>
            <Route path="/" element={
              <HomePage notes={notes}/>
            } />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
