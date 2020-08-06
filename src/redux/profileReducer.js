import {profileAPI, usersAPI} from "../api/api";
import {follow, toggleIsFollowingProgress} from "./usersReducer";

const ADD_POST = 'ADD_POST';

const SET_USER_PROFILE = 'SET_USER_PROFILE';

const SET_STATUS = 'SET_STATUS';

const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 21 },
        { id: 2, message: 'It\'s my first post', likesCount: 12 }
    ],
    newPostText: 'Ваше сообщение...',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            return {
                ...state,
                newPostText:'',
                posts: [
                    ...state.posts,
                    {
                        id: 5,
                        message: action.text,
                        likesCount: 0
                    }
                ]
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        default: return state;
    }
}

export const addPost = (text) => ({
    type: ADD_POST,
    text
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

// thunks

export const getUserData = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));

    usersAPI.getUserData(userId).then(response => {
        dispatch(setUserProfile(response));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;