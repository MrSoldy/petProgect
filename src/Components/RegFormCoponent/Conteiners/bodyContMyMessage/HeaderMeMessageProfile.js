import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import classes from "./StyleContMyMessage.module.css";

export const Header=({setProfile, info:{name, secondname, city, online, phoneNumber, img, id}})=>{
    return(
        <div className={classes.headerText}>
              <div className={classes.avaBlok}>
                <img className={classes.ava} src={img} alt="none"/>
              </div>
              <div className={classes.infoUser}>
                <div className={classes.fio}>
                  <span>
                    {name} {secondname}
                  </span>
                </div>
                {online ? (
                  <div className={classes.onlineProfile}>в сети</div>
                ) : (
                  <div className={classes.offlineProfile}>не в сети</div>
                )}
              </div>
              <div>
                <IoCloseCircleSharp
                  className={classes.closeBtn}
                  onClick={() => {
                    setProfile(false);
                  }}
                />
              </div>
            </div>
    )
}