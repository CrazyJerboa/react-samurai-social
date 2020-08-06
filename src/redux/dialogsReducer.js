const ADD_MESSAGE = 'ADD_MESSAGE';

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

        case ADD_MESSAGE: {
            return {
                ...state,
                newMessageText: '',
                messages: [
                    ...state.messages,
                    {
                        id: 5,
                        message: action.message
                    }
                ]
            };
        }

        default: return state;
    }
}

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    message
});

export default dialogsReducer;
