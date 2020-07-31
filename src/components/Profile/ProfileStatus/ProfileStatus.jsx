import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
    }

    render() {
        return <div className="ProfileStatus">
            {!this.state.editMode &&
                <p onDoubleClick={ this.activateEditMode }>{this.props.status}</p>
            }

            {this.state.editMode &&
                <div>
                    <input
                        type="text"
                        value={this.props.status}
                        onBlur={ this.deactivateEditMode }
                        autoFocus={true}
                    />
                </div>
            }
        </div>;
    }
}

export default ProfileStatus;