import PropTypes from 'prop-types';
import React from 'react';

const NoteWrapper = ({ children }) => {
  return (
    <div className="
    note-wrapper
    flex flex-col mx-auto
    w-full md:w-[29.75rem] h-max
    rounded-2xl
    px-6 py-8
    shadow-md
    bg-white bg-opacity-30
    border border-accentColor border-opacity-30N"
    >
      {children}
    </div>
  );
};

NoteWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default NoteWrapper;
