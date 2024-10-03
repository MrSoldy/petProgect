import React, { useState } from "react";
 import UsersList from "./Components/UserListComponent/UsersListApp";
 import { Slider } from "./Components/SliderComponent/SliderApp";
 import Legend from "./Components/legendComponent/legendApp";
// window<1? setWindow(1) : window>3? setWindow(3) : window===1? <UsersList/> : window===2? <Legend/> : <Slider/>
// import { Auth } from "./Components/RegFormCoponent/Auth";
import { RegApp } from "./Components/RegFormCoponent/RegApp";


export const App = () => {
    const [window, setWindow] = useState(3)
return(
    <> 
    {(window<1? setWindow(1) : window>3? setWindow(3) : window===1? <UsersList/> : window===2? <Legend/> : <Slider/>)}  
    <div style={{width:"40px", backgroundColor:"orange", border:"1px solid black"}} onClick={()=>setWindow(1)}>1 </div> 
    <div style={{width:"40px", backgroundColor:"orange", border:"1px solid black"}} onClick={()=>setWindow(2)}>2</div> 
    <div  style={{width:"40px", backgroundColor:"orange", border:"1px solid black"}}  onClick={()=>setWindow(3)}>3</div> 
    </>
)
}
