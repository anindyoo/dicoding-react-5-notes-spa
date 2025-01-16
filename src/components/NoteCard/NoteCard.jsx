import PropTypes from 'prop-types';
import React from 'react';
import { showFormattedDate } from '../../utils';
import NoteCardButtons from './NoteCardButtons';

const NoteCard = ({
  id,
  title,
  body,
  createdAt,
}) => {
  return (
    <div className="
    note-card
    flex flex-col justify-between
    w-full h-64
    px-4 py-5
    border border-accentColor border-opacity-30
    shadow-md
    rounded-xl
    bg-white"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h3 className="
          note-card__title
          text-lg font-medium">
            {title}
          </h3>
          <p className="text-sm opacity-60">
            {showFormattedDate(createdAt)}
          </p>
        </div>
        <p className="
        note-card__body
        text-base font-light
        line-clamp-4"
        >
          {body}
        </p>
      </div>
      <NoteCardButtons id={id} />
    </div>
  );
};

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteCard;
