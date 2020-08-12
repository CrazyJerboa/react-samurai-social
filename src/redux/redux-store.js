import {applyMiddleware, combineReducers, createStore} from "redux";

import thunk from 'redux-thunk';

import appReducer from "./appReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import sidebarReducer from "./sidebarReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;