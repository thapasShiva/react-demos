import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import screens
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const AppNavigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginScreen />
        </Route>
        <Route path="/home">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppNavigation;
