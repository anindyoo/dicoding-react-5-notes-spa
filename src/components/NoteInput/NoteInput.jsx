import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useDivInput from '../../hooks/useDivInput';
import { LocaleContext } from '../../App';

const NoteInput = ({ onAddNoteHandler }) => {
  const [title, handleTitleChange] = useDivInput('');
  const [body, handleBodyChange] = useDivInput('');
  const { locale } = useContext(LocaleContext);

  const onNoteSubmitHandler = (event) => {
    event.preventDefault();

    if (title.length && body.length) {
      onAddNoteHandler({ title, body });
    }
  };

  return (
    <>
      {!title.length && (
        <div className="
        note-input-placeholder__title
        relative top-1
        px-1
        text-xl font-medium
        pointer-events-none"
        >
          <div className="absolute text-accentColor dark:text-accentColor30Dark">
            <p>{locale === 'en' ? 'Enter title...' : 'Masukkan judul...'}</p>
          </div>
        </div>
      )}
      <div
        id="title-input"
        className="
        note-input__title
        min-h-10
        px-1
        text-xl font-medium
        focus:outline-none"
        onInput={handleTitleChange}
        data-name="title"
        contentEditable
      />
      <hr className="mb-2" />
      {!body.length && (
        <div className="
        note-input-placeholder__body
        relative top-1
        px-1
        pointer-events-none"
        >
          <div className="absolute text-accentColor dark:text-accentColor30Dark">
            <p>{locale === 'en' ? 'Enter note...' : 'Masukkan catatan...'}</p>
          </div>
        </div>
      )}
      <div
        id="body-input"
        className="
        note-input__body
        min-h-60
        px-1
        text-lg font-light
        focus:outline-none"
        onInput={handleBodyChange}
        data-name="body"
        contentEditable
      />
      <button
        className="
        note-input__submit-button
        flex flex-row justify-center
        p-2
        text-lg text-white
        rounded-lg
        bg-primaryColor dark:bg-primaryColor20Dark
        transition-all duration-200 ease-in-out
        hover:brightness-75"
        type="button"
        onClick={onNoteSubmitHandler}
      >
        {locale === 'en' ? 'Add Note' : 'Tambahkan Catatan'}
      </button>
    </>
  );
};

NoteInput.propTypes = {
  onAddNoteHandler: PropTypes.func.isRequired,
};

export default NoteInput;
