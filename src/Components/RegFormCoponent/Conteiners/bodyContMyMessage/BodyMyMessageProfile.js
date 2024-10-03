import React from "react";
import classes from "./StyleContMyMessage.module.css";


export const Body=({User, info:{id}})=>{
    return(
        <div className={classes.bodyText}>
            {JSON.parse(window.localStorage.getItem("messages"))
              .filter(
                ({ idUserWriter, idAnotherUser }) =>
                  (User.id === idUserWriter &&
                    id === idAnotherUser) ||
                  (id === idUserWriter && User.id === idAnotherUser)
              ).map(({ message, idUserWriter }, index) =>(
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
              ))}
          </div>
    )
}