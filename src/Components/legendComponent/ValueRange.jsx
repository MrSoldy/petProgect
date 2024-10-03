import React from "react";

const ValueRange=(props)=>{
    const {startValue, endValue} = props
    return(
            <div className="value">
              <span>
                <b>{startValue}</b>
              </span>
              <span>
                <b>{endValue}</b>
              </span>
            </div>
    )
}
export default ValueRange