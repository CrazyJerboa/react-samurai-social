import React from "react";

import Post from "./Post/Post";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

import styles from './MyPosts.module.sass';

const MyPosts = (props) => {
    const postsList = props.postsData.map(post => <Post message={post.message} likes={post.likesCount}/>);

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = (e) => {
        const text = e.target.value;

        const action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>My posts</p>

            <div>
                <textarea
                    value={props.newPostText}
                    onChange={onPostChange}
                />

                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>

            <div>
                {postsList}
            </div>
        </div>
    );
}

export default MyPosts;