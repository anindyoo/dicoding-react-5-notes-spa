import React from 'react';
import Navigation from './Navigation';
import AddNoteButton from './AddNoteButton';

const Sidebar = () => {
  return (
    <div className="
    sidebar
    flex flex-col gap-2
    w-max
    px-4 pt-2">
      <AddNoteButton />
      <Navigation />
    </div>
  );
};

export default Sidebar;
