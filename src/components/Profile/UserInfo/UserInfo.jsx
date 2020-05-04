import React from "react";

import styles from './UserInfo.module.sass';

const UserInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <img src="https://image.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg" alt=""/>
            </div>

            <div>
                ava + description
            </div>
        </div>
    );
}

export default UserInfo;