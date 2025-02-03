import { PlusIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LocaleContext } from '../../App';

const AddNoteButton = ({ isSidebarOpen }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <Link
      to="/add"
      className={`
      add-note-button
      flex flex-col xs:flex-row gap-1 items-center justify-center
      min-w-10 h-10 ${locale === 'id' ? 'xs:h-12' : ''} sm:h-10
      p-2
      rounded-xl
      bg-primaryColor text-white
      dark:bg-primaryColor20Dark
      transition-all duration-200 ease-in-out
      hover:brightness-90
      ${isSidebarOpen ? 'w-64' : 'w-max md:w-auto'}`}
    >
      <PlusIcon className={`
      min-w-6 max-h-6
      transition-all duration-200 ease-in-out
      ${isSidebarOpen ? '' : 'translate-x-0.5'}`}
      />
      <span className={`
      overflow-x-hidden
      hidden xs:block
      transition-all duration-1000 ease-in-out
      ${isSidebarOpen ? 'visible' : 'md:invisible md:w-0'}`}
      >
        {locale === 'en' ? 'Add a new note' : 'Tambah catatan baru'}
      </span>
    </Link>
  );
};

AddNoteButton.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default AddNoteButton;
