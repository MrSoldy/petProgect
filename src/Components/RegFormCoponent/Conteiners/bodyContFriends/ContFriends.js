import React from "react";
import { AddForm } from "./Forms";
import { Friends } from "./Friends";

export const ContFriends=({setDel, friends, add, setAdd, setNewFriend})=>{
    return(
        <>
          {add ? <AddForm setNewFriend={setNewFriend} setAdd={setAdd} /> : ""}
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
          <button className="btnAddFriend" onClick={() => setAdd(!add)}>
            Добавить друга
          </button>
        </>
    )
}