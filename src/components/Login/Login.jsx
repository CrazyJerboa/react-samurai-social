import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../helpers/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <Field
            name="email"
            component={Input}
            placeholder="Email"
            validate={[required]}
        />

        <Field
            name="password"
            component={Input}
            placeholder="Password"
            type="password"
            validate={[required]}
        />

        <div>
            <Field
                name="remember"
                component={Input}
                type="checkbox"
            /> remember me</div>

        {props.error && <div style={{color: '#ff6454'}}>{props.error}</div>}

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