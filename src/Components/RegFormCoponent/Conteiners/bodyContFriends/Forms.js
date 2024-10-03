import React,  { useCallback } from "react";
import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

export const EditForm=({setEdit, edit, setForm, form})=>{
    const [{name, secondname, phoneNumber}, setEditForm] = useState({...form})



    const handleChange = useCallback((evt) => {
        const {target: {name, value}} = evt
    
        setEditForm(prevAuth => ({...prevAuth, [name]: value}))
      }, [])

    return(
        <div className="editForm">
        <input type="text" defaultValue={form.secondname} name="secondname"  onChange={handleChange} />
        <input type="text" defaultValue={form.name} name="name" onChange={handleChange}/>
        <input type="text" defaultValue={form.phoneNumber} name="phoneNumber" onChange={handleChange}/>
        <button onClick={()=>{setForm({id:form.id , name, secondname, phoneNumber}); setEdit(!edit)}}> изменить </button>
      </div>
    )
}





export const AddForm=({setNewFriend, setAdd, })=>{
    const [{name, secondname, phoneNumber}, setFriend] = useState({name:"", secondname:"", phoneNumber:""})


    const handleChange = useCallback((evt) => {
        const {target: {name, value}} = evt
    
        setFriend(prevAuth => ({...prevAuth, [name]: value}))
      }, [])


    return(
        <div className="backGroundAddForm">
            <div className="addForm">
                <h1>Добавить друга</h1>
                <input className="firstInput" type="text" placeholder={"Введите фамилию"} value={name} name="name" onChange={handleChange} />
                <input type="text" placeholder={"Введите имя"} name="secondname" value={secondname} onChange={handleChange}/>
                <input type="text" placeholder={"Введите номер телефона"} name="phoneNumber" value={phoneNumber} onChange={handleChange}/>
                <button onClick={()=>{ setNewFriend({id: Date.now(), name, secondname, phoneNumber}); setAdd(false)}}> добавить </button>
                <IoCloseCircleSharp className="close" onClick={()=>{setAdd(false)}}/>  
            </div>
        </div>
    )
}