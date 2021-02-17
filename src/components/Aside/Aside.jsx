import React from 'react'
//import Logo from "../../components/logo/Logo";
import { Link } from "react-router-dom";


function Aside() {
    return (
        <div className="aside">
            <ul>
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
            </ul>
        </div>

    );
}

export default Aside;