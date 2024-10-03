import React, { useState } from "react";
import classes from "./StyleContMyMessage.module.css";
import { Header } from "./HeaderMeMessageProfile";
import { Body } from "./BodyMyMessageProfile";
import { Footer } from "./FooterMyMessageProfile";
import { Chats } from "./Chats";

export const ContMyMessage = ({ User, people }) => {
  let messages = JSON.parse(window.localStorage.getItem("messages"));

  const messages_1 = () => {
    let massiv = [];
    let arr = [];
    messages
      .filter(
        ({ idUserWriter, idAnotherUser }) =>
          idUserWriter === User.id || idAnotherUser === User.id
      )
      .map(({ idUserWriter, idAnotherUser }) => {
        if (idUserWriter === User.id) arr.push(idAnotherUser);
        else arr.push(idUserWriter);
      });
    let Chats = [...new Set(arr)];
    arr = Chats.map((e) => ({ id: e }));
    for (let i = 0; i < people.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (people[i].id === arr[j].id) {
          massiv.push({ ...people[i] });
        }
      }
    }
    return massiv;
  };

  const [profile, setProfile] = useState(false);
  const [infoAboutUser, setInfoAboutUser] = useState({});
  const [input, setInput] = useState("");

  const pickProfile = (el) => {
    setInfoAboutUser(el);
  };

  const handleChange = () => {
    if (input.trim() !== "") {
      const message = {
        message: input.trim(),
        idUserWriter: User.id,
        idAnotherUser: infoAboutUser.id,
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
      setInput("");
    }
  };

  return (
    <div className={classes.bodyMyMessage}>
      <header> Мои сообщения </header>
      <main>
        <div className={classes.messages}>
          {profile ? (
            <div className={classes.body}>
              <Header setProfile={setProfile} info={infoAboutUser} />
              <Body User={User} info={infoAboutUser} />
              <Footer
                setInput={setInput}
                input={input}
                handleChange={handleChange}
              />
            </div>
          ) : (
            <>
              {messages !== null &&
                messages_1().map((el) => (
                  <Chats
                    User={User}
                    infoAboutUser={el}
                    pickProfile={pickProfile}
                    setProfile={setProfile}
                  />
                ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
};
