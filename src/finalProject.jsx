import React, { useState } from "react";
 import UsersList from "./Components/UserListComponent/UsersListApp";
 import { Slider } from "./Components/SliderComponent/SliderApp";
 import Legend from "./Components/legendComponent/legendApp";
// import { Auth } from "./Components/RegFormCoponent/Auth";
import { RegApp } from "./Components/RegFormCoponent/RegApp";


export const App = () => {
    const [demo, setDemo] = useState(4)
return(
    <> 
    {(demo == 1 ?  <UsersList/> 
    : demo == 2 ? <Legend/> 
    : demo == 3 ? <Slider/>
    : demo == 4 && <RegApp/>)}  
    <div style={{width:"140px", backgroundColor:"orange", color: "black",  border:"1px solid black"}} onClick={()=>setDemo(1)}>1 проект</div> 
    <div style={{width:"140px", backgroundColor:"orange", color: "black",  border:"1px solid black"}} onClick={()=>setDemo(2)}>2 проект</div> 
    <div style={{width:"140px", backgroundColor:"orange",  color: "black", border:"1px solid black"}}  onClick={()=>setDemo(3)}>3 проект</div> 
    <div style={{width:"140px", backgroundColor:"orange",  color: "black", border:"1px solid black"}}  onClick={()=>setDemo(4)}>4 проект {"почти собственная соцсеть :)"}</div> 
    </>
)
}
