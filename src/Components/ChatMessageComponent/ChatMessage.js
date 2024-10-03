import React, { useEffect, useState } from "react";
import classes from "./ChatMessage.module.css";
import { User } from "./UserChat";

export const ChatMessage = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  // const [text3, setText3] = useState("");
  const [message, setMessage] = useState([]);

  useEffect(() => {
    JSON.parse(window.localStorage.getItem("message")) &&
      setMessage(JSON.parse(window.localStorage.getItem("message"))); 
  }, []);

  useEffect(() => {
    window.localStorage.setItem("message", JSON.stringify(message));
  }, [message]);

 function any(state){
    return(state)
 }

 useEffect(() => {
    console.log(any())
  }, [any()]);

  return (
    <>
      <div className={classes.bodyMessager}>
        <User
          any={any}
          UserId={1}
          text={text1}
          setText={setText1}
          message={message}
          setMessage={setMessage}
        />
        <User
          any={any}
          UserId={2}
          text={text2}
          setText={setText2}
          message={message}
          setMessage={setMessage}
        />
        {/* <User
          any={any}
          UserId={3}
          text={text3}
          setText={setText3}
          message={message}
          setMessage={setMessage}
        /> */}
      </div>
      <button onClick={() => setMessage([])}>очистить localStorage</button>
    </>
  );
};
