import React from 'react';
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";

import Profile from "./Profile";

import {getUserData, setUserProfile} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.userId;

        this.props.getUserData(userId);
    }

    render() {
        return this.props.isAuth ? (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        ) : <Redirect to={'/login'}/>;
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
});

const WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, getUserData})(WithURLDataContainerComponent);