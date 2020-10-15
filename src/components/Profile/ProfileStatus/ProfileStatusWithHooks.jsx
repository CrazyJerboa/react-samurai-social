import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = props => {

    let [ editMode, setEditMode ] = useState(false);
    let [ status, setStatus ] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => setEditMode(true);

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => setStatus(e.currentTarget.value);

    return <div className="ProfileStatus">
        {!editMode &&
        <p onDoubleClick={ activateEditMode }>{props.status || '----'}</p>
        }
        {editMode &&
        <span>
            <input
                type="text"
                autoFocus={true}
                onBlur={deactivateEditMode}
                onChange={onStatusChange}
                value={status}
            />
        </span>
        }
    </div>;
}

export default ProfileStatusWithHooks;