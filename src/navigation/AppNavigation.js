import React from "react";
import { HashRouter  as Router, Switch, Route, Link } from "react-router-dom";

// import screens
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen/NotFoundScreen";

const AppNavigation = () => {
  return (
    <Router basename="/react-demos">
      <Switch>
        <Route exact path="/">
          <LoginScreen />
        </Route>
        <Route path="/home">
          <HomeScreen />
        </Route>
        <Route path="*">
            <NotFoundScreen /> 
          </Route>
      </Switch>
    </Router>
  );
};

export default AppNavigation;
