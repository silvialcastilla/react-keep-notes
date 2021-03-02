import React, { useState } from 'react'
//import Logo from "../../components/logo/Logo";


function Form({createNote}) {
  //En el futuro, se hará una petición a back donde se envien estos datos
  const [state, setState] = useState([{ title: '', content: '' }]);
  const [bigForm, setBigForm] = useState(false);
  const [error, setError] = useState(false)

  const { title, content } = state;

  const upgradeState = (e) => {
    setState((pokemon) => [...pokemon, e.data]);
  }
  const addNote = (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") setError(true)
    setError(false)
    createNote(state)
  }


  return (

    <div>
      {bigForm ?
        (<form onSubmit={addNote}>
          <input
            type="text"
            name="title"
            className="u-full-width"
            placeholder="Título"
            onChange={upgradeState}
            value={title}
          />
          <input
            type="text"
            name="content"
            className="u-full-width"
            placeholder="Tu nota"
            onChange={upgradeState}
            value={content}
          />

          <input type="submit" value="Submit" />
        </form>) : (<input type="text" onClick={() => setBigForm(true)} />
        )}
      {error ? <p>Debes rellenar todos los campos</p> : <p>Hola</p>
        // (<div>{state.map(data => {
        //   <p>{data.title} {data.content}{/* El fallo está en que no es un array */}</p>
        // })}
        // </div>)
      }
    </div>
  );
}

export default Form;