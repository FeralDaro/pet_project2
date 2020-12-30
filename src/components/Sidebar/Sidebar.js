import React from "react";
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

function Sidebar() {
    return (
        <div className={s.sidebar}>
            <ul>
                <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li>Audio</li>
                <li>Video</li>
                <li>Communities</li>
                <li>Settings</li>
                <li>Exit</li>
            </ul>
        </div>)
}

export default Sidebar;