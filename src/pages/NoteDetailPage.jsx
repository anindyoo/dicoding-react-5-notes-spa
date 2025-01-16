import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import NoteDetail from '../components/NoteDetail/NoteDetail';

const NoteDetailPage = () => {
  const { id } = useParams();
  const [note, setNote] = useState({});

  useEffect(() => {
    const note = getNote(id);
    setNote(note);
  }, [id]);

  return (
    <section className="
    note-detail-page
    flex flex-col mx-auto
    w-[40%] h-max
    rounded-2xl
    px-6 py-8
    shadow-md
    bg-white bg-opacity-30">
      {note && <NoteDetail note={note} />}
    </section>
  );
};

export default NoteDetailPage;
