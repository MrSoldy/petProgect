import React, { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import TypeIpotica from "./typeIpoteca";
import Pay from "./pay";
import StandartIpoteca from "./standartIpoteka";
// import { Slider } from "../sliderComponent/slider";

const Legend = () => {
  const [amount, setAmount] = useState(10500000);
  const [vznos, setVznos] = useState(50);
  const [year, setYear] = useState(30);
  const [push, setPush] = useState(1);

  // const renderItem = useMemo(()=>{
  //   switch(push){
  //     case 1:  return <StandartIpoteca
  //       amount={amount}
  //       setAmount={setAmount}
  //       vznos={vznos}
  //       setVznos={setVznos}
  //       year={year}
  //       setYear={setYear}
  //     />;
  //     case 2: return <>2</>
  //     case 3: return <>3</>
  //     case 4: return <>4</>
  //     default: return <>0</>
  //   }
  // }, [push])

  return (
    <div className="legendaProject">
      <main className="left">
        <h1 id="h1">Ипотека в Legenda</h1>
        <TypeIpotica
          push={push}
          setPush={setPush}
          name={[
            { id: 1, name: "Стандартная" },
            { id: 2, name: "Господдержка" },
            { id: 3, name: "Семейная" },
            { id: 4, name: "IT-ипотека" },
          ]}
        />
       {push === 1 ?<StandartIpoteca
        amount={amount}
        setAmount={setAmount}
        vznos={vznos}
        setVznos={setVznos}
        year={year}
        setYear={setYear}
      />: "not found"}


      </main>

      <main className="right">
        <img
          className="logo"
          src="https://flats.legenda-dom.ru/_next/image?url=https%3A%2F%2Fplan.cdn.legenda-dom.ru%2FZhbL0y5Hq6%2F5tkFBR3MSKcBFTZ.svg&w=1920&q=75"
          alt="сбербанк"
        />
        <div className="info">
          <Pay className={"regpay"} value={Math.ceil((amount - (amount / 100) * vznos) / (year * 12*1.04)) +" Р/мес"} text={"Ежемесячный платеж"}/>
          <Pay className={"sum"} value={amount - (amount / 100) * vznos + " Р"} text={"Сумма кредита"}/>
          <Pay className={"maxsum"} value={"до 80 млн Р"} text={"Макс. размер кредита"}/>
        </div>

        <button className="call">
          <img
            className="phone"
            src="https://thumb.tildacdn.com/tild6630-3165-4335-b630-613630316664/-/format/webp/photo.png"
            alt="call"
          />
          <p>Связаться с нами</p>
        </button>
        <h6 className="spaminfo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          debitis quibusdam nesciunt, sunt officiis ea adipisci aliquam
          provident blanditiis voluptas pariatur ducimus delectus nobis quis
          commodi. Qui debitis ipsam excepturi.
        </h6>
        <IoCloseCircleSharp />
      </main>
    </div>
  );
};
export default Legend;
