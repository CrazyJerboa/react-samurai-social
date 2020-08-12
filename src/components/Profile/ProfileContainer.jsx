import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Profile from "./Profile";

import {getStatus, getUserData, setUserProfile, updateStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.userId;

            if (!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.getUserData(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
        />;
    }
}


const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {
        setUserProfile, getUserData, getStatus, updateStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)