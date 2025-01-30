import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import NoteDetail from '../components/NoteDetail/NoteDetail';
import NotFoundPage from './NotFoundPage';
import NoteWrapper from '../components/NoteWrapper/NoteWrapper';
import PropTypes from 'prop-types';
import NoteActionModal from '../components/NoteActionModal/NoteActionModal';
import useNoteActionModal from '../hooks/useNoteActionModal';

const NoteDetailPage = ({
  notes,
  onDeleteNoteHandler,
  onArchiveNoteHandler,
}) => {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const [modalValue, toggleModal] = useNoteActionModal();

  useEffect(() => {
    const note = getNote(id, notes);
    setNote(note);
  }, [id, notes]);

  return note
    ? (
      <section className="note-detail-page">
        <NoteWrapper>
          <NoteDetail
            note={note}
            toggleModal={toggleModal}
          />
        </NoteWrapper>
        <NoteActionModal
          modalValue={modalValue}
          toggleModal={toggleModal}
          onDeleteNoteHandler={onDeleteNoteHandler}
          onArchiveNoteHandler={onArchiveNoteHandler}
        />
      </section>
    )
  : <NotFoundPage category={'detail'} noteId={id} />;
};

NoteDetailPage.propTypes = {
  notes: PropTypes.array.isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
  onArchiveNoteHandler: PropTypes.func.isRequired,
};

export default NoteDetailPage;
