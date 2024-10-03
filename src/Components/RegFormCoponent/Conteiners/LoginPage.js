import React, { useCallback } from "react";
import { useState } from "react";
import classes from "./StyleAuthForm.module.css";
import { RegForm } from "./ComponentsLoginPage/Forms";

export const LoginPage = ({ error, handler, handlerAuth }) => {
  const [{ login, password }, setAuth] = useState({ login: "", password: "" });

  const handleChange = useCallback((evt) => {
    const { target: { name, value }, } = evt;

    setAuth((prevAuth) => ({ ...prevAuth, [name]: value }));
  }, []);
  

  const [openForm, setOpenForm] = useState(false);

  return openForm ? (<RegForm setOpenForm={setOpenForm} handler={handler}/>
    
  ) : (
    <div className={classes.bodyAuthList}>
      <form className={classes.AuthForm}>
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
        <button onClick={()=>handlerAuth({ login, password })} type="button">
          Войти
        </button>
        <span>{error}</span>
      </form>
      <div className={classes.create} onClick={() => setOpenForm(true)}>
        Создать аккаунт
      </div>
    </div>
  );
};
