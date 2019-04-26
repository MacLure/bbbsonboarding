import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegistrationPage from "./registrationPage";
import Dashboard from "./dashboard";
import InfoSessionSelectPage from "./infoSessionSelectPage";
import ConfirmationPage from "./confirmationPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={InfoSessionSelectPage} />
        <Route path="/register" exact component={RegistrationPage} />
        <Route path="/confirmation" exact component={ConfirmationPage} />

        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
