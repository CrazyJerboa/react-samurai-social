import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '191f258f-eda0-49af-bc26-fc4f5e2c3e0f'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    getAuthorisedUserData() {
        return instance
            .get(`auth/me`)
            .then(response => response.data);
    },

    followUser(userId) {
        return instance
            .post(`follow/${userId}`, null)
            .then(response => response.data);
    },

    unfollowUser(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data);
    },

    getUserData(userId) {
        console.warn('Obsolete method. Please, use profileAPI object.')
        return profileAPI.getUserData(userId);
    }
}

export const profileAPI = {
    getUserData(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data);
    },

    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => response.data);
    },

    updateStatus(status) {
        return instance
            .put(`profile/status`, { status: status });
    }
}