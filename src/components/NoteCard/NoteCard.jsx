import PropTypes from 'prop-types';
import React from 'react';
import { showFormattedDate } from '../../utils';
import NoteCardButtons from './NoteCardButtons';
import parse from 'html-react-parser';

const NoteCard = ({
  id,
  title,
  body,
  createdAt,
  toggleModal,
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
          text-lg font-medium
          line-clamp-1"
          >
            {parse(title)}
          </h3>
          <p className="text-sm opacity-60">
            {showFormattedDate(createdAt)}
          </p>
        </div>
        <div className="
        note-card__body
        text-base font-light
        line-clamp-4"
        >
          {parse(body)}
        </div>
      </div>
      <NoteCardButtons
        id={id}
        noteTitle={title}
        toggleModal={toggleModal}
      />
    </div>
  );
};

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default NoteCard;
