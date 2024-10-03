import React, { useState } from "react";
import { Page } from "./User_sPage";
import { LoginPage } from "./Conteiners/LoginPage";


export const RegApp = () => {

  const [auth, setAuth] = useState(false);
  const [error, setError] = useState("");
  const [AuthorizedUsers, setAuthorizedUsers]=useState(JSON.parse(window.localStorage.getItem('AuthUser')));
  const [User, setUser] = useState({})
  const handler = (state) => {
    console.log("отработала")
       if( window.localStorage.getItem('AuthUser') !== null){
       window.localStorage.setItem('AuthUser', JSON.stringify([...JSON.parse( window.localStorage.getItem('AuthUser')), state])); 
       } else {
       window.localStorage.setItem('AuthUser', JSON.stringify([state]))}
       setAuthorizedUsers(JSON.parse(window.localStorage.getItem('AuthUser')))
  }
   const handlerAuth = (info) => {
    if (
      AuthorizedUsers.filter((e) => e.login === info.login && e.password === info.password).length > 0
    ) {
      setAuth(true);
      setError("");
      setUser(AuthorizedUsers.find((e) => e.login === info.login && e.password === info.password));
      
      } else if (info.login && info.password) {
      setError("Неверный логин или пароль");
      setTimeout(()=>setError(""), 2000)
    }
  }

  return (
    <>     
       {/* <Page login={info} setAuth={setAuth} /> */}
      {auth ? (
        <Page setAuth={setAuth}  User={User} setUser={setUser}/>
      ) : (
        <LoginPage error={error} handler={handler} handlerAuth={handlerAuth} />
      )}
    </>
  );
};
