import React from "react";


const ButtonTypeIpoteka = ({ text, id, push, setPush})=>{
    return(
        <button onClick={()=>(setPush(id))} className="BTI" id={"b"+(push-id)}>{text}</button>
    )
}

export default ButtonTypeIpoteka

