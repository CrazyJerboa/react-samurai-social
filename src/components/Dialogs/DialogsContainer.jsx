import {connect} from "react-redux";

import Dialogs from "./Dialogs";

import {
    addMessage,
    updateNewMessageText
} from "../../redux/dialogsReducer";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(withAuthRedirect(Dialogs));

export default DialogsContainer;