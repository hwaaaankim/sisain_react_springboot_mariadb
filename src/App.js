import { GlobalStyles } from "./global-styles";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  const [bgColor, setBgColor] = useState("black");
  return (
    <>
      <GlobalStyles color={bgColor}></GlobalStyles>
    </>
  );
}

export default App;
