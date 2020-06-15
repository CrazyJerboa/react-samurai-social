import {connect} from "react-redux";

import MyPosts from "./MyPosts";

import {addPost, updateNewPostText} from "../../../redux/profileReducer";

// параметры верхнего уровня передаются как пропсы при обычном прокидывании
// типа <Component profilePage={state.profilePage} />
const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

// параметры верхнего уровня передаются как методы при обычном прокидывании

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts);

export default MyPostsContainer;