import React from "react";
import { useState } from "react";
import { EditForm } from "./Forms";
import { Friend } from "./Friend";

export const Friends = ({ friend, setDel }) => {

    const [edit, setEdit] = useState(false)
    const [form, setForm] = useState(friend)
 
  return (
    <div  className="friendsBLock" >
      {edit ? <EditForm edit={edit} setEdit={setEdit} form={form} setForm={setForm} /> : <Friend form={form}/>}
      <div className="buttonsBlock">
        <button>написать</button>
        <button onClick={() => setEdit(!edit)}>изменить</button>
        <button onClick={() => setDel(friend.id)}>удалить</button>
      </div>
    </div>
  );
};
