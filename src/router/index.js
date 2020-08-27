import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "mobx-react";
import { userStore } from "../store";

import App from "../App";
import More from "../pages/More";

const Router = () => {
  return (
    <BrowserRouter>
      <Provider store={userStore}>
        <Switch>
          <Route path="/" exact component={App}></Route>
          <Route path="/more" component={More}></Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default Router;
