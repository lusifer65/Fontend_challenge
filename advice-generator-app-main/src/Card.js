import React, { useEffect, useState } from "react";
import { Dice } from "./Constant";
const Card = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const callAPI = async () => {
      const data = await fetch("https://api.adviceslip.com/advice").then(
        (res) => res.json()
      );
      setAdvice(data.slip);
    };
    callAPI();
  }, []);
  if (advice == "") {
    return <React.Fragment></React.Fragment>;
  }
  return (
    <React.Fragment>
      <p>ADVICE #{advice.id}</p>
      <h1>{advice.advice}</h1>
      <div>
        <Dice />
      </div>
    </React.Fragment>
  );
};

export default Card;
