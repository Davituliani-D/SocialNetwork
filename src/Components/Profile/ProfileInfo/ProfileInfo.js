import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img
          src="https://i.pinimg.com/736x/74/a5/e0/74a5e0174418aed8317aba5f7e8e076d.jpg"
          alt="img"
        />
      </div>
      <div className={classes.descriptionBlock}>
        {/* <img src={props.profile.photos.large} alt="#" /> */}
        ava+desc
      </div>
    </div>
  );
};
export default ProfileInfo;
