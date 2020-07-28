import React from "react";
import {connect} from "react-redux";

import Header from "./Header";
import {getAuthorisedUserData, setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthorisedUserData();
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData, getAuthorisedUserData})(HeaderContainer);