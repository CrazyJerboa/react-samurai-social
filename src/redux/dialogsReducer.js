const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
    dialogs: [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' }
    ],
    messages: [
        { id: 1, message: 'Message 1' },
        { id: 2, message: 'Message 2' },
        { id: 3, message: 'Message 3' },
        { id: 4, message: 'Message 4' },
        { id: 5, message: 'Message 5' },
        { id: 6, message: 'Message 6' },
        { id: 7, message: 'Message 7' },
        { id: 8, message: 'Message 8' }
    ],
    newMessageText: 'Ваше сообщение...'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            let newMessage = {
                id: 5,
                message: state.newMessageText
            };

            state.messages.push(newMessage);
            state.newMessageText = '';

            return state;

        // ------- end ADD_MESSAGE
        case UPDATE_NEW_MESSAGE_TEXT:

            state.newMessageText = action.newText;

            return state;

        // ------- end UPDATE_NEW_MESSAGE_TEXT
        default: return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default dialogsReducer;
