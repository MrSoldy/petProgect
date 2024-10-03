import React, { useEffect, useState } from "react";
import { SlideBody } from "./slideBody";
import { Images } from "./Image/ImageForSlider";

export const Slider = () => {
  const [value, setValue] = useState(0)
  const [push, setPush] = useState(1)
  const [position, setPosition] = useState(0);
  const data = Date.now();
  
useEffect(()=>{
   if(push>Images.length){setPush(1)}
   if(push<1){setPush(Images.length)}
   }, [push])
      
  useEffect(()=>{
if(position>Images.length-1){setPosition(0)}
if(position<0){setPosition(Images.length-1)}
}, [position])

useEffect(()=>{
    let progress = setInterval(()=>setValue(value+1), 50)
    return ()=>{clearInterval(progress);}
}, [value, data])

useEffect(()=>{
    if(value>=100){
        setValue(0);
        setPosition(position+1);
        setPush(push+1)}
}, [data, position, push, value])

  return (
    <div className="slider">
      <SlideBody position={position} />
        <div className="allInform">
            <div className="progressBars">
                {Images.map((el)=>(   
                    <div className="progressBarBlock"  key={el.id} id={"progressBar"+((el.id-push))}>
                    <div className="progressBar">
                    <div className={"progress"+((el.id-push))} style={{ width : value+"%"}}></div>
                    </div>
                    <div className="nameUnderBar">{el.name}</div>  
                   </div>
                ))}
             </div>
            <div className="buttonsSlider">
                <button className="buttonSlider" onClick={()=>{setPosition(position-1); setValue(0); setPush(push-1)}}>back</button>
                {Images.map((el)=>(<button key={el.id*100} id={"c"+((el.id-push))} className="buttonSlider" onClick={()=>{setPosition(el.id-1); setValue(0); setPush(el.id)}}></button>))}
                <button className="buttonSlider" onClick={()=>{setPosition(position+1); setValue(0); setPush(push+1)}}>forward</button>
            </div>
      </div>
    </div>
  );
};
