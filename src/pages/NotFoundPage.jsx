import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React from 'react';

const NotFoundPage = ({ category, noteId }) => {
  return (
    <section className="
    not-found-page
    relative
    m-auto -top-40"
    >
      <div className="not-found-page__content text-primaryColor">
        <h2 className="flex flex-row items-center gap-4">
          <ExclamationTriangleIcon className="w-20 mt-2" />
          <span className="text-[5rem]">NOT FOUND</span>
        </h2>
        <p className="text-xl font-light">
          {category === 'detail'
            ? `Detail page with ID: ${noteId} is not found.`
            : 'The page you are searching for is not found.'
          }
        </p>
      </div>
    </section>
  );
};

NotFoundPage.propTypes = {
  category: PropTypes.string,
  noteId : PropTypes.string,
};

export default NotFoundPage;
