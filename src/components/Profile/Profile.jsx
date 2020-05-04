import React from "react";

import UserInfo from "./UserInfo/UserInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className="MyPosts">
            <UserInfo />

            <MyPosts
                postsData={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;