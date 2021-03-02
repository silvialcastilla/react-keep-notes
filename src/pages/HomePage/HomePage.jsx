import React, {useState} from 'react'
import Aside from '../../components/Aside/Aside'
import Form from '../../components/Form/Form'
import NoteList from '../../components/NoteList/NoteList'
//import Logo from "../../components/logo/Logo";


function HomePage() {

  const [notes, saveNotes] = useState([])

  const createNote = note => {
    saveNotes([...notes, note]);
  };

  return (
    <div className="home-page">
      <h1>HomePage</h1>
      <Form createNote={createNote}/>
      <Aside/>
      <NoteList/>
    </div>
  );
}

export default HomePage;