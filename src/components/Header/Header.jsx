import React from "react";

import styles from './Header.module.sass';

import logo from '../../logo.svg';

const Header = () => {
    return (
        <header className={styles.container}>
            <img src={logo} alt="" />
        </header>
    );
}

export default Header;