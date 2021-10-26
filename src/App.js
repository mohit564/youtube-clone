import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen/HomeScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/login" component={LoginScreen} />
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
