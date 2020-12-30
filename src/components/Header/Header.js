import React from "react";
import s from './Header.module.css';
import NavLink from "react-router-dom/NavLink";


function Header(props){
    return(
<div className={s.header}>
    <header>
        <img src="https://images5.alphacoders.com/587/thumb-1920-587597.jpg" alt="Kaneki-kun"/>

        <div className={s.loginBlock}>
            {props.isAuth? props.login
            : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
</div>)
    }
export default Header;