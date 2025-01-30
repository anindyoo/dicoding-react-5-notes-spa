import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail/NoteDetail';
import NotFoundPage from './NotFoundPage';
import NoteWrapper from '../components/NoteWrapper/NoteWrapper';
import PropTypes from 'prop-types';
import NoteActionModal from '../components/NoteActionModal/NoteActionModal';
import useNoteActionModal from '../hooks/useNoteActionModal';
import { getNote } from '../utils/network-data';

const NoteDetailPage = ({
  onDeleteNoteHandler,
  onArchiveNoteHandler,
}) => {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const [modalValue, toggleModal] = useNoteActionModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getNote(id);
        setNote(data);
      } catch (error) {
        console.error('error fetching notes: ', error);
      }
    };

    fetchData();
  }, [id]);

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
          updateNotes={setNote}
        />
      </section>
    )
  : <NotFoundPage category={'detail'} noteId={id} />;
};

NoteDetailPage.propTypes = {
  onDeleteNoteHandler: PropTypes.func.isRequired,
  onArchiveNoteHandler: PropTypes.func.isRequired,
};

export default NoteDetailPage;
