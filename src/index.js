import React from "react";
import ReactDOM from "react-dom";
import { Provider as Store } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Provider from "./components/UI/Provider";
import Routes from "./routes";
import configureStore from "./store/configureStore";

ReactDOM.render(
  <Store store={configureStore}>
    <BrowserRouter>
      <Provider>
        <Routes />
      </Provider>
    </BrowserRouter>
  </Store>,
  document.getElementById("root")
);
