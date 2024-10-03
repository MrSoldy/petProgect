import React, { useEffect,useState } from "react";
import { ContFriends } from "./Conteiners/bodyContFriends/ContFriends";
 import { ContImage } from "./Conteiners/bodyContImage/ContImage";
import { ContMyPage } from "./Conteiners/bodyContMyPage/ContMyPage";
import { ContPeople } from "./Conteiners/bodyContPeople/ContPeople";
import { ContMyMessage } from "./Conteiners/bodyContMyMessage/ContMyMessage";
import { BrowserRouter , Link, Route, Router, Switch} from "react-router-dom/cjs/react-router-dom";


export const Page = ({ setAuth, User , setUser}) => {
  const [numBtn, setNumBtn] = useState(1);                         // кнопки

  const [del, setDel] = useState("");                            //...............................
  const [friends, setFriends] = useState([]);                   //
  const [add, setAdd] = useState(false);                       //
  const [newFriend, setNewFriend] = useState({});             //состояния для вкладки с друзьями

  const [accepted, setAccepted] = useState([]);            //......................
  const [numberBtn, setNumberBtn] = useState(null);       //
  let people = JSON.parse(window.localStorage.getItem('AuthUser')) ;                        
  const[infoProfile, setInfoProfile] = useState({name:"", secondname:"", id:"", phoneNumber:"", img:"", online:"", city:"",  index :0})

  
  useEffect(()=>{
    if ((infoProfile.id !=="")){
      window.localStorage.setItem('infoProfile', JSON.stringify(infoProfile))
      window.localStorage.setItem('AuthUser', JSON.stringify(people))}
  }, [infoProfile])

  // useEffect(() => {
  //    (accepted.indexOf(numberBtn) === -1)&&(setAccepted([...accepted , numberBtn].sort()))
  // }, [numberBtn]);

  useEffect(() => {
    setFriends(friends.filter((el) => el.id !== del));
    setAccepted(accepted.filter((el) => el !== del))
  }, [del]);

  useEffect(() => {
    console.log(newFriend)
    if (
      (newFriend.id &&
      newFriend.name &&
      newFriend.secondname &&
      newFriend.phoneNumber)&&((friends.filter((el) => el.id === newFriend.id)).length===0)
    ) {
      setFriends([...friends, newFriend]);
    }
  }, [newFriend]);

  return (
    <div className="bodyRegAuth">
      <header>
        <span>Привет</span>
        <button onClick={() => setAuth(false)}>выйти</button>
      </header>
      <div className="contUsers">
        <aside className="asideUserPage">
           <button className="Nav" id={"a"+numBtn} onClick={()=>setNumBtn(1)}>Моя страница</button>
          <button className="Nav" id={"b"+numBtn} onClick={()=>setNumBtn(2)}>Мои cобщения</button>
          <button className="Nav" id={"c"+numBtn} onClick={()=>setNumBtn(3)}>Друзья</button>
          <button className="Nav" id={"d"+numBtn} onClick={()=>setNumBtn(4)}>Фотографии</button>
          <button className="Nav" id={"e"+numBtn} onClick={()=>setNumBtn(5)}>Музыка</button>
          <button className="Nav" id={"f"+numBtn} onClick={()=>setNumBtn(6)}>Фильмы</button>
          <button className="Nav" id={"g"+numBtn} onClick={()=>setNumBtn(7)}>Люди</button>
        </aside>
        <main className="mainUserPage">
          {(numBtn===1)?<ContMyPage User={User}/>
          :(numBtn===2)?<ContMyMessage  User={User} people={people} />
          :(numBtn===3)?<ContFriends User={User} 
                                      setNumberBtn={setNumberBtn}  
                                      setInfoProfile={setInfoProfile} 
                                      infoProfile={infoProfile} 
                                      people={people} setDel={setDel} 
                                      friends={friends} 
                                      accepted={accepted} 
                                      add={add} 
                                      setAdd={setAdd} 
                                      setNewFriend={setNewFriend}/>
          :(numBtn===4)?<ContImage/>
          :(numBtn===5)?"no"
          :(numBtn===6)?"no"
          :(numBtn===7)&&<ContPeople  infoProfile={infoProfile} 
                                      setInfoProfile={setInfoProfile} 
                                      accepted={accepted} 
                                      setNumberBtn={setNumberBtn} 
                                      setNewFriend={setNewFriend}  
                                      people={people}
                                      User={User}
                                      />}
        </main>
      </div>
    </div>
  );
};
