import React, { useState } from "react";
import Note from "../../components/Note/Note";
import Form from "../Form/Form"

function NoteList() {
  const [notes, saveNotes] = useState([]);

  const createNote = note => {
    saveNotes([note, ...notes]);
  };

  const deleteNote = id => {
    const newsNotes = notes.filter(note => note.id !== id);
    saveNotes(newsNotes);
  };

  return (
    <div className="note">
      <Form createNote={createNote} />
      {notes.map((note) => (
        <Note key={note.id} notes={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
