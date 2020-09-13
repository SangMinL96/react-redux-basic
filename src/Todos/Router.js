import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoContainer from "./TodoContainer";
import Detail from "./Detail";
import Search from "./Search";

function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default Routers;
