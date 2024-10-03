import React from "react";

export const Friend = ({form}) =>{
return(
    <div className="friends">
        <h1>{form.secondname}</h1>
        <h1>{form.name}</h1>
        <h3>{form.phoneNumber}</h3>
    </div>
)
}