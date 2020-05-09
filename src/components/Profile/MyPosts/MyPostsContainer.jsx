import {connect} from "react-redux";

import MyPosts from "./MyPosts";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

// параметры верхнего уровня передаются как пропсы при обычном прокидывании
// типа <Component profilePage={state.profilePage} />
const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

// параметры верхнего уровня передаются как методы при обычном прокидывании
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;