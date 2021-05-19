import React, {useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag)
  };

  if (num > 0){
  if (num % 3 === 0){
faceShowFlag || setFaceShowFlag(true);
  }else {
faceShowFlag && setFaceShowFlag(false);
  }
}

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="blue">wrold</ColorfulMessage>
      <ColorfulMessage color="pink">wrold?</ColorfulMessage>
      <button onClick={onClickCountUp}>世界の〇〇</button>
      <br />
      {/* <button onClick={onClickSwitchShowFlag}>on/off</button> */}
      <p>{num}</p>
      {faceShowFlag && <p>(・Д・)</p>}
    </>
  );
};

export default App;
