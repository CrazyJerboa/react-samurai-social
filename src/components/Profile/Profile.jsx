import React from "react";

import UserInfo from "./UserInfo/UserInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className="MyPosts">
            <UserInfo />

            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;