import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://talkbitz.com/wp-content/uploads/2020/04/Best-Free-Online-Logo-Maker-Sites.png"
        alt="description"
      />
      <div className={classes.login}>
        <NavLink to={"/login"}>login</NavLink>
      </div>
    </header>
  );
};

export default Header;
