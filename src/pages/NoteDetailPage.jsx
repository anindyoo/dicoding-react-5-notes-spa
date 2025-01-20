import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import NoteDetail from '../components/NoteDetail/NoteDetail';
import NotFoundPage from './NotFoundPage';
import NoteWrapper from '../components/NoteWrapper/NoteWrapper';
import PropTypes from 'prop-types';
import NoteActionModal from '../components/NoteActionModal/NoteActionModal';

const NoteDetailPage = ({
  notes,
  noteModalObj,
  toggleModal,
  onDeleteNoteHandler,
  onArchiveNoteHandler,
}) => {
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
          <NoteDetail
            note={note}
            toggleModal={toggleModal}
          />
        </NoteWrapper>
        <NoteActionModal
          pageOrigin="detail"
          noteModalObj={noteModalObj}
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
  noteModalObj: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
  onArchiveNoteHandler: PropTypes.func.isRequired,
};

export default NoteDetailPage;
