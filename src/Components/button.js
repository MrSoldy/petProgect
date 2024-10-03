import React from 'react';


class Button extends React.Component{
   
    render(){
     return( <button className='button'>отправить</button>)
     }
    }
  

  const ButtonMain =(props)=>{
    const {name, window, setWindow} = props
    
return(
  <button onClick={()=>setWindow(window)} className="buttonmain">{name}</button>
  )
  }

  export { Button , ButtonMain}