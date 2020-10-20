import React from "react";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const UserInfoForm = ({handleSubmit, initialValues, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <br/>
        <button>save</button>
        {error && <p style={{'color': 'red'}}>{error}</p>}
        <br/>
        <div>Full name: {createField('Full name', 'fullName', [], Input)}</div>
        <br/>
        <div>Is looking for a job: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}</div>
        <br/>
        <div>Professional skills: {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}</div>
        <br/>
        <div>About me: {createField('About me', 'aboutMe', [], Textarea)}</div>
        <br/>
        <div>Contacts: {Object.keys(profile.contacts).map(key => {
            return <p><b>{key}:</b> {createField(key, 'contacts.' + key, [], Input)}</p>;
        })}</div>
        <hr/>
    </form>;
};

const UserInfoReduxForm = reduxForm({form: 'edit-profile'})(UserInfoForm);

export default UserInfoReduxForm;