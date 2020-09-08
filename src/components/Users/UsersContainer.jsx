import React from "react";
import {connect} from 'react-redux';

import {
    followUser, getUsers,
    setCurrentPage, toggleIsFollowingProgress, unfollowUser
} from "../../redux/usersReducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader />
                : null}
                <Users
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    onPageChanged={this.onPageChanged}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                />
            </>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// };

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        followUser,
        unfollowUser,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers
    }),
    withAuthRedirect
)(UsersContainer);