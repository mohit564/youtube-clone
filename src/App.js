import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginScreen from "./pages/LoginScreen/LoginScreen";
import Loading from "./components/Loading/Loading";
const HomeScreen = lazy(() => import("./pages/HomeScreen/HomeScreen"));
const WatchScreen = lazy(() => import("./pages/WatchScreen/WatchScreen"));
const SearchScreen = lazy(() => import("./pages/SearchScreen/SearchScreen"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/watch/:id" component={WatchScreen} exact></Route>
        <Route path="/search/:query" component={SearchScreen} exact></Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default App;
