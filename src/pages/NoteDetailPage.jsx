import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import NoteDetail from '../components/NoteDetail/NoteDetail';
import NotFoundPage from './NotFoundPage';
import NoteWrapper from '../components/NoteWrapper/NoteWrapper';

const NoteDetailPage = () => {
  const { id } = useParams();
  const [note, setNote] = useState({});

  useEffect(() => {
    const note = getNote(id);
    setNote(note);
  }, [id]);

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

export default NoteDetailPage;
