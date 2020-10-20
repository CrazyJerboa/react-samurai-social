import {profileAPI, usersAPI} from "../api/api";
import {follow, toggleIsFollowingProgress} from "./usersReducer";
import {stopSubmit} from 'redux-form';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

const SET_USER_PROFILE = 'SET_USER_PROFILE';

const SET_STATUS = 'SET_STATUS';

const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
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

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
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

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
});

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
});

// thunks

export const getUserData = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));

    const response = await usersAPI.getUserData(userId);
    dispatch(setUserProfile(response));
};

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response));
};

export const updateStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {

    }
};

export const savePhoto = (file) => async dispatch => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserData(getState().auth.userId));
    } else {
        // dispatch(stopSubmit('edit-profile', {'contacts': {'facebook': response.data.messages[0]}}));
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;