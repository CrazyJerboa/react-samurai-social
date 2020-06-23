import React from "react";
import {NavLink} from "react-router-dom";

import styles from './Users.module.sass';

import defaultUserAvatar from '../../assets/img/user.png';
import * as axios from "axios";

const Users = (props) => {
    const mapUsers = () => {
        return props.users.map(user =>
            <div key={user.id}>
            <span>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small ? user.photos.small : defaultUserAvatar} alt=""/>
                </NavLink>

                <div>
                    {user.followed
                        ? <button onClick={() => {

                            axios
                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '191f258f-eda0-49af-bc26-fc4f5e2c3e0f'
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id);
                                    }
                                });

                        }}>Unfollow</button>
                        : <button onClick={() => {

                            axios
                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, null, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '191f258f-eda0-49af-bc26-fc4f5e2c3e0f'
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id);
                                    }
                                });

                        }}>Follow</button>
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
            </div>
        );
    }

    const mapPages = () => {
        const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        const pagesArr = [];

        for (let i = 1; i <= pagesCount; i++) {
            pagesArr.push(i);
        }

        return pagesArr.map(page =>
            <span
                key={page}
                className={props.currentPage === page ? styles.paginationPageActive : styles.paginationPage}
                onClick={(e) => props.onPageChanged(page)}
            >{page}</span>);
    }

    return (
        <div className={styles.container}>
            <div className={styles.pagination}>
                {mapPages()}
            </div>

            <div>{mapUsers()}</div>
        </div>
    );
}

export default Users;