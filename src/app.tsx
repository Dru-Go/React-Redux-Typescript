import React, { FC } from "react";
import Home from "./home";
import { GlobalStyle } from "./utils/global";
const App: FC = () => {
  return (
      <>
        <GlobalStyle/>
        <Home />                                  
      </>
  );
};

export default App;
