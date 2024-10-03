import React from "react";
import classes from "./StyleContMyMessage.module.css";

export const Chats = ({User, setProfile, pickProfile, infoAboutUser:{ name, secondname, city, online, phoneNumber, img, id }}) => {

   let c = (JSON.parse(window.localStorage.getItem("messages"))
              .filter(
                ({ idUserWriter, idAnotherUser }) =>
                  (User.id === idUserWriter &&
                    id === idAnotherUser) ||
                  (id === idUserWriter && User.id === idAnotherUser)
              ))
    
  return (
    
      <div
        onClick={() => {
          setProfile(prev => !prev);
          pickProfile({ name, secondname, city, online, phoneNumber, img, id });
        }}
        key={id}
        className={classes.message}
      >
        <div className={classes.messageFrom}>
          <img src={img} alt="none" />
          <div>
            <span>
              {name} {secondname}
            </span>
            <span>{c[(c.length)-1].message}</span>
          </div>
        </div>
        <div></div>
      </div>
    
  );
};
