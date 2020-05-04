import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 21 },
                { id: 2, message: 'It\'s my first post', likesCount: 12 }
            ],
            newPostText: 'Ваше сообщение...'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
}

window.store = store;

export default store;