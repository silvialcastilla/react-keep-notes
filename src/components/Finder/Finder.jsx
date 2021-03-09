import React from 'react'
//import Logo from "../../components/logo/Logo";
import SearchIcon from '@material-ui/icons/Search';



function Finder() {
  return (
    <form className="finder">
      <SearchIcon/>
        <input type="text"></input>
    </form>
  );
}

export default Finder;