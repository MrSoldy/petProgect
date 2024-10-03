import React from "react";

const HeaderRange =(props) =>{
    const {h1, value, blok} = props
    return(
             <div className='range'>
              <h3>{h1}</h3>
              <p className='coast'>{value}{blok}</p>
              </div>
    )
}

export default HeaderRange