import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogsItem.module.css";


const DialogsItem = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      
      <div className={classes.pic}>
        <img src="https://www.radio.net/images/broadcasts/16/d8/119220/1/c300.png"></img>
      </div>
    </div>
  );
};

export default DialogsItem;
