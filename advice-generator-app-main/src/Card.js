import React, { useEffect, useState } from "react";
import { Desktop_Divider, Dice, Mobile_Divider } from "./Constant";
const Card = () => {
  const [advice, setAdvice] = useState("");
  const [size, setSize] = useState(screen.width);

  useEffect(() => {
    callAPI();
    window.addEventListener("resize", (event) => {
      setSize(screen.width);
    });
  }, []);

  const callAPI = async () => {
    const data = await fetch("https://api.adviceslip.com/advice").then((res) =>
      res.json()
    );
    setAdvice(data.slip);
  };

  if (advice == "") {
    return <React.Fragment></React.Fragment>;
  }
  return (
    <React.Fragment>
      <p>ADVICE #{advice.id}</p>
      <h1 className="advice">
        <q>{advice.advice}</q>
      </h1>

      <div className="divider">
        {size > 375 ? <Desktop_Divider /> : <Mobile_Divider />}
      </div>
      <div
        className="dice"
        onClick={() => {
          callAPI();
        }}
      >
        <Dice />
      </div>
    </React.Fragment>
  );
};

export default Card;
