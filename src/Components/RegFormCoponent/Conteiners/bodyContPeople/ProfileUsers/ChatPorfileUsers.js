import React  from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import classes from ".//../StyleContPeople.module.css";
import { useState } from "react";

export const ChatProfileUsers = ({
  setChat,
  infoProfile,
  User,
}) => {
  const [textMessage, setTextMessage] = useState("");
 let filter;
 (window.localStorage.getItem("messages")) !== null &&( filter = JSON.parse(window.localStorage.getItem("messages")).filter(
    ({ idUserWriter, idAnotherUser }) =>
      (User.id === idUserWriter &&
        infoProfile.id === idAnotherUser) ||
      (infoProfile.id === idUserWriter && User.id === idAnotherUser)
  ))

  const handler = () => {
    if (textMessage.trim() !== "") {
      const message = {
        message: textMessage.trim(),
        idUserWriter: User.id,
        idAnotherUser: infoProfile.id,
      };
      if (window.localStorage.getItem("messages") !== null) {
        window.localStorage.setItem(
          "messages",
          JSON.stringify([
            ...JSON.parse(window.localStorage.getItem("messages")),
            message,
          ])
        );
      } else {
        window.localStorage.setItem("messages", JSON.stringify([message]));
      }
      setTextMessage("");
    }
    
  };

  return (
    <div className={classes.bodyChatWindow}>
      <div className={classes.headerChat}>
       <> <img src={infoProfile.img} />
        {infoProfile.name} {infoProfile.secondname}</>
        <IoCloseCircleSharp
          className={classes.closeChatBtn}
          onClick={() => {
            setChat(false);
          }}
        />
      </div>
      <div className={classes.bodyChat}>
        {window.localStorage.getItem("messages") !== null
          && filter.map(({ message, idUserWriter }, index) => (
                <div key={index} className={classes.contMessage}>
                  {(User.id === idUserWriter) ? (
                    <>
                      <div className={classes.helper}></div>
                      <div className={classes.myMessage}>{message}</div>
                    </>
                  ) : (
                    <>
                      <div className={classes.myMessage}>{message}</div>
                      <div className={classes.helper}></div>
                    </>
                  )}
                </div>
              ))
          }
      </div>
      <div className={classes.messageChat}>
        <input
          type="text"
          placeholder="Введите сообщение"
          name="text"
          value={textMessage}
          onChange={(e) => setTextMessage(e.target.value)}
        />
        <button onClick={handler}>p</button>
      </div>
    </div>
  );
};
