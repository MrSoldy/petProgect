import React, { useCallback, useState } from "react";
import classes from "./StuleRegForm.module.css";

export const RegForm = ({setOpenForm, handler}) => {
  const [{ login, password , name, secondname, phoneNumber, id, img, city, online, friend }, setAuth] = useState(
      { 
        login: "", 
        password: "",
        name: "",
        secondname: "",
        phoneNumber: "",
        id: (Math.random()*Math.pow(10,16)),
        img: "https://randomfox.ca/images/"+Math.ceil(Math.random()*121)+".jpg",
        online: (Math.ceil(Math.random()*10)>5),
         friend: [],
      },
    );

  const handleChange = useCallback((evt) => {
    const {target: { name, value }, } = evt;

    setAuth((prevAuth) => ({ ...prevAuth, [name]: value }));
  }, []);

  

  return (
    <div className={classes.bodyRegList}>
    <form className={classes.RegForm}>
      <h1>Регистрация</h1>
      <input
        type="text"
        placeholder="Придумайте логин"
        name="login"
        value={login}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Предумайте пароль"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Укажите имя"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Укажите фамилию"
        name="secondname"
        value={secondname}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Укажите номер телефона"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleChange}
      />
      <button
        onClick={() =>
          {(login)&&(password)&&(name)&&(secondname)&&(phoneNumber)&&(handler({ login, password , name, secondname, phoneNumber, id, img, city, online, friend })); setOpenForm(false)}
        }
        type="button"
      >
        Создать аккаунт
      </button>
    </form>
    </div>
  );
};
