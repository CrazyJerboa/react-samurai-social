import React from "react";

import Post from "./Post/Post";

import styles from './MyPosts.module.sass';

const MyPosts = (props) => {
    const postsList = props.profilePage.posts.map((post, key) => <Post
        key={key}
        message={post.message}
        likes={post.likesCount}
    />);

    const addPost = () => {
        props.addPost();
    }

    const onPostChange = (e) => {
        const text = e.target.value;

        props.updateNewPostText(text);
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>My posts</p>

            <div>
                <textarea
                    value={props.profilePage.newPostText}
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