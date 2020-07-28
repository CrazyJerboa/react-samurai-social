import {usersAPI} from "../api/api";
import {follow, toggleIsFollowingProgress} from "./usersReducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 21 },
        { id: 2, message: 'It\'s my first post', likesCount: 12 }
    ],
    newPostText: 'Ваше сообщение...',
    profile: null
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
                        message: state.newPostText,
                        likesCount: 0
                    }
                ]
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        default: return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const getUserData = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));

    usersAPI.getUserData(userId).then(response => {
        dispatch(setUserProfile(response));
    });
}

export default profileReducer;