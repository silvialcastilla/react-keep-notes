import React from 'react'
//import Logo from "../../components/logo/Logo";
import SearchIcon from '@material-ui/icons/Search';
import Input from '../Input/Input'


function Finder() {
  return (
    <form className="finder">
      <SearchIcon/>
        <Input type="text"/>
    </form>
  );
}

export default Finder;