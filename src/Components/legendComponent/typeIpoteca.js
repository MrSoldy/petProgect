import React from "react";
import ButtonTypeIpoteka from "./buttonTypeIpoteca";


const TypeIpotica = ({name, setPush, push}) => {

  return (
    <div className="type">
      {name.map((el)=>(<ButtonTypeIpoteka push={push} setPush={setPush} key={el.id} id={el.id} text={el.name} />))}
    </div>
  );
};
export default TypeIpotica;
