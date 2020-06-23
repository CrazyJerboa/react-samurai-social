import React from "react";
import {connect} from 'react-redux';
import * as axios from "axios";

import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            });
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader />
                : null}
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                />
                
                
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);