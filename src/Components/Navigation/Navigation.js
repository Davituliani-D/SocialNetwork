import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const setActive = ({isActive})=> isActive ? `${classes.activeLink}` : `${classes.item}`;

const Navigation = () => { 
  return (
    <nav className={classes.navigation}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/profile" className={setActive}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" className={setActive}>Friends</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" className={setActive}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" className={setActive}>Settings</NavLink>
      </div>
      {/* <div className={`${classes.item} ${classes.friends}`}>
        <NavLink to="/sidebar" className={setActive}>Friends</NavLink>
      </div> */}
    </nav>
  );
};

export default Navigation;
