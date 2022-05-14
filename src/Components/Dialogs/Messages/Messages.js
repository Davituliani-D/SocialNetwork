import React from "react";
import classes from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={classes.dialog}>
      {props.message}
      <div className={classes.area}>
        {/* <div>
          <textarea />
        </div>
        <div>
          <button>Send message</button>
        </div> */}
      </div>
    </div>
  );
};

export default Message;
