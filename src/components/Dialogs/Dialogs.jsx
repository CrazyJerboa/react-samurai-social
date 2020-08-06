import React from "react";
import {Field, reduxForm} from "redux-form";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

import styles from './Dialogs.module.sass';
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../helpers/validators";

const maxLength100 = maxLength(100);

const Dialogs = (props) => {
    const dialogsList = props.dialogsPage.dialogs.map(user => <Dialog id={user.id} key={user.id} name={user.name} />);

    const messagesList = props.dialogsPage.messages.map(message => <Message type="notyour" key={message.id} text={message.message} />);

    const addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
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

                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const AddMessageForm = props => {
    return <form onSubmit={props.handleSubmit} className={styles.form}>
        <Field
            component={Textarea}
            name="newMessageText"
            placeholder="Enter your message"
            validate={[required, maxLength100]}
        />
        <button>></button>
    </form>
}

const AddMessageFormRedux = reduxForm({form: 'addMessageForm'})(AddMessageForm);

export default Dialogs;