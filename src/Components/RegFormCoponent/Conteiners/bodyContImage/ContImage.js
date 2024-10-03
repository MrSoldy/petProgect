import React from "react";
import { useEffect, useState } from "react";

export const ContImage = ()=> {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
        setItems([])
        let obj  = [];
        for(let i = 0 ; i<12 ; i++){
      fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            obj.push(result);
            setItems([...obj])
          },
         
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )}
        
    }, [])

    if (error) {
        return <div className="API">Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div className="API">Загрузка...</div>;
      } else {
        return (
            <div className="imgAPIBlock" >
         {items.map((item) => (<div className="APINameBlock">
                                  <img key={(Symbol)} className="imgAPI" src={item.image} alt="fox"/>
                                  <a href={item.link} target="_blank">{item.link.slice(-3)}</a>
                              </div>
          ))}

         </div>

        );
      }
    }
        
  