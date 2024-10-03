import React from "react";
import Input from "./input";

const StandartIpoteca =(props)=>{
    const {amount , setAmount, vznos , setVznos, year , setYear} = props
    return(
        <>
            <select className="select">
          <option>
            Супер ипотека от 4% 
          </option>
          <option>
            Ипотека от 8%
          </option>
        </select>
        <select className="select">
          <option>Стандартный</option>
        </select>
        <Input
        h1={"Стоимость квартиры"}
        value= {amount+" Р"}
        inputStyle={{
        
          type: "range",
          min: "10500000",
          max: "11500000",
          step: "1000",
          className: "i1",
          setValue: setAmount,
        }}
        startValue={"10,5 млн"}
        endValue={"11,5 млн"}
      />
       <Input
        h1={"Первоначальный взнос"}
        value= {amount/100*vznos}
        inputStyle={{
           
          type: "range",
          min: "10",
          max: "80",
          step: "5",
          className: "i2",
          setValue: setVznos,
        }}
        blok={<span className="proc"> {vznos+"%"}</span>}
        startValue={"10%"}
        endValue={"80%"}
      />
       <Input
        h1={"Срок кредитования"}
        value= {year}
        inputStyle={{
    
          type: "range",
          min: "1",
          max: "30",
          step: "1",
          className: "i3",
          setValue: setYear,
        }}
        startValue={"1 год"}
        endValue={"30 лет"}
      />
      </>
    )
}

export default StandartIpoteca