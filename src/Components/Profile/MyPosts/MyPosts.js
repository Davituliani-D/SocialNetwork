import React from "react";
import classes from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";


const MyPosts = (props) => {
  let postsElement = props.postMessage.map((p) => (
    <MyPost message={p.message} likeCount={p.likeCount} />
  ));  

  let newPostElement = React.createRef();
  
  let onAddPost = () => { 
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostTextActionCreator(text);
  }; 

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} 
          ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add new post</button>
        </div>
      </div>
      {postsElement}
    </div>
  );
};
export default MyPosts;
