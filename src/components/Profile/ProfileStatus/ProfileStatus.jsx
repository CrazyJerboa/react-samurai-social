import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    onStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value });
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    }

    render() {
        return <div className="ProfileStatus">
            {!this.state.editMode &&
                <p onDoubleClick={ this.activateEditMode }>{this.state.status || '----'}</p>
            }
            {this.state.editMode &&
                <span>
                    <input
                        type="text"
                        value={this.state.status}
                        onBlur={this.deactivateEditMode}
                        onChange={this.onStatusChange}
                        autoFocus={true}
                    />
                </span>
            }
        </div>;
    }
}

export default ProfileStatus;