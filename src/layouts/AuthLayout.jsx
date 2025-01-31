import React from 'react';
import { Outlet } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle/DarkModeToggle';

const AuthLayout = () => {
  return (
    <div className="
    notes-spa
    flex flex-col items-center justify-center
    w-screen h-screen
    overflow-hidden
    dark:bg-backgroundDark"
    >
      <Outlet />
      <div className="h-6" />
      <DarkModeToggle />
    </div>
  );
};

export default AuthLayout;
