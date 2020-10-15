import {profileAPI, usersAPI} from "../api/api";
import {follow, toggleIsFollowingProgress} from "./usersReducer";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

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
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export default profileReducer;