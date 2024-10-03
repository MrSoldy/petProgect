import React from "react";

const InputRange = (props) =>{
    const {inputStyle} = props
    return(
                <input
                type={inputStyle.type}
                min={inputStyle.min}
                max={inputStyle.max}
                step={inputStyle.step}
                className={inputStyle.className}
                onChange={e=>inputStyle.setValue(e.target.value)}
              />
    )
}
export default InputRange