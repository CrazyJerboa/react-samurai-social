import React, {useState} from "react";

import styles from './UserInfo.module.sass';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import UserInfoForm from "./UserInfoForm";

const userPhoto = require('../../../assets/img/user.png');

const UserInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />;
    }

    const getContactsList = () => {
        return Object.keys(props.profile.contacts).map((elem, key) => {
            const value = props.profile.contacts[elem];

            return value ?
                <li key={key}>{elem}: {value}</li>
                : null;
        })
    };

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const goToEditMode = () => {
        setEditMode(!editMode);
    };

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(!editMode);
        })
    };

    return (
        <div className={styles.container}>
            <div>
                <img src={props.profile.photos.large || userPhoto} alt="" />
            </div>
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}


            {props.isOwner && <button onClick={goToEditMode}>Edit profile</button>}

            { editMode ?
                <UserInfoForm
                    profile={props.profile}
                    initialValues={props.profile}
                    onSubmit={onSubmit}
                />
                : <>
                    <h1>{props.profile.fullName}</h1>
                    <p>{props.profile.aboutMe}</p>
                    <ProfileStatusWithHooks
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />

                    <hr/>
                    <h3>Contacts</h3>
                    <ul>{getContactsList()}</ul>

                    <hr/>
                    <h3>Is looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</h3>
                    <p>{props.profile.lookingForAJobDescription}</p>
                </>
            }

        </div>
    );
};

export default UserInfo;