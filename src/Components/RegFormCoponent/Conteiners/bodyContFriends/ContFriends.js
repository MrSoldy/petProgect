import React from "react";
import { AddForm } from "./Forms";
import { Friends } from "./Friends";
import classes from "../bodyContPeople/StyleContPeople.module.css"

export const ContFriends=({setDel, friends, add, setAdd, setNewFriend, User , people, setInfoProfile, setProfile, setNumberBtn, accepted})=>{
    return(
        <>
          <span className="nameTable">Список твоих друзей</span>
          <div className="usersAuth">
            {friends.length > 0 ? (
              friends.map((el) => (
                <Friends key={el.id} friend={el} setDel={setDel} />
              ))
            ) : (
              <span> у тебя еще нет друзей</span>
            )}
          </div>
        </>
    )
}
