import React from "react";
import classes from "./MyPost.module.css";

const MyPost = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img src="https://www.radio.net/images/broadcasts/16/d8/119220/1/c300.png"></img>
        {props.message}
      </div>
      <span>Like</span>
      {props.likeCount}
    </div>
  );
};
export default MyPost;
