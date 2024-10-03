import React from "react";


export const SlideElement = ({name, image, text, bju, position }) =>{
    return(
        <div className="SlideElement" style={{ right: position*800+"px" }}>
            <img className="imgSlide" src={image} alt={name}/> 
            <div className="InfoSlide">
            <h1 className="nameSlide">{name}</h1>
            <p className="textSlide">{text}</p>
            <h6 className="bjuSlide">{bju}</h6>
            </div>
        </div>
    )
}