import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Profile from "./Profile";

import {getStatus, getUserData, savePhoto, saveProfile, setUserProfile, updateStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.userId;

            if (!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.getUserData(userId);
        this.props.getStatus(userId);
    };

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile
            {...this.props}
            isOwner={parseInt(this.props.match.params.userId) === this.props.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
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
        setUserProfile, getUserData, getStatus, updateStatus, savePhoto, saveProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)