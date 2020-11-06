import React from "react";
import s from './Dialogs_item.module.css';
import {NavLink} from "react-router-dom";




function Dialogs_item(props) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogs}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink><br/>
        </div>
    )
}



export default Dialogs_item;