import React from "react";
import ReactDOM from "react-dom";
import { Provider as Store } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "typeface-open-sans";
import "typeface-noto-serif";

import Provider from "./components/UI/Provider";
import Routes from "./routes";
import configureStore from "./store/configureStore";

ReactDOM.render(
  <Store store={configureStore}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider>
        <Routes />
      </Provider>
    </BrowserRouter>
  </Store>,
  document.getElementById("root")
);
