import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../views/Home";

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);
