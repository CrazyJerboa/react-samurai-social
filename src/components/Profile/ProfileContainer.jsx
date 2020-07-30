import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Profile from "./Profile";

import {getUserData, setUserProfile} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.userId;

        this.props.getUserData(userId);
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
        />;
    }
}


const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, { setUserProfile, getUserData }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)