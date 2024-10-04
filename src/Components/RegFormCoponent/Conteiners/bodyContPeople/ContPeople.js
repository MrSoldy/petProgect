import React, { useState } from "react";
import classes from "./StyleContPeople.module.css";
import { ProfileUsers } from "./ProfileUsers";

export const ContPeople = ({  people , setNewFriend, accepted, setNumberBtn, infoProfile, setInfoProfile, User}) => {
  
  const[profile, setProfile] = useState(false)
  

  return (
    
    <>
      {profile? <ProfileUsers  User={User} setProfile={setProfile} setNewFriend={setNewFriend} setNumberBtn={setNumberBtn} accepted={accepted} infoProfile={infoProfile} />:
     <> <span className="nameTable">Список пользователей</span>
      <div className="usersAuth">
      {console.log(people.filter((e)=>e.id !== User.id).length )}
        {people.filter((e)=>e.id !== User.id).length > 0 ? people.filter((e)=>e.id !== User.id).map(({name, secondname, id, phoneNumber, img, online, city}, index ) => (
          
            <div key={id} className="friendsBLock">
              <div className={classes.Avatar}>
                <img src={img} alt="no"/>
              </div>
              <div className={classes.friends}>
                <h1>{secondname}</h1>
                <h1>{name}</h1>
                <h3>{city}</h3>
                {online? <div title="online" className={classes.online}></div>
                        :<div title="offline" className={classes.offline}></div>}
              </div>

              <div className={classes.buttonsBlock}>
                <button id={"Push"+(accepted.indexOf(id) !== -1)}  onClick={()=>{setNewFriend({id: id, secondname: secondname, name: name, phoneNumber: phoneNumber}); setNumberBtn(id)}}></button>
                <button onClick={()=>{setInfoProfile({name, secondname, id, phoneNumber, img, online, city, index: +index}) ; setProfile(true)}}>Профиль</button>
              </div>
            </div>
          
        )) : (<p>Зарегистрированных пользователей нет! Зарегистрируйте его</p>) }

      </div></>}
    </>
  );
};
