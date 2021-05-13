import React from "react";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style = {{color: 'red'}}>hello</h1>
      <p>world</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
