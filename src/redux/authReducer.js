import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            };
        }

        default: return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});

export const getAuthorisedUserData = () => (dispatch) => {
    usersAPI.getAuthorisedUserData().then(response => {
        if (response.resultCode === 0) {
            const {id, email, login} = response.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthorisedUserData());
            }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};

export default authReducer;