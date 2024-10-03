import React, { useCallback, useState } from "react";
import classes from "./ChatMessage.module.css";

export const Autorization=({setInfo})=>{
const[{login ,password}, setDate] = useState({login:"", password:""})

const handleChange = useCallback((evt) => {
    const {target: {name, value}} = evt
    setDate(prevAuth => ({...prevAuth, [name]: value}))
  }, [])

    return(
        <div className={classes.bodyRegList}>
            <form className={classes.regForm}>
              <h1>Авторизация</h1>
              <input 
                type="text"
                placeholder="Введите логин" 
                name="login" 
                value={login}
                onChange={handleChange}
                />
              <input
                type="password"
                placeholder="Введите пароль"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <button onClick={()=>{setInfo({login ,password}); setDate({login:"", password:""})}} type="button">Войти</button>
              <span></span>
            </form>
          </div>
    )
}