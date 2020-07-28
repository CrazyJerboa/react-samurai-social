import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        };
                    }

                    return user;
                })
            };
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        };
                    }

                    return user;
                })
            };
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber
            };
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress:
                    action.isFetching ? [
                        ...state.followingInProgress,
                        action.userId
                    ] : [
                        ...state.followingInProgress.filter(id => id !== action.userId)
                    ]

            };
        }

        default: return state;
    }
}

export const setUsers = (users) => ({
   type: SET_USERS,
   users
});
export const follow = (userId) => ({
    type: FOLLOW,
    userId
});
export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
});
export const setCurrentPage = (pageNumber) => ({
    type: SET_CURRENT_PAGE,
    pageNumber
});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then(response => {
        dispatch(toggleIsFetching(false));

        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    });
}

export const followUser = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));

    usersAPI.followUser(userId).then(response => {
        if (response.resultCode === 0) {
            dispatch(follow(userId));
        }

        dispatch(toggleIsFollowingProgress(false, userId));
    });
}

export const unfollowUser = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));

    usersAPI.unfollowUser(userId).then(response => {
        if (response.resultCode === 0) {
            dispatch(unfollow(userId));
        }

        dispatch(toggleIsFollowingProgress(false, userId));
    });
}

export default usersReducer;