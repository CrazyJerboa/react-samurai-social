import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../helpers/validators";

const LoginForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <Field
            name="login"
            component={Input}
            placeholder="Login"
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
                validate={[required]}
            /> remember me</div>

        <button>Login</button>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = props => {
    const onSubmit = formData => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>

        <LoginReduxForm onSubmit={onSubmit}/>
    </div>;
}

export default Login;