import React from "react";
import classes from "./StyleContMyPage.module.css";

export const ContMyPage = ({User}) => {
const {name, secondname} = User
  const Ava ="https://sun3-22.userapi.com/impg/jaZdbXB7Jat9ru1cn6e4BqscCLfii957AJkSzQ/1JL1bu7AhWo.jpg?size=1440x2160&quality=96&sign=f990b2f17d23dfb5edd98f255ee9e01c&type=album"
  
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <div className={classes.avaBlok}>
          <img className={classes.ava} src={Ava} alt="none" />
        </div>
        <div className={classes.infoUser}>
          <div className={classes.fio}><span>{name}</span><span>{secondname}</span></div>
          <div className={classes.city}>Санкт-Питербург</div>
        </div>
        <div>
          <button>редактировать</button>
          <button></button>
        </div>
      </div>
    </div>
  );
};
