import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import PropTypes from 'prop-types';

const MainLayout = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
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
          <Outlet />
        </main>
      </div>
    </>
  );
};

MainLayout.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default MainLayout;
