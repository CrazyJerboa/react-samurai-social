import {authAPI, securityAPI, usersAPI} from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            };
        }

        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            };
        }

        default: return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl
});

export const getAuthorisedUserData = () => async (dispatch) => {
    const response = await usersAPI.getAuthorisedUserData();

    if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.resultCode === 0) {
        dispatch(getAuthorisedUserData());
    } else  {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }

        const message = response.messages.length > 0 ? response.messages[0] : 'Some error';

        dispatch(stopSubmit('login', {
            _error: message
        }));
    }
};

export const getCaptchaUrl = () => async dispatch => {
    const response = await securityAPI.getCaptchaUrl();

    dispatch(getCaptchaUrlSuccess(response.url));
};

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;