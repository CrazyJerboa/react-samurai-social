import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '191f258f-eda0-49af-bc26-fc4f5e2c3e0f'
    }
});

export const getUsers = (currentPage, pageSize) => instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data);

export const getUserData = userId => instance
    .get(`profile/${userId}`)
    .then(response => response.data);

export const getAuthorisedUserData = () => instance
    .get(`auth/me`)
    .then(response => response.data);

export const followUser = (userId) => instance
    .post(`follow/${userId}`, null)
    .then(response => response.data);

export const unfollowUser = (userId) => instance
    .delete(`follow/${userId}`)
    .then(response => response.data);