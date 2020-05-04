import React from "react";
import {NavLink} from "react-router-dom";

import styles from './Dialog.module.sass';

const Dialog = (props) => {
    return (
        <li className={styles.container}>
            <NavLink activeClassName={styles.contact_active} className={styles.contact} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </li>
    );
}

export default Dialog;