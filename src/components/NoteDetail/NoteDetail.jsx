import PropTypes from 'prop-types';
import React from 'react';
import { showFormattedDate } from '../../utils';
import NoteDetailPanel from './NoteDetailPanel';
import parse from 'html-react-parser';

const NoteDetail = ({ note, toggleModal }) => {
  return note.title
    ? (
      <div className="note-detail">
        <div className="note-detail__header">
          <h2 className="
          note-detail__title
          text-xl font-medium"
          >
            {parse(note.title)}
          </h2>
          <p className="
          note-detail__date
          text-base opacity-60"
          >
            {showFormattedDate(note?.createdAt)}
          </p>
        </div>
        <NoteDetailPanel
          noteId={note.id}
          noteTitle={note.title}
          archived={note.archived}
          toggleModal={toggleModal}
        />
        <div className="note-detail_body font-light">
          {parse(note.body)}
        </div>
      </div>
    )
  : ('Loading...');
};

NoteDetail.propTypes = {
  note: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default NoteDetail;
