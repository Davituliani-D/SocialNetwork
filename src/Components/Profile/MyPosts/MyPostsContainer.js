 
import { connect } from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator,} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
  return {
    postMessage: state.profilePage.postMessage,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatcToProps = (dispatch) => {
  return {
    updateNewPostTextActionCreator: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatcToProps)(MyPosts);

export default MyPostsContainer;
