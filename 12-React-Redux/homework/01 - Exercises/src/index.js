import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
