import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/Avatar.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i < pagesCount; i++) {
      pages.push(i);
    }
    return (
        <div>
          <div className={classes.cursor}>
            {pages.map(p => {
              return <span className={props.currentPage === p && classes.numPages} onClick={() => {props.onPageChanged(p)}}>{p}</span>
            })}
          </div>
  
          <div className={classes.content}>
            {props.users.map((u) => (
              <div key={u.id}>
                <span>
                  <div>
                  <NavLink to={'./../profile/' + u.id}> 
                    <img src={u.photos != null ? u.photos : userPhoto}
                      className={classes.avatar}
                      alt={props.description}/>
                    </NavLink>
                  </div>
                  <div>
                    {u.followed ? (
                      <button onClick={() => {props.unfollow(u.id);}}>
                        Unfollow
                      </button>
                    ) : (
                      <button onClick={() => {props.follow(u.id);}}>
                        Follow
                      </button>
                    )}
                  </div>
                </span>
                <span>
                  <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                  </span>
                  <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Users;