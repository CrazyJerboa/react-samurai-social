import React from "react";
import * as axios from "axios";

import styles from './Users.module.sass';

import defaultUserAvatar from '../../assets/img/user.png';

class Users extends React.Component {

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {
        const users = this.props.users.map(user =>
            <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small ? user.photos.small : defaultUserAvatar} alt=""/>
                    </div>

                    <div>
                        {user.followed
                            ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(user.id)}>Follow</button>
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

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pagesArr = [];

        for (let i = 1; i <= pagesCount; i++) {
            pagesArr.push(i);
        }

        const pages = pagesArr.map(page =>
            <span
                key={page}
                className={this.props.currentPage === page ? styles.paginationPageActive : styles.paginationPage}
                onClick={(e) => this.onPageChanged(page)}
            >{page}</span>);

        return (
            <div className={styles.container}>
                <div className={styles.pagination}>
                    {pages}
                </div>

                <div>{users}</div>
            </div>
        );
    }
}

export default Users;