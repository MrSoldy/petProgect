import React from "react";
import { Images } from "./Image/ImageForSlider";
import { SlideElement } from "./SlideElement";

export const SlideBody = ({position}) => {
    
  return (
    <div className="bodySlider" >
     {Images.map((el)=>(<SlideElement position={position} key={el.id} name={el.name} text={el.text} bju={el.bju} image={el.image} />))}
   </div>
  )
};
