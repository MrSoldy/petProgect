import React from "react";
import classes from "./StyleContPeople.module.css";
import { useState } from "react";
import { HeaderProfileUsers } from "./ProfileUsers/HeaderProfileUsers";
import { ChatProfileUsers } from "./ProfileUsers/ChatPorfileUsers";
import { User } from "../../../ChatMessageComponent/UserChat";

export const ProfileUsers = ({ User,  infoProfile, accepted, setNewFriend, setNumberBtn, setProfile, }) => {
 
  const [chat, setChat] = useState(false);

  return (
    <div className={classes.body}>
      <HeaderProfileUsers infoProfile={infoProfile}
        chat={chat}
        setChat={setChat}
        setProfile={setProfile}
        accepted={accepted}
        setNumberBtn={setNumberBtn}
        setNewFriend={setNewFriend}
      />
      {chat? <ChatProfileUsers User={User} infoProfile={infoProfile} setChat={setChat}/> : ""}

    </div>
  );
};
