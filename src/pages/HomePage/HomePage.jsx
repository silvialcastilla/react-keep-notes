import React, {useState} from 'react'
import Aside from '../../components/Aside/Aside'
import NoteList from '../../components/NoteList/NoteList'
//import Logo from "../../components/logo/Logo";
import { useHistory } from "react-router-dom";

function HomePage() {
  let history = useHistory();

  const [state, setstate] = useState({valor: "", dado: ""})
  const send =(e) => {
    //history.push("/register");
    setstate({     
      ...state,
      [e.target.name]: e.target.value});
  }

  return (
    <div className="home-page">
      <h1>HomePage</h1>
      <Aside/>
      <NoteList/>
      <button onClick={send}value="ey" name="valor">Pulsa</button>
      <button onClick={send}value="ey" name="dado">Pulsa</button>
    </div>
  );
}

export default HomePage;