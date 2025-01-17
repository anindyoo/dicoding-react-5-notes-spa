import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import NoteDetail from '../components/NoteDetail/NoteDetail';
import NotFoundPage from './NotFoundPage';
import NoteWrapper from '../components/NoteWrapper/NoteWrapper';
import PropTypes from 'prop-types';

const NoteDetailPage = ({ notes }) => {
  const { id } = useParams();
  const [note, setNote] = useState({});

  useEffect(() => {
    const note = getNote(id, notes);
    setNote(note);
  }, [id, notes]);

  return note
    ? (
      <section className="note-detail-page">
        <NoteWrapper>
          <NoteDetail note={note} />
        </NoteWrapper>
      </section>
    )
  : <NotFoundPage category={'detail'} noteId={id} />;
};

NoteDetailPage.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteDetailPage;
