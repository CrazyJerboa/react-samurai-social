import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import * as axios from "axios";

import Profile from "./Profile";

import {setUserProfile} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.userId;

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId
});

const WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent);