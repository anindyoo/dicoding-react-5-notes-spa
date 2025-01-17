import PropTypes from 'prop-types';
import React from 'react';
import { showFormattedDate } from '../../utils';
import NoteDetailPanel from './NoteDetailPanel';

const NoteDetail = ({ note }) => {
  return (
    <div className="note-detail">
      <div className="note-detail__header">
        <h2 className="
        note-detail__title
        text-xl font-medium"
        >
          {note?.title}
        </h2>
        <p className="
        note-detail__date
        text-base opacity-60"
        >
          {showFormattedDate(note?.createdAt)}
        </p>
      </div>
      <NoteDetailPanel />
      <p className="note-detail_body font-light">
        {note.body}
      </p>
    </div>
  );
};

NoteDetail.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteDetail;
