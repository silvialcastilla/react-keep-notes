import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Finder from '../Finder/Finder';
import './Aside.scss'

function Aside() {
    const [navBar, setNavBar] = useState(false)

    const showNavBar = () => {
        if (navBar == false) {
            setNavBar(true)
        }
        if (navBar == true) {
            setNavBar(false)
        }
    }

    return (
        <div>
            <div className="navBar">
                <MenuIcon onClick={showNavBar} />
                <p>Stack your notes</p>
                <Finder />
                <AccountBoxIcon />
            </div>
            <div>
                {navBar ? (<ul>
                    <li>
                        <Link to="/" className="nav-bar_list-li">Notes</Link>
                    </li>
                    <li>
                        <Link to="/reminders" className="nav-bar_list-li">Reminders</Link>
                    </li>
                    <li>
                        <Link to="/archive" className="nav-bar_list-li">Archived notes</Link>
                    </li>
                    <li>
                        <Link to="/trash" className="nav-bar_list-li">Trash</Link>
                    </li>
                </ul>) : (<></>)}
            </div>
        </div>
    )
}

export default Aside;
