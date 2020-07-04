import React from "react";
import {connect} from "react-redux";

import Header from "./Header";
import {setAuthUserData} from "../../redux/authReducer";
import {getAuthorisedUserData} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        getAuthorisedUserData().then(response => {
            if (response.resultCode === 0) {
                const {id, email, login} = response.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);