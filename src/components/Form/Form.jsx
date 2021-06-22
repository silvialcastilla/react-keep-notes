import React, { useState } from 'react'
import { uuid } from 'uuidv4';

import Button from '../Button/Button';
import Input from '../Input/Input'

function Form({createNote, btnClass}) {
  //En el futuro, se hará una petición a back donde se envien estos datos
  const [state, setState] = useState({ title: '', content: '' });
  const [bigForm, setBigForm] = useState(false);
  const [error, setError] = useState(false)

  const { title, content } = state;

  const upgradeState = (e) => {
    setState({     
      ...state,
      [e.target.name]: e.target.value});
  }
  const addNote = (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") return setError(true) 
    state.id = uuid();
    setError(false)
    createNote(state)
  }


  return (

    <div>
      {bigForm ?
        (<form onSubmit={addNote}>
          <Input
            type="text"
            name="title"
            classStylee="u-full-width"
            placeholder="Título"
            onChange={upgradeState}
            content={title}
          />
          <Input
            type="text"
            name="content"
            classStyle="u-full-width"
            placeholder="Tu nota"
            onChange={upgradeState}
            content={content}
          />

          <Button btnClass="btn-submit" title="Create your note" type="submit"/>
        </form>)
         
         : (<Input type="text" change ={() => setBigForm(true)} /> 
        )}
      {error ? <p>Debes rellenar todos los campos</p> : <></>}
    </div>
  );
}

export default Form;