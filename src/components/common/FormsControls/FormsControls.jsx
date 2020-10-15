import React from "react";

import './FormsControls.sass';
import {Field} from "redux-form";
import {required} from "../../../helpers/validators";

const FormControl = ({input, meta, child, ...props}) => {

    const hasError = meta.touched && meta.error;

    return <div className={`form-element${hasError ? ' error' : ''}`}>
        {props.children}
        {hasError && <span className="errorMessage">{meta.error}</span>}
    </div>
};

export const Textarea = props => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>;
};

export const Input = props => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>;
};

export const createField = (placeholder, name, validators, component, props, text = '') => {
    return <div><Field
        name={name}
        component={component}
        placeholder={placeholder}
        validate={validators}
        {...props}
    />{text}</div>
};