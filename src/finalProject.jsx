import React, { useState } from "react";
 import UsersList from "./Components/UserListComponent/UsersListApp";
 import { Slider } from "./Components/SliderComponent/SliderApp";
 import Legend from "./Components/legendComponent/legendApp";
// import { Auth } from "./Components/RegFormCoponent/Auth";
import { RegApp } from "./Components/RegFormCoponent/RegApp";
const progectNumber = [1,2,3,4]

export const App = () => {
    const [demo, setDemo] = useState(4)
return(
    <> 
    {(demo == 1 ?  <UsersList/> 
    : demo == 2 ? <Legend/> 
    : demo == 3 ? <Slider/>
    : demo == 4 && <RegApp/>)}
    {progectNumber.map((e)=>(<div key={e} className="buttonMainList" onClick={()=>setDemo(e)}>{e} проект </div>))}   
    <>"почти готовая соцсеть"</>
    </>
)
}
