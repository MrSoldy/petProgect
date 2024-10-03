import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import classes from './/../StyleContPeople.module.css'

export const HeaderProfileUsers =({infoProfile, accepted, setNewFriend, setNumberBtn, setProfile, chat, setChat})=>{
    const {name, secondname, id, phoneNumber, img, online, city} = infoProfile
    return(
        <div className={classes.header}>
        <div className={classes.avaBlok}>
          <img className={classes.ava} src={img}  alt="none" />
        </div>
        <div className={classes.infoUser}>
          <div className={classes.fio}><span>{name}</span><span>{secondname}</span></div>
          <div className={classes.city}>{city}</div>
          {online? <div className={classes.onlineProfile}>в сети</div>
                        :<div  className={classes.offlineProfile}>не в сети</div>}
        </div>
        <div>
          <button onClick={()=>{setNewFriend({id: id, secondname: secondname, name: name, phoneNumber: phoneNumber}); setNumberBtn(id)}} id={"Add"+(accepted.indexOf(id) !== -1) }></button>
          <button onClick={()=>setChat(true)}>Написать</button>
          <IoCloseCircleSharp className={classes.closeBtn} onClick={()=>{setProfile(false)}}/>
        </div>
      </div>
    )
}