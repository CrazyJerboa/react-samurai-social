import {connect} from "react-redux";

import Dialogs from "./Dialogs";

import {
    addMessage,
    updateNewMessageText
} from "../../redux/dialogsReducer";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, { addMessage, updateNewMessageText }),
    withAuthRedirect
)(Dialogs);