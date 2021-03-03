import React, { useState } from "react";
import Note from "../../components/Note/Note";
import Form from "../Form/Form"

function NoteList() {
  const [notes, saveNotes] = useState([]);

  const createNote = note => {
    saveNotes([...notes, note]);
  };

  const eliminarCita = id => {
    const newsNotes = notes.filter(cita => cita.id !== id);
    saveNotes(newsNotes);
  };

  return (
    <div className="note">
      <Form createNote={createNote}/>
      <div>{notes.map((note, i) => (
        <Note key={i} title={note.title} content={note.content}/>
            ))}</div>
      <Note />
    </div>
  );
}

export default NoteList;
