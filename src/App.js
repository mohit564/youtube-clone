import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginScreen from "./pages/LoginScreen/LoginScreen";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import WatchScreen from "./pages/WatchScreen/WatchScreen";
import SearchScreen from "./pages/SearchScreen/SearchScreen";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/login" component={LoginScreen} exact />
      <Route path="/watch/:id" component={WatchScreen} exact></Route>
      <Route path="/search/:query" component={SearchScreen} exact></Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
