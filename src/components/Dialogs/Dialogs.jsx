import React from "react";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";

import styles from './Dialogs.module.sass';

const Dialogs = (props) => {
    const dialogsList = props.dialogsPage.dialogs.map(user => <Dialog id={user.id} name={user.name} />);

    const messagesList = props.dialogsPage.messages.map(message => <Message type="notyour" text={message.message} />);

    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    const onMessageChange = (e) => {
        const text = e.target.value;

        const action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={styles.container}>
            <div className={styles.contacts}>
                <ul className={styles.contacts__list}>
                    {dialogsList}
                </ul>
            </div>

            <div className={styles.messages}>
                <ul className={styles.messages__list}>
                    {messagesList}
                </ul>

                <div className={styles.form}>
                    <textarea
                        value={props.dialogsPage.newMessageText}
                        onChange={onMessageChange}
                    />
                    <button onClick={addMessage}>></button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;