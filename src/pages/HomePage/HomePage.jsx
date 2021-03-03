import React, {} from 'react'
import Aside from '../../components/Aside/Aside'
import NoteList from '../../components/NoteList/NoteList'
//import Logo from "../../components/logo/Logo";


function HomePage() {

  return (
    <div className="home-page">
      <h1>HomePage</h1>
      <Aside/>
      <NoteList/>
    </div>
  );
}

export default HomePage;