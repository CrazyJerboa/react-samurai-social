import React from "react";
import {NavLink} from "react-router-dom";

import styles from './Header.module.sass';

import logo from '../../logo.svg';

const Header = (props) => {

    return (
        <header className={styles.container}>
            <img src={logo} alt="" />

            <div className={styles.loginBlock}>
                {props.isAuth ?
                    <NavLink to={'/profile/' + props.userId}>{props.login}</NavLink>
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;