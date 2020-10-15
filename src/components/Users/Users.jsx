import React from "react";
import {NavLink} from "react-router-dom";

import styles from './Users.module.sass';

import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = (props) => {
    const mapUsers = () => {
        return props.users.map(user =>
            <User
                user={user}
                followingInProgress={props.followingInProgress}
                unfollowUser={props.unfollowUser}
                followUser={props.followUser}
            />
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.pagination}>
                <Pagination
                    totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
                />
            </div>

            <div>{mapUsers()}</div>
        </div>
    );
}

export default Users;