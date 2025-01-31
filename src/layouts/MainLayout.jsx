import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import PropTypes from 'prop-types';

const MainLayout = ({
  isSidebarOpen,
  toggleSidebar,
  logout,
  authedUser,
}) => {
  return (
    <>
      <Header
        toggleSidebar={toggleSidebar}
        logout={logout}
        authedUser={authedUser}
      />
      <div className="flex flex-row">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main className="
        notes-spa__main
        flex justify-center
        w-full h-screen
        px-5 md:pl-5 md:pr-8 py-4
        pb-96
        md:rounded-tl-3xl
        overflow-y-scroll
        shadow-inner
        bg-background dark:bg-backgroundDark"
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

MainLayout.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  authedUser: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MainLayout;
