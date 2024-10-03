import React from "react";

const Pay = (props) => {
    const {className , value , text} = props
    return(
        <div className="payDiv">
        <h1 className={className}>{value}</h1>
        <span>{text}</span>
         </div>
    )

}
 export default Pay