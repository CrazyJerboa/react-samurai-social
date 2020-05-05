import React from "react";

import MyPosts from "./MyPosts";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPostsContainer = (props) => {
    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        const action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts
            postsData={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            addPost={addPost}
            updateNewPostText={onPostChange}
        />
    );
}

export default MyPostsContainer;