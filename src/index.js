import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>hello</h1>
      <p>world</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
