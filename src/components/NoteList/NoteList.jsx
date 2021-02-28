import React, { useState } from "react";
//import Logo from "../../components/logo/Logo";
import Note from "../../components/Note/Note";

function NoteList() {
  const [notes, setNotes] = useState([]);
  return (
    <div className="note">
      <p>NoteList</p>
      <Note />
    </div>
  );
}

export default NoteList;
