// import { CssModules } from "./components/CssModules";
// import { Emotion } from "./components/Emotion";
// import { InlineStyles } from "./components/InlineStyles";
// import { StyledComponents } from "./components/StyledComponents";
// import { StyledJsx } from "./components/StyledJsx";
// import { TailwindCss } from "./components/TailwindCss";

// export const App = () => {
//   return (
//     <div>
//       {/* <InlineStyles /> */}
//       {/* <CssModules /> */}
//       {/* <StyledJsx /> */}
//       {/* <StyledComponents /> */}
//       {/* <Emotion /> */}
//       <TailwindCss />
//     </div>
//   );
// };
// 6章
import { useState } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = () => {
  console.log("Appレンダリング");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 />
      <Child4 />
    </>
  );
};
