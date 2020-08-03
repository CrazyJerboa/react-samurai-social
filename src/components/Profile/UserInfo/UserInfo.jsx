import React from "react";

import styles from './UserInfo.module.sass';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const UserInfo = (props) => {

    if (!props.profile) {
        return <Preloader />;
    }

    const getContactsList = () => {
        return Object.keys(props.profile.contacts).map((elem, key) => {
            console.log(elem)
            const value = props.profile.contacts[elem];

            return value ?
                <li key={key}>{elem}: {value}</li>
                : null;
        })
    }

    return (
        <div className={styles.container}>
            {/*<div className={styles.banner}>*/}
            {/*    <img src="https://image.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg" alt=""/>*/}
            {/*</div>*/}

            <div>
                <img src={props.profile.photos.large} alt="" />
            </div>

            <h1>{props.profile.fullName}</h1>
            <p>{props.profile.aboutMe}</p>
            <ProfileStatus
                status={props.status}
                updateStatus={props.updateStatus}
            />

            <hr/>
            <h3>Contacts</h3>
            <ul>{getContactsList()}</ul>

            <hr/>
            <h3>Is looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</h3>
            <p>{props.profile.lookingForAJobDescription}</p>

        </div>
    );
}

export default UserInfo;