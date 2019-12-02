import React from "react";
import { NativeRouter as Router, Route, Switch } from "react-router-native";
import Dice from "./modules/Dice";
import Home from "./modules/Home";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dice" exact component={Dice} />
      </Switch>
    </Router>
  );
};
