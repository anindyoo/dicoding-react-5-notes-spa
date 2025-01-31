import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React from 'react';

const EmptyNoteList = ({ keyword }) => {
  return (
    <div className="
    empty-note-list
    flex flex-row justify-center items-center gap-2
    mt-10
    text-primaryColor dark:text-white"
    >
      <ExclamationTriangleIcon className="w-12" />
      <p className="text-2xl">
        {keyword
          ? `Notes titled: "${keyword}" not found.`
          : 'Note list is empty.'
        }
      </p>
    </div>
  );
};

EmptyNoteList.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default EmptyNoteList;
