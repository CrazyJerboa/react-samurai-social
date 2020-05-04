import React from "react";

import styles from './Message.module.sass';

const Message = (props) => {
    let subclass = styles.your;
    if (props.type === 'notyour') subclass = styles.notyour;
    else if (props.type === 'admin') subclass = styles.admin;

    return (
        <li className={`${styles.container} ${subclass}`}>{props.text}</li>
    );
}

export default Message;