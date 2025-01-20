import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import React from 'react';

const EmptyNoteList = () => {
  return (
    <div className="
    empty-note-list
    flex flex-row items-center gap-2
    text-primaryColor"
    >
      <ExclamationTriangleIcon className="w-12" />
      <p className="text-2xl">This list is empty.</p>
    </div>
  );
};

export default EmptyNoteList;
