import React from "react";

import Post from "./Post/Post";

import styles from './MyPosts.module.sass';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../helpers/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLength(10);

const MyPosts = React.memo(props => {
    const postsList = props.profilePage.posts.map((post, key) => <Post
        key={key}
        message={post.message}
        likes={post.likesCount}
    />);

    const addPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>My posts</p>

            <AddPostFormRedux onSubmit={addPost}/>

            <div>
                {postsList}
            </div>
        </div>
    );
});

const AddPostForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <Field
            component={Textarea}
            name="newPostText"
            placeholder="Enter your post text"
            validate={[required, maxLength10]}
        />

        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddPostFormRedux = reduxForm({form: 'addPostForm'})(AddPostForm);

export default MyPosts;