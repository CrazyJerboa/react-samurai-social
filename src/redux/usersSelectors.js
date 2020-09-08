import {createSelector} from "reselect";

const getUsersRaw = (state) => state.usersPage.users;

export const getUsersSelector = createSelector(getUsersRaw, (users) => users.filter(u => true));

export const getPageSizeSelector = (state) => state.usersPage.pageSize;

export const getTotalUsersCountSelector = (state) => state.usersPage.totalUsersCount;

export const getCurrentPageSelector = (state) => state.usersPage.currentPage;

export const getIsFetchingSelector = (state) => state.usersPage.isFetching;

export const getFollowingInProgressSelector = (state) => state.usersPage.followingInProgress;