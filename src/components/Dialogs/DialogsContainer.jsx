import React from "react";

import Dialogs from "./Dialogs";

import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
    const state = props.store.getState();

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const onMessageChange = (text) => {
        const action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return <Dialogs
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        newMessageText={state.dialogsPage.newMessageText}
        addMessage={addMessage}
        updateNewMessageText={onMessageChange}
    />
}

export default DialogsContainer;