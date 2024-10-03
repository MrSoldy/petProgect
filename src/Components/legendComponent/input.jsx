import React from "react";
import ValueRange from "./ValueRange";
import HeaderRange from "./HeaderRange";
import InputRange from "./InputRange";

const Input =(props)=>{
    const {h1 , inputStyle, blok, startValue, endValue, value } = props
    return(
        <div className="inputRange">
            <HeaderRange h1={h1} blok={blok} value={value}/>
            <InputRange inputStyle={inputStyle}/>
            <ValueRange startValue={startValue} endValue={endValue}/>
          </div>
    )
}
export default Input