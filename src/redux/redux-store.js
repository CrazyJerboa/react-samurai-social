import {applyMiddleware, combineReducers, createStore} from "redux";

import thunk from 'redux-thunk';

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import sidebarReducer from "./sidebarReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;