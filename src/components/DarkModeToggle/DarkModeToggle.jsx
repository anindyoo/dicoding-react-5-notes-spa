import React, { useContext } from 'react';
import { DarkModeContext } from '../../App';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      title="Dark mode toggler."
      className="text-primaryColor dark:text-accentColor30Dark"
    >
      {
        isDarkMode
          ? <SunIcon className="w-6" />
          : <MoonIcon className="w-6" />
      }
    </button>
  );
};

export default DarkModeToggle;
