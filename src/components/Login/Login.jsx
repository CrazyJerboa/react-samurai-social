import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../helpers/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {createField("Email", "email", [required], Input)}

        {createField("Password", "password", [required], Input, {type: 'password'})}

        {createField("", "remember", [], Input, {type: "checkbox"}, ' remember me')}

        {error && <div style={{color: '#ff6454'}}>{error}</div>}

        <button>Login</button>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = props => {
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    } else {
        return <div>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={onSubmit}/>
        </div>;
    }
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);