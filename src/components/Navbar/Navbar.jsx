import React from "react";
import {NavLink} from "react-router-dom";

import styles from './Navbar.module.sass';

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <li><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={styles.active}>Dialogs</NavLink></li>
                <li><NavLink to="/news" activeClassName={styles.active}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;