import React from "react";
import {NavLink} from "react-router-dom";

import defaultUserAvatar from '../../assets/img/user.png';

const User = ({user, ...props}) => {
    return <div key={user.id}>
        <span>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small ? user.photos.small : defaultUserAvatar} alt=""/>
            </NavLink>

            <div>
                {user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => props.unfollowUser(user.id)}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => props.followUser(user.id)}>Follow</button>
                }
            </div>
        </span>

        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>

            <span>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
            </span>
        </span>
    </div>;
}

export default User;