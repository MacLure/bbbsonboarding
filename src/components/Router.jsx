import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegistrationPage from "./registrationPage";
import Dashboard from "./dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={RegistrationPage} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
