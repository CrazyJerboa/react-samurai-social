import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from 'redux-form';
import {getAuthorisedUserData} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            };
        }

        default: return state;
    }
};

export const initializingSuccessed = () => ({
    type: SET_INITIALIZED
});

export const initializeApp = () => (dispatch) => {
    const dispatchResult = dispatch(getAuthorisedUserData());

    Promise.all([dispatchResult])
        .then(() => {
            dispatch(initializingSuccessed());
        });
};

export default appReducer;