import React from "react";
import classes from "./ChatMessage.module.css";
// import { Autorization } from "./Authorization";
// import { useState, useEffect } from "react";
// import { AuthorizedUsers } from "../RegFormCoponent/Conteiners/bodyContFriends/FriendsList";

export const User = ({ text, setText, message, setMessage, UserId }) => {

    // const [auth, setAuth] = useState(false);
    // const [info, setInfo] = useState({});

    // useEffect(() => {
    //     if (
    //         AuthorizedUsers.filter((e) => e.login === info.login && e.password === info.password).length > 0    
    //       ) {
    //         setAuth(true);
    //         any(info)
    //         } 
    //   }, [info]);

  return (
    
    <div className={classes.chatConteiner}>
      <div className={classes.modalWindow}>
            <header>Пользователь {UserId}</header>
            <main>
              {message.map(({ text, Id }, index) => (
                <div
                  id={"main" + `${UserId}`}
                  key={index}
                  className={classes.contMessage}
                >
                  {Id === UserId && (
                    <>
                      <div className={classes.helper}></div>
                      <span id={"User" + `${Id}`} className={classes.myMessage}>
                        {text}
                      </span>
                    </>
                  )}
                  {Id !== UserId && (
                    <>
                      <div className={classes.anotherUser}>
                        <img src="https://smartofood.storage.yandexcloud.net/vazhno_store/images/1b23d30b-b94f-4b27-8f50-c200442079c1.png" />
                        <span
                          id={"User" + `${Id}`}
                          className={classes.myMessage}
                        >
                          {text}
                        </span>
                        <div className={classes.helper}></div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </main>
            <footer>
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Введите сообщение"
              />
              <button
                onClick={() => {
                  text.trim() !== "" &&
                    setMessage([...message, { text: text.trim(), Id: UserId }]);
                  setText("");
                }}
              >
                Push
              </button>
            </footer>
      </div>
    </div>
  );
};
