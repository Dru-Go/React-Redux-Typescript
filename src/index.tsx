import React, { StrictMode } from "react";
import App from "./app";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
