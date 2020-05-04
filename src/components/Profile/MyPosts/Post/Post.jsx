import React from "react";

import classes from './Post.module.sass';

const Post = (props) => {
    return (
        <div className={classes.container}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6nsQsaI5TfByl_vddAagmmQY0VUAEH5HtC2Wl1JzFmg7V7Ezy&usqp=CAU" alt=""/>
            <p>{props.message}</p>
            <p>Likes: {props.likes}</p>
        </div>
    );
}

export default Post;