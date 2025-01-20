import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const defaultNote = {
  body: '',
  title: '',
};

const NoteInput = ({ onAddNoteHandler }) => {
  const [noteObjInput, setNoteObjInput] = useState(defaultNote);
  const navigate = useNavigate();

  const onNoteInputChange = (event) => {
    event.preventDefault();

    const name = event.target.dataset.name;
    const value = event.target.innerHTML;

    setNoteObjInput({
      ...noteObjInput,
      [name]: value,
    });
  };

  const onNoteSubmitHandler = (event) => {
    event.preventDefault();

    if (noteObjInput.title.length > 0 && noteObjInput.body.length > 0) {
      onAddNoteHandler(noteObjInput);
      document.getElementById('title-input').innerHTML = '';
      document.getElementById('title-body').innerHTML = '';
      setNoteObjInput(defaultNote);
      navigate('/');
    }
  };

  return (
    <>
      {!noteObjInput.title.length && (
        <div className="
        note-input-placeholder__title
        relative top-1
        px-1
        text-xl font-medium
        pointer-events-none"
        >
          <div className="absolute text-accentColor">
            <p>Enter title...</p>
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
        onInput={onNoteInputChange}
        data-name="title"
        contentEditable
      />
      <hr className="mb-2" />
      {!noteObjInput.body.length && (
        <div className="
        note-input-placeholder__body
        relative top-1
        px-1
        pointer-events-none"
        >
          <div className="absolute text-accentColor">
            <p>Enter note...</p>
          </div>
        </div>
      )}
      <div
        id="title-body"
        className="
        note-input__body
        min-h-60
        px-1
        text-lg font-light
        focus:outline-none"
        onInput={onNoteInputChange}
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
        bg-primaryColor
        transition-all duration-200 ease-in-out
        hover:brightness-75"
        type="button"
        onClick={onNoteSubmitHandler}
      >
        Add Note
      </button>
    </>
  );
};

NoteInput.propTypes = {
  onAddNoteHandler: PropTypes.func.isRequired,
};

export default NoteInput;
