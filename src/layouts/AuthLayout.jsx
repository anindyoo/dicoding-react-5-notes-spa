import React from 'react';
import { Outlet } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle/DarkModeToggle';
import LocaleToggle from '../components/LocaleToggle/LocaleToggle';

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
      <div className="
      auth__option-buttons
      flex flex-row items-center gap-7"
      >
        <LocaleToggle />
        <div className="h-7 border-l" />
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default AuthLayout;
