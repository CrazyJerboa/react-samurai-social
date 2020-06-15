import {connect} from "react-redux";

import Dialogs from "./Dialogs";

import {
    addMessage,
    updateNewMessageText
} from "../../redux/dialogsReducer";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;